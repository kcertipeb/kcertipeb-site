/**
 * Calcul des créneaux en heure de Bruxelles.
 *
 * Tout ce qui est stocké ou envoyé à Microsoft Graph est en UTC. Les heures affichées au
 * visiteur, elles, sont en heure locale belge. La conversion doit passer par le fuseau
 * nommé et non par un décalage fixe, sinon les rendez-vous se décalent d'une heure aux
 * changements d'heure de mars et d'octobre.
 */

export const TIME_ZONE = 'Europe/Brussels';

/** Granularité des créneaux proposés, en minutes. */
export const SLOT_STEP_MINUTES = 30;

const readInt = (value, fallback) => {
  const parsed = Number.parseInt(value ?? '', 10);
  return Number.isFinite(parsed) ? parsed : fallback;
};

/**
 * Horaires par jour, au format `jour:ouverture-fermeture`, séparés par des virgules.
 * Jour : 0 = dimanche, 1 = lundi … 6 = samedi. Un jour absent est un jour non travaillé.
 *
 * Valeur par défaut = disponibilités réelles de KCertiPEB :
 *   mardi, mercredi, vendredi 17h-20h · samedi et dimanche 8h-18h
 *
 * Surchargeable par la variable d'environnement `BOOKING_SCHEDULE`, sans redéploiement
 * du code. Tout créneau affiché engageant le certificateur, cette valeur doit refléter
 * la disponibilité réelle.
 */
const DEFAULT_SCHEDULE = '0:8-18,2:17-20,3:17-20,5:17-20,6:8-18';

const parseSchedule = (raw) => {
  const schedule = new Map();

  for (const part of String(raw ?? '').split(',')) {
    const match = part.trim().match(/^([0-6]):(\d{1,2})-(\d{1,2})$/);
    if (!match) {
      continue;
    }

    const day = Number(match[1]);
    const openHour = Number(match[2]);
    const closeHour = Number(match[3]);

    if (openHour >= 0 && closeHour <= 24 && closeHour > openHour) {
      schedule.set(day, { openHour, closeHour });
    }
  }

  return schedule;
};

export const getBookingConfig = () => {
  const schedule = parseSchedule(process.env.BOOKING_SCHEDULE ?? DEFAULT_SCHEDULE);

  return {
    // Un `BOOKING_SCHEDULE` mal formé viderait la grille et rendrait toute réservation
    // impossible : on retombe alors sur les horaires par défaut.
    schedule: schedule.size > 0 ? schedule : parseSchedule(DEFAULT_SCHEDULE),
    minLeadHours: readInt(process.env.BOOKING_MIN_LEAD_HOURS, 24),
    horizonDays: readInt(process.env.BOOKING_HORIZON_DAYS, 21),
  };
};

/** Décalage du fuseau par rapport à UTC, à un instant donné, en millisecondes. */
const getTimeZoneOffsetMs = (date) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const parts = {};
  for (const part of formatter.formatToParts(date)) {
    parts[part.type] = part.value;
  }

  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour) % 24,
    Number(parts.minute),
    Number(parts.second)
  );

  return asUtc - date.getTime();
};

/**
 * Convertit une date et une heure locales belges en instant UTC.
 *
 * Deux passes : le décalage dépend de l'instant, et l'instant dépend du décalage. La
 * seconde passe corrige les cas situés près d'un changement d'heure.
 */
export const brusselsToUtc = (dateStr, timeStr) => {
  const naive = Date.parse(`${dateStr}T${timeStr}:00Z`);
  if (Number.isNaN(naive)) {
    throw new Error(`Date ou heure invalide : ${dateStr} ${timeStr}`);
  }

  let timestamp = naive;
  for (let pass = 0; pass < 2; pass += 1) {
    timestamp = naive - getTimeZoneOffsetMs(new Date(timestamp));
  }

  return new Date(timestamp);
};

/** Instant UTC → `HH:mm` en heure belge. */
export const formatBrusselsTime = (date) =>
  new Intl.DateTimeFormat('fr-BE', {
    timeZone: TIME_ZONE,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);

/** Instant UTC → `YYYY-MM-DD` en heure belge. */
export const formatBrusselsDate = (date) => {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(date);
};

/** Jour de la semaine (0 = dimanche) en heure belge. */
const getBrusselsWeekday = (dateStr) => {
  const noon = brusselsToUtc(dateStr, '12:00');
  const name = new Intl.DateTimeFormat('en-US', { timeZone: TIME_ZONE, weekday: 'short' }).format(noon);
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(name);
};

/** Dimanche de Pâques (algorithme de Meeus/Jones/Butcher). */
const getEasterSunday = (year) => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
};

const toIsoDate = (date) => date.toISOString().slice(0, 10);

const addDaysUtc = (date, days) => new Date(date.getTime() + days * 86400000);

/** Jours fériés légaux belges pour une année donnée. */
export const getBelgianHolidays = (year) => {
  const easter = getEasterSunday(year);

  return new Set([
    `${year}-01-01`, // Nouvel An
    `${year}-05-01`, // Fête du Travail
    `${year}-07-21`, // Fête nationale
    `${year}-08-15`, // Assomption
    `${year}-11-01`, // Toussaint
    `${year}-11-11`, // Armistice
    `${year}-12-25`, // Noël
    toIsoDate(addDaysUtc(easter, 1)), // Lundi de Pâques
    toIsoDate(addDaysUtc(easter, 39)), // Ascension
    toIsoDate(addDaysUtc(easter, 50)), // Lundi de Pentecôte
  ]);
};

/** Horaires applicables à une date, ou `null` si le jour n'est pas travaillé. */
export const getDayHours = (dateStr, config = getBookingConfig()) => {
  const year = Number(dateStr.slice(0, 4));
  if (getBelgianHolidays(year).has(dateStr)) {
    return null;
  }
  return config.schedule.get(getBrusselsWeekday(dateStr)) ?? null;
};

export const isWorkingDay = (dateStr, config = getBookingConfig()) => getDayHours(dateStr, config) !== null;

/**
 * Créneaux candidats d'une journée, avant filtrage par l'occupation réelle.
 *
 * Un créneau n'est retenu que si le bloc complet (visite + trajet) tient avant l'heure de
 * fermeture, et qu'il respecte le délai de prévenance.
 */
export const generateCandidateSlots = (dateStr, blockMinutes, config = getBookingConfig(), now = new Date()) => {
  const hours = getDayHours(dateStr, config);
  if (!hours) {
    return [];
  }

  const dayStart = brusselsToUtc(dateStr, `${String(hours.openHour).padStart(2, '0')}:00`);
  const dayEnd = brusselsToUtc(dateStr, `${String(hours.closeHour).padStart(2, '0')}:00`);
  const earliest = new Date(now.getTime() + config.minLeadHours * 3600000);

  const slots = [];
  const stepMs = SLOT_STEP_MINUTES * 60000;
  const blockMs = blockMinutes * 60000;

  for (let start = dayStart.getTime(); start + blockMs <= dayEnd.getTime(); start += stepMs) {
    const startsAt = new Date(start);
    if (startsAt < earliest) {
      continue;
    }
    slots.push({
      time: formatBrusselsTime(startsAt),
      startsAt,
      endsAt: new Date(start + blockMs),
    });
  }

  return slots;
};

/** Deux intervalles se chevauchent-ils ? Bornes exclusives : 10:00–11:00 et 11:00–12:00 sont compatibles. */
export const overlaps = (aStart, aEnd, bStart, bEnd) => aStart < bEnd && bStart < aEnd;
