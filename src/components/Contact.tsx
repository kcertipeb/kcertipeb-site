import { CalendarDays, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { trackPhoneCallConversion } from '../lib/tracking';
import { useLanguage } from '../lib/language';

/**
 * Formulaire de question courte.
 *
 * La prise de rendez-vous a sa propre page, `/reserver` : ce formulaire ne sert plus qu'aux
 * visiteurs qui veulent poser une question sans réserver de visite.
 */
export default function Contact() {
  const { isDutch } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const content = isDutch
    ? {
        title: 'Contact — EPC-certificaat in Brussel',
        subtitle: 'Een vraag? Schrijf ons. Wilt u een bezoek vastleggen, reserveer dan rechtstreeks uw tijdslot.',
        bookTitle: 'Een bezoek reserveren',
        bookText: 'Kies uw pand en uw tijdslot online. De prijs verschijnt vóór de bevestiging.',
        bookCta: 'Mijn tijdslot reserveren',
        fullName: 'Volledige naam *',
        email: 'E-mail *',
        message: 'Uw vraag *',
        namePlaceholder: 'Uw naam',
        emailPlaceholder: 'uw@email.be',
        messagePlaceholder: 'Stel hier uw vraag.',
        privacy: 'Uw gegevens worden verwerkt conform de AVG en uitsluitend gebruikt om u te antwoorden.',
        submit: 'Mijn vraag versturen',
        submitting: 'Verzenden...',
        sent: 'Bedankt, uw vraag is verzonden. Wij antwoorden binnen 12 uur.',
        sendError: 'Fout bij het verzenden. Probeer opnieuw of bel ons.',
        details: 'Contactgegevens',
        phone: 'Telefoon',
        interventionZone: 'Interventiezone',
        region: 'Het volledige Brussels Hoofdstedelijk Gewest',
        openingHours: 'Openingstijden',
        hours: 'Ma - Zo : 8u00 - 20u00',
        urgent: 'Snelle interventie',
        urgentText: 'Heeft u snel een EPC-certificaat nodig? Bel ons voor een versnelde interventie.',
        callNow: 'Bel nu',
      }
    : {
        title: 'Contact — Certificat PEB à Bruxelles',
        subtitle: 'Une question ? Écrivez-nous. Pour fixer une visite, réservez directement votre créneau.',
        bookTitle: 'Réserver une visite',
        bookText: 'Choisissez votre bien et votre créneau en ligne. Le prix s’affiche avant la confirmation.',
        bookCta: 'Réserver mon créneau',
        fullName: 'Nom complet *',
        email: 'Email *',
        message: 'Votre question *',
        namePlaceholder: 'Votre nom',
        emailPlaceholder: 'votre@email.be',
        messagePlaceholder: 'Posez votre question ici.',
        privacy: 'Vos données sont traitées conformément au RGPD et utilisées uniquement pour vous répondre.',
        submit: 'Envoyer ma question',
        submitting: 'Envoi en cours...',
        sent: 'Merci, votre question est bien partie. Nous répondons sous 12 heures.',
        sendError: "Erreur lors de l'envoi. Réessayez ou appelez-nous.",
        details: 'Coordonnées',
        phone: 'Téléphone',
        interventionZone: "Zone d'intervention",
        region: 'Toute la Région de Bruxelles-Capitale',
        openingHours: 'Horaires',
        hours: 'Lun - Dim : 8h00 - 20h00',
        urgent: 'Intervention rapide',
        urgentText: "Besoin urgent d'un certificat PEB ? Contactez-nous par téléphone pour une intervention express.",
        callNow: 'Appeler maintenant',
      };

  const handleSubmit = async (submitEvent: FormEvent) => {
    submitEvent.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/.netlify/functions/send-contact-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        setError(payload.error ?? content.sendError);
        return;
      }

      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setError(content.sendError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [changeEvent.target.name]: changeEvent.target.value });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-emerald-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">{content.title}</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">{content.subtitle}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Renvoi vers le parcours de réservation */}
            <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-700 p-8 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="flex items-center gap-2 text-xl font-bold">
                  <CalendarDays className="h-6 w-6 text-emerald-300" />
                  {content.bookTitle}
                </p>
                <p className="mt-2 text-sm text-emerald-100">{content.bookText}</p>
              </div>
              <Link
                to="/reserver"
                className="shrink-0 rounded-lg bg-emerald-500 px-6 py-3 text-center font-bold text-white transition hover:bg-emerald-400"
              >
                {content.bookCta} →
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-xl md:p-10">
              {isSent ? (
                <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50 p-6 text-center">
                  <p className="font-semibold text-emerald-800">{content.sent}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block font-semibold text-gray-700">
                        {content.fullName}
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                        placeholder={content.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block font-semibold text-gray-700">
                        {content.email}
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                        placeholder={content.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block font-semibold text-gray-700">
                      {content.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-emerald-500 focus:outline-none"
                      placeholder={content.messagePlaceholder}
                    />
                  </div>

                  <div className="rounded border-l-4 border-blue-500 bg-blue-50 p-4">
                    <p className="text-sm text-gray-700">{content.privacy}</p>
                  </div>

                  {error && (
                    <div className="rounded-lg border-2 border-red-500 bg-red-50 p-4 font-semibold text-red-700">{error}</div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-emerald-700 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? content.submitting : content.submit}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">{content.details}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />
                  <div>
                    <p className="mb-1 font-semibold text-gray-900">{content.phone}</p>
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
                    <p className="text-gray-700">{content.hours}</p>
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
