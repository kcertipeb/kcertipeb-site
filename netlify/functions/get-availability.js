/**
 * Créneaux libres d'une journée, ou de plusieurs jours consécutifs.
 *
 *   GET /.netlify/functions/get-availability?date=2026-09-23&propertyType=appartement&units=4
 *   → { "date": "2026-09-23", "slots": ["09:00", "10:30", ...] }
 *
 *   GET /.netlify/functions/get-availability?from=2026-09-23&days=7&propertyType=appartement
 *   → { "days": [{ "date": "2026-09-23", "slots": [...] }, ...] }
 *
 * Le mode multi-jours ne fait qu'une lecture Outlook pour toute la plage. Microsoft limite
 * à 4 les requêtes simultanées sur une même boîte : interroger chaque jour en parallèle
 * provoque des refus (429 « MailboxConcurrency »).
 *
 * La réponse ne contient que des heures : aucune donnée client ne transite vers le
 * navigateur, alors même que le calcul croise l'agenda Outlook et les réservations en base.
 */

import { getBlockMinutes, isBookableOnline, MAX_UNITS } from '../shared/booking-rules.js';
import {
  brusselsToUtc,
  generateCandidateSlots,
  getBookingConfig,
  overlaps,
} from '../shared/datetime.js';
import { getBusyIntervals } from '../shared/graph.js';
import { getAdminClient } from '../shared/supabase-admin.js';

const json = (statusCode, payload) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify(payload),
});

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** Nombre maximal de jours calculés en une requête. */
const MAX_DAYS_PER_REQUEST = 14;

const addDays = (dateStr, offset) => {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day + offset)).toISOString().slice(0, 10);
};

const isValidDate = (value) =>
  Boolean(value) && DATE_PATTERN.test(value) && !Number.isNaN(Date.parse(`${value}T12:00:00Z`));

export async function handler(event) {
  if (event.httpMethod !== 'GET') {
    return json(405, { error: 'Méthode non autorisée' });
  }

  const { date, from, days, propertyType, units } = event.queryStringParameters ?? {};
  const isRange = Boolean(from);
  const firstDate = isRange ? from : date;

  if (!isValidDate(firstDate)) {
    return json(400, { error: 'Paramètre « date » invalide (format attendu : YYYY-MM-DD)' });
  }

  const dayCount = isRange ? Number(days ?? 1) : 1;
  if (!Number.isInteger(dayCount) || dayCount < 1 || dayCount > MAX_DAYS_PER_REQUEST) {
    return json(400, { error: `Paramètre « days » invalide (1 à ${MAX_DAYS_PER_REQUEST})` });
  }

  if (!propertyType || !isBookableOnline(propertyType)) {
    return json(400, { error: 'Ce type de bien ne se réserve pas en ligne' });
  }

  const unitCount = units ? Number(units) : null;
  if (unitCount !== null && (!Number.isFinite(unitCount) || unitCount < 1 || unitCount > MAX_UNITS)) {
    return json(400, { error: `Nombre d'unités invalide (1 à ${MAX_UNITS})` });
  }

  const blockMinutes = getBlockMinutes(propertyType, unitCount);
  if (blockMinutes === null) {
    return json(400, { error: 'Durée de visite indéterminable pour ce type de bien' });
  }

  const config = getBookingConfig();
  const now = new Date();
  const horizonLimit = new Date(now.getTime() + config.horizonDays * 86400000);

  // Créneaux théoriques de chaque jour. Au-delà de l'horizon, ou un jour non travaillé,
  // la liste est vide et ce jour n'entre pas dans la plage à interroger.
  const requested = Array.from({ length: dayCount }, (_, offset) => {
    const day = addDays(firstDate, offset);
    const candidates =
      brusselsToUtc(day, '00:00') > horizonLimit ? [] : generateCandidateSlots(day, blockMinutes, config, now);
    return { date: day, candidates };
  });

  const respond = (results) =>
    isRange ? json(200, { days: results }) : json(200, { date: results[0].date, slots: results[0].slots });

  const workingDays = requested.filter((day) => day.candidates.length > 0);
  if (workingDays.length === 0) {
    return respond(requested.map((day) => ({ date: day.date, slots: [] })));
  }

  const rangeStartUtc = brusselsToUtc(workingDays[0].date, '00:00');
  const rangeEndUtc = brusselsToUtc(addDays(workingDays[workingDays.length - 1].date, 1), '00:00');
  const busy = [];

  try {
    const outlookBusy = await getBusyIntervals(rangeStartUtc, rangeEndUtc);
    busy.push(...outlookBusy);
  } catch (error) {
    // Agenda injoignable : on ne peut pas garantir la disponibilité, donc on ne propose
    // rien plutôt que de risquer un double rendez-vous.
    console.error('Lecture de l’agenda Outlook impossible :', error);
    return json(503, { error: 'Agenda temporairement indisponible', slots: [] });
  }

  const supabase = getAdminClient();
  if (supabase) {
    // Fenêtre élargie en amont : un rendez-vous commencé la veille au soir peut déborder.
    const lookback = new Date(rangeStartUtc.getTime() - 86400000).toISOString();
    const { data, error } = await supabase
      .from('bookings')
      .select('starts_at, ends_at')
      .neq('status', 'cancelled')
      .gte('starts_at', lookback)
      .lt('starts_at', rangeEndUtc.toISOString());

    if (error) {
      console.error('Lecture des réservations impossible :', error);
      return json(503, { error: 'Réservations temporairement indisponibles', slots: [] });
    }

    busy.push(...data.map((row) => ({ start: new Date(row.starts_at), end: new Date(row.ends_at) })));
  }

  return respond(
    requested.map((day) => ({
      date: day.date,
      slots: day.candidates
        .filter((slot) => !busy.some((interval) => overlaps(slot.startsAt, slot.endsAt, interval.start, interval.end)))
        .map((slot) => slot.time),
    }))
  );
}
