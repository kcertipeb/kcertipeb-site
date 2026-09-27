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

/** Toutes les réservations en ligne sont fermes ; seul le tarif d'un immeuble reste à confirmer. */
const AUTO_CONFIRMED_PROPERTY_TYPES = ['appartement', 'maison', 'immeuble'];

export const isBookableOnline = (propertyType) => BOOKABLE_PROPERTY_TYPES.includes(propertyType);

export const getBookingStatus = (propertyType) =>
  AUTO_CONFIRMED_PROPERTY_TYPES.includes(propertyType) ? 'confirmed' : 'pending';

/**
 * Durée de la visite seule. L'option « Conseil rénovation PEB » ne l'allonge pas : elle
 * repose sur les données relevées pendant la visite du certificat.
 */
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

/** Tranches de surface proposées pour chaque unité d'un immeuble, de la plus petite à la plus grande. */
export const UNIT_SURFACE_RANGES = Object.keys(PRICE_TABLE.appartement);

/** Tranche la plus grande parmi celles reçues ; les valeurs inconnues sont ignorées. */
export const getLargestRange = (unitRanges = []) =>
  UNIT_SURFACE_RANGES.filter((range) => Array.isArray(unitRanges) && unitRanges.includes(range)).pop() ?? null;

/**
 * Tranche de surface d'appartement correspondant à une surface en m². Sert encore à lire une
 * réservation envoyée par une ancienne version de la page, qui transmettait des m².
 */
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
 * Le client n'est tenu d'indiquer que la tranche de surface de la première unité ; les autres
 * sont facultatives. Le montant obtenu est une estimation, confirmée sous 12 h.
 */
export const getBuildingPrice = (units, unitRanges = []) => {
  const unitCount = Number(units);

  // Plus de 6 unités : devis sur mesure, aucun montant annoncé automatiquement.
  if (!Number.isFinite(unitCount) || unitCount < 1 || unitCount > MAX_PRICED_UNITS) {
    return null;
  }

  const largestRange = getLargestRange(unitRanges);
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
 * Option « Conseil rénovation PEB » : rapport de recommandations de travaux, établi à partir
 * de la visite du certificat. Prix fixe par bien ; pour un immeuble, par unité et sans remise.
 * Doit rester aligné sur `RENOVATION_ADVICE_PRICES` de `src/lib/booking.ts`.
 */
export const RENOVATION_ADVICE_PRICES = { appartement: 50, maison: 100, immeuble: 50 };

/** Délai d'envoi du rapport après la visite, annoncé au client. */
export const RENOVATION_ADVICE_DELAY_HOURS = 72;

/** Prix de l'option, `null` quand il ne se calcule pas en ligne (immeuble sur devis). */
export const getRenovationAdvicePrice = (propertyType, units) => {
  const price = RENOVATION_ADVICE_PRICES[propertyType];
  if (!price) {
    return null;
  }
  if (propertyType !== 'immeuble') {
    return price;
  }

  const unitCount = Number(units);
  return Number.isFinite(unitCount) && unitCount >= 1 && unitCount <= MAX_PRICED_UNITS ? price * unitCount : null;
};

/** Tarif du seul certificat PEB, `null` s'il ne se calcule pas (surface absente, immeuble sur devis). */
const getCertificatePrice = (propertyType, surfaceRange, units, unitRanges) => {
  if (propertyType === 'immeuble') {
    return getBuildingPrice(units, unitRanges)?.total ?? null;
  }
  if (!surfaceRange) {
    return null;
  }
  return PRICE_TABLE[propertyType]?.[surfaceRange] ?? null;
};

/**
 * Tarif total de la réservation : certificat PEB, plus l'option Conseil rénovation PEB si elle
 * est demandée. `null` dès qu'une des deux parties ne peut pas être chiffrée.
 */
export const getPriceValue = (propertyType, surfaceRange, { units, unitRanges, renovationAdvice = false } = {}) => {
  const certificatePrice = getCertificatePrice(propertyType, surfaceRange, units, unitRanges);
  if (certificatePrice === null || !renovationAdvice) {
    return certificatePrice;
  }

  const advicePrice = getRenovationAdvicePrice(propertyType, units);
  return advicePrice === null ? null : certificatePrice + advicePrice;
};
