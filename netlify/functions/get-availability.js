/**
 * Créneaux libres d'une journée.
 *
 *   GET /.netlify/functions/get-availability?date=2026-09-23&propertyType=appartement&units=4
 *   → { "date": "2026-09-23", "slots": ["09:00", "10:30", ...] }
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

const nextDay = (dateStr) => {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day + 1)).toISOString().slice(0, 10);
};

export async function handler(event) {
  if (event.httpMethod !== 'GET') {
    return json(405, { error: 'Méthode non autorisée' });
  }

  const { date, propertyType, units } = event.queryStringParameters ?? {};

  if (!date || !DATE_PATTERN.test(date) || Number.isNaN(Date.parse(`${date}T12:00:00Z`))) {
    return json(400, { error: 'Paramètre « date » invalide (format attendu : YYYY-MM-DD)' });
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

  // Au-delà de l'horizon, inutile d'interroger quoi que ce soit.
  const horizonLimit = new Date(now.getTime() + config.horizonDays * 86400000);
  const dayStartUtc = brusselsToUtc(date, '00:00');
  if (dayStartUtc > horizonLimit) {
    return json(200, { date, slots: [] });
  }

  const candidates = generateCandidateSlots(date, blockMinutes, config, now);
  if (candidates.length === 0) {
    return json(200, { date, slots: [] });
  }

  const dayEndUtc = brusselsToUtc(nextDay(date), '00:00');
  const busy = [];

  try {
    const outlookBusy = await getBusyIntervals(dayStartUtc, dayEndUtc);
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
    const lookback = new Date(dayStartUtc.getTime() - 86400000).toISOString();
    const { data, error } = await supabase
      .from('bookings')
      .select('starts_at, ends_at')
      .neq('status', 'cancelled')
      .gte('starts_at', lookback)
      .lt('starts_at', dayEndUtc.toISOString());

    if (error) {
      console.error('Lecture des réservations impossible :', error);
      return json(503, { error: 'Réservations temporairement indisponibles', slots: [] });
    }

    busy.push(...data.map((row) => ({ start: new Date(row.starts_at), end: new Date(row.ends_at) })));
  }

  const slots = candidates
    .filter((slot) => !busy.some((interval) => overlaps(slot.startsAt, slot.endsAt, interval.start, interval.end)))
    .map((slot) => slot.time);

  return json(200, { date, slots });
}
