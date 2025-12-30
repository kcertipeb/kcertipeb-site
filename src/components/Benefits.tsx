import { CheckCircle, Clock, MapPin, FileCheck, HeadphonesIcon, TrendingUp } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
      title: 'Experts Certifiés',
      description: 'Certificateurs PEB agréés par Bruxelles Environnement avec une expertise reconnue.'
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: 'Délai Rapide',
      description: 'Intervention sous 48h et remise du certificat en 3 à 5 jours ouvrables maximum.'
    },
    {
      icon: <MapPin className="w-8 h-8 text-emerald-600" />,
      title: 'Connaissance Locale',
      description: 'Parfaite maîtrise des spécificités architecturales et réglementaires bruxelloises.'
    },
    {
      icon: <FileCheck className="w-8 h-8 text-emerald-600" />,
      title: 'Conformité Garantie',
      description: 'Certificats conformes aux normes de la Région de Bruxelles-Capitale (arrêté PEB).'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-emerald-600" />,
      title: 'Accompagnement Complet',
      description: 'Support et conseils personnalisés tout au long du processus de certification.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      title: 'Valorisation du Bien',
      description: 'Un bon PEB augmente la valeur de votre propriété et attire plus d\'acheteurs.'
    }
  ];

  return (
    <section id="avantages" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Nous Choisir ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des professionnels à votre service pour une certification énergétique sans stress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Le PEB est Obligatoire à Bruxelles</h3>
              <p className="text-emerald-50 text-lg leading-relaxed">
                Depuis 2011, le certificat PEB est obligatoire pour toute vente ou location d'un bien immobilier à Bruxelles. Ne risquez pas une amende pouvant aller jusqu'à 25.000€. Faites appel à nos experts certifiés.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-4xl font-bold mr-4">✓</span>
                  <span className="text-lg">Valable 10 ans pour résidentiel</span>
                </div>
                <div className="flex items-center">
                  <span className="text-4xl font-bold mr-4">✓</span>
                  <span className="text-lg">Obligatoire pour vente/location</span>
                </div>
                <div className="flex items-center">
                  <span className="text-4xl font-bold mr-4">✓</span>
                  <span className="text-lg">Doit figurer dans les annonces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
