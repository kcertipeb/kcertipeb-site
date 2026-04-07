import { Home, Clock, CheckCircle2, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';
import { trackPhoneCallConversion } from '../lib/tracking';

export default function HousePEB() {
  const { isDutch } = useLanguage();

  const content = isDutch
    ? {
        seoTitle: 'EPC-certificaat woning in Brussel',
        seoDescription: 'EPC-certificaat voor woningen in Brussel vanaf 210 €.',
        badge: 'EPC-certificaat woning',
        title: 'EP-certificaat voor woning in Brussel',
        intro: 'Specialist in woningen in Brussel. Volledige analyse, officieel verslag en duidelijke tarieven.',
        cta: 'Bekijk mijn prijs',
        call: 'Bel nu',
        from: 'Vanaf',
        strengthsTitle: 'Specialist in woningen in Brussel',
        strengthsText: 'Wij certificeren verschillende soorten woningen in Brussel met een nauwkeurige analyse van het gebouw en de installaties.',
        cards: [
          { title: 'Snelle afspraak', text: 'Afspraak volgens uw beschikbaarheid in Brussel.' },
          { title: 'Volledige expertise', text: 'Analyse van isolatie, verwarming, ventilatie en technische elementen.' },
          { title: 'Officiële garantie', text: 'Officieel certificaat conform de Brusselse regelgeving.' },
        ],
        includedTitle: 'Wat is inbegrepen',
        included: ['Volledig bezoek van de woning', 'Evaluatie van de installaties', 'Officieel certificaat', 'Duidelijke toelichting op verzoek'],
        pricingTitle: 'Transparante tarieven voor woningen',
        pricing: [
          { title: 'Kleine woning', size: 'Minder dan 100 m²', price: '210 €' },
          { title: 'Standaardwoning', size: '101 - 200 m²', price: '240 €' },
          { title: 'Grote woning', size: 'Meer dan 200 m²', price: '275 €' },
        ],
        order: 'Bestellen',
        finalTitle: 'Een EPB-certificaat nodig voor uw woning?',
        finalText: 'Neem nu contact met ons op voor een snelle en professionele service.',
      }
    : {
        seoTitle: 'Certificat PEB maison à Bruxelles',
        seoDescription: 'Certificat PEB pour maison à Bruxelles dès 210 €.',
        badge: 'Certificat PEB Maison',
        title: 'Certificat PEB pour maison à Bruxelles',
        intro: 'Spécialiste des maisons à Bruxelles. Analyse complète, rapport officiel et tarifs transparents.',
        cta: 'Voir mon prix',
        call: 'Appeler maintenant',
        from: 'À partir de',
        strengthsTitle: 'Spécialiste des maisons à Bruxelles',
        strengthsText: 'Nous certifions différents types de maisons à Bruxelles avec une analyse précise du bâtiment et des installations.',
        cards: [
          { title: 'Rendez-vous rapide', text: 'Créneau selon vos disponibilités à Bruxelles.' },
          { title: 'Expertise complète', text: 'Analyse de l’isolation, du chauffage, de la ventilation et des éléments techniques.' },
          { title: 'Garantie officielle', text: 'Certificat officiel conforme à la réglementation bruxelloise.' },
        ],
        includedTitle: 'Ce qui est inclus',
        included: ['Visite complète de la maison', 'Évaluation des installations', 'Certificat officiel', 'Explications claires sur demande'],
        pricingTitle: 'Tarifs transparents pour maisons',
        pricing: [
          { title: 'Petite maison', size: 'Moins de 100 m²', price: '210 €' },
          { title: 'Maison standard', size: '101 - 200 m²', price: '240 €' },
          { title: 'Grande maison', size: 'Plus de 200 m²', price: '275 €' },
        ],
        order: 'Commander',
        finalTitle: 'Besoin d’un certificat PEB pour votre maison ?',
        finalText: 'Contactez-nous dès maintenant pour un service rapide et professionnel.',
      };

  return (
    <>
      <SEO title={content.seoTitle} description={content.seoDescription} canonical="https://kcertipeb.be/certificat-peb-maison-bruxelles" />

      <section className="bg-gradient-to-b from-blue-50 to-white pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">{content.badge}</div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">{content.title}</h1>
              <p className="mb-8 text-xl text-gray-600">{content.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700">
                  {content.cta}
                </Link>
                <a
                  href="tel:+32486987484"
                  onClick={trackPhoneCallConversion}
                  className="rounded-lg border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  {content.call}
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" alt={content.title} className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-6 shadow-xl">
                <p className="text-3xl font-bold text-blue-600">210 €</p>
                <p className="text-gray-600">{content.from}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{content.strengthsTitle}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{content.strengthsText}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[Clock, Award, Shield].map((Icon, index) => (
              <div key={content.cards[index].title} className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{content.cards[index].title}</h3>
                <p className="text-gray-600">{content.cards[index].text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800" alt={content.title} className="rounded-lg shadow-xl" />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">{content.includedTitle}</h2>
              <div className="space-y-4">
                {content.included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">{content.pricingTitle}</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {content.pricing.map((item) => (
              <div key={item.title} className="rounded-lg border-2 border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mb-4 text-gray-600">{item.size}</p>
                <p className="mb-6 text-4xl font-bold text-blue-600">{item.price}</p>
                <Link to="/contact" className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-700">
                  {content.order}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Home className="mx-auto mb-6 h-16 w-16" />
          <h2 className="mb-4 text-3xl font-bold">{content.finalTitle}</h2>
          <p className="mb-8 text-xl text-blue-50">{content.finalText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50">
              {content.cta}
            </Link>
            <a
              href="tel:+32486987484"
              onClick={trackPhoneCallConversion}
              className="rounded-lg border-2 border-white bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              +32 486 98 74 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
