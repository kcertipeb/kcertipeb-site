import { FormEvent, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronDown, Clock, Loader2, MapPin, Phone } from 'lucide-react';

import { useLanguage } from '../lib/language';
import { trackPhoneCallConversion, markPendingLeadConversion } from '../lib/tracking';
import { getReservationPrice, saveReservationSummary } from '../lib/reservation';
import {
  AddressSuggestion,
  BookingError,
  createBooking,
  createSessionToken,
  fetchAddressSuggestions,
  fetchAvailabilityRange,
  fetchPlaceDetails,
  formatDateChip,
  formatSlotLabel,
  getBrusselsCommune,
  getIsoDate,
  getVisitMinutes,
  isAutoConfirmed,
  isBookableOnline,
} from '../lib/booking';

const SURFACE_OPTIONS = {
  appartement: ['< 50 m²', '50 - 75 m²', '76 - 100 m²', '> 100 m²'],
  maison: ['< 100 m²', '101 - 200 m²', '> 200 m²'],
} as const;

const PROPERTY_TYPES = ['appartement', 'maison', 'immeuble', 'audit'] as const;

/** Horizon de réservation, en jours. */
const DATE_RANGE_DAYS = 21;

/** Jours disponibles affichés à la fois. */
const DAYS_PER_PAGE = 4;

/** Jours demandés au serveur en une requête pour remplir une page (les jours fermés sont écartés). */
const SCAN_BATCH_DAYS = 7;

interface DayAvailability {
  date: string;
  slots: string[];
}

interface BookingWizardProps {
  /**
   * Version resserrée pour une colonne étroite (page d'accueil) : grilles sur moins de
   * colonnes, pas de carte englobante, moins de créneaux affichés d'emblée.
   */
  compact?: boolean;
}

/**
 * Tunnel de réservation en 3 étapes (bien → créneau → coordonnées).
 * Utilisé sur la page `/reserver` et dans le bandeau de la page d'accueil.
 */
