import SEO from '../components/SEO';
import BookingWizard from '../components/BookingWizard';
import { useLanguage } from '../lib/language';

export default function BookingPage() {
  const { isDutch } = useLanguage();

  const t = isDutch
    ? {
        seoTitle: 'Afspraak maken — EPC-certificaat Brussel',
        seoDescription:
          'Reserveer online uw EPC-bezoek in Brussel. Kies uw pand, uw tijdslot en ontvang een onmiddellijke bevestiging.',
        badge: 'Online reservering',
        heading: 'Reserveer uw EPC-bezoek',
        subheading: 'Drie stappen, minder dan twee minuten. De prijs verschijnt voordat u bevestigt.',
      }
    : {
        seoTitle: 'Prendre rendez-vous — Certificat PEB Bruxelles',
        seoDescription:
          'Réservez votre visite PEB à Bruxelles en ligne. Choisissez votre bien, votre créneau, et recevez une confirmation immédiate.',
        badge: 'Réservation en ligne',
        heading: 'Réservez votre visite PEB',
        subheading: 'Trois étapes, moins de deux minutes. Le prix s’affiche avant que vous confirmiez.',
      };

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

          <BookingWizard />
        </div>
      </section>
    </>
  );
}
