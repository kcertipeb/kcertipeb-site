import { Phone, Calendar, ClipboardList, FileCheck, ExternalLink } from 'lucide-react';
import { useLanguage } from '../lib/language';

export default function Process() {
  const { isDutch } = useLanguage();

  const steps = isDutch
    ? [
        {
          number: '1',
          icon: <Phone className="h-10 w-10 text-white" />,
          title: 'Eerste contact',
          description:
            'Neem contact op via telefoon, e-mail of formulier. We antwoorden snel om uw aanvraag goed te begrijpen.',
          duration: '15 minuten',
        },
        {
          number: '2',
          icon: <Calendar className="h-10 w-10 text-white" />,
          title: 'Afspraak plannen',
          description: 'We plannen het plaatsbezoek volgens uw beschikbaarheid in Brussel.',
          duration: 'Binnen 48 u',
        },
        {
          number: '3',
          icon: <ClipboardList className="h-10 w-10 text-white" />,
          title: 'Bezoek en analyse',
          description:
            'Onze erkende certificateur bezoekt het pand, neemt de nodige gegevens op en analyseert de energetische elementen.',
          duration: '1 à 2 uur',
        },
        {
          number: '4',
          icon: <FileCheck className="h-10 w-10 text-white" />,
          title: 'Officieel certificaat',
          description: 'U ontvangt uw officiële EPC-certificaat per e-mail na de volledige analyse.',
          duration: '48 uur',
        },
      ]
    : [
        {
          number: '1',
          icon: <Phone className="h-10 w-10 text-white" />,
          title: 'Contact initial',
          description:
            'Contactez-nous par téléphone, e-mail ou formulaire. Nous répondons rapidement pour comprendre votre besoin.',
          duration: '15 minutes',
        },
        {
          number: '2',
          icon: <Calendar className="h-10 w-10 text-white" />,
          title: 'Prise de rendez-vous',
          description: 'Planification de la visite sur site selon vos disponibilités à Bruxelles.',
          duration: 'Sous 48 h',
        },
        {
          number: '3',
          icon: <ClipboardList className="h-10 w-10 text-white" />,
          title: 'Visite et analyse',
          description:
            'Notre certificateur agréé visite le bien, prend les mesures nécessaires et analyse les éléments énergétiques.',
          duration: '1 à 2 heures',
        },
        {
          number: '4',
          icon: <FileCheck className="h-10 w-10 text-white" />,
          title: 'Remise du certificat',
          description: "Réception de votre certificat PEB officiel par e-mail après la visite et l'analyse.",
          duration: '48 h',
        },
      ];

  return (
    <section id="processus" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {isDutch ? 'Hoe werkt het?' : 'Comment ça marche ?'}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            {isDutch
              ? 'Een eenvoudig en transparant traject in 4 stappen voor uw EPC-certificaat'
              : 'Un processus simple et transparent en 4 étapes pour votre certificat PEB'}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 hidden h-1 -translate-y-1/2 transform bg-emerald-200 lg:block" style={{ top: '120px' }} />

          <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="rounded-xl border-2 border-gray-100 bg-white p-6 shadow-lg transition hover:border-emerald-200 hover:shadow-xl">
                  <div className="mb-6 flex flex-col items-center text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-lg">
                      {step.icon}
                    </div>
                    <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mb-4 text-center leading-relaxed text-gray-600">{step.description}</p>
                  <div className="rounded-lg bg-emerald-50 px-4 py-2 text-center">
                    <span className="text-sm font-semibold text-emerald-700">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-xl bg-gray-50 p-8">
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-bold text-emerald-600">
                {isDutch ? 'Totale duur van het traject:' : 'Durée totale du processus :'}
              </span>
            </p>
            <p className="text-3xl font-bold text-gray-900">{isDutch ? 'Maximaal 5 à 7 dagen' : '5 à 7 jours maximum'}</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="max-w-2xl rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 p-8 text-center shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-white">
              {isDutch ? 'Bereid uw EPC-bezoek goed voor' : 'Préparez votre visite PEB'}
            </h3>
            <p className="mb-6 text-lg text-emerald-50">
              {isDutch
                ? 'Raadpleeg de officiële gids van Leefmilieu Brussel om uw bezoek goed voor te bereiden.'
                : 'Consultez le guide complet de Bruxelles Environnement pour bien préparer votre visite PEB'}
            </p>
            <a
              href="https://document.environnement.brussels/opac_css/elecfile/Visite_du_certificateur_PEB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 font-bold text-emerald-600 shadow-lg transition hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-xl"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              {isDutch ? 'Officiële gids raadplegen' : 'Consulter le guide officiel'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
