/**
 * Règles métier de la prise de rendez-vous.
 *
 * Ce module ne fait aucun appel réseau au niveau racine : il est importé par la page
 * `/reserver`, qui est prérendue par react-snap au build.
 *
 * Les durées reprises ici servent l'affichage. C'est `netlify/shared/booking-rules.js`
 * qui fait autorité : le serveur recalcule systématiquement le bloc réservé.
 */

import { Language } from './language';

/** Trajet systématiquement réservé entre deux visites, en minutes. */
export const TRAVEL_BUFFER_MINUTES = 30;

/** Durée sur place, hors trajet. */
const VISIT_MINUTES = {
  appartement: 30,
  maison: 45,
} as const;

/** Un immeuble occupe 1 h jusqu'à ce seuil d'unités, puis s'allonge. */
const BUILDING_BASE_MINUTES = 60;
const BUILDING_BASE_UNITS = 4;
const BUILDING_MINUTES_PER_EXTRA_UNIT = 20;

/** Types de biens réservables en ligne. Les autres passent par un devis. */
export const BOOKABLE_PROPERTY_TYPES = ['appartement', 'maison', 'immeuble'] as const;

/** Réservation ferme immédiate. Les autres types partent en `pending`. */
export const AUTO_CONFIRMED_PROPERTY_TYPES = ['appartement', 'maison'] as const;

export type BookingStatus = 'confirmed' | 'pending' | 'cancelled';

export const isBookableOnline = (propertyType: string) =>
  (BOOKABLE_PROPERTY_TYPES as readonly string[]).includes(propertyType);

export const isAutoConfirmed = (propertyType: string) =>
  (AUTO_CONFIRMED_PROPERTY_TYPES as readonly string[]).includes(propertyType);

export const getBookingStatus = (propertyType: string): BookingStatus =>
  isAutoConfirmed(propertyType) ? 'confirmed' : 'pending';

/**
 * Durée de la visite seule, en minutes. `null` pour un type non réservable (audit).
 *
 * Immeuble : 60 min jusqu'à 4 unités, puis +20 min par unité supplémentaire.
 * Un nombre d'unités absent ou invalide retombe sur le tarif de base.
 */
export const getVisitMinutes = (propertyType: string, units?: number | null): number | null => {
  if (propertyType === 'immeuble') {
    const unitCount = Number.isFinite(units) && (units as number) > 0 ? Math.floor(units as number) : BUILDING_BASE_UNITS;
    const extraUnits = Math.max(0, unitCount - BUILDING_BASE_UNITS);
    return BUILDING_BASE_MINUTES + extraUnits * BUILDING_MINUTES_PER_EXTRA_UNIT;
  }

  const minutes = VISIT_MINUTES[propertyType as keyof typeof VISIT_MINUTES];
  return minutes ?? null;
};

/**
 * Bloc réellement occupé dans l'agenda : visite + trajet.
 * C'est cette valeur qui est stockée entre `starts_at` et `ends_at`.
 */
export const getBlockMinutes = (propertyType: string, units?: number | null): number | null => {
  const visitMinutes = getVisitMinutes(propertyType, units);
  return visitMinutes === null ? null : visitMinutes + TRAVEL_BUFFER_MINUTES;
};

/**
 * Extrait un code postal belge d'une adresse saisie librement.
 *
 * Filet de sécurité uniquement : quand l'adresse vient de Google Places, le code postal
 * est fourni de façon structurée et ce module n'est pas sollicité.
 *
 * La difficulté est qu'un numéro de rue peut lui aussi compter 4 chiffres et tomber dans
 * la plage bruxelloise — « Chaussée de Waterloo 1234, 1180 Uccle ». On s'appuie donc sur
 * la convention belge : le code postal précède le nom de la commune, alors que le numéro
 * de rue est suivi d'une virgule ou de la fin de l'adresse.
 */
