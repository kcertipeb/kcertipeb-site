/**
 * Google Apps Script — plages occupées de l'agenda Google partagé par le partenaire.
 *
 * À coller dans https://script.google.com (connecté avec le compte qui voit l'agenda),
 * puis à déployer en « Application Web » : Exécuter en tant que « Moi », accès « Tout le monde ».
 * Le site (netlify/shared/google-calendar.js) appelle l'URL /exec obtenue :
 *
 *   GET <url>?token=…&from=2026-10-01T00:00:00Z&to=2026-10-08T00:00:00Z
 *   → { "busy": [{ "start": "2026-10-01T08:00:00.000Z", "end": "2026-10-01T09:30:00.000Z" }] }
 *
 * Seules les heures sortent du script : ni titre, ni adresse, ni client.
 */

/** ID de l'agenda : Paramètres de l'agenda → « Intégrer l'agenda » → ID de l'agenda. */
const CALENDAR_ID = 'COLLER_ICI_L_ID_DE_L_AGENDA';

/** Même valeur que la variable GOOGLE_AGENDA_TOKEN dans Netlify. */
const TOKEN = 'COLLER_ICI_LE_JETON';

/**
 * Seuls les événements dont le titre contient cette étiquette bloquent le site (majuscules
 * ignorées) : ce sont les visites attribuées par le partenaire. Les autres événements de
 * l'agenda lui servent à bloquer ses propres réservations, pas les nôtres.
 */
const TAG = '[Hadi]';

/** Plage maximale lue en une requête, en jours. */
const MAX_RANGE_DAYS = 31;

function doGet(e) {
  const params = (e && e.parameter) || {};
  if (params.token !== TOKEN) {
    return respond({ error: 'forbidden' });
  }

  const from = new Date(params.from);
  const to = new Date(params.to);
  if (isNaN(from) || isNaN(to) || to <= from || to - from > MAX_RANGE_DAYS * 86400000) {
    return respond({ error: 'invalid range' });
  }

  const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
  if (!calendar) {
    return respond({ error: 'calendar not found' });
  }

  const busy = calendar
    .getEvents(from, to)
    .filter(isOurVisit)
    .map(function (event) {
      return { start: event.getStartTime().toISOString(), end: event.getEndTime().toISOString() };
    });

  return respond({ busy: busy });
}

/**
 * Visite attribuée par le partenaire : l'étiquette figure dans le titre. Elle bloque le
 * créneau quel que soit le statut « Occupé » ou « Disponible » choisi par le partenaire,
 * sauf si l'invitation a été refusée.
 */
function isOurVisit(event) {
  if (event.getMyStatus() === CalendarApp.GuestStatus.NO) {
    return false;
  }
  return String(event.getTitle() || '').toUpperCase().indexOf(TAG.toUpperCase()) !== -1;
}

function respond(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
