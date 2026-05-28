import { Building2, Clock, CheckCircle2, Euro, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';
import { trackPhoneCallConversion } from '../lib/tracking';

export default function ApartmentPEB() {
  const { isDutch } = useLanguage();

  const content = isDutch
    ? {
        seoTitle: 'EPC appartement Brussel',
        seoDescription: 'EPC-certificaat voor appartement in Brussel vanaf 120 € TVAC. Interventie binnen 48u, attest in 3-5 werkdagen. Verplicht bij verkoop of verhuur.',
        badge: 'EPC-certificaat appartement',
        title: 'EPC-certificaat voor appartement in Brussel',
        intro: 'Professionele service voor appartementen in Brussel. Snelle interventie en duidelijke prijzen.',
        cta: 'Bekijk mijn prijs',
        call: 'Bel nu',
        from: 'Vanaf',
        whyTitle: 'Waarom KcertiPEB voor uw appartement?',
        whyText: 'Wij zijn gespecialiseerd in EPC-certificering van appartementen in Brussel.',
        cards: [
          { title: 'Snelle interventie', text: 'Beschikbaarheid volgens uw agenda in Brussel.' },
          { title: 'Erkende expert', text: 'Erkende certificateur met ervaring in appartementen en mede-eigendom.' },
          { title: 'Duidelijke prijs', text: 'Tarieven vanaf 120 €, aangepast aan de oppervlakte.' },
        ],
        mandatoryTitle: 'Een verplicht en nuttig document',
        mandatoryText: 'Bij verkoop of verhuur van een appartement in Brussel is het EPC-certificaat verplicht.',
        mandatoryPoints: ['Verplicht voor verkoop en verhuur', '10 jaar geldig', 'Kan de aantrekkelijkheid van uw appartement versterken'],
        coproTitle: 'In een mede-eigendom?',
        coproText: 'Elk appartement heeft een individueel EPC-certificaat nodig. De VME wordt mede-aansprakelijk in 2033.',
        coproCta: 'Gids voor mede-eigendom lezen',
        pricingTitle: 'Onze tarieven voor appartementen',
        pricing: [
          { title: 'Studio / klein appartement', size: 'Minder dan 50 m²', price: '120 €' },
          { title: 'Gemiddeld appartement', size: '50 - 75 m²', price: '165 €' },
          { title: 'Groot appartement', size: '76 - 100 m²', price: '185 €' },
          { title: 'Zeer groot appartement', size: 'Meer dan 100 m²', price: '205 €' },
        ],
        order: 'Bestellen',
        finalTitle: 'Klaar om uw EPC-certificaat te ontvangen?',
        finalText: 'Neem nu contact met ons op voor een snelle tussenkomst in Brussel.',
      }
    : {
        seoTitle: 'PEB Appartement Bruxelles',
        seoDescription: 'Certificat PEB pour appartement à Bruxelles dès 120 € TVAC. Intervention sous 48h, certificat en 3-5 jours. Obligatoire pour toute vente ou location.',
        badge: 'Certificat PEB Appartement',
        title: 'Certificat PEB pour appartement à Bruxelles',
        intro: 'Service professionnel pour les appartements à Bruxelles. Intervention rapide et tarif transparent.',
        cta: 'Voir mon prix',
        call: 'Appeler maintenant',
        from: 'À partir de',
        whyTitle: 'Pourquoi KcertiPEB pour votre appartement ?',
        whyText: 'Nous sommes spécialisés dans la certification PEB des appartements à Bruxelles.',
        cards: [
          { title: 'Intervention rapide', text: 'Disponibilité selon votre agenda à Bruxelles.' },
          { title: 'Expert agréé', text: 'Certificateur expérimenté pour appartements et copropriétés.' },
          { title: 'Prix transparent', text: 'Tarifs à partir de 120 €, adaptés à la surface.' },
        ],
        mandatoryTitle: 'Un document obligatoire et utile',
        mandatoryText: "À Bruxelles, le certificat PEB est obligatoire pour toute vente ou location d'un appartement.",
        mandatoryPoints: ['Obligatoire pour la vente et la location', 'Valable 10 ans', "Peut renforcer l'attractivité du bien"],
        coproTitle: 'Vous êtes en copropriété ?',
        coproText: "Chaque appartement doit avoir son certificat PEB individuel. L'ACP devient co-responsable en 2033.",
        coproCta: 'Lire le guide copropriété',
        pricingTitle: 'Nos tarifs pour appartements',
        pricing: [
          { title: 'Studio / petit appartement', size: 'Moins de 50 m²', price: '120 €' },
          { title: 'Appartement moyen', size: '50 - 75 m²', price: '165 €' },
          { title: 'Grand appartement', size: '76 - 100 m²', price: '185 €' },
          { title: 'Très grand appartement', size: 'Plus de 100 m²', price: '205 €' },
        ],
        order: 'Commander',
        finalTitle: 'Prêt à obtenir votre certificat PEB ?',
        finalText: 'Contactez-nous dès maintenant pour une intervention rapide à Bruxelles.',
      };

  return (
    <>
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        canonical="https://kcertipeb.be/certificat-peb-appartement-bruxelles"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: isDutch ? 'EPC-certificaat appartement Brussel' : 'Certificat PEB appartement Bruxelles',
          serviceType: isDutch ? 'EPC-certificering' : 'Certification PEB',
          provider: { '@type': 'LocalBusiness', name: 'K Certipeb', url: 'https://kcertipeb.be' },
          areaServed: { '@type': 'City', name: isDutch ? 'Brussel' : 'Bruxelles' },
          offers: { '@type': 'Offer', price: '120', priceCurrency: 'EUR', description: isDutch ? 'Vanaf 120 € TVAC voor appartement < 50 m²' : 'Dès 120 € TVAC pour appartement < 50 m²' },
        }}
      />

      <section className="bg-gradient-to-b from-emerald-50 to-white pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">{content.badge}</div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">{content.title}</h1>
              <p className="mb-8 text-xl text-gray-600">{content.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="rounded-lg bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-emerald-700">
                  {content.cta}
                </Link>
                <a
                  href="tel:+32486987484"
                  onClick={trackPhoneCallConversion}
                  className="rounded-lg border-2 border-emerald-600 bg-white px-8 py-4 font-semibold text-emerald-600 transition hover:bg-emerald-50"
                >
                  {content.call}
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800" alt={content.title} className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-6 shadow-xl">
                <p className="text-3xl font-bold text-emerald-600">120 €</p>
                <p className="text-gray-600">{content.from}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{content.whyTitle}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{content.whyText}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[Clock, Award, Euro].map((Icon, index) => (
              <div key={content.cards[index].title} className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Icon className="h-6 w-6 text-emerald-600" />
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
              <h2 className="mb-6 text-3xl font-bold text-gray-900">{content.mandatoryTitle}</h2>
              <p className="mb-6 text-gray-600">{content.mandatoryText}</p>
              <div className="space-y-4">
                {content.mandatoryPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" alt={content.title} className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 rounded-2xl border border-emerald-100 bg-emerald-50 px-7 py-6">
            <div>
              <p className="font-bold text-gray-900">{content.coproTitle}</p>
              <p className="mt-1 text-sm text-gray-600">{content.coproText}</p>
            </div>
            <Link
              to="/blog/certificat-peb-copropriete-bruxelles"
              className="flex flex-shrink-0 items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              {content.coproCta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">{content.pricingTitle}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {content.pricing.map((item) => (
              <div key={item.title} className="rounded-lg border-2 border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mb-4 text-gray-600">{item.size}</p>
                <p className="mb-6 text-4xl font-bold text-emerald-600">{item.price}</p>
                <Link to="/contact" className="block w-full rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-emerald-700">
                  {content.order}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Building2 className="mx-auto mb-6 h-16 w-16" />
          <h2 className="mb-4 text-3xl font-bold">{content.finalTitle}</h2>
          <p className="mb-8 text-xl text-emerald-50">{content.finalText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-lg bg-white px-8 py-4 font-semibold text-emerald-600 shadow-lg transition hover:bg-emerald-50">
              {content.cta}
            </Link>
            <a
              href="tel:+32486987484"
              onClick={trackPhoneCallConversion}
              className="rounded-lg border-2 border-white bg-emerald-700 px-8 py-4 font-semibold text-white transition hover:bg-emerald-800"
            >
              +32 486 98 74 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
