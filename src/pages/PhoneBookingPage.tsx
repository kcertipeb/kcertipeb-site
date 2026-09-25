import SEO from '../components/SEO';
import BookingWizard from '../components/BookingWizard';
import { useLanguage } from '../lib/language';

/**
 * Lien envoyé aux clients après un appel : même tunnel que `/reserver`, sans aucun prix
 * (il a été convenu au téléphone). Page non indexée, absente des menus et du sitemap.
 */
export default function PhoneBookingPage() {
  const { isDutch } = useLanguage();

  const t = isDutch
    ? {
        seoTitle: 'Uw afspraak vastleggen — KCertiPEB',
        seoDescription: 'Kies het tijdslot dat u past voor uw EPC-bezoek in Brussel.',
        badge: 'Afspraak maken',
        heading: 'Kies uw tijdslot',
        subheading: 'Zoals telefonisch besproken: kies het moment dat u past voor het bezoek. U ontvangt meteen een bevestiging.',
      }
    : {
        seoTitle: 'Fixer votre rendez-vous — KCertiPEB',
        seoDescription: 'Choisissez le créneau qui vous convient pour votre visite PEB à Bruxelles.',
        badge: 'Prise de rendez-vous',
        heading: 'Choisissez votre créneau',
        subheading:
          'Comme convenu au téléphone : choisissez le moment qui vous convient pour la visite. Vous recevez une confirmation immédiate.',
      };

  return (
    <>
      <SEO
        title={t.seoTitle}
        description={t.seoDescription}
        canonical="https://kcertipeb.be/rendez-vous"
        robots="noindex, nofollow"
      />

      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              {t.badge}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">{t.heading}</h1>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">{t.subheading}</p>
          </div>

          <BookingWizard hidePrice />
        </div>
      </section>
    </>
  );
}
