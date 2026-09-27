import type { ReactNode } from 'react';
import {
  ArrowRight,
  Droplets,
  ExternalLink,
  FileSearch,
  FileText,
  Flame,
  Home,
  Layers,
  Phone,
  PanelTop,
  Sun,
  Wind,
  BrickWall,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { RENOVATION_ADVICE_DELAY_HOURS, RENOVATION_ADVICE_PRICES } from '../lib/booking';
import { useLanguage } from '../lib/language';
import { trackPhoneCallConversion } from '../lib/tracking';

const PAGE_URL = 'https://kcertipeb.be/conseil-renovation-peb-bruxelles';
const PHONE = '+32486987484';
const BLOG_CLASSE_FG = '/blog/louer-vendre-bien-classe-f-g-bruxelles';

/**
 * Pages officielles citées, vérifiées le 27/09/2026. Chaque langue pointe vers la version
 * de la page dans cette langue (environnement.brussels / leefmilieu.brussels).
 */
const OFFICIAL_LINKS = {
  fr: {
    objectives:
      'https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/objectifs-peb-pour-chaque-logement-et-exigences-peb-en-cas-de-travaux',
    certificate:
      'https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise',
    audit: 'https://environnement.brussels/pro/reglementation-et-inspection/obligations-et-autorisations/laudit-energetique',
  },
  nl: {
    objectives:
      'https://leefmilieu.brussels/burgers/regelgeving-en-inspectie/verplichtingen-en-vergunningen/epb-doelen-voor-elke-woning-en-epb-eisen-bij-bouwwerken',
    certificate:
      'https://leefmilieu.brussels/burgers/regelgeving-en-inspectie/verplichtingen-en-vergunningen/het-epb-certificaat-voor-een-woning-het-brussels-hoofdstedelijk-gewest',
    audit: 'https://leefmilieu.brussels/pro/regelgeving-en-inspectie/verplichtingen-en-vergunningen/de-energieaudit',
  },
};

/** Icônes des postes, dans l'ordre de `content.postes`. */
const POSTE_ICONS = [Home, BrickWall, Layers, PanelTop, Flame, Droplets, Wind, Sun];

/** Lien vers une page officielle, ouvert dans un nouvel onglet. */
function OfficialLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-700"
    >
      {children}
      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
    </a>
  );
}

/**
 * Option « Conseil rénovation PEB » : à partir de la visite du certificat, le certificateur
 * repère les postes qui pèsent le plus sur la classe PEB du logement et l'ordre dans lequel
 * les améliorer. Ce n'est pas un audit énergétique réglementaire.
 */
