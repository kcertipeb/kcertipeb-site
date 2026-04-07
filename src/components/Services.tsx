import { Home, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '../lib/language';

export default function Services() {
  const { isDutch } = useLanguage();

  const services = isDutch
    ? [
        {
          icon: <Home className="h-12 w-12 text-emerald-600" />,
          title: 'Residentieel EPB',
          description:
            'Energiecertificaat voor woningen, appartementen en residentiële panden. Ideaal voor de verkoop of verhuur van uw vastgoed in Brussel.',
          features: [
            'Appartementen van alle oppervlaktes',
            'Eengezinswoningen',
            'Studio’s en penthouses',
            'Villa’s en residentiële woningen',
          ],
        },
        {
          icon: <ClipboardCheck className="h-12 w-12 text-emerald-600" />,
          title: 'Energie-audit',
          description:
            'Diepgaande analyse van de energieprestaties van uw pand, met concrete aanbevelingen om het verbruik te verlagen en het comfort te verbeteren.',
          features: [
            'Volledige diagnose van het gebouw',
            'Persoonlijke aanbevelingen',
            'Verbeterplan op maat',
            'Raming van mogelijke besparingen',
          ],
        },
      ]
    : [
        {
          icon: <Home className="h-12 w-12 text-emerald-600" />,
          title: 'PEB résidentiel',
          description:
            'Certificat énergétique pour maisons, appartements et résidences. Idéal pour la vente ou la location de votre bien immobilier à Bruxelles.',
          features: [
            'Appartements de toutes surfaces',
            'Maisons unifamiliales',
            'Studios et penthouses',
            'Villas et résidences',
          ],
        },
        {
          icon: <ClipboardCheck className="h-12 w-12 text-emerald-600" />,
          title: 'Audit énergétique',
          description:
            'Analyse détaillée de la performance énergétique de votre bien avec recommandations concrètes pour réduire votre consommation et améliorer votre confort.',
          features: [
            'Diagnostic complet du bâtiment',
            'Recommandations personnalisées',
            'Plan d’amélioration sur mesure',
            'Estimation des économies possibles',
          ],
        },
      ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {isDutch ? 'Onze diensten' : 'Nos services'}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            {isDutch
              ? 'Expertise in energiecertificering voor residentiële panden in Brussel'
              : 'Expertise en certification énergétique pour les biens résidentiels à Bruxelles'}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border-2 border-gray-100 bg-white p-8 transition hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mr-3 mt-1 text-emerald-600">✓</span>
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
