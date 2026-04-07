import { CheckCircle, Clock, MapPin, FileCheck, HeadphonesIcon, TrendingUp } from 'lucide-react';
import { useLanguage } from '../lib/language';

export default function Benefits() {
  const { isDutch } = useLanguage();

  const benefits = isDutch
    ? [
        {
          icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
          title: 'Erkende experts',
          description: 'EPC-certificateurs erkend door Leefmilieu Brussel met aantoonbare ervaring.',
        },
        {
          icon: <Clock className="h-8 w-8 text-emerald-600" />,
          title: 'Snelle termijn',
          description: 'Interventie binnen 48 uur en aflevering van het certificaat binnen 3 tot 5 werkdagen.',
        },
        {
          icon: <MapPin className="h-8 w-8 text-emerald-600" />,
          title: 'Lokale kennis',
          description: 'Perfecte kennis van de Brusselse architecturale en reglementaire bijzonderheden.',
        },
        {
          icon: <FileCheck className="h-8 w-8 text-emerald-600" />,
          title: 'Gegarandeerde conformiteit',
          description: 'Certificaten conform de normen van het Brussels Hoofdstedelijk Gewest.',
        },
        {
          icon: <HeadphonesIcon className="h-8 w-8 text-emerald-600" />,
          title: 'Volledige begeleiding',
          description: 'Persoonlijk advies en ondersteuning gedurende het hele certificeringsproces.',
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
          title: 'Meer waarde voor uw pand',
          description: 'Een goed EPC-resultaat verhoogt de aantrekkelijkheid van uw eigendom.',
        },
      ]
    : [
        {
          icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
          title: 'Experts certifiés',
          description: 'Certificateurs PEB agréés par Bruxelles Environnement avec une expertise reconnue.',
        },
        {
          icon: <Clock className="h-8 w-8 text-emerald-600" />,
          title: 'Délai rapide',
          description: 'Intervention sous 48 h et remise du certificat en 3 à 5 jours ouvrables maximum.',
        },
        {
          icon: <MapPin className="h-8 w-8 text-emerald-600" />,
          title: 'Connaissance locale',
          description: 'Parfaite maîtrise des spécificités architecturales et réglementaires bruxelloises.',
        },
        {
          icon: <FileCheck className="h-8 w-8 text-emerald-600" />,
          title: 'Conformité garantie',
          description: 'Certificats conformes aux normes de la Région de Bruxelles-Capitale.',
        },
        {
          icon: <HeadphonesIcon className="h-8 w-8 text-emerald-600" />,
          title: 'Accompagnement complet',
          description: 'Support et conseils personnalisés tout au long du processus de certification.',
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
          title: 'Valorisation du bien',
          description: 'Un bon PEB augmente la valeur de votre propriété et attire davantage d’acheteurs.',
        },
      ];

  return (
    <section id="avantages" className="bg-gradient-to-br from-emerald-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {isDutch ? 'Waarom voor ons kiezen?' : 'Pourquoi nous choisir ?'}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            {isDutch
              ? 'Professionele begeleiding voor een duidelijke en zorgeloze energiecertificering'
              : 'Des professionnels à votre service pour une certification énergétique sans stress'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-xl bg-white p-8 shadow-md transition hover:shadow-xl">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{benefit.title}</h3>
              <p className="leading-relaxed text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
