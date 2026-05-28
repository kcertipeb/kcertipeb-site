import { Home, Building2, ClipboardCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/language';

export default function Services() {
  const { isDutch } = useLanguage();

  const services = isDutch
    ? [
        {
          icon: <Home className="h-12 w-12 text-emerald-600" />,
          title: 'EPC Appartement & Woning',
          description: 'EPC-certificaat voor appartementen en woningen in Brussel. Vaste prijzen vanaf 120 €, snelle interventie.',
          features: ["Appartementen van alle oppervlaktes", "Eengezinswoningen", "Studio's en penthouses", "Villa's en residentiële woningen"],
          link: '/certificat-peb-appartement-bruxelles',
          linkLabel: 'Bekijk tarieven',
        },
        {
          icon: <Building2 className="h-12 w-12 text-emerald-600" />,
          title: 'EPC Gebouw & Mede-eigendom',
          description: 'Gecoördineerde EPC-certificering voor residentiële gebouwen en mede-eigendom. Prijs op offerte, één aanspreekpunt voor de syndicus.',
          features: ['Alle eenheden in één aanpak', 'Erkend door Leefmilieu Brussel', 'VME-aansprakelijkheid 2033', 'Overzicht per gebouw'],
          link: '/certificat-peb-immeuble-bruxelles',
          linkLabel: 'Offerte aanvragen',
        },
        {
          icon: <ClipboardCheck className="h-12 w-12 text-emerald-600" />,
          title: 'Energie-audit',
          description: 'Diepgaande analyse van de energieprestaties van uw pand, met concrete aanbevelingen om het verbruik te verlagen.',
          features: ['Volledige diagnose van het gebouw', 'Persoonlijke aanbevelingen', 'Verbeterplan op maat', 'Raming van mogelijke besparingen'],
          link: '/audit-energetique-bruxelles',
          linkLabel: 'Meer info',
        },
      ]
    : [
        {
          icon: <Home className="h-12 w-12 text-emerald-600" />,
          title: 'PEB Appartement & Maison',
          description: 'Certificat PEB pour appartements et maisons à Bruxelles. Tarifs fixes dès 120 €, intervention rapide.',
          features: ['Appartements de toutes surfaces', 'Maisons unifamiliales', 'Studios et penthouses', 'Villas et résidences'],
          link: '/certificat-peb-appartement-bruxelles',
          linkLabel: 'Voir les tarifs',
        },
        {
          icon: <Building2 className="h-12 w-12 text-emerald-600" />,
          title: 'PEB Immeuble & Copropriété',
          description: 'Certification PEB coordonnée pour immeubles résidentiels et copropriétés. Prix sur devis, un seul interlocuteur pour le syndic.',
          features: ['Toutes les unités en une démarche', 'Agréé Bruxelles Environnement', 'Co-responsabilité ACP 2033', 'Récapitulatif global pour le syndic'],
          link: '/certificat-peb-immeuble-bruxelles',
          linkLabel: 'Demander un devis',
        },
        {
          icon: <ClipboardCheck className="h-12 w-12 text-emerald-600" />,
          title: 'Audit énergétique',
          description: "Analyse détaillée de la performance énergétique de votre bien avec recommandations concrètes pour réduire votre consommation.",
          features: ['Diagnostic complet du bâtiment', 'Recommandations personnalisées', "Plan d'amélioration sur mesure", 'Estimation des économies possibles'],
          link: '/audit-energetique-bruxelles',
          linkLabel: 'En savoir plus',
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

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-xl border-2 border-gray-100 bg-white p-8 transition hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>
              <ul className="mb-8 flex-1 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mr-3 mt-1 text-emerald-600">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="block w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                {service.linkLabel}
              </Link>
            </div>
          ))}
        </div>

        {/* Urgency banner */}
        <div className="mt-10 flex items-center justify-between gap-4 rounded-xl bg-red-50 px-6 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 flex-shrink-0 text-red-600" />
            <p className="font-medium text-gray-800">
              {isDutch
                ? 'Heeft u uw EPC dringend nodig? Wij garanderen een afspraak binnen 48 uur.'
                : 'Besoin de votre PEB en urgence ? Nous garantissons un rendez-vous sous 48h.'}
            </p>
          </div>
          <Link
            to="/certificat-peb-urgent-bruxelles"
            className="flex-shrink-0 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            {isDutch ? 'PEB Express' : 'PEB Express'}
          </Link>
        </div>
      </div>
    </section>
  );
}
