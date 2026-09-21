/**
 * Règles de durée — version serveur, seule faisant autorité.
 *
 * `src/lib/booking.ts` porte les mêmes constantes pour l'affichage côté navigateur, mais
 * c'est bien ce fichier qui décide du bloc réellement réservé : le front envoie le type de
 * bien et le nombre d'unités, jamais une durée. Une divergence entre les deux fichiers
 * fausserait donc un libellé, jamais une réservation.
 *
 * Toute modification ici doit être répercutée dans `src/lib/booking.ts`.
 */

export const TRAVEL_BUFFER_MINUTES = 30;

const VISIT_MINUTES = {
  appartement: 30,
  maison: 45,
};

const BUILDING_BASE_MINUTES = 60;
const BUILDING_BASE_UNITS = 4;
const BUILDING_MINUTES_PER_EXTRA_UNIT = 20;

const BOOKABLE_PROPERTY_TYPES = ['appartement', 'maison', 'immeuble'];
const AUTO_CONFIRMED_PROPERTY_TYPES = ['appartement', 'maison'];

export const isBookableOnline = (propertyType) => BOOKABLE_PROPERTY_TYPES.includes(propertyType);

export const getBookingStatus = (propertyType) =>
  AUTO_CONFIRMED_PROPERTY_TYPES.includes(propertyType) ? 'confirmed' : 'pending';

export const getVisitMinutes = (propertyType, units) => {
  if (propertyType === 'immeuble') {
    const parsed = Number(units);
    const unitCount = Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : BUILDING_BASE_UNITS;
    const extraUnits = Math.max(0, unitCount - BUILDING_BASE_UNITS);
    return BUILDING_BASE_MINUTES + extraUnits * BUILDING_MINUTES_PER_EXTRA_UNIT;
  }

  return VISIT_MINUTES[propertyType] ?? null;
};

export const getBlockMinutes = (propertyType, units) => {
  const visitMinutes = getVisitMinutes(propertyType, units);
  return visitMinutes === null ? null : visitMinutes + TRAVEL_BUFFER_MINUTES;
};

/** Garde-fou : un immeuble de 200 unités ne doit pas pouvoir bloquer une semaine. */
export const MAX_UNITS = 50;

/**
 * Grille tarifaire — doit rester alignée sur `PRICE_TABLE` de `src/lib/reservation.ts`.
 *
 * Le prix est recalculé ici plutôt que repris du formulaire : ce qui figure dans les emails
 * de confirmation ne doit pas dépendre de ce que le navigateur a bien voulu envoyer.
 */
const PRICE_TABLE = {
  appartement: {
    '< 50 m²': 120,
    '50 - 75 m²': 165,
    '76 - 100 m²': 185,
    '> 100 m²': 205,
  },
  maison: {
    '< 100 m²': 210,
    '101 - 200 m²': 240,
    '> 200 m²': 275,
  },
};

/** `null` quand le tarif dépend d'un devis (immeuble, audit, surface non renseignée). */
export const getPriceValue = (propertyType, surfaceRange) => {
  if (!surfaceRange) {
    return null;
  }

  return PRICE_TABLE[propertyType]?.[surfaceRange] ?? null;
};
