import { Home, Building2, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';

export default function PricingPage() {
  const { isDutch } = useLanguage();

  const pricingOptions = isDutch
    ? [
        { icon: <Home className="h-8 w-8 text-emerald-600" />, type: 'Appartement', size: '< 50 m²', price: '120 €', popular: false },
        { icon: <Home className="h-8 w-8 text-emerald-600" />, type: 'Appartement', size: '50 - 75 m²', price: '165 €', popular: true },
        { icon: <Home className="h-8 w-8 text-emerald-600" />, type: 'Appartement', size: '76 - 100 m²', price: '185 €', popular: false },
        { icon: <Home className="h-8 w-8 text-emerald-600" />, type: 'Appartement', size: '> 100 m²', price: '205 €', popular: false },
        { icon: <Building2 className="h-8 w-8 text-emerald-600" />, type: 'Woning', size: '< 100 m²', price: '210 €', popular: true },
        { icon: <Building2 className="h-8 w-8 text-emerald-600" />, type: 'Woning', size: '101 - 200 m²', price: '240 €', popular: false },
        { icon: <Building2 className="h-8 w-8 text-emerald-600" />, type: 'Woning', size: '> 200 m²', price: '275 €', popular: false },
        { icon: <ClipboardCheck className="h-8 w-8 text-emerald-600" />, type: 'Energie-audit', size: 'Op maat', price: 'Op offerte', popular: false },
      ]
    : [
        { icon: <Home className="h-8 w-8 text-emerald-600" />, type: 'Appartement', size: '< 50 m²', price: '120 €', popular: false },
        { icon: <Home className="h-8 w-8 text-emerald-600" />, type: 'Appartement', size: '50 - 75 m²', price: '165 €', popular: true },
        { icon: <Home className="h-8 w-8 text-emerald-600" />, type: 'Appartement', size: '76 - 100 m²', price: '185 €', popular: false },
        { icon: <Home className="h-8 w-8 text-emerald-600" />, type: 'Appartement', size: '> 100 m²', price: '205 €', popular: false },
        { icon: <Building2 className="h-8 w-8 text-emerald-600" />, type: 'Maison', size: '< 100 m²', price: '210 €', popular: true },
        { icon: <Building2 className="h-8 w-8 text-emerald-600" />, type: 'Maison', size: '101 - 200 m²', price: '240 €', popular: false },
        { icon: <Building2 className="h-8 w-8 text-emerald-600" />, type: 'Maison', size: '> 200 m²', price: '275 €', popular: false },
        { icon: <ClipboardCheck className="h-8 w-8 text-emerald-600" />, type: 'Audit énergétique', size: 'Sur mesure', price: 'Sur devis', popular: false },
      ];

  const content = isDutch
    ? {
        title: 'Tarieven EPC-certificaat in Brussel',
        description: 'Duidelijke tarieven voor uw EPC-certificaat in Brussel, zonder verborgen kosten.',
        popular: 'Populair',
        order: 'Bestellen',
        included: 'Wat is inbegrepen',
        includedItems: [
          'Volledig plaatsbezoek',
          'Officieel EPC-certificaat',
          'Officiële registratie',
          'Gedetailleerde energieanalyse',
          'Termijn van 3 tot 5 dagen',
          'Ondersteuning en advies',
        ],
        prosTitle: 'Aangepaste tarieven voor professionelen',
        prosText:
          'Bent u makelaar, projectontwikkelaar of architect? Dan kunnen wij u aangepaste tarieven voorstellen voor meerdere certificeringen.',
        cta: 'Bekijk mijn prijs',
        seoTitle: 'Tarieven EPC Brussel 2025',
        seoDescription:
          'EPC-tarieven in Brussel: appartement vanaf 120 € TVAC, woning vanaf 210 € TVAC. Vaste prijs zonder verborgen kosten. Direct online reserveren.',
      }
    : {
        title: 'Tarifs certificat PEB à Bruxelles',
        description: 'Tarifs clairs pour votre certificat PEB à Bruxelles, sans frais cachés.',
        popular: 'Populaire',
        order: 'Commander',
        included: 'Ce qui est inclus',
        includedItems: [
          'Visite complète du bien',
          'Certificat PEB officiel',
          'Enregistrement officiel',
          'Analyse énergétique détaillée',
          'Délai de 3 à 5 jours',
          'Support et conseils',
        ],
        prosTitle: 'Tarifs adaptés pour les professionnels',
        prosText:
          'Vous êtes agent immobilier, promoteur ou architecte ? Nous pouvons vous proposer des tarifs adaptés pour plusieurs certifications.',
        cta: 'Voir mon prix',
        seoTitle: 'Tarifs PEB Bruxelles 2025',
        seoDescription:
          'Tarifs certificat PEB à Bruxelles : appartement dès 120 € TVAC, maison dès 210 € TVAC. Prix fixes, sans surprise. Comparez et réservez en ligne.',
      };

  return (
    <>
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        keywords={isDutch ? 'tarieven EPC Brussel, prijs EPC certificaat' : 'tarifs certificat EPC bruxelles, prix certificat EPC'}
        canonical="https://kcertipeb.be/tarifs"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: isDutch ? 'EPC-certificering Brussel' : 'Certification PEB Bruxelles',
          serviceType: isDutch ? 'EPC-certificering' : 'Certification PEB',
          provider: { '@type': 'LocalBusiness', name: 'K Certipeb', url: 'https://kcertipeb.be' },
          areaServed: { '@type': 'City', name: isDutch ? 'Brussel' : 'Bruxelles' },
          offers: [
            { '@type': 'Offer', name: isDutch ? 'EPC appartement < 50m²' : 'PEB appartement < 50m²', price: '120', priceCurrency: 'EUR', description: isDutch ? 'Appartement of studio minder dan 50 m²' : 'Appartement ou studio moins de 50 m²' },
            { '@type': 'Offer', name: isDutch ? 'EPC appartement 50-75m²' : 'PEB appartement 50-75m²', price: '165', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC appartement 76-100m²' : 'PEB appartement 76-100m²', price: '185', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC appartement > 100m²' : 'PEB appartement > 100m²', price: '205', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC woning < 100m²' : 'PEB maison < 100m²', price: '210', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC woning 101-200m²' : 'PEB maison 101-200m²', price: '240', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC woning > 200m²' : 'PEB maison > 200m²', price: '275', priceCurrency: 'EUR' },
          ],
        }}
      />

      <section className="bg-gradient-to-b from-emerald-50 to-white pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">{content.title}</h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{content.description}</p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {pricingOptions.map((option) => (
              <div
                key={`${option.type}-${option.size}`}
                className={`relative overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-2xl ${
                  option.popular ? 'ring-4 ring-emerald-500' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute right-0 top-0 bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                    {content.popular}
                  </div>
                )}
                <div className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{option.icon}</div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">{option.type}</h3>
                  <p className="mb-4 text-sm text-gray-600">{option.size}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-emerald-600">{option.price}</span>
                    {!option.price.toLowerCase().includes('off') && (
                      <span className="text-sm text-gray-500">{isDutch ? ' incl. btw' : ' TVAC'}</span>
                    )}
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    {content.order}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12 rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">{content.included}</h2>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {content.includedItems.map((item) => (
                <div key={item} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="font-semibold text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-600 p-8 text-center text-white">
            <h2 className="mb-4 text-2xl font-bold">{content.prosTitle}</h2>
            <p className="mx-auto mb-6 max-w-3xl text-lg text-emerald-50">{content.prosText}</p>
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50"
            >
              {content.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
