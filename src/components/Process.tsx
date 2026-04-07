import { Phone, Calendar, ClipboardList, FileCheck, ExternalLink } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '1',
      icon: <Phone className="w-10 h-10 text-white" />,
      title: 'Contact Initial',
      description: 'Contactez-nous par téléphone, email ou formulaire. Nous répondons rapidement pour comprendre vos besoins et vous fournir un devis gratuit.',
      duration: '15 minutes'
    },
    {
      number: '2',
      icon: <Calendar className="w-10 h-10 text-white" />,
      title: 'Prise de Rendez-vous',
      description: 'Planification de la visite sur site à votre convenance. Intervention possible sous 48h selon disponibilités.',
      duration: 'Sous 48h'
    },
    {
      number: '3',
      icon: <ClipboardList className="w-10 h-10 text-white" />,
      title: 'Visite & Analyse',
      description: 'Notre certificateur agréé visite votre bien, prend les mesures nécessaires et analyse tous les éléments énergétiques (isolation, chauffage, ventilation, etc.).',
      duration: '1-2 heures'
    },
    {
      number: '4',
      icon: <FileCheck className="w-10 h-10 text-white" />,
      title: 'Remise du Certificat',
      description: 'Réception de votre certificat PEB officiel par email et courrier. Le document est automatiquement enregistré dans la base de données régionale.',
      duration: '3-5 jours'
    }
  ];

  return (
    <section id="processus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment Ça Marche ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et transparent en 4 étapes pour votre certificat PEB
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-200 transform -translate-y-1/2" style={{ top: '120px' }}></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border-2 border-gray-100 hover:border-emerald-200">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      {step.icon}
                    </div>
                    <span className="absolute top-3 right-3 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-center">{step.description}</p>
                  <div className="bg-emerald-50 rounded-lg py-2 px-4 text-center">
                    <span className="text-emerald-700 font-semibold text-sm">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-xl p-8 inline-block">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-bold text-emerald-600">Durée totale du processus :</span>
            </p>
            <p className="text-3xl font-bold text-gray-900">5 à 7 jours maximum</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-center shadow-xl max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">
              Préparez votre visite PEB
            </h3>
            <p className="text-emerald-50 mb-6 text-lg">
              Consultez le guide complet de Bruxelles Environnement pour bien préparer votre visite PEB
            </p>
            <a
              href="https://document.environnement.brussels/opac_css/elecfile/Visite_du_certificateur_PEB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Consulter le Guide Officiel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
