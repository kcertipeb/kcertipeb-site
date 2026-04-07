import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { insertContactSubmission } from '../lib/contactSubmission';
import { buildReservationSummary, getReservationPrice, saveReservationSummary } from '../lib/reservation';
import { markPendingLeadConversion, trackPhoneCallConversion } from '../lib/tracking';
import { useLanguage } from '../lib/language';

const SURFACE_OPTIONS = {
  appartement: ['< 50 m²', '50 - 75 m²', '76 - 100 m²', '> 100 m²'],
  maison: ['< 100 m²', '101 - 200 m²', '> 200 m²'],
} as const;

export default function Contact() {
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
        title: 'Contact – EPB-certificaat in Brussel',
        subtitle:
          'Reserveer een bezoek of neem rechtstreeks contact met ons op. De prijs verschijnt volgens het type pand en de oppervlakte.',
        fullName: 'Volledige naam *',
        email: 'E-mail *',
        phone: 'Telefoon *',
        propertyType: 'Type pand *',
        apartment: 'Appartement',
        house: 'Woning',
        audit: 'Energie-audit',
        surface: 'Oppervlakte van het pand',
        surfaceChip: 'Oppervlakte',
        price: 'Prijs van het bezoek',
        fixedPrice: 'Prijs zichtbaar vóór de reservering.',
        pickSurface: 'Selecteer de oppervlakte om de vaste prijs weer te geven.',
        address: 'Adres van het pand *',
        message: 'Bericht of bijkomende informatie',
        privacy:
          'Uw persoonsgegevens worden verwerkt in overeenstemming met de AVG. Ze worden uitsluitend gebruikt om uw aanvraag te behandelen.',
        submit: 'Mijn reservering bevestigen',
        submitting: 'Verzenden...',
        details: 'Contactgegevens',
        interventionZone: 'Interventiezone',
        region: 'Het volledige Brussels Hoofdstedelijk Gewest',
        openingHours: 'Openingstijden',
        urgent: 'Snelle interventie',
        urgentText: 'Heeft u snel een EPB-certificaat nodig? Bel ons voor een versnelde interventie.',
        callNow: 'Bel nu',
        unavailable: 'Dienst tijdelijk onbeschikbaar. Bel ons op +32 486 98 74 84.',
        sendError: 'Fout bij het verzenden. Probeer opnieuw.',
        namePlaceholder: 'Uw naam',
        emailPlaceholder: 'uw@email.be',
        phonePlaceholder: '+32 4XX XX XX XX',
        addressPlaceholder: 'Straat, nummer, postcode, gemeente',
        messagePlaceholder: 'Beschrijf uw situatie, termijnen of nuttige informatie.',
        fallbackPrice: 'Tarief te bevestigen',
      }
    : {
        title: 'Contact – Certificat PEB à Bruxelles',
        subtitle:
          "Réservez une visite ou contactez-nous directement. Le prix s'affiche selon le type de bien et la surface.",
        fullName: 'Nom complet *',
        email: 'Email *',
        phone: 'Téléphone *',
        propertyType: 'Type de bien *',
        apartment: 'Appartement',
        house: 'Maison',
        audit: 'Audit énergétique',
        surface: 'Surface du bien',
        surfaceChip: 'Surface',
        price: 'Prix de la visite',
        fixedPrice: 'Prix affiché avant la réservation.',
        pickSurface: 'Sélectionnez la surface pour afficher le prix fixe.',
        address: 'Adresse du bien *',
        message: 'Message ou informations complémentaires',
        privacy:
          'Vos données personnelles sont traitées conformément au RGPD. Elles sont utilisées uniquement pour traiter votre demande.',
        submit: 'Confirmer ma réservation',
        submitting: 'Envoi en cours...',
        details: 'Coordonnées',
        interventionZone: "Zone d'intervention",
        region: 'Toute la Région de Bruxelles-Capitale',
        openingHours: 'Horaires',
        urgent: 'Intervention rapide',
        urgentText: "Besoin urgent d'un certificat PEB ? Contactez-nous par téléphone pour une intervention express.",
        callNow: 'Appeler maintenant',
        unavailable: 'Service temporairement indisponible. Appelez-nous au +32 486 98 74 84',
        sendError: "Erreur lors de l'envoi. Veuillez réessayer.",
        namePlaceholder: 'Votre nom',
        emailPlaceholder: 'votre@email.be',
        phonePlaceholder: '+32 4XX XX XX XX',
        addressPlaceholder: 'Rue, numéro, code postal, commune',
        messagePlaceholder: 'Précisez vos besoins, vos délais ou toute information utile.',
        fallbackPrice: 'Tarif à confirmer',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showSurfaceSelect = formData.propertyType === 'appartement' || formData.propertyType === 'maison';
  const surfaceOptions = showSurfaceSelect
    ? SURFACE_OPTIONS[formData.propertyType as keyof typeof SURFACE_OPTIONS]
    : [];
  const reservationSummary = buildReservationSummary(formData, language);
  const selectedPrice = getReservationPrice(formData.propertyType, formData.surfaceRange, language);

  return (
    <section id="contact" className="bg-gradient-to-br from-emerald-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">{content.title}</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">{content.subtitle}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-8 shadow-xl md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-semibold text-gray-700">{content.fullName}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                      placeholder={content.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-semibold text-gray-700">{content.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                      placeholder={content.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-semibold text-gray-700">{content.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                      placeholder={content.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-semibold text-gray-700">{content.propertyType}</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          propertyType: e.target.value,
                          surfaceRange: '',
                        })
                      }
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="appartement">{content.apartment}</option>
                      <option value="maison">{content.house}</option>
                      <option value="audit">{content.audit}</option>
                    </select>
                  </div>
                </div>

                {showSurfaceSelect && (
                  <div>
                    <label className="mb-2 block font-semibold text-gray-700">{content.surface}</label>
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
                                : 'border-gray-200 bg-gradient-to-b from-white to-emerald-50/40 text-gray-700 hover:border-emerald-400 hover:bg-emerald-50'
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

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4">
                  <p className="text-sm font-semibold text-gray-900">{content.price}</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-700">{reservationSummary.priceLabel}</p>
                  <p className="mt-1 text-sm text-gray-600">
                    {selectedPrice !== content.fallbackPrice ? content.fixedPrice : content.pickSurface}
                  </p>
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">{content.address}</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                    placeholder={content.addressPlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">{content.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                    placeholder={content.messagePlaceholder}
                  />
                </div>

                <div className="rounded border-l-4 border-blue-500 bg-blue-50 p-4">
                  <p className="text-sm text-gray-700">{content.privacy}</p>
                </div>

                {error && <div className="rounded-lg border-2 border-red-500 bg-red-50 p-4 font-semibold text-red-700">{error}</div>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-emerald-700 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? content.submitting : content.submit}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">{content.details}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />
                  <div>
                    <p className="mb-1 font-semibold text-gray-900">{content.phone.replace(' *', '')}</p>
                    <a
                      href="tel:+32486987484"
                      onClick={trackPhoneCallConversion}
                      className="text-lg text-emerald-600 hover:text-emerald-700"
                    >
                      +32 486 98 74 84
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />
                  <div>
                    <p className="mb-1 font-semibold text-gray-900">{content.email.replace(' *', '')}</p>
                    <a href="mailto:info@kcertipeb.be" className="text-emerald-600 hover:text-emerald-700">
                      info@kcertipeb.be
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />
                  <div>
                    <p className="mb-1 font-semibold text-gray-900">{content.interventionZone}</p>
                    <p className="text-gray-700">{content.region}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />
                  <div>
                    <p className="mb-1 font-semibold text-gray-900">{content.openingHours}</p>
                    <p className="text-gray-700">{isDutch ? 'Ma - Zo : 8u00 - 20u00' : 'Lun - Dim : 8h00 - 20h00'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-600 p-8 text-white shadow-xl">
              <h3 className="mb-4 text-xl font-bold">{content.urgent}</h3>
              <p className="mb-6 text-emerald-50">{content.urgentText}</p>
              <a
                href="tel:+32486987484"
                onClick={trackPhoneCallConversion}
                className="block w-full rounded-lg bg-white px-6 py-3 text-center font-semibold text-emerald-600 transition hover:bg-emerald-50"
              >
                {content.callNow}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
