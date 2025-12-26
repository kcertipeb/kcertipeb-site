import { Home, Building2, ClipboardCheck } from 'lucide-react';

export default function Pricing() {
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
      price: '175€',
      popular: false
    },
    {
      icon: <Home className="w-8 h-8 text-emerald-600" />,
      type: 'Appartement',
      size: '> 100 m²',
      price: '200€',
      popular: false
    },
    {
      icon: <Building2 className="w-8 h-8 text-emerald-600" />,
      type: 'Maison',
      size: '< 150 m²',
      price: '210€',
      popular: true
    },
    {
      icon: <Building2 className="w-8 h-8 text-emerald-600" />,
      type: 'Maison',
      size: '151 - 250 m²',
      price: '240€',
      popular: false
    },
    {
      icon: <Building2 className="w-8 h-8 text-emerald-600" />,
      type: 'Maison',
      size: '> 250 m²',
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarifs Transparents</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prix compétitifs sans frais cachés. Devis gratuit et sans engagement.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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
                <button
                  onClick={scrollToContact}
                  className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold text-sm"
                >
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ce qui est inclus</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-gray-700 font-semibold">Visite complète du bien</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-gray-700 font-semibold">Certificat PEB officiel</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-gray-700 font-semibold">Enregistrement officiel</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-gray-700 font-semibold">Analyse énergétique détaillée</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-gray-700 font-semibold">Délai de 3-5 jours</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-gray-700 font-semibold">Support et conseils</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Tarifs Dégressifs pour Professionnels</h3>
          <p className="text-emerald-50 text-lg mb-6 max-w-3xl mx-auto">
            Vous êtes agent immobilier, promoteur ou architecte ? Bénéficiez de tarifs préférentiels pour vos certifications en volume. Contactez-nous pour un partenariat sur mesure.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition font-semibold"
          >
            Découvrir nos Offres Pros
          </button>
        </div>
      </div>
    </section>
  );
}
