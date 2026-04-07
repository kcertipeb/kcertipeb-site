import { Home, Building2, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PricingPage() {
  const pricingOptions = [
    {
      icon: <Home className="w-8 h-8 text-emerald-600" />,
      type: 'Appartement',
      size: '< 50 m²',
      price: '120€',
      popular: false
    },
    {
      icon: <Home className="w-8 h-8 text-emerald-600" />,
      type: 'Appartement',
      size: '50 - 75 m²',
      price: '165€',
      popular: true
    },
    {
      icon: <Home className="w-8 h-8 text-emerald-600" />,
      type: 'Appartement',
      size: '76 - 100 m²',
      price: '185€',
      popular: false
    },
    {
      icon: <Home className="w-8 h-8 text-emerald-600" />,
      type: 'Appartement',
      size: '> 100 m²',
      price: '205€',
      popular: false
    },
    {
      icon: <Building2 className="w-8 h-8 text-emerald-600" />,
      type: 'Maison',
      size: '< 100 m²',
      price: '210€',
      popular: true
    },
    {
      icon: <Building2 className="w-8 h-8 text-emerald-600" />,
      type: 'Maison',
      size: '101 - 200 m²',
      price: '240€',
      popular: false
    },
    {
      icon: <Building2 className="w-8 h-8 text-emerald-600" />,
      type: 'Maison',
      size: '> 201 m²',
      price: '275€',
      popular: false
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-emerald-600" />,
      type: 'Audit Énergétique',
      size: 'Sur mesure',
      price: 'Sur devis',
      popular: false
    }
  ];

  return (
    <>
      <SEO
        title="Tarifs certificat PEB à Bruxelles | Dès 120€"
        description="Tarifs du certificat PEB à Bruxelles dès 120€ pour appartement et 210€ pour maison. Prix transparents, devis gratuit."
        keywords="tarifs certificat PEB bruxelles, prix certificat PEB, coût certificat PEB appartement, coût certificat PEB maison"
        canonical="https://kcertipeb.be/tarifs"
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tarifs certificat PEB à Bruxelles</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tarifs clairs pour votre certificat PEB à Bruxelles, sans frais cachés. Devis gratuit et sans engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition relative overflow-hidden ${
                  option.popular ? 'ring-4 ring-emerald-500' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 text-xs font-bold">
                    Populaire
                  </div>
                )}
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">{option.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{option.type}</h3>
                  <p className="text-sm text-gray-600 mb-4">{option.size}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-emerald-600">{option.price}</span>
                    {option.price !== 'Sur devis' && <span className="text-gray-500 text-sm"> TVAC</span>}
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold text-sm text-center"
                  >
                    Commander
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ce qui est inclus</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-gray-700 font-semibold">Visite complète du bien</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-gray-700 font-semibold">Certificat PEB officiel</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-gray-700 font-semibold">Enregistrement officiel</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-gray-700 font-semibold">Analyse énergétique détaillée</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-gray-700 font-semibold">Délai de 3-5 jours</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-gray-700 font-semibold">Support et conseils</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Tarifs dégressifs pour professionnels</h2>
            <p className="text-emerald-50 text-lg mb-6 max-w-3xl mx-auto">
              Vous êtes agent immobilier, promoteur ou architecte ? Bénéficiez de tarifs préférentiels pour vos certifications en volume. Contactez-nous pour un partenariat sur mesure.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition font-semibold"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
