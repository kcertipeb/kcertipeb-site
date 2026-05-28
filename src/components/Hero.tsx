import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Star, Phone, Send, CalendarDays } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { insertContactSubmission } from '../lib/contactSubmission';
import { buildReservationSummary, getReservationPrice, saveReservationSummary } from '../lib/reservation';
import { markPendingLeadConversion, trackPhoneCallConversion } from '../lib/tracking';
import { useLanguage } from '../lib/language';

const SURFACE_OPTIONS = {
  appartement: ['< 50 m²', '50 - 75 m²', '76 - 100 m²', '> 100 m²'],
  maison: ['< 100 m²', '101 - 200 m²', '> 200 m²'],
} as const;

export default function Hero() {
  const { language, isDutch } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'appartement',
    surfaceRange: '',
    address: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const quickPrices = isDutch
    ? [
        { label: 'Appartement < 50 m²', price: '120 € incl. btw' },
        { label: 'Appartement 50 - 75 m²', price: '165 € incl. btw' },
        { label: 'Woning < 100 m²', price: '210 € incl. btw' },
      ]
    : [
        { label: 'Appartement < 50 m²', price: '120 € TVAC' },
        { label: 'Appartement 50 - 75 m²', price: '165 € TVAC' },
        { label: 'Maison < 100 m²', price: '210 € TVAC' },
      ];

  const content = isDutch
    ? {
        title: 'Energieprestatiecertificaat in Brussel — heldere tarieven vanaf',
        subtitle:
          'Kies het type pand en de oppervlakte en reserveer uw bezoek. De prijs verschijnt meteen vóór de reservering.',
        primaryCta: 'Reserveer een bezoek',
        secondaryCta: 'Bel nu',
        reviewTitle: 'Positieve klantenreacties',
        reviewSubtitle: 'Snelle en zorgvuldige service in Brussel',
        approved: 'Erkend BE',
        fast: 'Binnen 48 u',
        clear: 'Duidelijke prijzen',
        pricesTitle: 'EPC-tarieven in Brussel',
        pricesSubtitle: 'Richtprijzen',
        pricesNote:
          'Het tarief hangt af van het type pand en de oppervlakte. Neem contact met ons op voor een groter pand of een specifieke situatie.',
        formLabel: 'Bezoek reserveren',
        formTitle: 'Kies uw pand en bevestig het bezoek',
        formIntro:
          'De prijs wordt onmiddellijk weergegeven volgens het type pand en de oppervlakte. Daarna nemen wij contact op om het bezoek te plannen.',
        urgentHelp: 'Onmiddellijk antwoord nodig?',
        urgentLink: 'Spoedservice bekijken — interventie binnen 48u',
        name: 'Naam',
        phone: 'Telefoon',
        email: 'E-mail',
        propertyType: 'Type pand',
        apartment: 'Appartement',
        house: 'Woning',
        building: 'Gebouw',
        audit: 'Energie-audit',
        surface: 'Oppervlakte van het pand',
        surfaceChip: 'Oppervlakte',
        visitPrice: 'Prijs van het bezoek',
        priceShown: 'Prijs zichtbaar vóór de reservering.',
        pickSurface: 'Selecteer de oppervlakte om de vaste prijs weer te geven.',
        address: 'Adres van het pand',
        message: 'Bericht',
        messagePlaceholder: 'Beschikbaarheid, urgentie, nuttige informatie...',
        namePlaceholder: 'Uw naam',
        phonePlaceholder: '+32 4xx xx xx xx',
        emailPlaceholder: 'uw@email.be',
        addressPlaceholder: 'Straat, nummer, gemeente',
        submit: 'Mijn reservering bevestigen',
        submitting: 'Verzenden...',
        successNote: 'Daarna ontvangt u het bezoekoverzicht en de gids van de certificateur.',
        unavailable: 'Dienst tijdelijk onbeschikbaar. Bel ons op +32 486 98 74 84.',
        sendError: 'Fout bij het verzenden. Probeer opnieuw.',
        fallbackPrice: 'Op offerte',
      }
    : {
        title: 'Certificat PEB à Bruxelles avec des tarifs clairs dès',
        subtitle:
          "Choisissez le type de bien, la surface, et réservez votre visite. Le prix s'affiche directement avant votre réservation.",
        primaryCta: 'Réserver une visite',
        secondaryCta: 'Appeler maintenant',
        reviewTitle: 'Retours clients positifs',
        reviewSubtitle: 'Service rapide et sérieux à Bruxelles',
        approved: 'Agréé BE',
        fast: 'Sous 48 h',
        clear: 'Tarifs clairs',
        pricesTitle: 'Tarifs PEB à Bruxelles',
        pricesSubtitle: 'Prix indicatifs',
        pricesNote:
          'Le tarif dépend du type de bien et de sa surface. Pour un bien plus grand ou un cas particulier, contactez-nous.',
        formLabel: 'Réserver une visite',
        formTitle: 'Choisissez votre bien et confirmez la visite',
        formIntro:
          'Le prix est indiqué directement selon le type de bien et la surface. Nous vous recontactons ensuite pour organiser la visite.',
        urgentHelp: "Besoin d'une réponse immédiate ?",
        urgentLink: 'Service urgent — intervention sous 48h',
        name: 'Nom',
        phone: 'Téléphone',
        email: 'Email',
        propertyType: 'Type de bien',
        apartment: 'Appartement',
        house: 'Maison',
        building: 'Immeuble',
        audit: 'Audit énergétique',
        surface: 'Surface du bien',
        surfaceChip: 'Surface',
        visitPrice: 'Prix de la visite',
        priceShown: 'Prix affiché avant la réservation.',
        pickSurface: 'Sélectionnez la surface pour afficher le prix fixe.',
        address: 'Adresse du bien',
        message: 'Message',
        messagePlaceholder: 'Disponibilités, urgence, informations utiles...',
        namePlaceholder: 'Votre nom',
        phonePlaceholder: '+32 4xx xx xx xx',
        emailPlaceholder: 'votre@email.be',
        addressPlaceholder: 'Rue, numéro, commune',
        submit: 'Confirmer ma réservation',
        submitting: 'Envoi en cours...',
        successNote: 'Vous recevez ensuite le récapitulatif de visite et le document du certificateur.',
        unavailable: 'Service temporairement indisponible. Appelez-nous au +32 486 98 74 84.',
        sendError: "Erreur lors de l'envoi. Veuillez réessayer.",
        fallbackPrice: 'Sur devis',
      };

  const scrollToReservationForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (!supabase) {
        setError(content.unavailable);
        setIsSubmitting(false);
        return;
      }

      const { error: dbError } = await insertContactSubmission(formData);

      if (dbError) {
        setError(`${content.sendError} ${dbError.message}`);
        setIsSubmitting(false);
        return;
      }

      saveReservationSummary(formData);
      markPendingLeadConversion();
      window.location.href = '/merci';
    } catch {
      setError(content.sendError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const showSurfaceSelect = formData.propertyType === 'appartement' || formData.propertyType === 'maison';
  const surfaceOptions = showSurfaceSelect
    ? SURFACE_OPTIONS[formData.propertyType as keyof typeof SURFACE_OPTIONS]
    : [];
  const reservationSummary = buildReservationSummary(formData, language);
  const selectedPrice = getReservationPrice(formData.propertyType, formData.surfaceRange, language);

  return (
    <section id="accueil" className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 pb-14 pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
              {content.title} <span className="text-emerald-600">120 €</span>
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-600">{content.subtitle}</p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={scrollToReservationForm}
                className="rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
              >
                {content.primaryCta}
              </button>
              <a
                href="tel:+32486987484"
                onClick={trackPhoneCallConversion}
                className="rounded-2xl border-2 border-emerald-600 bg-white px-8 py-4 text-center text-lg font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                {content.secondaryCta}
              </a>
            </div>

            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex -space-x-2">
                {['S', 'M', 'L', 'A'].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-600 text-xs font-bold text-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1 text-sm font-bold text-slate-950">{content.reviewTitle}</span>
                </div>
                <p className="text-xs text-slate-500">{content.reviewSubtitle}</p>
              </div>
            </div>

            <div className="mt-7 grid max-w-md grid-cols-3 gap-4">
              <div className="text-center">
                <Shield className="mx-auto mb-1 h-8 w-8 text-emerald-600" />
                <p className="text-xs font-semibold text-slate-900">{content.approved}</p>
              </div>
              <div className="text-center">
                <Clock className="mx-auto mb-1 h-8 w-8 text-emerald-600" />
                <p className="text-xs font-semibold text-slate-900">{content.fast}</p>
              </div>
              <div className="text-center">
                <Star className="mx-auto mb-1 h-8 w-8 text-emerald-600" />
                <p className="text-xs font-semibold text-slate-900">{content.clear}</p>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-100/50">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">{content.pricesTitle}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-950">{content.pricesSubtitle}</p>
                </div>
                <span className="inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {isDutch ? 'incl. btw' : 'TVAC'}
                </span>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {quickPrices.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-sm text-slate-600">{item.label}</p>
                    <p className="mt-1 text-2xl font-bold text-slate-950">{item.price}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-slate-500">{content.pricesNote}</p>
            </div>
          </div>

          <div id="contact">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-slate-300/20">
              <div className="bg-slate-950 px-6 py-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">{content.formLabel}</p>
                <p className="mt-2 text-3xl font-bold">{content.formTitle}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{content.formIntro}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 p-6">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-700" />
                    <div>
                      <p className="text-sm text-emerald-800">{content.urgentHelp}</p>
                      <a
                        href="tel:+32486987484"
                        onClick={trackPhoneCallConversion}
                        className="text-2xl font-bold text-emerald-900 transition hover:text-emerald-700"
                      >
                        +32 486 98 74 84
                      </a>
                    </div>
                  </div>
                  <Link
                    to="/certificat-peb-urgent-bruxelles"
                    className="mt-2 block text-xs font-semibold text-red-600 hover:underline"
                  >
                    ⚡ {content.urgentLink}
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">{content.name}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder={content.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">{content.phone}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder={content.phonePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">{content.email}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder={content.emailPlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">{content.propertyType}</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value, surfaceRange: '' })}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  >
                    <option value="appartement">{content.apartment}</option>
                    <option value="maison">{content.house}</option>
                    <option value="immeuble">{content.building}</option>
                    <option value="audit">{content.audit}</option>
                  </select>
                </div>

                {showSurfaceSelect && (
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">{content.surface}</label>
                    <div className="grid grid-cols-2 gap-2">
                      {surfaceOptions.map((option) => {
                        const isActive = formData.surfaceRange === option;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                surfaceRange: isActive ? '' : option,
                              })
                            }
                            className={`w-full rounded-2xl border px-3 py-3 text-left transition ${
                              isActive
                                ? 'border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-100'
                                : 'border-slate-200 bg-gradient-to-b from-white to-emerald-50/40 text-slate-700 hover:border-emerald-400 hover:bg-emerald-50'
                            }`}
                            aria-pressed={isActive}
                          >
                            <span className="block text-[10px] uppercase tracking-[0.16em] opacity-70">{content.surfaceChip}</span>
                            <span className="mt-1 block text-sm font-bold leading-tight">{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="rounded-2xl border border-emerald-100 bg-white px-4 py-4">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-emerald-700" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{content.visitPrice}</p>
                      <p className="text-lg font-bold text-emerald-700">{reservationSummary.priceLabel}</p>
                      <p className="text-xs text-slate-500">
                        {showSurfaceSelect ? (selectedPrice !== content.fallbackPrice ? content.priceShown : content.pickSurface) : ''}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">{content.address}</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder={content.addressPlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">{content.message}</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder={content.messagePlaceholder}
                  />
                </div>

                {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? content.submitting : content.submit}
                </button>

                <p className="text-center text-sm text-slate-500">{content.successNote}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
