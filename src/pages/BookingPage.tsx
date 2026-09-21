import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock, Loader2, MapPin, Phone } from 'lucide-react';

import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';
import { trackPhoneCallConversion, markPendingLeadConversion } from '../lib/tracking';
import { getReservationPrice, saveReservationSummary } from '../lib/reservation';
import {
  AddressSuggestion,
  BookingError,
  createBooking,
  createSessionToken,
  extractPostalCode,
  fetchAddressSuggestions,
  fetchAvailability,
  fetchPlaceDetails,
  formatDateChip,
  formatSlotLabel,
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

/** Nombre de jours proposés dans le sélecteur de date. */
const DATE_RANGE_DAYS = 21;

export default function BookingPage() {
  const { language, isDutch } = useLanguage();

  const t = isDutch
    ? {
        seoTitle: 'Afspraak maken — EPC-certificaat Brussel',
        seoDescription:
          'Reserveer online uw EPC-bezoek in Brussel. Kies uw pand, uw tijdslot en ontvang een onmiddellijke bevestiging.',
        badge: 'Online reservering',
        heading: 'Reserveer uw EPC-bezoek',
        subheading: 'Drie stappen, minder dan twee minuten. De prijs verschijnt voordat u bevestigt.',
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
        addressPlaceholder: 'Begin te typen…',
        price: 'Prijs van het bezoek',
        quoteOnly: 'Op offerte',
        quoteNotice:
          'Dit type aanvraag vereist een offerte. Kies een tijdslot: wij bevestigen het samen met het tarief binnen 12 uur.',
        auditNotice:
          'Een energie-audit wordt niet online gereserveerd. Neem contact met ons op voor een offerte op maat.',
        contactUs: 'Contacteer ons',
        chooseDate: 'Kies een datum',
        chooseSlot: 'Kies een tijdslot',
        noSlots: 'Geen tijdslot beschikbaar op deze dag.',
        loadingSlots: 'Beschikbaarheden laden…',
        slotsError: 'Beschikbaarheden tijdelijk niet beschikbaar.',
        retry: 'Opnieuw proberen',
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
        submitting: 'Bezig…',
        slotTaken: 'Dit tijdslot werd net gereserveerd. Kies een ander.',
        genericError: 'Er ging iets mis. Probeer opnieuw of bel ons.',
        callUs: 'Bel ons',
      }
    : {
        seoTitle: 'Prendre rendez-vous — Certificat PEB Bruxelles',
        seoDescription:
          'Réservez votre visite PEB à Bruxelles en ligne. Choisissez votre bien, votre créneau, et recevez une confirmation immédiate.',
        badge: 'Réservation en ligne',
        heading: 'Réservez votre visite PEB',
        subheading: 'Trois étapes, moins de deux minutes. Le prix s’affiche avant que vous confirmiez.',
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
        addressPlaceholder: 'Commencez à taper…',
        price: 'Prix de la visite',
        quoteOnly: 'Sur devis',
        quoteNotice:
          'Ce type de demande nécessite un devis. Choisissez un créneau : nous le confirmons avec le tarif sous 12 heures.',
        auditNotice:
          'Un audit énergétique ne se réserve pas en ligne. Contactez-nous pour un devis sur mesure.',
        contactUs: 'Nous contacter',
        chooseDate: 'Choisissez une date',
        chooseSlot: 'Choisissez un créneau',
        noSlots: 'Aucun créneau disponible ce jour-là.',
        loadingSlots: 'Chargement des disponibilités…',
        slotsError: 'Disponibilités temporairement indisponibles.',
        retry: 'Réessayer',
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
        submitting: 'Envoi en cours…',
        slotTaken: 'Ce créneau vient d’être réservé. Merci d’en choisir un autre.',
        genericError: 'Une erreur est survenue. Réessayez ou appelez-nous.',
        callUs: 'Appelez-nous',
      };

  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('appartement');
  const [surfaceRange, setSurfaceRange] = useState('');
  const [units, setUnits] = useState<number | null>(null);
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState<string | null>(null);

  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const sessionTokenRef = useRef<string>('');

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [slots, setSlots] = useState<string[]>([]);
  const [slotsState, setSlotsState] = useState<'idle' | 'loading' | 'error'>('idle');

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

  const canContinueFromProperty = useMemo(() => {
    if (!isBookableOnline(propertyType) || !address.trim()) {
      return false;
    }
    if (showSurface && !surfaceRange) {
      return false;
    }
    if (isBuilding && (!units || units < 1)) {
      return false;
    }
    return true;
  }, [propertyType, address, showSurface, surfaceRange, isBuilding, units]);

  const canSubmit = Boolean(date && time && name.trim() && email.trim() && phone.trim());

  // --- Autocomplétion d'adresse -------------------------------------------------
  useEffect(() => {
    const query = address.trim();
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
  }, [address, showSuggestions]);

  const selectSuggestion = async (suggestion: AddressSuggestion) => {
    setAddress(suggestion.label);
    setShowSuggestions(false);
    setSuggestions([]);

    const details = await fetchPlaceDetails(suggestion.placeId, sessionTokenRef.current);
    if (details?.address) {
      setAddress(details.address);
    }
    setPostalCode(details?.postalCode ?? extractPostalCode(suggestion.label));
    // Une session Places se termine dès qu'un lieu a été retenu.
    sessionTokenRef.current = createSessionToken();
  };

  // --- Disponibilités -----------------------------------------------------------
  const loadSlots = useCallback(
    (targetDate: string, signal?: AbortSignal) => {
      setSlotsState('loading');
      setSlots([]);

      fetchAvailability(targetDate, propertyType, units, signal)
        .then((available) => {
          setSlots(available);
          setSlotsState('idle');
        })
        .catch((cause) => {
          if ((cause as Error).name === 'AbortError') {
            return;
          }
          setSlotsState('error');
        });
    },
    [propertyType, units]
  );

  useEffect(() => {
    if (step !== 2 || !date) {
      return;
    }

    const controller = new AbortController();
    loadSlots(date, controller.signal);
    return () => controller.abort();
  }, [step, date, loadSlots]);

  const handleSubmit = async (submitEvent: FormEvent) => {
    submitEvent.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await createBooking({
        propertyType,
        surfaceRange,
        units,
        address: address.trim(),
        postalCode: postalCode ?? extractPostalCode(address),
        date,
        time,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      });

      saveReservationSummary({ propertyType, surfaceRange, address, slotLabel: result.slotLabel });
      markPendingLeadConversion();
      window.location.href = '/merci';
    } catch (cause) {
      if (cause instanceof BookingError && cause.status === 409) {
        setError(t.slotTaken);
        setTime('');
        setStep(2);
        loadSlots(date);
      } else {
        setError(cause instanceof BookingError ? cause.message : t.genericError);
      }
      setIsSubmitting(false);
    }
  };

  const stepIndicator = (
    <ol className="mb-10 flex items-center justify-center gap-2 sm:gap-4">
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

  return (
    <>
      <SEO title={t.seoTitle} description={t.seoDescription} canonical="https://kcertipeb.be/reserver" />

      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              {t.badge}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">{t.heading}</h1>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">{t.subheading}</p>
          </div>

          {stepIndicator}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8">
            {/* ---------- ÉTAPE 1 ---------- */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block font-semibold text-gray-700">{t.propertyType}</label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
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
                    <label htmlFor="units" className="mb-2 block font-semibold text-gray-700">
                      {t.units}
                    </label>
                    <input
                      id="units"
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
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
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
                  <div className="relative">
                    <label htmlFor="address" className="mb-2 block font-semibold text-gray-700">
                      {t.address}
                    </label>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        id="address"
                        type="text"
                        autoComplete="off"
                        value={address}
                        onChange={(changeEvent) => {
                          setAddress(changeEvent.target.value);
                          setShowSuggestions(true);
                          setPostalCode(null);
                        }}
                        onBlur={() => window.setTimeout(() => setShowSuggestions(false), 150)}
                        placeholder={t.addressPlaceholder}
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
                          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                            {t.visitDuration}
                          </p>
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
                  <label className="mb-3 block font-semibold text-gray-700">{t.chooseDate}</label>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {dates.map((isoDate) => {
                      const isActive = date === isoDate;
                      return (
                        <button
                          key={isoDate}
                          type="button"
                          onClick={() => {
                            setDate(isoDate);
                            setTime('');
                          }}
                          aria-pressed={isActive}
                          className={`shrink-0 rounded-xl border px-4 py-3 text-sm font-semibold capitalize transition ${
                            isActive
                              ? 'border-emerald-600 bg-emerald-600 text-white'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-emerald-400 hover:bg-emerald-50'
                          }`}
                        >
                          {formatDateChip(isoDate, language)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {date && (
                  <div>
                    <label className="mb-3 block font-semibold text-gray-700">{t.chooseSlot}</label>

                    {slotsState === 'loading' && (
                      <p className="flex items-center gap-2 py-6 text-sm text-gray-500">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t.loadingSlots}
                      </p>
                    )}

                    {slotsState === 'error' && (
                      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-gray-700">
                        <p className="font-semibold text-red-700">{t.slotsError}</p>
                        <button
                          type="button"
                          onClick={() => loadSlots(date)}
                          className="mt-2 font-semibold text-red-700 underline"
                        >
                          {t.retry}
                        </button>
                      </div>
                    )}

                    {slotsState === 'idle' && slots.length === 0 && (
                      <p className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">{t.noSlots}</p>
                    )}

                    {slotsState === 'idle' && slots.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                        {slots.map((slot) => {
                          const isActive = time === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setTime(slot)}
                              aria-pressed={isActive}
                              className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                                isActive
                                  ? 'border-emerald-600 bg-emerald-600 text-white'
                                  : 'border-gray-200 bg-white text-gray-700 hover:border-emerald-400 hover:bg-emerald-50'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {error && (
                  <div className="rounded-lg border-2 border-red-500 bg-red-50 p-4 text-sm font-semibold text-red-700">
                    {error}
                  </div>
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
                      <dd className="text-right font-semibold">{address}</dd>
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
                    <label htmlFor="name" className="mb-2 block font-semibold text-gray-700">
                      {t.fullName}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(changeEvent) => setName(changeEvent.target.value)}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block font-semibold text-gray-700">
                      {t.phone}
                    </label>
                    <input
                      id="phone"
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
                  <label htmlFor="email" className="mb-2 block font-semibold text-gray-700">
                    {t.email}
                  </label>
                  <input
                    id="email"
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
                  <label htmlFor="message" className="mb-2 block font-semibold text-gray-700">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
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
          </div>
        </div>
      </section>
    </>
  );
}