export default function BookingWizard({ compact = false }: BookingWizardProps) {
  const { language, isDutch } = useLanguage();
  const idPrefix = useId();
  const fieldId = (name: string) => `${idPrefix}-${name}`;

  /** Créneaux affichés par jour avant le bouton « Plus d'horaires ». */
  const initialSlotCount = compact ? 3 : 4;

  const t = isDutch
    ? {
        steps: ['Uw pand', 'Tijdslot', 'Gegevens'],
        propertyType: 'Type pand',
        apartment: 'Appartement',
        house: 'Woning',
        building: 'Gebouw',
        audit: 'Energie-audit',
        units: 'Aantal eenheden',
        unitsHelp: 'Bepaalt de duur van het bezoek.',
        surface: 'Oppervlakte',
        address: 'Adres van het pand',
        street: 'Straat',
        streetPlaceholder: 'Begin de straatnaam te typen…',
        houseNumber: 'Nummer',
        houseNumberPlaceholder: 'bv. 12 of 12A',
        postalCode: 'Postcode',
        postalCodePlaceholder: 'bv. 1050',
        notBrussels:
          'Wij voeren uitsluitend EPC-certificaten uit in het Brussels Hoofdstedelijk Gewest (postcodes 1000 tot 1210).',
        price: 'Prijs van het bezoek',
        quoteOnly: 'Op offerte',
        quoteNotice:
          'Dit type aanvraag vereist een offerte. Kies een tijdslot: wij bevestigen het samen met het tarief binnen 12 uur.',
        auditNotice:
          'Een energie-audit wordt niet online gereserveerd. Neem contact met ons op voor een offerte op maat.',
        contactUs: 'Contacteer ons',
        chooseSlot: 'Kies een tijdslot',
        noSlots: 'Geen tijdslot beschikbaar in de komende 3 weken. Bel ons, wij zoeken samen een oplossing.',
        noMoreDates: 'Geen andere datum beschikbaar in de komende 3 weken.',
        loadingSlots: 'Beschikbaarheden laden…',
        slotsError: 'Beschikbaarheden tijdelijk niet beschikbaar.',
        retry: 'Opnieuw proberen',
        moreSlots: 'Meer tijdstippen',
        nextDates: 'Volgende data',
        previousDates: 'Vorige',
        yourChoice: 'Uw keuze',
        visitDuration: 'Duur van het bezoek',
        minutes: 'min',
        fullName: 'Volledige naam',
        email: 'E-mail',
        phone: 'Telefoon',
        message: 'Bericht (optioneel)',
        messagePlaceholder: 'Nuttige informatie voor het bezoek.',
        summary: 'Samenvatting',
        privacy:
          'Uw gegevens worden verwerkt conform de AVG en uitsluitend gebruikt om uw aanvraag te behandelen.',
        back: 'Terug',
        next: 'Doorgaan',
        submit: 'Mijn reservering bevestigen',
        submitting: 'Uw afspraak wordt bevestigd…',
        slotTaken: 'Dit tijdslot werd net gereserveerd. Kies een ander.',
        genericError: 'Er ging iets mis. Probeer opnieuw of bel ons.',
        callUs: 'Bel ons',
      }
    : {
        steps: ['Votre bien', 'Créneau', 'Coordonnées'],
        propertyType: 'Type de bien',
        apartment: 'Appartement',
        house: 'Maison',
        building: 'Immeuble',
        audit: 'Audit énergétique',
        units: 'Nombre d’unités',
        unitsHelp: 'Détermine la durée de la visite.',
        surface: 'Surface',
        address: 'Adresse du bien',
        street: 'Rue',
        streetPlaceholder: 'Commencez à taper le nom de la rue…',
        houseNumber: 'Numéro',
        houseNumberPlaceholder: 'ex. 12 ou 12A',
        postalCode: 'Code postal',
        postalCodePlaceholder: 'ex. 1050',
        notBrussels:
          'Nous effectuons uniquement des certificats PEB en Région de Bruxelles-Capitale (codes postaux 1000 à 1210).',
        price: 'Prix de la visite',
        quoteOnly: 'Sur devis',
        quoteNotice:
          'Ce type de demande nécessite un devis. Choisissez un créneau : nous le confirmons avec le tarif sous 12 heures.',
        auditNotice:
          'Un audit énergétique ne se réserve pas en ligne. Contactez-nous pour un devis sur mesure.',
        contactUs: 'Nous contacter',
        chooseSlot: 'Choisissez un créneau',
        noSlots: 'Aucun créneau disponible dans les 3 prochaines semaines. Appelez-nous, nous trouverons une solution.',
        noMoreDates: 'Aucune autre date disponible dans les 3 prochaines semaines.',
        loadingSlots: 'Chargement des disponibilités…',
        slotsError: 'Disponibilités temporairement indisponibles.',
        retry: 'Réessayer',
        moreSlots: 'Plus d’horaires',
        nextDates: 'Dates suivantes',
        previousDates: 'Précédentes',
        yourChoice: 'Votre choix',
        visitDuration: 'Durée de la visite',
        minutes: 'min',
        fullName: 'Nom complet',
        email: 'Email',
        phone: 'Téléphone',
        message: 'Message (facultatif)',
        messagePlaceholder: 'Informations utiles pour la visite.',
        summary: 'Récapitulatif',
        privacy:
          'Vos données sont traitées conformément au RGPD et utilisées uniquement pour traiter votre demande.',
        back: 'Retour',
        next: 'Continuer',
        submit: 'Confirmer ma réservation',
        submitting: 'Confirmation de votre rendez-vous…',
        slotTaken: 'Ce créneau vient d’être réservé. Merci d’en choisir un autre.',
        genericError: 'Une erreur est survenue. Réessayez ou appelez-nous.',
        callUs: 'Appelez-nous',
      };

  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('appartement');
  const [surfaceRange, setSurfaceRange] = useState('');
  const [units, setUnits] = useState<number | null>(null);
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const sessionTokenRef = useRef<string>('');

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [days, setDays] = useState<DayAvailability[]>([]);
  const [scannedDays, setScannedDays] = useState(0);
  const [page, setPage] = useState(0);
  const [daysState, setDaysState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [expandedDays, setExpandedDays] = useState<string[]>([]);
  // Incrémenté à chaque réinitialisation : une réponse arrivée après coup est ignorée.
  const generationRef = useRef(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const isAudit = propertyType === 'audit';
  const isBuilding = propertyType === 'immeuble';
  const showSurface = propertyType === 'appartement' || propertyType === 'maison';
  const visitMinutes = getVisitMinutes(propertyType, units);
  const priceLabel = getReservationPrice(propertyType, surfaceRange, language);

  // Les dates ne sont calculées qu'au montage : au prérendu react-snap, `new Date()`
  // renverrait la date du build et figerait le sélecteur dans le HTML statique.
  const [dates, setDates] = useState<string[]>([]);
  useEffect(() => {
    setDates(Array.from({ length: DATE_RANGE_DAYS }, (_, index) => getIsoDate(index + 1)));
    sessionTokenRef.current = createSessionToken();
  }, []);

  const isPostalCodeComplete = /^\d{4}$/.test(postalCode);
  const commune = isPostalCodeComplete ? getBrusselsCommune(postalCode) : null;
  const isOutsideBrussels = isPostalCodeComplete && !commune;
  const fullAddress = `${street.trim()} ${houseNumber.trim()}, ${postalCode}${commune ? ` ${commune}` : ''}`;

  const canContinueFromProperty = useMemo(() => {
    if (!isBookableOnline(propertyType) || !street.trim() || !houseNumber.trim() || !commune) {
      return false;
    }
    if (showSurface && !surfaceRange) {
      return false;
    }
    if (isBuilding && (!units || units < 1)) {
      return false;
    }
    return true;
  }, [propertyType, street, houseNumber, commune, showSurface, surfaceRange, isBuilding, units]);

  const canSubmit = Boolean(date && time && name.trim() && email.trim() && phone.trim());

  // --- Autocomplétion d'adresse -------------------------------------------------
  useEffect(() => {
    const query = street.trim();
    if (query.length < 3 || !showSuggestions) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      fetchAddressSuggestions(query, sessionTokenRef.current, controller.signal)
        .then(setSuggestions)
        .catch(() => setSuggestions([]));
    }, 250);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [street, showSuggestions]);

  const selectSuggestion = async (suggestion: AddressSuggestion) => {
    // En attendant le détail, on garde la partie « rue » du libellé Google.
    setStreet(suggestion.label.split(',')[0]);
    setShowSuggestions(false);
    setSuggestions([]);

    const details = await fetchPlaceDetails(suggestion.placeId, sessionTokenRef.current);
    if (details?.street) {
      setStreet(details.street);
    }
    if (details?.streetNumber) {
      setHouseNumber(details.streetNumber);
    }
    if (details?.postalCode) {
      setPostalCode(details.postalCode);
    }
    // Une session Places se termine dès qu'un lieu a été retenu.
    sessionTokenRef.current = createSessionToken();
  };

  // --- Disponibilités -----------------------------------------------------------
  const resetAvailability = useCallback(() => {
    generationRef.current += 1;
    setDays([]);
    setScannedDays(0);
    setPage(0);
    setDaysState('idle');
    setExpandedDays([]);
    setDate('');
    setTime('');
  }, []);

  // La durée du bloc dépend du bien : toute modification invalide les créneaux connus.
  useEffect(() => {
    resetAvailability();
  }, [propertyType, units, resetAvailability]);

  // Remplit la page courante avec des jours qui ont au moins un créneau. Les jours sont
  // interrogés par lots ; l'effet se relance après chaque lot tant que la page n'est pas
  // pleine et que l'horizon n'est pas épuisé.
  useEffect(() => {
    if (step !== 2 || dates.length === 0 || daysState !== 'idle') {
      return;
    }
    if (days.length >= (page + 1) * DAYS_PER_PAGE || scannedDays >= dates.length) {
      return;
    }

    const generation = generationRef.current;
    const batch = dates.slice(scannedDays, scannedDays + SCAN_BATCH_DAYS);
    setDaysState('loading');

    fetchAvailabilityRange(batch[0], batch.length, propertyType, units)
      .then((results) => {
        if (generation !== generationRef.current) {
          return;
        }
        setDays((previous) => [...previous, ...results.filter((result) => result.slots.length > 0)]);
        setScannedDays((previous) => previous + batch.length);
        setDaysState('idle');
      })
      .catch(() => {
        if (generation === generationRef.current) {
          setDaysState('error');
        }
      });
  }, [step, dates, days.length, page, scannedDays, daysState, propertyType, units]);

  const pageDays = days.slice(page * DAYS_PER_PAGE, (page + 1) * DAYS_PER_PAGE);
  const hasMoreDays = days.length > (page + 1) * DAYS_PER_PAGE || scannedDays < dates.length;
  const isScanComplete = scannedDays >= dates.length && daysState === 'idle';

  const expandDay = (day: string) =>
    setExpandedDays((previous) => (previous.includes(day) ? previous : [...previous, day]));

  const handleSubmit = async (submitEvent: FormEvent) => {
    submitEvent.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await createBooking({
        propertyType,
        surfaceRange,
        units,
        street: street.trim(),
        houseNumber: houseNumber.trim(),
        postalCode,
        date,
        time,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      });

      saveReservationSummary({ propertyType, surfaceRange, address: fullAddress, slotLabel: result.slotLabel });
      markPendingLeadConversion();
      window.location.href = '/merci';
    } catch (cause) {
      if (cause instanceof BookingError && cause.status === 409) {
        resetAvailability();
        setError(t.slotTaken);
        setStep(2);
      } else {
        setError(cause instanceof BookingError ? cause.message : t.genericError);
      }
      setIsSubmitting(false);
    }
  };

  const choiceGrid = compact ? 'grid grid-cols-2 gap-2' : 'grid grid-cols-2 gap-2 sm:grid-cols-4';

  const stepIndicator = (
    <ol className={`flex items-center justify-center gap-2 sm:gap-4 ${compact ? 'mb-6' : 'mb-10'}`}>
      {t.steps.map((label, index) => {
        const position = index + 1;
        const isDone = step > position;
        const isCurrent = step === position;

        return (
          <li key={label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition ${
                  isDone
                    ? 'bg-emerald-600 text-white'
                    : isCurrent
                      ? 'bg-emerald-600 text-white ring-4 ring-emerald-100'
                      : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isDone ? <Check className="h-4 w-4" /> : position}
              </span>
              <span className={`hidden text-sm font-semibold sm:block ${isCurrent ? 'text-emerald-700' : 'text-gray-500'}`}>
                {label}
              </span>
            </div>
            {position < t.steps.length && <span className="h-px w-6 bg-gray-300 sm:w-10" />}
          </li>
        );
      })}
    </ol>
  );

  const body = (
    <>
      {/* ---------- ÉTAPE 1 ---------- */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <label className="mb-2 block font-semibold text-gray-700">{t.propertyType}</label>
            <div className={choiceGrid}>
              {PROPERTY_TYPES.map((type) => {
                const labels = {
                  appartement: t.apartment,
                  maison: t.house,
                  immeuble: t.building,
                  audit: t.audit,
                };
                const isActive = propertyType === type;

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setPropertyType(type);
                      setSurfaceRange('');
                      setUnits(type === 'immeuble' ? 4 : null);
                      setTime('');
                    }}
                    aria-pressed={isActive}
                    className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-100'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-emerald-400 hover:bg-emerald-50'
                    }`}
                  >
                    {labels[type]}
                  </button>
                );
              })}
            </div>
          </div>

          {isAudit && (
            <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 text-sm text-gray-700">
              <p>{t.auditNotice}</p>
              <Link to="/contact" className="mt-3 inline-block font-semibold text-blue-700 underline">
                {t.contactUs} →
              </Link>
            </div>
          )}

          {isBuilding && (
            <div>
              <label htmlFor={fieldId('units')} className="mb-2 block font-semibold text-gray-700">
                {t.units}
              </label>
              <input
                id={fieldId('units')}
                type="number"
                min={1}
                max={50}
                value={units ?? ''}
                onChange={(changeEvent) => setUnits(Number(changeEvent.target.value) || null)}
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
              />
              <p className="mt-1 text-xs text-gray-500">{t.unitsHelp}</p>
            </div>
          )}

          {showSurface && (
            <div>
              <label className="mb-2 block font-semibold text-gray-700">{t.surface}</label>
              <div className={choiceGrid}>
                {SURFACE_OPTIONS[propertyType as keyof typeof SURFACE_OPTIONS].map((option) => {
                  const isActive = surfaceRange === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSurfaceRange(isActive ? '' : option)}
                      aria-pressed={isActive}
                      className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                        isActive
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-100'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-emerald-400 hover:bg-emerald-50'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {!isAudit && (
            <fieldset className="space-y-3">
              <legend className="mb-2 block font-semibold text-gray-700">{t.address}</legend>

              <div className="relative">
                <label htmlFor={fieldId('street')} className="mb-1 block text-sm font-medium text-gray-600">
                  {t.street}
                </label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id={fieldId('street')}
                    type="text"
                    required
                    autoComplete="off"
                    value={street}
                    onChange={(changeEvent) => {
                      setStreet(changeEvent.target.value);
                      setShowSuggestions(true);
                    }}
                    onBlur={() => window.setTimeout(() => setShowSuggestions(false), 150)}
                    placeholder={t.streetPlaceholder}
                    className="w-full rounded-lg border-2 border-gray-200 py-3 pl-11 pr-4 transition focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                {showSuggestions && suggestions.length > 0 && (
                  <ul className="absolute z-20 mt-1 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                    {suggestions.map((suggestion) => (
                      <li key={suggestion.placeId}>
                        <button
                          type="button"
                          onMouseDown={(mouseEvent) => mouseEvent.preventDefault()}
                          onClick={() => selectSuggestion(suggestion)}
                          className="block w-full px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-emerald-50"
                        >
                          {suggestion.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor={fieldId('number')} className="mb-1 block text-sm font-medium text-gray-600">
                    {t.houseNumber}
                  </label>
                  <input
                    id={fieldId('number')}
                    type="text"
                    required
                    maxLength={20}
                    autoComplete="off"
                    value={houseNumber}
                    onChange={(changeEvent) => setHouseNumber(changeEvent.target.value)}
                    placeholder={t.houseNumberPlaceholder}
                    className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={fieldId('postal')} className="mb-1 block text-sm font-medium text-gray-600">
                    {t.postalCode}
                  </label>
                  <input
                    id={fieldId('postal')}
                    type="text"
                    required
                    inputMode="numeric"
                    maxLength={4}
                    autoComplete="postal-code"
                    value={postalCode}
                    onChange={(changeEvent) => setPostalCode(changeEvent.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder={t.postalCodePlaceholder}
                    aria-invalid={isOutsideBrussels}
                    className={`w-full rounded-lg border-2 px-4 py-3 transition focus:outline-none ${
                      isOutsideBrussels
                        ? 'border-red-400 focus:border-red-500'
                        : commune
                          ? 'border-emerald-400 focus:border-emerald-500'
                          : 'border-gray-200 focus:border-emerald-500'
                    }`}
                  />
                  {commune && (
                    <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                      <Check className="h-3.5 w-3.5" /> {commune}
                    </p>
                  )}
                </div>
              </div>

              {isOutsideBrussels && (
                <div role="alert" className="rounded-lg border-2 border-red-400 bg-red-50 p-4 text-sm font-semibold text-red-700">
                  {t.notBrussels}
                </div>
              )}
            </fieldset>
          )}

          {!isAudit && (
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.price}</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-700">{priceLabel}</p>
                </div>
                {visitMinutes !== null && (
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{t.visitDuration}</p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-lg font-bold text-gray-900">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      {visitMinutes} {t.minutes}
                    </p>
                  </div>
                )}
              </div>
              {isBuilding && <p className="mt-3 text-sm text-gray-600">{t.quoteNotice}</p>}
            </div>
          )}

          <button
            type="button"
            disabled={!canContinueFromProperty}
            onClick={() => setStep(2)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {t.next} <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* ---------- ÉTAPE 2 ---------- */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <label className="mb-3 block font-semibold text-gray-700">{t.chooseSlot}</label>

            {pageDays.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {pageDays.map((day) => {
                  const isExpanded = expandedDays.includes(day.date);
                  // Un créneau déjà choisi reste visible même au-delà de la liste courte.
                  const selectedIndex = date === day.date ? day.slots.indexOf(time) : -1;
                  const visibleCount = isExpanded
                    ? day.slots.length
                    : Math.max(initialSlotCount, selectedIndex + 1);
                  const hiddenCount = day.slots.length - Math.min(visibleCount, day.slots.length);

                  return (
                    <div key={day.date} className="min-w-0 rounded-xl border border-gray-200 bg-gray-50/60 p-2">
                      <p className="mb-2 text-center text-sm font-bold capitalize text-gray-900">
                        {formatDateChip(day.date, language)}
                      </p>
                      <div className="flex flex-col gap-2">
                        {day.slots.slice(0, visibleCount).map((slot) => {
                          const isActive = date === day.date && time === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => {
                                setDate(day.date);
                                setTime(slot);
                              }}
                              aria-pressed={isActive}
                              className={`rounded-lg border px-2 py-2 text-sm font-bold transition ${
                                isActive
                                  ? 'border-emerald-600 bg-emerald-600 text-white'
                                  : 'border-gray-200 bg-white text-gray-700 hover:border-emerald-400 hover:bg-emerald-50'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                        {hiddenCount > 0 && (
                          <button
                            type="button"
                            onClick={() => expandDay(day.date)}
                            className="flex items-center justify-center gap-1 rounded-lg border border-dashed border-emerald-300 px-2 py-2 text-xs font-semibold text-emerald-700 transition hover:border-emerald-500 hover:bg-emerald-50"
                          >
                            <ChevronDown className="h-3.5 w-3.5 shrink-0" />
                            {t.moreSlots} (+{hiddenCount})
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {daysState === 'loading' && pageDays.length < DAYS_PER_PAGE && (
              <p className="flex items-center gap-2 py-4 text-sm text-gray-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                {t.loadingSlots}
              </p>
            )}

            {daysState === 'error' && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-gray-700">
                <p className="font-semibold text-red-700">{t.slotsError}</p>
                <button type="button" onClick={() => setDaysState('idle')} className="mt-2 font-semibold text-red-700 underline">
                  {t.retry}
                </button>
              </div>
            )}

            {isScanComplete && pageDays.length === 0 && (
              <p className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
                {days.length === 0 ? t.noSlots : t.noMoreDates}
              </p>
            )}

            {(page > 0 || hasMoreDays) && (
              <div className="mt-3 flex gap-2">
                {page > 0 && (
                  <button
                    type="button"
                    onClick={() => setPage((current) => current - 1)}
                    className="flex items-center justify-center gap-1 rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-emerald-400"
                  >
                    <ArrowLeft className="h-4 w-4" /> {t.previousDates}
                  </button>
                )}
                {hasMoreDays && (
                  <button
                    type="button"
                    disabled={daysState !== 'idle'}
                    onClick={() => setPage((current) => current + 1)}
                    className="flex flex-1 items-center justify-center gap-1 rounded-lg border-2 border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-500 hover:bg-emerald-50 disabled:cursor-wait disabled:opacity-60"
                  >
                    {t.nextDates} <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}

            {date && time && (
              <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-gray-700">
                {t.yourChoice} : <span className="font-bold text-emerald-700">{formatSlotLabel(date, time, language)}</span>
              </p>
            )}
          </div>

          {error && (
            <div className="rounded-lg border-2 border-red-500 bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 px-6 py-4 font-semibold text-gray-700 transition hover:border-emerald-400"
            >
              <ArrowLeft className="h-5 w-5" /> {t.back}
            </button>
            <button
              type="button"
              disabled={!time}
              onClick={() => setStep(3)}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {t.next} <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* ---------- ÉTAPE 3 ---------- */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="mb-3 flex items-center gap-2 font-bold text-gray-900">
              <CalendarDays className="h-5 w-5 text-emerald-600" />
              {t.summary}
            </p>
            <dl className="space-y-1 text-sm text-gray-700">
              <div className="flex justify-between gap-4">
                <dt>{t.propertyType}</dt>
                <dd className="font-semibold capitalize">{propertyType}</dd>
              </div>
              {surfaceRange && (
                <div className="flex justify-between gap-4">
                  <dt>{t.surface}</dt>
                  <dd className="font-semibold">{surfaceRange}</dd>
                </div>
              )}
              <div className="flex justify-between gap-4">
                <dt>{t.address}</dt>
                <dd className="text-right font-semibold">{fullAddress}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>{t.chooseSlot}</dt>
                <dd className="text-right font-semibold">{formatSlotLabel(date, time, language)}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-emerald-200 pt-2">
                <dt className="font-semibold">{t.price}</dt>
                <dd className="text-lg font-bold text-emerald-700">{priceLabel}</dd>
              </div>
            </dl>
            {!isAutoConfirmed(propertyType) && (
              <p className="mt-3 border-t border-emerald-200 pt-3 text-sm text-gray-600">{t.quoteNotice}</p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={fieldId('name')} className="mb-2 block font-semibold text-gray-700">
                {t.fullName}
              </label>
              <input
                id={fieldId('name')}
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(changeEvent) => setName(changeEvent.target.value)}
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor={fieldId('phone')} className="mb-2 block font-semibold text-gray-700">
                {t.phone}
              </label>
              <input
                id={fieldId('phone')}
                type="tel"
                required
                autoComplete="tel"
                value={phone}
                onChange={(changeEvent) => setPhone(changeEvent.target.value)}
                placeholder="+32 4XX XX XX XX"
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor={fieldId('email')} className="mb-2 block font-semibold text-gray-700">
              {t.email}
            </label>
            <input
              id={fieldId('email')}
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(changeEvent) => setEmail(changeEvent.target.value)}
              placeholder="votre@email.be"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor={fieldId('message')} className="mb-2 block font-semibold text-gray-700">
              {t.message}
            </label>
            <textarea
              id={fieldId('message')}
              rows={3}
              value={message}
              onChange={(changeEvent) => setMessage(changeEvent.target.value)}
              placeholder={t.messagePlaceholder}
              className="w-full resize-none rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div className="rounded border-l-4 border-blue-500 bg-blue-50 p-4">
            <p className="text-sm text-gray-700">{t.privacy}</p>
          </div>

          {error && (
            <div className="rounded-lg border-2 border-red-500 bg-red-50 p-4 text-sm font-semibold text-red-700">
              {error}
              <a
                href="tel:+32486987484"
                onClick={trackPhoneCallConversion}
                className="mt-2 flex items-center gap-2 font-semibold text-red-700 underline"
              >
                <Phone className="h-4 w-4" /> {t.callUs}
              </a>
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 px-6 py-4 font-semibold text-gray-700 transition hover:border-emerald-400"
            >
              <ArrowLeft className="h-5 w-5" /> {t.back}
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !canSubmit}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Check className="h-5 w-5" />}
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </div>
        </form>
      )}
    </>
  );

  if (compact) {
    return (
      <div>
        {stepIndicator}
        {body}
      </div>
    );
  }

  return (
    <>
      {stepIndicator}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8">{body}</div>
    </>
  );
}