export const extractPostalCode = (address: string): string | null => {
  const isBrusselsRange = (value: string) => Number(value) >= 1000 && Number(value) <= 1299;

  const beforeCommune = [...address.matchAll(/\b(\d{4})\s+\p{L}/gu)].map((match) => match[1]);
  const preferred = beforeCommune.find(isBrusselsRange) ?? beforeCommune[0];
  if (preferred) {
    return preferred;
  }

  const allGroups = address.match(/\b\d{4}\b/g);
  if (!allGroups) {
    return null;
  }

  return allGroups.find(isBrusselsRange) ?? allGroups[allGroups.length - 1];
};

export interface BookingDraft {
  propertyType: string;
  surfaceRange: string;
  units: number | null;
  address: string;
  postalCode: string | null;
  /** Date ISO locale, `YYYY-MM-DD`. */
  date: string;
  /** Heure de début locale, `HH:mm`. */
  time: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface AvailabilityResponse {
  date: string;
  slots: string[];
}

export interface AddressSuggestion {
  placeId: string;
  label: string;
}

export interface BookingResult {
  id: string;
  status: BookingStatus;
  confirmed: boolean;
  slotLabel: string;
  priceLabel: string;
}

const FUNCTIONS_BASE = '/.netlify/functions';

/** Erreur portant le code HTTP, pour distinguer un créneau pris (409) d'une panne. */
export class BookingError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'BookingError';
    this.status = status;
  }
}

export const fetchAvailability = async (
  date: string,
  propertyType: string,
  units: number | null,
  signal?: AbortSignal
): Promise<string[]> => {
  const params = new URLSearchParams({ date, propertyType });
  if (units) {
    params.set('units', String(units));
  }

  const response = await fetch(`${FUNCTIONS_BASE}/get-availability?${params}`, { signal });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new BookingError(payload.error ?? 'Disponibilités indisponibles', response.status);
  }

  return (payload as AvailabilityResponse).slots ?? [];
};

export const createBooking = async (draft: BookingDraft): Promise<BookingResult> => {
  const response = await fetch(`${FUNCTIONS_BASE}/create-booking`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(draft),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new BookingError(payload.error ?? 'La réservation a échoué', response.status);
  }

  return payload as BookingResult;
};

export const fetchAddressSuggestions = async (
  query: string,
  sessionToken: string,
  signal?: AbortSignal
): Promise<AddressSuggestion[]> => {
  const params = new URLSearchParams({ q: query, session: sessionToken });
  const response = await fetch(`${FUNCTIONS_BASE}/address-autocomplete?${params}`, { signal });

  if (!response.ok) {
    return [];
  }

  const payload = await response.json().catch(() => ({}));
  return payload.suggestions ?? [];
};

export const fetchPlaceDetails = async (placeId: string, sessionToken: string) => {
  const params = new URLSearchParams({ placeId, session: sessionToken });
  const response = await fetch(`${FUNCTIONS_BASE}/place-details?${params}`);

  if (!response.ok) {
    return null;
  }

  return (await response.json().catch(() => null)) as {
    address: string | null;
    postalCode: string | null;
    locality: string | null;
  } | null;
};

/** `YYYY-MM-DD` dans le fuseau belge, pour un décalage en jours depuis aujourd'hui. */
export const getIsoDate = (offsetDays = 0): string => {
  const now = new Date();
  const shifted = new Date(now.getTime() + offsetDays * 86400000);
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Brussels',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(shifted);
};

/** Libellé court pour les pastilles du sélecteur de date : « mer. 23 sept. ». */
export const formatDateChip = (isoDate: string, language: Language): string => {
  const date = new Date(`${isoDate}T12:00:00Z`);
  return new Intl.DateTimeFormat(language === 'nl' ? 'nl-BE' : 'fr-BE', {
    timeZone: 'Europe/Brussels',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).format(date);
};

/** Libellé complet pour le récapitulatif : « mercredi 23 septembre 2026 à 09:00 ». */
export const formatSlotLabel = (isoDate: string, time: string, language: Language): string => {
  const date = new Date(`${isoDate}T${time}:00`);
  const formatted = new Intl.DateTimeFormat(language === 'nl' ? 'nl-BE' : 'fr-BE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);

  return `${formatted} — ${time}`;
};

/** Identifiant de session Places, qui regroupe la facturation d'une recherche. */
export const createSessionToken = (): string => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};
