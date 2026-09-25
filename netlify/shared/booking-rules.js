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

const BOOKABLE_PROPERTY_TYPES = ['appartement', 'maison', 'immeuble', 'audit'];

/** Toutes les réservations en ligne sont fermes ; seul le tarif d'un immeuble reste à confirmer. */
const AUTO_CONFIRMED_PROPERTY_TYPES = ['appartement', 'maison', 'immeuble', 'audit'];

/** Types de biens acceptés pour un audit énergétique en ligne. Un immeuble passe par un devis. */
export const AUDIT_PROPERTY_TYPES = ['appartement', 'maison'];

/** Un audit demande une visite une fois et demie plus longue qu'un certificat PEB. */
const AUDIT_VISIT_MINUTES = { appartement: 45, maison: 70 };

/** Multiplicateur du tarif PEB pour un audit énergétique. */
const AUDIT_PRICE_FACTOR = 1.5;

export const isBookableOnline = (propertyType) => BOOKABLE_PROPERTY_TYPES.includes(propertyType);

export const getBookingStatus = (propertyType) =>
  AUTO_CONFIRMED_PROPERTY_TYPES.includes(propertyType) ? 'confirmed' : 'pending';

export const getVisitMinutes = (propertyType, units, auditPropertyType) => {
  if (propertyType === 'audit') {
    return AUDIT_VISIT_MINUTES[auditPropertyType] ?? null;
  }

  if (propertyType === 'immeuble') {
    const parsed = Number(units);
    const unitCount = Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : BUILDING_BASE_UNITS;
    const extraUnits = Math.max(0, unitCount - BUILDING_BASE_UNITS);
    return BUILDING_BASE_MINUTES + extraUnits * BUILDING_MINUTES_PER_EXTRA_UNIT;
  }

  return VISIT_MINUTES[propertyType] ?? null;
};

export const getBlockMinutes = (propertyType, units, auditPropertyType) => {
  const visitMinutes = getVisitMinutes(propertyType, units, auditPropertyType);
  return visitMinutes === null ? null : visitMinutes + TRAVEL_BUFFER_MINUTES;
};

/** Garde-fou : un immeuble de 200 unités ne doit pas pouvoir bloquer une semaine. */
export const MAX_UNITS = 50;

/**
 * Codes postaux de la Région de Bruxelles-Capitale (19 communes), avec le nom affiché.
 * Seuls ces biens sont certifiables : le certificateur est agréé par Bruxelles Environnement.
 *
 * Doit rester aligné sur `BRUSSELS_COMMUNES` de `src/lib/booking.ts`.
 */
export const BRUSSELS_COMMUNES = {
  1000: 'Bruxelles',
  1020: 'Laeken',
  1030: 'Schaerbeek',
  1040: 'Etterbeek',
  1050: 'Ixelles',
  1060: 'Saint-Gilles',
  1070: 'Anderlecht',
  1080: 'Molenbeek-Saint-Jean',
  1081: 'Koekelberg',
  1082: 'Berchem-Sainte-Agathe',
  1083: 'Ganshoren',
  1090: 'Jette',
  1120: 'Neder-Over-Heembeek',
  1130: 'Haren',
  1140: 'Evere',
  1150: 'Woluwe-Saint-Pierre',
  1160: 'Auderghem',
  1170: 'Watermael-Boitsfort',
  1180: 'Uccle',
  1190: 'Forest',
  1200: 'Woluwe-Saint-Lambert',
  1210: 'Saint-Josse-ten-Noode',
};

export const getBrusselsCommune = (postalCode) => BRUSSELS_COMMUNES[String(postalCode ?? '').trim()] ?? null;

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

/** Tranche de surface d'appartement correspondant à une surface en m². */
export const getSurfaceRange = (squareMeters) => {
  const value = Number(squareMeters);
  if (!Number.isFinite(value) || value <= 0) {
    return null;
  }
  if (value < 50) return '< 50 m²';
  if (value <= 75) return '50 - 75 m²';
  if (value <= 100) return '76 - 100 m²';
  return '> 100 m²';
};

/** Au-delà de ce nombre d'unités, le tarif ne se calcule plus en ligne : devis sur mesure. */
export const MAX_PRICED_UNITS = 6;

/** Remises sur le prix d'un immeuble, selon le nombre d'unités. */
const BUILDING_DISCOUNTS = [
  { minUnits: 6, rate: 0.1 },
  { minUnits: 4, rate: 0.05 },
];

export const getBuildingDiscountRate = (units) =>
  BUILDING_DISCOUNTS.find((step) => units >= step.minUnits)?.rate ?? 0;

/**
 * Prix d'un immeuble : tarif d'appartement de l'unité la plus grande, multiplié par le
 * nombre d'unités, puis remise de 5 % à partir de 4 unités et de 10 % à partir de 6.
 *
 * Le client n'est tenu d'indiquer que la surface de la première unité ; les autres sont
 * facultatives. Le montant obtenu est une estimation, confirmée sous 12 h.
 */
export const getBuildingPrice = (units, unitSurfaces = []) => {
  const unitCount = Number(units);
  const surfaces = (Array.isArray(unitSurfaces) ? unitSurfaces : [])
    .map(Number)
    .filter((value) => Number.isFinite(value) && value > 0);

  // Plus de 6 unités : devis sur mesure, aucun montant annoncé automatiquement.
  if (!Number.isFinite(unitCount) || unitCount < 1 || unitCount > MAX_PRICED_UNITS || surfaces.length === 0) {
    return null;
  }

  const largestRange = getSurfaceRange(Math.max(...surfaces));
  const unitPrice = PRICE_TABLE.appartement[largestRange];
  if (!unitPrice) {
    return null;
  }

  const discountRate = getBuildingDiscountRate(unitCount);
  return {
    total: Math.round(unitPrice * unitCount * (1 - discountRate)),
    unitPrice,
    largestRange,
    discountRate,
  };
};

/**
 * Tarif d'un audit énergétique : une fois et demie le tarif PEB du même bien, arrondi à la
 * dizaine la plus proche. Maison de plus de 200 m² : 275 × 1,5 = 412,50 → 410 €.
 */
export const getAuditPrice = (auditPropertyType, surfaceRange) => {
  const base = PRICE_TABLE[auditPropertyType]?.[surfaceRange];
  return base ? Math.round((base * AUDIT_PRICE_FACTOR) / 10) * 10 : null;
};

/** `null` quand le tarif ne peut pas être calculé (surface non renseignée, immeuble sur devis). */
export const getPriceValue = (propertyType, surfaceRange, { units, unitSurfaces, auditPropertyType } = {}) => {
  if (propertyType === 'audit') {
    return getAuditPrice(auditPropertyType, surfaceRange);
  }

  if (propertyType === 'immeuble') {
    return getBuildingPrice(units, unitSurfaces)?.total ?? null;
  }

  if (!surfaceRange) {
    return null;
  }

  return PRICE_TABLE[propertyType]?.[surfaceRange] ?? null;
};
