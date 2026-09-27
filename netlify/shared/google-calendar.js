/**
 * Plages occupées de l'agenda Google sur lequel un certificateur partenaire envoie ses
 * rendez-vous.
 *
 * L'agenda appartient au partenaire : nous ne pouvons pas le partager avec un compte de
 * service. Il est donc lu par un Google Apps Script qui tourne sous le compte Google auquel
 * l'agenda est partagé (`scripts/google-agenda-disponibilites.gs`), déployé en application
 * Web. Le script ne renvoie que des heures : aucun détail de rendez-vous ne transite.
 *
 * Variables d'environnement attendues côté Netlify :
 *
 *   GOOGLE_AGENDA_URL    URL /exec du déploiement Apps Script
 *   GOOGLE_AGENDA_TOKEN  jeton partagé avec le script, qui refuse toute requête sans lui
 *
 * Tant que ces variables ne sont pas définies, `isGoogleCalendarConfigured()` renvoie false
 * et aucune plage Google n'est prise en compte.
 */

/** Au-delà, on renonce : la page de réservation ne doit pas rester bloquée sur Google. */
const TIMEOUT_MS = 8000;

export const isGoogleCalendarConfigured = () =>
  Boolean(process.env.GOOGLE_AGENDA_URL && process.env.GOOGLE_AGENDA_TOKEN);

/**
 * Plages occupées entre deux instants. Une réponse invalide ou une erreur du script lève
 * une exception : mieux vaut ne proposer aucun créneau que d'en proposer un déjà pris.
 */
export const getGoogleBusyIntervals = async (startUtc, endUtc) => {
  if (!isGoogleCalendarConfigured()) {
    return [];
  }

  const url = new URL(process.env.GOOGLE_AGENDA_URL);
  url.searchParams.set('token', process.env.GOOGLE_AGENDA_TOKEN);
  url.searchParams.set('from', startUtc.toISOString());
  url.searchParams.set('to', endUtc.toISOString());

  // Apps Script répond par une redirection vers googleusercontent.com, suivie par fetch.
  const response = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!response.ok) {
    throw new Error(`Apps Script a répondu ${response.status}`);
  }

  // Un script mal déployé renvoie une page HTML de connexion au lieu du JSON.
  const payload = await response.json().catch(() => {
    throw new Error('Apps Script n’a pas renvoyé de JSON (déploiement non public ?)');
  });
  if (!Array.isArray(payload?.busy)) {
    throw new Error(`Apps Script : ${payload?.error ?? 'réponse inattendue'}`);
  }

  return payload.busy.map((interval) => ({ start: new Date(interval.start), end: new Date(interval.end) }));
};
