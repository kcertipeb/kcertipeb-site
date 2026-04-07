import { Home, ClipboardCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-emerald-600" />,
      title: 'PEB Résidentiel',
      description: 'Certificat énergétique pour maisons, appartements et résidences. Idéal pour la vente ou la location de votre bien immobilier. Obligatoire pour toute transaction immobilière à Bruxelles.',
      features: ['Appartements de toutes surfaces', 'Maisons unifamiliales', 'Studios et penthouses', 'Villas et résidences']
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-emerald-600" />,
      title: 'Audit Énergétique',
      description: 'Analyse détaillée de la performance énergétique de votre bien avec recommandations concrètes pour réduire votre consommation et améliorer votre confort.',
      features: ['Diagnostic complet de votre bâtiment', 'Recommandations personnalisées', 'Plan d\'amélioration sur mesure', 'Estimation des économies possibles']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise en certification énergétique pour les biens résidentiels à Bruxelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl transition hover:border-emerald-200"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