export default function RenovationAdvice() {
  const { isDutch } = useLanguage();
  const links = OFFICIAL_LINKS[isDutch ? 'nl' : 'fr'];
  const prices = RENOVATION_ADVICE_PRICES;
  const delay = RENOVATION_ADVICE_DELAY_HOURS;

  const content = isDutch
    ? {
        seoTitle: 'Uw EPC verbeteren in Brussel: de prioritaire posten',
        seoDescription: `Dak, gevels, ramen, verwarming, ventilatie… Het EPC-renovatieadvies toont welke posten uw certificaat het zwaarst belasten en in welke volgorde u ze verbetert. Tijdens hetzelfde bezoek, vanaf ${prices.appartement} €.`,
        badge: 'Optie bij het EPC-certificaat · zelfde bezoek',
        title: 'EPC-renovatieadvies in Brussel',
        lead: 'Uw EPC verbeteren, post per post.',
        intro: `Elk Brussels EPC-certificaat wordt berekend op basis van dezelfde posten: dak, gevels, vloeren, ramen, verwarming, sanitair warm water, ventilatie en hernieuwbare energie. Het renovatieadvies toont welke posten uw klasse het meest naar beneden trekken en welke u eerst aanpakt om klassen te winnen. Rapport per e-mail binnen ${delay} uur.`,
        cta: 'Reserveren met het advies',
        call: 'Bel ons',
        postesTitle: 'De posten die uw EPC bepalen',
        postesIntro: 'Tijdens het bezoek bekijkt de certificateur elk van deze posten. Het advies vertelt u welke bij u het zwaarst doorwegen.',
        postes: [
          { title: 'Dak', text: 'Geïsoleerd of niet, en met welke dikte: vaak de eerste post om te bekijken.' },
          { title: 'Gevels', text: 'Volle, spouw- of geïsoleerde muren: hun samenstelling weegt zwaar op het warmteverlies.' },
          { title: 'Vloeren', text: 'Boven een kelder, kruipruimte of volle grond: een vaak vergeten post.' },
          { title: 'Ramen en beglazing', text: 'Type beglazing en schrijnwerk: enkel glas blijft een van de zwaarst doorwegende punten.' },
          { title: 'Verwarming', text: 'Type ketel of warmtepomp, rendement en regeling (thermostaat, thermostatische kranen).' },
          { title: 'Sanitair warm water', text: 'Hoe het warm water wordt geproduceerd en opgeslagen.' },
          { title: 'Ventilatie', text: 'Verluchtingsroosters of mechanische ventilatie: ook die telt mee in de berekening.' },
          { title: 'Hernieuwbare energie', text: 'Zonnepanelen, zonneboiler of warmtepomp.' },
        ],
        adviceTitle: 'Wat uw advies u vertelt',
        advicePoints: [
          'De posten die uw klasse het meest benadelen.',
          'De volgorde waarin u ze aanpakt om klassen te winnen.',
          'De EPC-klasse die u stap voor stap kunt beogen.',
          'De bewijzen die u best terugzoekt om te laten meetellen wat al bestaat.',
        ],
        proofTitle: 'Nog vóór de werken: de bewijzen',
        proofText:
          'Wat de certificateur niet kan vaststellen, kan hij aantonen met bouwplannen, facturen van werken of foto’s. Zonder bewijs moet hij standaardwaarden gebruiken, die in het certificaat met een rood uitroepteken zijn aangeduid en bijna altijd ongunstig zijn. Een isolatie of ketel die al aanwezig is maar niet bewezen, kan uw klasse dus onnodig verlagen. Het advies toont welke documenten u best terugzoekt.',
        proofSource: 'Het EPB-certificaat voor een woning — Leefmilieu Brussel',
        deadlinesTitle: 'De doelstellingen om te halen',
        deadlines: [
          {
            date: '1 januari 2033',
            text: 'Elke privéwoning moet maximaal 275 kWh/m²/jaar verbruiken (doelstelling EPB 275), vandaag minstens klasse E.',
          },
          {
            date: 'Eind 2045',
            text: 'De doelstelling wordt 150 kWh/m²/jaar (EPB 150), vandaag minstens klasse C. De datum moet de regering nog bevestigen.',
          },
        ],
        deadlinesSource: 'EPB-doelen voor elke woning — Leefmilieu Brussel',
        deadlinesBlog: 'Klasse F of G: wat is waar en wat niet',
        howTitle: 'De optie bestellen',
        howSteps: [
          'Vink “EPC-renovatieadvies” aan bij uw online reservering.',
          'Eén bezoek, dat niet langer duurt: alle posten worden in één keer bekeken.',
          `Uw advies komt als PDF per e-mail binnen ${delay} uur na het bezoek.`,
        ],
        priceItems: [
          { label: 'Appartement', price: `${prices.appartement} €` },
          { label: 'Woning', price: `${prices.maison} €` },
          { label: 'Gebouw', price: `${prices.immeuble} € / eenheid` },
        ],
        pricesNote: 'Incl. btw, bovenop de prijs van het EPC-certificaat.',
        notTitle: 'Geen energieaudit',
        notText:
          'De reglementaire energieaudit geldt in Brussel voor grote ondernemingen en grote verbruikers en wordt door een erkende energieauditeur uitgevoerd. Wij voeren geen audits uit. Het EPC-certificaat wordt volledig onafhankelijk opgesteld; het advies is een apart document.',
        notSource: 'De energieaudit — Leefmilieu Brussel',
        faqTitle: 'Veelgestelde vragen',
        faqs: [
          {
            q: 'Welke werken verbeteren het EPC het meest?',
            a: 'Dat hangt af van uw woning: een post die bij u zwaar doorweegt, kan bij uw buren al performant zijn. Precies dat bepaalt het advies, op basis van de gegevens van het bezoek.',
          },
          {
            q: 'Kan ik mijn EPC verbeteren zonder werken?',
            a: 'Soms wel. Zonder bewijs moet de certificateur ongunstige standaardwaarden gebruiken. Plannen, facturen of foto’s van een bestaande isolatie of ketel terugvinden kan het resultaat verbeteren. Het advies zegt welke bewijzen u best zoekt.',
          },
          {
            q: 'Bevat het EPC-certificaat niet al aanbevelingen?',
            a: 'Ja, een renovatiescenario gerangschikt volgens efficiëntie. Het advies legt het post per post uit voor uw woning, met de beoogde klasse per stap en de bewijzen om terug te zoeken.',
          },
          {
            q: 'Hoeveel kost de optie?',
            a: `${prices.appartement} € voor een appartement, ${prices.maison} € voor een woning en ${prices.immeuble} € per eenheid voor een gebouw, incl. btw, bovenop het EPC-certificaat.`,
          },
          { q: 'Wanneer ontvang ik het rapport?', a: `Per e-mail, als PDF, binnen ${delay} uur na het bezoek.` },
          { q: 'Duurt het bezoek langer?', a: 'Nee. Het advies vertrekt van de gegevens die voor het certificaat worden verzameld.' },
          {
            q: 'Is dit een energieaudit?',
            a: 'Nee. De reglementaire energieaudit geldt voor grote ondernemingen en grote verbruikers en wordt door een erkende energieauditeur uitgevoerd.',
          },
          {
            q: 'Welke posten hangen van mij af in een mede-eigendom?',
            a: 'Ramen, individuele verwarming en ventilatie van uw woning hangen van u af; dak, gevels of een collectieve ketel van de mede-eigendom. Het advies maakt dat onderscheid, zodat u het gesprek met uw syndicus kunt voorbereiden.',
          },
        ],
        sourcesTitle: 'Officiële bronnen',
        sources: [
          { href: links.certificate, label: 'Leefmilieu Brussel — Het EPB-certificaat voor een woning in het Brussels Gewest' },
          { href: links.objectives, label: 'Leefmilieu Brussel — EPB-doelen voor elke woning en EPB-eisen bij bouwwerken' },
          { href: links.audit, label: 'Leefmilieu Brussel — De energieaudit' },
        ],
        finalTitle: 'Weet welke posten u eerst aanpakt',
        finalText: `Vink de optie aan bij uw reservering: vanaf ${prices.appartement} €, tijdens hetzelfde bezoek.`,
      }
    : {
        seoTitle: 'Améliorer son PEB à Bruxelles : les postes prioritaires',
        seoDescription: `Toiture, façades, châssis, chauffage, ventilation… Le Conseil rénovation PEB repère les postes qui pèsent le plus sur votre certificat et l’ordre dans lequel les améliorer. Pendant la même visite, dès ${prices.appartement} €.`,
        badge: 'Option du certificat PEB · même visite',
        title: 'Conseil rénovation PEB à Bruxelles',
        lead: 'Améliorer votre PEB, poste par poste.',
        intro: `Chaque certificat PEB bruxellois se calcule à partir des mêmes postes : toiture, façades, sols, châssis, chauffage, eau chaude sanitaire, ventilation et énergies renouvelables. Le Conseil rénovation PEB vous montre ceux qui tirent votre classe vers le bas et ceux à traiter en premier pour gagner des classes. Rapport par email sous ${delay} heures.`,
        cta: 'Réserver avec le conseil',
        call: 'Appelez-nous',
        postesTitle: 'Les postes qui font votre PEB',
        postesIntro: 'Pendant la visite, le certificateur passe chacun de ces postes en revue. Le conseil vous dit lesquels pèsent le plus chez vous.',
        postes: [
          { title: 'Toiture', text: 'Isolée ou non, et avec quelle épaisseur : souvent le premier poste à regarder.' },
          { title: 'Façades', text: 'Murs pleins, creux ou isolés : leur composition pèse lourd dans les pertes de chaleur.' },
          { title: 'Sols', text: 'Sur cave, vide ventilé ou terre-plein : un poste souvent oublié.' },
          { title: 'Châssis et vitrages', text: 'Type de vitrage et de châssis : le simple vitrage reste l’un des points les plus pénalisants.' },
          { title: 'Chauffage', text: 'Type de chaudière ou de pompe à chaleur, rendement et régulation (thermostat, vannes thermostatiques).' },
          { title: 'Eau chaude sanitaire', text: 'La façon dont l’eau chaude est produite et stockée.' },
          { title: 'Ventilation', text: 'Grilles d’aération ou ventilation mécanique : elle compte aussi dans le calcul.' },
          { title: 'Énergies renouvelables', text: 'Panneaux photovoltaïques, chauffe-eau solaire ou pompe à chaleur.' },
        ],
        adviceTitle: 'Ce que votre conseil vous indique',
        advicePoints: [
          'Les postes qui pénalisent le plus votre classe.',
          'L’ordre dans lequel les traiter pour gagner des classes.',
          'La classe PEB que vous pouvez viser, étape par étape.',
          'Les preuves à retrouver pour faire valoir ce qui existe déjà.',
        ],
        proofTitle: 'Avant même les travaux : les preuves',
        proofText:
          'Ce que le certificateur ne peut pas constater, il peut le justifier grâce à des plans de construction, des factures de travaux ou des photos. Sans preuve, il doit utiliser des valeurs par défaut, signalées par un point d’exclamation rouge sur le certificat et presque toujours défavorables. Une isolation ou une chaudière bien présente mais non prouvée peut donc faire baisser votre classe inutilement. Le conseil vous indique quels documents rechercher.',
        proofSource: 'Le certificat PEB d’un logement — Bruxelles Environnement',
        deadlinesTitle: 'Les objectifs à atteindre',
        deadlines: [
          {
            date: '1er janvier 2033',
            text: 'Chaque logement privé doit consommer au maximum 275 kWh/m²/an (objectif PEB 275), soit au moins la classe E actuelle.',
          },
          {
            date: 'Fin 2045',
            text: 'L’objectif passe à 150 kWh/m²/an (PEB 150), soit au moins la classe C actuelle. La date doit encore être confirmée par le Gouvernement.',
          },
        ],
        deadlinesSource: 'Objectifs PEB pour chaque logement — Bruxelles Environnement',
        deadlinesBlog: 'Classe F ou G : ce qui est vrai et ce qui est faux',
        howTitle: 'Commander l’option',
        howSteps: [
          'Cochez « Conseil rénovation PEB » lors de votre réservation en ligne.',
          'Une seule visite, qui ne dure pas plus longtemps : tous les postes sont relevés en une fois.',
          `Votre conseil arrive en PDF par email sous ${delay} heures après la visite.`,
        ],
        priceItems: [
          { label: 'Appartement', price: `${prices.appartement} €` },
          { label: 'Maison', price: `${prices.maison} €` },
          { label: 'Immeuble', price: `${prices.immeuble} € / unité` },
        ],
        pricesNote: 'TVAC, en supplément du prix du certificat PEB.',
        notTitle: 'Pas un audit énergétique',
        notText:
          'À Bruxelles, l’audit énergétique réglementaire concerne les grandes entreprises et les gros consommateurs, et il est réalisé par un auditeur agréé. Nous ne réalisons pas d’audits. Le certificat PEB est établi en toute indépendance ; le conseil est un document séparé.',
        notSource: 'L’audit énergétique — Bruxelles Environnement',
        faqTitle: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quels travaux améliorent le plus le PEB ?',
            a: 'Cela dépend de votre logement : un poste très pénalisant chez vous peut être déjà performant chez votre voisin. C’est précisément ce que le conseil détermine, à partir des données relevées pendant la visite.',
          },
          {
            q: 'Peut-on améliorer son PEB sans faire de travaux ?',
            a: 'Parfois, oui. Sans preuve, le certificateur doit appliquer des valeurs par défaut défavorables. Retrouver des plans, des factures ou des photos d’une isolation ou d’une chaudière existante peut améliorer le résultat. Le conseil vous dit quelles preuves chercher.',
          },
          {
            q: 'Le certificat PEB ne contient-il pas déjà des recommandations ?',
            a: 'Si, un scénario de rénovation classé par efficacité. Le conseil l’explique poste par poste pour votre logement, avec la classe visée à chaque étape et les preuves à retrouver.',
          },
          {
            q: 'Combien coûte l’option ?',
            a: `${prices.appartement} € pour un appartement, ${prices.maison} € pour une maison et ${prices.immeuble} € par unité pour un immeuble, TVAC, en supplément du certificat PEB.`,
          },
          { q: 'Quand est-ce que je reçois le rapport ?', a: `Par email, en PDF, sous ${delay} heures après la visite.` },
          { q: 'La visite dure-t-elle plus longtemps ?', a: 'Non. Le conseil s’appuie sur les données relevées pour le certificat.' },
          {
            q: 'Est-ce un audit énergétique ?',
            a: 'Non. L’audit énergétique réglementaire concerne les grandes entreprises et les gros consommateurs, et il est réalisé par un auditeur agréé.',
          },
          {
            q: 'En copropriété, quels postes dépendent de moi ?',
            a: 'Les châssis, le chauffage individuel et la ventilation de votre logement dépendent de vous ; la toiture, les façades ou une chaudière collective relèvent de la copropriété. Le conseil fait la distinction, pour préparer la discussion avec votre syndic.',
          },
        ],
        sourcesTitle: 'Sources officielles',
        sources: [
          { href: links.certificate, label: 'Bruxelles Environnement — Le certificat PEB d’un logement en Région bruxelloise' },
          { href: links.objectives, label: 'Bruxelles Environnement — Objectifs PEB pour chaque logement et exigences PEB en cas de travaux' },
          { href: links.audit, label: 'Bruxelles Environnement — L’audit énergétique' },
        ],
        finalTitle: 'Sachez quels postes traiter en premier',
        finalText: `Cochez l’option lors de votre réservation : dès ${prices.appartement} €, pendant la même visite.`,
      };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: content.title,
        serviceType: isDutch ? 'EPC-renovatieadvies' : 'Conseil rénovation PEB',
        description: content.seoDescription,
        url: PAGE_URL,
        provider: { '@type': 'LocalBusiness', name: 'K Certipeb', url: 'https://kcertipeb.be', telephone: PHONE },
        areaServed: { '@type': 'City', name: isDutch ? 'Brussel' : 'Bruxelles' },
        offers: [
          { '@type': 'Offer', name: content.priceItems[0].label, price: String(prices.appartement), priceCurrency: 'EUR' },
          { '@type': 'Offer', name: content.priceItems[1].label, price: String(prices.maison), priceCurrency: 'EUR' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <>
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        canonical={PAGE_URL}
        includeFaqSchema={false}
        extraSchema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white pb-16 pt-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
            <FileText className="h-4 w-4" />
            {content.badge}
          </div>
          <h1 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">{content.title}</h1>
          <p className="mb-5 text-2xl font-semibold text-emerald-700">{content.lead}</p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">{content.intro}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/reserver"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
            >
              {content.cta}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`tel:${PHONE}`}
              onClick={trackPhoneCallConversion}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 px-6 py-4 font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              <Phone className="h-5 w-5" />
              {content.call}
            </a>
          </div>
        </div>
      </section>

      {/* Les postes du PEB */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-center text-3xl font-bold text-gray-900">{content.postesTitle}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-600">{content.postesIntro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.postes.map((poste, index) => {
              const Icon = POSTE_ICONS[index];
              return (
                <div key={poste.title} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <Icon className="mb-3 h-7 w-7 text-emerald-600" />
                  <h3 className="mb-1 font-bold text-gray-900">{poste.title}</h3>
                  <p className="text-sm text-gray-600">{poste.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ce que le conseil indique */}
      <section className="bg-emerald-700 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold">{content.adviceTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.advicePoints.map((point, index) => (
              <div key={point} className="flex items-start gap-4 rounded-xl bg-white/10 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white font-bold text-emerald-700">
                  {index + 1}
                </span>
                <p className="pt-1 text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les preuves */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-8">
            <div className="mb-4 flex items-center gap-3">
              <FileSearch className="h-8 w-8 shrink-0 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900">{content.proofTitle}</h2>
            </div>
            <p className="mb-5 text-gray-700">{content.proofText}</p>
            <OfficialLink href={links.certificate}>{content.proofSource}</OfficialLink>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">{content.deadlinesTitle}</h2>
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            {content.deadlines.map((deadline) => (
              <div key={deadline.date} className="rounded-xl border-l-4 border-emerald-600 bg-white p-6 shadow-sm">
                <p className="mb-1 text-xl font-extrabold text-emerald-700">{deadline.date}</p>
                <p className="text-gray-700">{deadline.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
            <OfficialLink href={links.objectives}>{content.deadlinesSource}</OfficialLink>
            <Link to={BLOG_CLASSE_FG} className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:underline">
              {content.deadlinesBlog} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Commande et tarifs */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">{content.howTitle}</h2>
          <ol className="mb-10 grid gap-4 sm:grid-cols-3">
            {content.howSteps.map((stepText, index) => (
              <li key={stepText} className="rounded-xl border border-gray-200 p-6">
                <span className="mb-3 block text-3xl font-extrabold text-emerald-600">{index + 1}</span>
                <p className="text-gray-700">{stepText}</p>
              </li>
            ))}
          </ol>
          <div className="grid gap-3 sm:grid-cols-3">
            {content.priceItems.map((item) => (
              <div key={item.label} className="rounded-xl bg-emerald-600 p-5 text-center text-white">
                <p className="font-semibold text-emerald-100">{item.label}</p>
                <p className="mt-1 text-3xl font-extrabold">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">{content.pricesNote}</p>
        </div>
      </section>

      {/* Pas un audit */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-gray-900">{content.notTitle}</h2>
            <p className="mb-4 text-gray-700">{content.notText}</p>
            <OfficialLink href={links.audit}>{content.notSource}</OfficialLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">{content.faqTitle}</h2>
          <div className="space-y-4">
            {content.faqs.map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-gray-200 p-6">
                <h3 className="mb-2 font-semibold text-gray-900">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">{content.sourcesTitle}</h2>
          <ul className="space-y-2 text-sm">
            {content.sources.map((source) => (
              <li key={source.href}>
                <OfficialLink href={source.href}>{source.label}</OfficialLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Appel à l'action final */}
      <section className="bg-emerald-700 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">{content.finalTitle}</h2>
          <p className="mb-8 text-lg text-emerald-100">{content.finalText}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/reserver"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-lg transition hover:bg-gray-100"
            >
              {content.cta}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`tel:${PHONE}`}
              onClick={trackPhoneCallConversion}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-emerald-800"
            >
              <Phone className="h-5 w-5" />
              {content.call}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
