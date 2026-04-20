import { Language } from './language';

export const VISIT_GUIDE_PDF_PATH =
  'https://document.environnement.brussels/opac_css/elecfile/Visite_du_certificateur_PEB.pdf';

const RESERVATION_SUMMARY_KEY = 'reservation_summary';

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
} as const;

export interface ReservationPayload {
  propertyType: string;
  surfaceRange: string;
  address: string;
}

interface StoredReservationSummary {
  propertyType: string;
  surfaceRange: string;
  address: string;
}

export interface ReservationSummary extends StoredReservationSummary {
  propertyTypeLabel: string;
  priceLabel: string;
  hasFixedPrice: boolean;
}

const PROPERTY_TYPE_LABELS: Record<Language, Record<string, string>> = {
  fr: {
    appartement: 'Appartement',
    maison: 'Maison',
    immeuble: 'Immeuble',
    audit: 'Audit énergétique',
    autre: 'Autre demande',
  },
  nl: {
    appartement: 'Appartement',
    maison: 'Woning',
    immeuble: 'Gebouw',
    audit: 'Energie-audit',
    autre: 'Andere aanvraag',
  },
};

const FALLBACK_LABELS: Record<
  Language,
  {
    property: string;
    surface: string;
    address: string;
    price: string;
    vat: string;
  }
> = {
  fr: {
    property: 'Bien à analyser',
    surface: 'À confirmer',
    address: 'Adresse à confirmer',
    price: 'Sur devis',
    vat: 'TVAC',
  },
  nl: {
    property: 'Te analyseren pand',
    surface: 'Te bevestigen',
    address: 'Adres te bevestigen',
    price: 'Op offerte',
    vat: 'incl. btw',
  },
};

export const getReservationPriceValue = (propertyType: string, surfaceRange: string) => {
  if (!surfaceRange) {
    return null;
  }

  const pricesForType = PRICE_TABLE[propertyType as keyof typeof PRICE_TABLE];
  if (!pricesForType) {
    return null;
  }

  return pricesForType[surfaceRange as keyof typeof pricesForType] || null;
};

export const formatReservationPrice = (priceValue: number | null, language: Language) => {
  if (!priceValue) {
    return FALLBACK_LABELS[language].price;
  }

  return `${priceValue} € ${FALLBACK_LABELS[language].vat}`;
};

export const getReservationPrice = (propertyType: string, surfaceRange: string, language: Language) =>
  formatReservationPrice(getReservationPriceValue(propertyType, surfaceRange), language);

export const buildReservationSummary = (payload: ReservationPayload, language: Language): ReservationSummary => {
  const priceValue = getReservationPriceValue(payload.propertyType, payload.surfaceRange);

  return {
    propertyType: payload.propertyType,
    surfaceRange: payload.surfaceRange || FALLBACK_LABELS[language].surface,
    address: payload.address.trim() || FALLBACK_LABELS[language].address,
    propertyTypeLabel:
      PROPERTY_TYPE_LABELS[language][payload.propertyType] || FALLBACK_LABELS[language].property,
    priceLabel: formatReservationPrice(priceValue, language),
    hasFixedPrice: Boolean(priceValue),
  };
};

export const saveReservationSummary = (payload: ReservationPayload) => {
  const summary: StoredReservationSummary = {
    propertyType: payload.propertyType,
    surfaceRange: payload.surfaceRange,
    address: payload.address.trim(),
  };

  sessionStorage.setItem(RESERVATION_SUMMARY_KEY, JSON.stringify(summary));
  return summary;
};

export const readReservationSummary = (language: Language): ReservationSummary | null => {
  const rawSummary = sessionStorage.getItem(RESERVATION_SUMMARY_KEY);
  if (!rawSummary) {
    return null;
  }

  try {
    const parsedSummary = JSON.parse(rawSummary) as StoredReservationSummary;
    return buildReservationSummary(parsedSummary, language);
  } catch {
    sessionStorage.removeItem(RESERVATION_SUMMARY_KEY);
    return null;
  }
};
