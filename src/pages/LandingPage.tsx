import { FormEvent, useState } from 'react';
import { CalendarDays, CheckCircle, Clock3, Phone, ShieldCheck, Star } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { insertContactSubmission } from '../lib/contactSubmission';
import { buildReservationSummary, getReservationPrice, saveReservationSummary } from '../lib/reservation';
import { markPendingLeadConversion, trackPhoneCallConversion } from '../lib/tracking';
import SEO from '../components/SEO';
import LanguageSelector from '../components/LanguageSelector';
import { useLanguage } from '../lib/language';

const SURFACE_OPTIONS = {
  appartement: ['< 50 m²', '50 - 75 m²', '76 - 100 m²', '> 100 m²'],
  maison: ['< 100 m²', '101 - 200 m²', '> 200 m²'],
} as const;

export default function LandingPage() {
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

  const content = isDutch
    ? {
        seoTitle: 'EPC-certificaat Brussel vanaf 120 €',
        seoDescription:
          'EPC-certificaat in Brussel vanaf 120 € inclusief btw. Duidelijke prijzen, snelle interventie en online reservering.',
        topLabel: 'EPC-certificateur in Brussel',
        title: 'EPC-certificaat in Brussel',
        titleAccent: 'vanaf 120 € incl. btw',
        intro:
          'Duidelijke prijzen, snelle afspraak en officieel certificaat voor verkoop of verhuur. Kies het type pand en de oppervlakte om de prijs meteen te zien.',
        primaryCta: 'Bekijk mijn prijs',
        secondaryCta: 'Bel nu',
        speedTitle: 'Snel',
        speedText: 'Snelle beschikbaarheid in Brussel.',
        officialTitle: 'Officieel',
        officialText: 'Erkende certificateur en conform document.',
        clearTitle: 'Transparant',
        clearText: 'Prijzen vanaf het begin duidelijk weergegeven.',
        pricesLabel: 'Onze tarieven',
        pricesTitle: 'Duidelijke prijzen vanaf het begin',
        pricesNote:
          'Heeft u een bijzondere situatie of een groter pand? Vermeld het adres van het pand en wij antwoorden snel.',
        benefits: [
          'Erkende certificateur door Leefmilieu Brussel',
          'Snelle interventie in de 19 Brusselse gemeenten',
          'Vaste prijzen meegedeeld vóór de afspraak',
          'Officieel certificaat 10 jaar geldig',
        ],
        formLabel: 'Bezoek reserveren',
        formTitle: 'Kies uw pand en bevestig het bezoek',
        formIntro:
          'De prijs wordt meteen getoond volgens het type pand en de oppervlakte. Daarna nemen wij contact op om het bezoek te organiseren.',
        name: 'Naam',
        phone: 'Telefoon',
        email: 'E-mail',
        propertyType: 'Type pand',
        apartment: 'Appartement',
        house: 'Woning',
        building: 'Gebouw',
        other: 'Andere aanvraag',
        surface: 'Oppervlakte van het pand',
        surfaceChip: 'Oppervlakte',
        price: 'Prijs van het bezoek',
        priceShown: 'Prijs zichtbaar vóór de reservering.',
        pickSurface: 'Selecteer de oppervlakte om de vaste prijs te tonen.',
        address: 'Adres van het pand',
        message: 'Bericht',
        messagePlaceholder: 'Urgentie, beschikbaarheid, nuttige informatie...',
        submit: 'Mijn reservering bevestigen',
        submitting: 'Verzenden...',
        advantagesTitle: 'Uw voordelen',
        advantages: ['Prijs zichtbaar vóór de reservering', 'Snelle online reservering', 'Rechtstreeks telefonisch contact'],
        immediateAnswer: 'Onmiddellijk antwoord nodig?',
        processLabel: 'Eenvoudig traject',
        processTitle: 'Hoe verloopt het?',
        process: [
          {
            title: 'U vraagt een prijs aan',
            description: 'In 1 minuut, via formulier of telefoon.',
          },
          {
            title: 'Wij plannen het bezoek',
            description: 'Snelle afspraak volgens uw beschikbaarheid in Brussel.',
          },
          {
            title: 'U ontvangt het certificaat',
            description: 'Officieel document na analyse van het pand.',
          },
        ],
        whyLabel: 'Waarom KcertiPEB kiezen',
        whyTitle: 'Een eenvoudige, snelle en professionele service',
        whyText:
          'Wij focussen op duidelijke prijzen, snelle opvolging en een zorgvuldige begeleiding voor uw EPC-certificaat in Brussel.',
        whyPoints: [
          'Tarieven vooraf meegedeeld',
          'Eenvoudig formulier om in te vullen',
          'Snelle contactopname',
          'Interventie in het hele Brussels Gewest',
        ],
        faqLabel: 'Veelgestelde vragen',
        faqs: [
          {
            question: 'Hoe lang duurt het om een EPC-certificaat te ontvangen?',
            answer: 'Wij plannen snel het bezoek en het officiële certificaat wordt bezorgd na de volledige analyse van het pand.',
          },
          {
            question: 'Is een EPC-certificaat verplicht?',
            answer: 'Ja, in Brussel is het verplicht voor de verkoop of verhuur van residentieel vastgoed.',
          },
          {
            question: 'Is de prijs vast?',
            answer: 'Ja, de weergegeven tarieven zijn duidelijk en worden meegedeeld volgens het type pand en de oppervlakte.',
          },
          {
            question: 'Werkt u overal in Brussel?',
            answer: 'Ja, wij komen in het hele Brussels Hoofdstedelijk Gewest tussen.',
          },
        ],
        footerText: 'EPC-certificaat in Brussel, duidelijke prijzen en snelle reservering.',
        phoneLabel: 'Telefoon',
        emailLabel: 'E-mail',
        accreditation: "Erkenningsnummer",
        unavailable: 'Dienst tijdelijk onbeschikbaar. Bel ons op +32 486 98 74 84.',
        sendErrorPrefix: 'Fout',
        genericError: 'Er is een fout opgetreden. Bel ons op +32 486 98 74 84.',
        namePlaceholder: 'Uw naam',
        phonePlaceholder: '+32 4xx xx xx xx',
        emailPlaceholder: 'uw@email.be',
        addressPlaceholder: 'Straat, nummer, gemeente',
        fallbackPrice: 'Op offerte',
      }
    : {
        seoTitle: 'Certificat PEB Bruxelles dès 120 €',
        seoDescription:
          'Certificat PEB à Bruxelles dès 120 € TVAC. Prix clairs, intervention rapide et réservation en ligne.',
        topLabel: 'Certificateur PEB à Bruxelles',
        title: 'Certificat PEB à Bruxelles',
        titleAccent: 'dès 120 € TVAC',
        intro:
          'Prix clairs, visite rapide et certificat officiel pour vente ou location. Choisissez le type de bien et la surface pour afficher le prix avant de réserver la visite.',
        primaryCta: 'Voir mon prix',
        secondaryCta: 'Appeler maintenant',
        speedTitle: 'Rapide',
        speedText: 'Créneaux disponibles rapidement à Bruxelles.',
        officialTitle: 'Officiel',
        officialText: 'Certificateur agréé et document conforme.',
        clearTitle: 'Transparent',
        clearText: 'Tarifs affichés clairement dès le départ.',
        pricesLabel: 'Nos tarifs',
        pricesTitle: 'Des prix clairs dès le départ',
        pricesNote:
          "Besoin d'un cas particulier ou d'un bien plus grand ? Indiquez-nous l'adresse du bien et nous vous répondons rapidement.",
        benefits: [
          'Certificateur agréé Bruxelles Environnement',
          'Intervention rapide dans les 19 communes',
          'Prix fixes annoncés avant le rendez-vous',
          'Certificat officiel valable 10 ans',
        ],
        formLabel: 'Réserver une visite',
        formTitle: 'Choisissez votre bien et confirmez la visite',
        formIntro:
          "Le prix s'affiche selon le type de bien et la surface. Nous vous recontactons ensuite pour organiser la visite.",
        name: 'Nom',
        phone: 'Téléphone',
        email: 'Email',
        propertyType: 'Type de bien',
        apartment: 'Appartement',
        house: 'Maison',
        building: 'Immeuble',
        other: 'Autre',
        surface: 'Surface du bien',
        surfaceChip: 'Surface',
        price: 'Prix de la visite',
        priceShown: 'Prix affiché avant la réservation.',
        pickSurface: 'Sélectionnez la surface pour afficher le prix fixe.',
        address: 'Adresse du bien',
        message: 'Message',
        messagePlaceholder: 'Urgence, disponibilité, informations utiles...',
        submit: 'Confirmer ma réservation',
        submitting: 'Envoi en cours...',
        advantagesTitle: 'Vos avantages',
        advantages: ['Prix affiché avant la réservation', 'Réservation rapide en ligne', 'Contact direct par téléphone'],
        immediateAnswer: "Besoin d'une réponse immédiate ?",
        processLabel: 'Parcours simple',
        processTitle: 'Comment ça se passe',
        process: [
          {
            title: 'Vous demandez votre devis',
            description: 'En 1 minute, par formulaire ou par téléphone.',
          },
          {
            title: 'Nous planifions la visite',
            description: 'Créneau rapide selon votre disponibilité à Bruxelles.',
          },
          {
            title: 'Vous recevez le certificat',
            description: 'Document officiel remis après analyse du bien.',
          },
        ],
        whyLabel: 'Pourquoi choisir KcertiPEB',
        whyTitle: 'Un service simple, rapide et professionnel',
        whyText:
          "Nous mettons l'accent sur la clarté des tarifs, la rapidité de prise en charge et un accompagnement sérieux pour votre certificat PEB à Bruxelles.",
        whyPoints: [
          'Tarifs annoncés dès le départ',
          'Formulaire simple à compléter',
          'Prise de contact rapide',
          'Intervention sur toute la Région bruxelloise',
        ],
        faqLabel: 'Questions fréquentes',
        faqs: [
          {
            question: 'Combien de temps faut-il pour obtenir un certificat PEB ?',
            answer: "Nous planifions rapidement la visite et le certificat officiel est remis après l'analyse complète du bien.",
          },
          {
            question: 'Le certificat PEB est-il obligatoire ?',
            answer: 'Oui, il est obligatoire à Bruxelles pour vendre ou louer un bien résidentiel.',
          },
          {
            question: 'Le prix est-il fixe ?',
            answer: "Oui, les tarifs affichés sont communiqués avant l'intervention selon le type et la surface du bien.",
          },
          {
            question: 'Intervenez-vous partout à Bruxelles ?',
            answer: "Oui, nous couvrons l'ensemble de la Région de Bruxelles-Capitale.",
          },
        ],
        footerText: 'Certificat PEB à Bruxelles, prix clairs et réservation rapide.',
        phoneLabel: 'Téléphone',
        emailLabel: 'Email',
        accreditation: "N° d'agrément",
        unavailable: 'Service momentanément indisponible. Appelez-nous au +32 486 98 74 84.',
        sendErrorPrefix: 'Erreur',
        genericError: 'Une erreur est survenue. Appelez-nous au +32 486 98 74 84.',
        namePlaceholder: 'Votre nom',
        phonePlaceholder: '+32 4xx xx xx xx',
        emailPlaceholder: 'votre@email.be',
        addressPlaceholder: 'Rue, numéro, commune',
        fallbackPrice: 'Sur devis',
      };

  const priceOptions = isDutch
    ? [
        { label: 'Appartement < 50 m²', price: '120 € incl. btw' },
        { label: 'Appartement 50 - 75 m²', price: '165 € incl. btw' },
        { label: 'Woning < 100 m²', price: '210 € incl. btw' },
        { label: 'Woning 101 - 200 m²', price: '240 € incl. btw' },
      ]
    : [
        { label: 'Appartement < 50 m²', price: '120 € TVAC' },
        { label: 'Appartement 50 - 75 m²', price: '165 € TVAC' },
        { label: 'Maison < 100 m²', price: '210 € TVAC' },
        { label: 'Maison 101 - 200 m²', price: '240 € TVAC' },
      ];

  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        setError(`${content.sendErrorPrefix} : ${dbError.message}.`);
        setIsSubmitting(false);
        return;
      }

      saveReservationSummary(formData);
      markPendingLeadConversion();
      window.location.href = '/merci';
    } catch {
      setError(content.genericError);
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
    <>
      <SEO title={content.seoTitle} description={content.seoDescription} canonical="https://kcertipeb.be/lp" includeFaqSchema />

      <div className="min-h-screen bg-[#f7f8f4] text-slate-900">
        <div className="bg-slate-900 text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 text-sm sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              {content.topLabel}
            </div>
            <div className="flex items-center gap-3">
              <LanguageSelector dark />
              <a
                href="tel:+32486987484"
                onClick={trackPhoneCallConversion}
                className="rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                +32 486 98 74 84
              </a>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  {content.title}
                  <span className="block text-emerald-700">{content.titleAccent}</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">{content.intro}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={scrollToForm}
                  className="rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
                >
                  {content.primaryCta}
                </button>
                <a
                  href="tel:+32486987484"
                  onClick={trackPhoneCallConversion}
                  className="rounded-2xl border-2 border-slate-300 bg-white px-6 py-4 text-center text-base font-bold text-slate-900 transition hover:border-emerald-500 hover:text-emerald-700"
                >
                  {content.secondaryCta}
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2 text-emerald-700">
                    <Clock3 className="h-5 w-5" />
                    <span className="font-semibold">{content.speedTitle}</span>
                  </div>
                  <p className="text-sm text-slate-600">{content.speedText}</p>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2 text-emerald-700">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="font-semibold">{content.officialTitle}</span>
                  </div>
                  <p className="text-sm text-slate-600">{content.officialText}</p>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2 text-emerald-700">
                    <Star className="h-5 w-5" />
                    <span className="font-semibold">{content.clearTitle}</span>
                  </div>
                  <p className="text-sm text-slate-600">{content.clearText}</p>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">{content.pricesLabel}</p>
                    <h2 className="mt-1 text-2xl font-bold text-slate-950">{content.pricesTitle}</h2>
                  </div>
                  <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 sm:inline-flex">
                    {isDutch ? 'incl. btw' : 'TVAC'}
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {priceOptions.map((option) => (
                    <div key={option.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                      <p className="text-sm text-slate-600">{option.label}</p>
                      <p className="mt-1 text-2xl font-bold text-slate-950">{option.price}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">{content.pricesNote}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {content.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <p className="text-sm text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="lead-form" className="lg:sticky lg:top-6">
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-slate-300/30">
                <div className="bg-slate-950 px-6 py-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">{content.formLabel}</p>
                  <h2 className="mt-2 text-2xl font-bold">{content.formTitle}</h2>
                  <p className="mt-2 text-sm text-slate-300">{content.formIntro}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 p-6">
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
                      <option value="autre">{content.other}</option>
                    </select>
                  </div>

                  {showSurfaceSelect && (
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">{content.surface}</label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
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
                              <span className="mt-1 block text-sm font-bold leading-tight sm:text-base">{option}</span>
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
                        <p className="text-sm font-semibold text-slate-900">{content.price}</p>
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
                    className="w-full rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? content.submitting : content.submit}
                  </button>

                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
                    <p className="font-semibold text-slate-900">{content.advantagesTitle}</p>
                    <ul className="mt-2 space-y-2">
                      {content.advantages.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200 pt-4 text-center">
                    <p className="text-sm text-slate-500">{content.immediateAnswer}</p>
                    <a
                      href="tel:+32486987484"
                      onClick={trackPhoneCallConversion}
                      className="mt-2 inline-flex items-center gap-2 text-base font-bold text-emerald-700 transition hover:text-emerald-800"
                    >
                      <Phone className="h-4 w-4" />
                      +32 486 98 74 84
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
              <div className="mb-8 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">{content.processLabel}</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-950">{content.processTitle}</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {content.process.map((step, index) => (
                  <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[28px] bg-slate-950 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">{content.whyLabel}</p>
                <h2 className="mt-3 text-3xl font-bold">{content.whyTitle}</h2>
                <p className="mt-4 leading-7 text-slate-300">{content.whyText}</p>
                <div className="mt-6 space-y-3 text-sm text-slate-200">
                  {content.whyPoints.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">{content.faqLabel}</p>
                <div className="mt-6 space-y-4">
                  {content.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl border border-slate-200 px-5 py-4">
                      <h3 className="text-base font-bold text-slate-950">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="font-semibold text-slate-950">KcertiPEB</p>
              <p>{content.footerText}</p>
            </div>
            <div className="space-y-1 text-left lg:text-right">
              <p>
                {content.phoneLabel} :{' '}
                <a
                  href="tel:+32486987484"
                  onClick={trackPhoneCallConversion}
                  className="font-medium text-slate-700 transition hover:text-emerald-700"
                >
                  +32 486 98 74 84
                </a>
              </p>
              <p>
                {content.emailLabel} :{' '}
                <a href="mailto:info@kcertipeb.be" className="font-medium text-slate-700 transition hover:text-emerald-700">
                  info@kcertipeb.be
                </a>
              </p>
              <p>{content.accreditation} 001859432</p>
              <p>TVA BE 0800.521.796</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
