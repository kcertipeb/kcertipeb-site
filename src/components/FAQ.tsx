import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qu'est-ce qu'un certificat PEB ?",
    answer: "Le certificat PEB (Performance Énergétique des Bâtiments) est un document obligatoire qui évalue la consommation énergétique d'un logement. Il est nécessaire lors de la vente ou location d'un bien immobilier à Bruxelles."
  },
  {
    question: "Combien de temps dure une visite PEB ?",
    answer: "Une visite PEB complète dure généralement entre 1h30 et 2h30, selon la taille et la complexité de votre logement. Notre certificateur analyse tous les éléments impactant la performance énergétique."
  },
  {
    question: "Quelle est la durée de validité du certificat PEB ?",
    answer: "Le certificat PEB est valable 10 ans à partir de sa date d'établissement, sauf si des travaux de rénovation énergétique majeurs sont effectués entre-temps."
  },
  {
    question: "Dois-je être présent lors de la visite ?",
    answer: "Oui, votre présence ou celle d'une personne connaissant bien le logement est recommandée pour faciliter l'accès à toutes les pièces et répondre aux questions du certificateur."
  },
  {
    question: "Quels documents dois-je préparer ?",
    answer: "Préparez les plans du logement si disponibles, les factures de travaux de rénovation énergétique, les caractéristiques techniques du système de chauffage et de ventilation, et tout document relatif à l'isolation."
  },
  {
    question: "Que faire si mon logement obtient une mauvaise classe énergétique ?",
    answer: "Une classe énergétique faible indique des pistes d'amélioration. Notre certificateur vous conseillera sur les travaux prioritaires pour améliorer la performance énergétique et réduire vos factures."
  },
  {
    question: "Le certificat PEB est-il obligatoire ?",
    answer: "Oui, le certificat PEB est obligatoire à Bruxelles pour toute vente ou location d'un bien immobilier. Il doit être mentionné dans les annonces immobilières et remis lors de la signature du compromis de vente ou du bail."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur le certificat PEB
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4 group-hover:text-emerald-600 transition">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
