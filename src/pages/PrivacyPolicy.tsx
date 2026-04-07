import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';

export default function PrivacyPolicy() {
  const { isDutch } = useLanguage();

  const content = isDutch
    ? {
        seoTitle: 'Privacybeleid AVG',
        seoDescription:
          'Privacybeleid en bescherming van persoonsgegevens van KcertiPEB in overeenstemming met de AVG.',
        title: 'Privacybeleid (AVG)',
        updated: 'Laatst bijgewerkt: 21 februari 2026',
        sections: [
          {
            title: '1. Inleiding',
            paragraphs: [
              'KcertiPEB hecht veel belang aan de bescherming van uw persoonsgegevens en uw privacy. Dit beleid legt duidelijk uit hoe uw gegevens worden verzameld, gebruikt en beschermd wanneer u onze website gebruikt of een formulier invult.',
              'Dit beleid is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG – EU 2016/679) en de geldende Belgische wetgeving.',
            ],
          },
          {
            title: '2. Verwerkingsverantwoordelijke',
            list: [
              'Handelsnaam: KcertiPEB',
              'Activiteit: EPB-certificering en energie-audit',
              'E-mail: info@kcertipeb.be',
              'Website: https://kcertipeb.be',
            ],
          },
          {
            title: '3. Verzamelde persoonsgegevens',
            paragraphs: [
              'Wij verzamelen uitsluitend de gegevens die nodig zijn om onze diensten correct te leveren.',
            ],
            list: ['Naam en voornaam', 'E-mailadres', 'Telefoonnummer', 'Adres en informatie over het pand'],
          },
          {
            title: '4. Doeleinden van de verwerking',
            list: [
              'Beantwoorden van uw aanvraag',
              'Contact opnemen per telefoon of e-mail',
              'Plannen van een bezoek of EPB-opdracht',
              'Administratieve en commerciële opvolging van uw dossier',
            ],
          },
          {
            title: '5. Rechtsgrond',
            list: ['Uw toestemming', 'Precontractuele maatregelen', 'Uitvoering van een overeenkomst wanneer een opdracht wordt bevestigd'],
          },
          {
            title: '6. Ontvangers van de gegevens',
            paragraphs: [
              'De gegevens zijn uitsluitend bestemd voor KcertiPEB. Ze kunnen technisch worden verwerkt door onderaannemers zoals Supabase of formuliertools die nodig zijn voor onze dienstverlening.',
            ],
          },
          {
            title: '7. Bewaartermijn',
            list: [
              'Gegevens gekoppeld aan een aanvraag: maximaal 24 maanden',
              'Gegevens gekoppeld aan een uitgevoerde opdracht: volgens de wettelijk verplichte bewaartermijn',
            ],
          },
          {
            title: '8. Beveiliging van de gegevens',
            paragraphs: [
              'Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen ongeoorloofde toegang, verlies of verspreiding.',
            ],
          },
          {
            title: '9. Uw rechten',
            list: [
              'Recht op inzage',
              'Recht op verbetering',
              'Recht op verwijdering',
              'Recht op beperking van de verwerking',
              'Recht op bezwaar',
              'Recht op overdraagbaarheid van gegevens',
            ],
            paragraphs: ['U kunt deze rechten uitoefenen via info@kcertipeb.be. Wij antwoorden uiterlijk binnen één maand.'],
          },
          {
            title: '10. Cookies',
            paragraphs: [
              'De website kan strikt noodzakelijke cookies of meetcookies gebruiken. Wanneer marketing- of analysetools worden gebruikt, verschijnt een toestemmingsbanner in overeenstemming met de AVG.',
            ],
          },
          {
            title: '11. Doorgifte buiten de Europese Unie',
            paragraphs: [
              'Bepaalde diensten kunnen gegevens buiten de Europese Unie verwerken. In dat geval gebeurt dit binnen de passende AVG-waarborgen.',
            ],
          },
          {
            title: '12. Klacht bij de toezichthoudende autoriteit',
            paragraphs: [
              'Als u meent dat uw rechten niet worden gerespecteerd, kunt u een klacht indienen bij de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel.',
            ],
          },
          {
            title: '13. Wijziging van dit beleid',
            paragraphs: [
              'KcertiPEB behoudt zich het recht voor dit privacybeleid op elk moment aan te passen om in overeenstemming te blijven met wettelijke of reglementaire ontwikkelingen.',
            ],
          },
        ],
        contactTitle: 'Meer informatie nodig?',
        contactText:
          'Voor elke vraag over dit privacybeleid of over de uitoefening van uw rechten kunt u ons contacteren via info@kcertipeb.be of +32 486 98 74 84.',
      }
    : {
        seoTitle: 'Politique de confidentialité RGPD',
        seoDescription:
          'Politique de confidentialité et protection des données personnelles de KcertiPEB conforme au RGPD.',
        title: 'Politique de confidentialité (RGPD)',
        updated: 'Dernière mise à jour : 21 février 2026',
        sections: [
          {
            title: '1. Introduction',
            paragraphs: [
              'KcertiPEB attache une grande importance à la protection de vos données personnelles et au respect de votre vie privée. Cette politique explique de manière claire comment vos données sont collectées, utilisées et protégées lorsque vous utilisez notre site ou remplissez un formulaire.',
              'Cette politique est établie conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la législation belge en vigueur.',
            ],
          },
          {
            title: '2. Responsable du traitement',
            list: [
              'Nom commercial : KcertiPEB',
              'Activité : Certification PEB et audit énergétique',
              'E-mail : info@kcertipeb.be',
              'Site web : https://kcertipeb.be',
            ],
          },
          {
            title: '3. Données personnelles collectées',
            paragraphs: ['Nous collectons uniquement les données nécessaires à la fourniture de nos services.'],
            list: ['Nom et prénom', 'Adresse e-mail', 'Numéro de téléphone', 'Adresse et informations relatives au bien'],
          },
          {
            title: '4. Finalités du traitement',
            list: [
              'Répondre à votre demande',
              'Vous contacter par téléphone ou par e-mail',
              'Planifier une visite ou une mission de certification',
              'Assurer le suivi administratif et commercial de votre dossier',
            ],
          },
          {
            title: '5. Base légale',
            list: ['Votre consentement', 'Mesures précontractuelles', "L'exécution d'un contrat lorsqu'une mission est confirmée"],
          },
          {
            title: '6. Destinataires des données',
            paragraphs: [
              'Les données sont destinées exclusivement à KcertiPEB. Elles peuvent être traitées techniquement par des sous-traitants comme Supabase ou des outils de formulaire nécessaires à notre activité.',
            ],
          },
          {
            title: '7. Durée de conservation',
            list: [
              'Données liées à une demande : maximum 24 mois',
              'Données liées à une prestation réalisée : selon les durées légales applicables',
            ],
          },
          {
            title: '8. Sécurité des données',
            paragraphs: [
              'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées afin de protéger vos données contre tout accès non autorisé, perte ou divulgation.',
            ],
          },
          {
            title: '9. Vos droits',
            list: [
              'Droit d’accès',
              'Droit de rectification',
              'Droit à l’effacement',
              'Droit à la limitation du traitement',
              'Droit d’opposition',
              'Droit à la portabilité des données',
            ],
            paragraphs: ['Vous pouvez exercer ces droits via info@kcertipeb.be. Nous vous répondrons dans un délai maximal d’un mois.'],
          },
          {
            title: '10. Cookies',
            paragraphs: [
              'Le site peut utiliser des cookies strictement nécessaires ou des outils de mesure d’audience. Lorsqu’un outil marketing est utilisé, un bandeau de consentement conforme au RGPD est affiché.',
            ],
          },
          {
            title: '11. Transfert hors Union européenne',
            paragraphs: [
              'Certains services peuvent traiter des données hors de l’Union européenne. Dans ce cas, ces transferts sont encadrés par les garanties prévues par le RGPD.',
            ],
          },
          {
            title: '12. Réclamation auprès de l’autorité de contrôle',
            paragraphs: [
              'Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de l’Autorité de protection des données, Rue de la Presse 35, 1000 Bruxelles.',
            ],
          },
          {
            title: '13. Modification de la politique',
            paragraphs: [
              'KcertiPEB se réserve le droit de modifier la présente politique de confidentialité à tout moment afin de rester conforme aux évolutions légales et réglementaires.',
            ],
          },
        ],
        contactTitle: "Besoin d'informations complémentaires ?",
        contactText:
          'Pour toute question concernant cette politique de confidentialité ou l’exercice de vos droits, contactez-nous à info@kcertipeb.be ou au +32 486 98 74 84.',
      };

  return (
    <>
      <SEO title={content.seoTitle} description={content.seoDescription} canonical="https://kcertipeb.be/politique-confidentialite" />

      <div className="bg-gradient-to-br from-emerald-50 to-white pb-16 pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">{content.title}</h1>
          <p className="text-lg text-gray-600">{content.updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {content.sections.map((section) => (
            <section key={section.title} className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-4 leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="mt-12 border-l-4 border-emerald-500 bg-emerald-50 p-6">
            <h3 className="mb-2 text-xl font-bold text-gray-900">{content.contactTitle}</h3>
            <p className="text-gray-700">{content.contactText}</p>
          </div>
        </div>
      </div>
    </>
  );
}
