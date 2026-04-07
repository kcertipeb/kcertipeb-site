import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../lib/language';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const { isDutch } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = isDutch
    ? [
        {
          question: 'Wat is een EPC-certificaat?',
          answer:
            'Het EPC-certificaat is een verplicht document dat de energieprestatie van een woning beoordeelt. Het is nodig bij verkoop of verhuur van residentieel vastgoed in Brussel.',
        },
        {
          question: 'Hoe lang duurt een EPC-bezoek?',
          answer:
            'Een volledig EPC-bezoek duurt doorgaans tussen 1,5 en 2,5 uur, afhankelijk van de grootte en de complexiteit van het pand.',
        },
        {
          question: 'Hoe lang blijft een EPC-certificaat geldig?',
          answer:
            'Een EPC-certificaat blijft 10 jaar geldig vanaf de opmaakdatum, behalve wanneer er intussen belangrijke energetische renovaties werden uitgevoerd.',
        },
        {
          question: 'Moet ik aanwezig zijn tijdens het bezoek?',
          answer:
            'Ja, uw aanwezigheid of die van iemand die het pand goed kent, is aanbevolen om de toegang te vergemakkelijken en vragen te beantwoorden.',
        },
        {
          question: 'Welke documenten moet ik voorbereiden?',
          answer:
            'Voorzie indien mogelijk plannen van de woning, facturen van energierenovatiewerken, technische kenmerken van verwarming en ventilatie en documenten over isolatie.',
        },
        {
          question: 'Wat als mijn woning een slechte energiescore krijgt?',
          answer:
            'Een lage score toont verbeterpunten aan. De certificateur kan aangeven welke werken prioritair zijn om de energieprestatie te verbeteren.',
        },
        {
          question: 'Is het EPC-certificaat verplicht?',
          answer:
            'Ja, het EPC-certificaat is in Brussel verplicht voor elke verkoop of verhuur van een woning en moet vermeld worden in vastgoedadvertenties.',
        },
      ]
    : [
        {
          question: "Qu'est-ce qu'un certificat PEB ?",
          answer:
            "Le certificat PEB est un document obligatoire qui évalue la consommation énergétique d'un logement. Il est nécessaire lors de la vente ou location d'un bien immobilier à Bruxelles.",
        },
        {
          question: 'Combien de temps dure une visite PEB ?',
          answer:
            'Une visite PEB complète dure généralement entre 1 h 30 et 2 h 30, selon la taille et la complexité de votre logement.',
        },
        {
          question: 'Quelle est la durée de validité du certificat PEB ?',
          answer:
            "Le certificat PEB est valable 10 ans à partir de sa date d'établissement, sauf si des travaux de rénovation énergétique majeurs sont effectués entre-temps.",
        },
        {
          question: 'Dois-je être présent lors de la visite ?',
          answer:
            "Oui, votre présence ou celle d'une personne connaissant bien le logement est recommandée pour faciliter l'accès et répondre aux questions du certificateur.",
        },
        {
          question: 'Quels documents dois-je préparer ?',
          answer:
            "Préparez si possible les plans du logement, les factures de travaux de rénovation énergétique, les caractéristiques du chauffage et de la ventilation, ainsi que tout document relatif à l'isolation.",
        },
        {
          question: 'Que faire si mon logement obtient une mauvaise classe énergétique ?',
          answer:
            "Une classe énergétique faible indique des pistes d'amélioration. Notre certificateur peut vous conseiller sur les travaux prioritaires à envisager.",
        },
        {
          question: 'Le certificat PEB est-il obligatoire ?',
          answer:
            "Oui, le certificat PEB est obligatoire à Bruxelles pour toute vente ou location d'un bien immobilier et doit figurer dans les annonces immobilières.",
        },
      ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              {isDutch ? 'FAQ – EPC-certificaat in Brussel' : 'FAQ – Certificat PEB à Bruxelles'}
            </h1>
            <p className="text-xl text-gray-600">
              {isDutch
                ? 'Alles wat u moet weten over het EPC-certificaat'
                : 'Tout ce que vous devez savoir sur le certificat PEB'}
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={item.question} className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="group flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className="pr-4 text-lg font-semibold text-gray-900 transition group-hover:text-emerald-600">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 flex-shrink-0 text-emerald-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 leading-relaxed text-gray-700">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
