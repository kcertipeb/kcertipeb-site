/**
 * Accès à l'agenda Outlook via Microsoft Graph.
 *
 * Authentification par « client credentials » : l'application s'authentifie seule, sans
 * utilisateur connecté. Variables d'environnement attendues côté Netlify :
 *
 *   MS_TENANT_ID      identifiant du tenant Microsoft 365
 *   MS_CLIENT_ID      identifiant de l'application enregistrée dans Azure
 *   MS_CLIENT_SECRET  secret de cette application
 *   MS_CALENDAR_USER  adresse de la boîte dont on lit et écrit l'agenda
 *
 * ⚠️ La permission applicative `Calendars.ReadWrite` donne accès à toutes les boîtes du
 * tenant. Il faut la restreindre à la seule boîte utilisée via une Application Access
 * Policy (`New-ApplicationAccessPolicy` en PowerShell Exchange Online).
 *
 * Tant que ces variables ne sont pas définies, `isGraphConfigured()` renvoie false et
 * l'appelant se rabat sur les seules réservations enregistrées en base. Le système reste
 * donc utilisable avant la configuration Azure.
 */

const GRAPH_BASE = 'https://graph.microsoft.com/v1.0';

let cachedToken = null;

export const isGraphConfigured = () =>
  Boolean(
    process.env.MS_TENANT_ID &&
      process.env.MS_CLIENT_ID &&
      process.env.MS_CLIENT_SECRET &&
      process.env.MS_CALENDAR_USER
  );

const getAccessToken = async () => {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.value;
  }

  const response = await fetch(
    `https://login.microsoftonline.com/${process.env.MS_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.MS_CLIENT_ID,
        client_secret: process.env.MS_CLIENT_SECRET,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Jeton Graph refusé (${response.status}) : ${await response.text()}`);
  }

  const payload = await response.json();
  cachedToken = {
    value: payload.access_token,
    expiresAt: Date.now() + payload.expires_in * 1000,
  };

  return cachedToken.value;
};

/**
 * Obtient le jeton à l'avance (mis en cache pour la durée de vie de l'instance), pour que
 * la requête suivante n'ait pas à le demander. Voir le mode « réveil » de create-booking.
 */
export const warmUpGraph = async () => {
  if (isGraphConfigured()) {
    await getAccessToken();
  }
};

const graphFetch = async (path, options = {}) => {
  const token = await getAccessToken();
  const response = await fetch(`${GRAPH_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Graph ${path} a répondu ${response.status} : ${await response.text()}`);
  }

  // 204 (suppression) et 202 (sendMail) n'ont pas de corps.
  const text = await response.text();
  return text ? JSON.parse(text) : null;
};

/** Graph renvoie « 2026-09-23T09:00:00.0000000 » sans suffixe : on le lit comme de l'UTC. */
const parseGraphUtc = (value) => new Date(/[Zz]|[+-]\d{2}:?\d{2}$/.test(value) ? value : `${value}Z`);

/**
 * Plages occupées de l'agenda entre deux instants.
 *
 * Les créneaux marqués `free` sont ignorés ; `tentative` et `oof` (absence du bureau) sont
 * traités comme occupés, pour ne jamais proposer un horaire que vous ne pourriez honorer.
 */
export const getBusyIntervals = async (startUtc, endUtc) => {
  if (!isGraphConfigured()) {
    return [];
  }

  const user = encodeURIComponent(process.env.MS_CALENDAR_USER);
  const payload = await graphFetch(`/users/${user}/calendar/getSchedule`, {
    method: 'POST',
    body: JSON.stringify({
      schedules: [process.env.MS_CALENDAR_USER],
      startTime: { dateTime: startUtc.toISOString().slice(0, 19), timeZone: 'UTC' },
      endTime: { dateTime: endUtc.toISOString().slice(0, 19), timeZone: 'UTC' },
      availabilityViewInterval: 30,
    }),
  });

  const schedule = payload?.value?.[0];
  if (!schedule?.scheduleItems) {
    return [];
  }

  return schedule.scheduleItems
    .filter((item) => item.status !== 'free')
    .map((item) => ({
      start: parseGraphUtc(item.start.dateTime),
      end: parseGraphUtc(item.end.dateTime),
    }));
};

/**
 * Crée le rendez-vous dans l'agenda Outlook et renvoie son identifiant.
 *
 * Le client n'est volontairement pas ajouté en participant : il reçoit son propre email de
 * confirmation, et une invitation Outlook depuis la boîte professionnelle ferait doublon.
 */
export const createCalendarEvent = async ({ subject, bodyHtml, startUtc, endUtc, location }) => {
  if (!isGraphConfigured()) {
    return null;
  }

  const user = encodeURIComponent(process.env.MS_CALENDAR_USER);
  const created = await graphFetch(`/users/${user}/events`, {
    method: 'POST',
    body: JSON.stringify({
      subject,
      body: { contentType: 'HTML', content: bodyHtml },
      start: { dateTime: startUtc.toISOString().slice(0, 19), timeZone: 'UTC' },
      end: { dateTime: endUtc.toISOString().slice(0, 19), timeZone: 'UTC' },
      location: { displayName: location },
      reminderMinutesBeforeStart: 60,
    }),
  });

  return created?.id ?? null;
};

/**
 * Envoie un email depuis la boîte `MS_CALENDAR_USER` (permission applicative `Mail.Send`).
 *
 * Une seule requête HTTPS, là où SMTP enchaîne une dizaine d'échanges par message : c'est
 * ce qui rendait la confirmation de réservation lente. Le message est aussi conservé dans
 * les « Éléments envoyés » de la boîte.
 */
export const sendGraphMail = async ({ to, replyTo, subject, html }) => {
  const user = encodeURIComponent(process.env.MS_CALENDAR_USER);
  await graphFetch(`/users/${user}/sendMail`, {
    method: 'POST',
    body: JSON.stringify({
      message: {
        subject,
        body: { contentType: 'HTML', content: html },
        toRecipients: [{ emailAddress: { address: to } }],
        ...(replyTo ? { replyTo: [{ emailAddress: { address: replyTo } }] } : {}),
      },
      saveToSentItems: true,
    }),
  });
};

/** Utilisé pour annuler proprement si l'enregistrement échoue après la création. */
export const deleteCalendarEvent = async (eventId) => {
  if (!isGraphConfigured() || !eventId) {
    return;
  }

  const user = encodeURIComponent(process.env.MS_CALENDAR_USER);
  await graphFetch(`/users/${user}/events/${encodeURIComponent(eventId)}`, { method: 'DELETE' });
};
