import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

function Warn({ children }: { children: ReactNode }) {
  return <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4 my-5 text-sm text-gray-700">{children}</div>;
}
function Tip({ children }: { children: ReactNode }) {
  return <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 my-5 text-sm text-gray-700">{children}</div>;
}
function Info({ children }: { children: ReactNode }) {
  return <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 my-5 text-sm text-gray-700">{children}</div>;
}
function Success({ children }: { children: ReactNode }) {
  return <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg p-4 my-5 text-sm text-gray-700">{children}</div>;
}

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="font-extrabold text-2xl text-emerald-900 mt-12 mb-4 pb-3 border-b-2 border-emerald-50">
      {children}
    </h2>
  );
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-bold text-lg text-emerald-800 mt-7 mb-3">{children}</h3>;
}

function Src({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
      {children}
    </a>
  );
}

interface MilestoneProps {
  date: string;
  title: string;
  children: ReactNode;
  tone?: 'now' | 'soon' | 'later';
}
function Milestone({ date, title, children, tone = 'later' }: MilestoneProps) {
  const dot =
    tone === 'now' ? 'bg-emerald-600' : tone === 'soon' ? 'bg-amber-500' : 'bg-red-600';
  return (
    <li className="relative pl-10 pb-8 last:pb-0">
      <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center">
        <span className={`h-3.5 w-3.5 rounded-full ring-4 ring-white ${dot}`} />
      </span>
      <p className="text-xs font-extrabold uppercase tracking-wide text-gray-400">{date}</p>
      <p className="font-bold text-gray-900 mt-0.5 mb-1.5">{title}</p>
      <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
    </li>
  );
}

function Cta({ title, body, href, cta }: { title: string; body: string; href: string; cta: string }) {
  return (
    <div className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white rounded-xl p-8 my-10 text-center">
      <p className="text-xl font-bold mb-2">{title}</p>
      <p className="text-emerald-100 text-sm mb-5">{body}</p>
      <Link to={href} className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-7 py-3 rounded-lg text-sm transition-opacity">
        {cta} →
      </Link>
    </div>
  );
}

const SOURCES: [string, string][] = [
  [
    'https://environnement.brussels/citoyen/news/2024/fin-programmee-des-passoires-energetiques',
    'Bruxelles Environnement — Fin programmée des passoires énergétiques : échéances 1er janvier 2031, 2033 et 1er janvier 2046',
  ],
  [
    'https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/objectifs-peb-pour-chaque-logement-et-exigences-peb-en-cas-de-travaux',
    'Bruxelles Environnement — Objectifs PEB pour chaque logement (objectif PEB 275 et objectif PEB 150)',
  ],
  [
    'https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/reglementation-peb-quelles-consequences-en-cas-de-non-respect',
    'Bruxelles Environnement — Conséquences en cas de non-respect : calcul des amendes (2,5 € par kWh/an d\'écart) et sanctions pénales',
  ],
  [
    'https://be.brussels/fr/logement/location/bail-dhabitation/indexation-des-loyers/indexation-des-loyers-avec-facteur-de-correction',
    'Région de Bruxelles-Capitale — Indexation des loyers avec facteur de correction (tableaux officiels par classe PEB)',
  ],
  [
    'https://be.brussels/fr/logement/location/bail-dhabitation/indexation-des-loyers',
    "Région de Bruxelles-Capitale — Indexation des loyers : conditions générales (bail enregistré, certificat PEB valide, demande écrite)",
  ],
  [
    'https://immospector.kluwer.be/NewsView.aspx?contentdomains=IMMOPRO%2CIMMORES%2CIMMONEW%2CIMMOMOD&id=kl2782208&lang=fr',
    "Kluwer Immospector — Ordonnance du 13 octobre 2023 : formules du facteur de correction (art. 224/2 du Code bruxellois du Logement)",
  ],
  [
    'https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise',
    'Bruxelles Environnement — Le certificat PEB d\'un logement en Région bruxelloise (obligations, validité 10 ans)',
  ],
  [
    'https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/la-peb-en-copropriete',
    'Bruxelles Environnement — La PEB en copropriété : rôle de l\'ACP et co-responsabilité en 2033',
  ],
];

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Peut-on encore louer un bien classé G à Bruxelles en 2026 ?',
    a: "Oui. Aucune réglementation bruxelloise n'interdit aujourd'hui de mettre en location un logement classé F ou G. L'interdiction de louer les logements classés G existe en France depuis le 1er janvier 2025, sur base du DPE — c'est une réglementation française, qui ne s'applique pas en Région de Bruxelles-Capitale. À Bruxelles, la contrainte porte sur des objectifs à atteindre en 2033 et 2046, pas sur une interdiction immédiate.",
  },
  {
    q: 'Un bien classé F ou G peut-il encore être vendu à Bruxelles ?',
    a: "Oui, sans aucune restriction liée à la classe énergétique. La seule obligation est de disposer d'un certificat PEB valide, de mentionner la classe dans l'annonce et de remettre le certificat à l'acheteur. La classe elle-même n'empêche pas la vente : elle pèse sur le prix et sur la négociation.",
  },
  {
    q: "Que risque-t-on si le bien est encore F ou G en 2033 ?",
    a: "Une amende administrative calculée sur l'écart à l'objectif : 2,5 € par kWh/an d'écart, multiplié par la surface, avec un écart plafonné à 125 kWh/m²/an. L'amende n'est réclamée que si son montant total dépasse 125 €. Elle est donc proportionnelle à la surface et à l'ampleur du dépassement : il n'existe pas de montant forfaitaire.",
  },
  {
    q: "Pourquoi un bail récent sur un bien classé G s'indexe-t-il pleinement, et pas un bail ancien ?",
    a: "Parce que le facteur de correction n'est pas une pénalité liée au PEB, mais le prolongement du gel des loyers de la crise énergétique. Entre le 14 octobre 2022 et le 13 octobre 2023, l'indexation des logements les moins performants avait été gelée. L'ordonnance du 13 octobre 2023 a levé ce gel tout en empêchant définitivement les bailleurs de rattraper l'indexation perdue. Un bail entré en vigueur après le 14 octobre 2022 n'a jamais subi ce gel : il n'y a donc rien à neutraliser.",
  },
  {
    q: 'Puis-je indexer le loyer d\'un logement classé F ou G ?',
    a: "Oui, mais avec un facteur de correction si le bail a pris effet avant le 14 octobre 2022 et que le certificat PEB est E, F ou G. Ce facteur réduit l'indexation. Condition indispensable dans tous les cas : un certificat PEB valide doit avoir été transmis au locataire. Sans certificat valide, l'indexation ne peut pas être demandée.",
  },
  {
    q: "Dois-je avoir un certificat PEB même si je ne vends ni ne loue ?",
    a: "À terme, oui. La réglementation prévoit que tous les logements bruxellois disposent d'un certificat PEB pour le 1er janvier 2031, indépendamment de toute transaction. Cette date dépend toutefois de l'entrée en vigueur d'un Arrêté du Gouvernement, prévue au 1er janvier 2026 au plus tôt.",
  },
  {
    q: "Un certificat établi aujourd'hui couvre-t-il l'échéance 2033 ?",
    a: "Un certificat PEB est valable 10 ans. Établi en 2026, il reste valable jusqu'en 2036 — donc après l'échéance de 2033. Il fige votre point de départ, sert de base pour planifier les travaux et répond dès maintenant aux obligations de vente et de location.",
  },
  {
    q: 'En copropriété, qui est responsable : le copropriétaire ou le syndic ?',
    a: "Chaque copropriétaire reste responsable du certificat PEB et des objectifs de son propre logement. À partir de 2033, l'Association des Copropriétaires devient co-responsable du respect des objectifs par chaque logement de l'immeuble, et devra désigner un expert PEB chargé des parties communes.",
  },
  {
    q: "Ces échéances sont-elles définitives ?",
    a: "Le cadre est fixé, mais les dates dépendent de l'entrée en vigueur d'un Arrêté du Gouvernement attendu au 1er janvier 2026 au plus tôt. Bruxelles Environnement le précise explicitement. Le sens de la trajectoire, lui, ne fait pas débat : le seuil de 275 kWh/m²/an en 2033, puis 150 kWh/m²/an en 2046.",
  },
];

export default function BlogPostClasseFG() {
  return (
    <>
      <SEO
        title="Bien classé F ou G à Bruxelles : peut-on encore louer ou vendre en 2026 ?"
        description="Non, les logements classés F ou G ne sont pas interdits à la location à Bruxelles en 2026 — contrairement à la France. Calendrier officiel 2031, 2033, 2046, calcul réel des amendes et impact sur l'indexation du loyer."
        canonical="https://kcertipeb.be/blog/louer-vendre-bien-classe-f-g-bruxelles"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Bien classé F ou G à Bruxelles : peut-on encore louer ou vendre en 2026 ?',
          description:
            "Ce qui est vrai et ce qui est faux sur les logements classés F et G à Bruxelles : absence d'interdiction de louer, calendrier officiel 2031-2033-2046, calcul des amendes et facteur de correction sur l'indexation des loyers.",
          author: { '@type': 'Organization', name: 'KCertiPEB', url: 'https://kcertipeb.be' },
          publisher: {
            '@type': 'Organization',
            name: 'KCertiPEB',
            logo: { '@type': 'ImageObject', url: 'https://kcertipeb.be/logo.png' },
          },
          datePublished: '2026-09-21',
          dateModified: '2026-09-21',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop',
          url: 'https://kcertipeb.be/blog/louer-vendre-bien-classe-f-g-bruxelles',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://kcertipeb.be/blog/louer-vendre-bien-classe-f-g-bruxelles',
          },
          citation: SOURCES.map(([url, name]) => ({ '@type': 'CreativeWork', name, url })),
        }}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-3 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-emerald-700 transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-emerald-700 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-800 truncate">Bien classé F ou G</span>
          </nav>
        </div>
      </div>

      <article className="bg-gray-50 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            {/* Header */}
            <div className="p-8 sm:p-12 pb-0">
              <span className="inline-block rounded bg-emerald-700 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide mb-5">
                📅 Réglementation & échéances — Septembre 2026
              </span>
              <h1 id="top" className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Bien classé F ou G à Bruxelles : peut-on encore louer ou vendre en 2026 ?
              </h1>
              <p className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-l-4 border-emerald-600 pl-4 mb-8">
                <span>Par <strong className="text-emerald-700">KCertiPEB</strong> — Certificateurs PEB agréés Bruxelles Environnement</span>
                <span>|</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> <strong>21 septembre 2026</strong></span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 9 min de lecture</span>
              </p>
            </div>

            {/* Hero image */}
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
              alt="Façades d'immeubles à Bruxelles — logements classés F et G"
              loading="eager"
              className="w-full object-cover h-72 sm:h-96"
            />

            <div className="p-8 sm:p-12">

              {/* Lede — réponse directe */}
              <p className="text-gray-700 leading-relaxed mb-4 text-lg font-medium">
                <strong>Oui.</strong> En 2026, un logement classé F ou G peut toujours être loué et vendu à Bruxelles. Aucune réglementation bruxelloise n&apos;interdit aujourd&apos;hui la location d&apos;un bien selon sa classe énergétique.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                L&apos;interdiction de louer les logements classés G existe bien — mais <strong>en France</strong>, depuis le 1<sup>er</sup> janvier 2025, sur base du DPE. Cette confusion revient sans cesse chez les propriétaires bruxellois. À Bruxelles, la logique est différente : pas d&apos;interdiction immédiate, mais des <strong>objectifs chiffrés à atteindre</strong>, assortis d&apos;amendes calculées au kWh près. Et, dès aujourd&apos;hui, une conséquence financière bien réelle sur l&apos;indexation des loyers.
              </p>

              <Warn>
                <strong className="text-red-700">⚠️ Ne confondez pas les deux pays :</strong> France et Belgique ont des systèmes distincts. Le <strong>DPE</strong> français interdit la location des logements G depuis 2025 et des F à partir de 2028. Le <strong>certificat PEB</strong> bruxellois ne prévoit aucune interdiction de louer : il fixe des objectifs pour 2033 et 2046. Un article français lu de bonne foi peut vous faire prendre une décision coûteuse.
              </Warn>

              {/* TOC */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
                <p className="font-bold text-gray-900 mb-4">📋 Sommaire</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  {[
                    ['#interdiction', 'Non, un bien F ou G n\'est pas interdit à la location à Bruxelles'],
                    ['#calendrier', 'Le calendrier officiel : 2031, 2033, 2046'],
                    ['#indexation', 'Ce que votre classe PEB vous coûte déjà aujourd\'hui'],
                    ['#amendes', 'Comment se calcule réellement l\'amende de 2033'],
                    ['#decision', 'Bailleur ou vendeur : que faire maintenant ?'],
                    ['#faq', 'FAQ — Logements classés F et G à Bruxelles'],
                    ['#sources', 'Sources officielles'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="text-emerald-700 hover:underline font-medium">{label}</a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* SECTION 1 */}
              <section id="interdiction" className="scroll-mt-24">
                <H2 id="interdiction">1. Non, un bien F ou G n&apos;est pas interdit à la location à Bruxelles</H2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  C&apos;est la question qui revient le plus souvent chez les propriétaires bailleurs bruxellois, et la réponse est claire : <strong>en septembre 2026, aucune disposition ne conditionne la mise en location d&apos;un logement à sa classe énergétique en Région de Bruxelles-Capitale</strong>. Un bien classé G peut être mis en location comme un bien classé B.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ce qui est obligatoire, en revanche, l&apos;est depuis longtemps : disposer d&apos;un <strong>certificat PEB valide</strong>, mentionner la classe énergétique dans l&apos;annonce, et remettre le certificat au locataire ou à l&apos;acheteur. C&apos;est l&apos;<em>absence de certificat</em> qui est sanctionnée — pas la lettre qui y figure. Nous détaillons les montants dans notre article sur les{' '}
                  <Link to="/blog/amende-sans-certificat-peb-bruxelles" className="text-emerald-700 underline">amendes en cas d&apos;absence de certificat PEB</Link>.
                </p>
                <H3>D&apos;où vient la confusion ?</H3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  De France. Le <strong>DPE</strong> (Diagnostic de Performance Énergétique) français interdit la mise en location des logements classés G depuis le 1<sup>er</sup> janvier 2025, avec les classes F visées en 2028 et E en 2034. Ces échéances sont abondamment relayées en ligne et remontent dans les recherches faites depuis la Belgique.
                </p>
                <Info>
                  <strong className="text-blue-700">ℹ️ Deux systèmes, deux logiques :</strong> la France <strong>interdit la location</strong> par palier de classe. Bruxelles fixe un <strong>seuil de consommation à atteindre</strong> (275 kWh/m²/an en 2033) et sanctionne l&apos;écart à ce seuil par une amende proportionnelle. Le résultat pratique diffère beaucoup : à Bruxelles, vous gardez la main sur le calendrier de vos travaux.
                </Info>
              </section>

              {/* SECTION 2 */}
              <section id="calendrier" className="scroll-mt-24">
                <H2 id="calendrier">2. Le calendrier officiel : 2031, 2033, 2046</H2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Voici les échéances telles que les publie{' '}
                  <Src href="https://environnement.brussels/citoyen/news/2024/fin-programmee-des-passoires-energetiques">Bruxelles Environnement</Src>. Elles structurent toute décision de rénovation, de vente ou de conservation d&apos;un bien énergivore.
                </p>

                <ol className="relative border-l-2 border-gray-100 ml-3 my-8">
                  <Milestone date="Aujourd'hui — 2026" title="Certificat PEB obligatoire en cas de vente ou de location" tone="now">
                    Obligation en vigueur depuis 2011 pour la vente et 2012 pour la location. Le certificat est valable <strong>10 ans</strong> et doit figurer dans l&apos;annonce. Aucune restriction liée à la classe.
                  </Milestone>
                  <Milestone date="1er janvier 2031" title="Certificat PEB obligatoire pour tous les logements" tone="soon">
                    « Tous les logements devront alors disposer d&apos;un certificat PEB pour le 1<sup>er</sup> janvier 2031 » — y compris ceux que vous occupez vous-même ou qui ne font l&apos;objet d&apos;aucune transaction.
                  </Milestone>
                  <Milestone date="2033" title="Objectif PEB 275 — les classes F et G doivent disparaître" tone="later">
                    « D&apos;ici 2033, tous les logements devront au moins atteindre l&apos;objectif PEB 275 », soit une consommation d&apos;énergie primaire maximale de <strong>275 kWh/m²/an</strong> — ce qui correspond aujourd&apos;hui à la classe E. En copropriété, l&apos;ACP devient <strong>co-responsable</strong> à cette date.
                  </Milestone>
                  <Milestone date="1er janvier 2046" title="Objectif PEB 150 — le seuil se resserre" tone="later">
                    Le plafond descend à <strong>150 kWh/m²/an</strong>, soit environ la classe C actuelle. Les logements aujourd&apos;hui classés D ou E devront eux aussi avoir été rénovés. Les logements publics visent cet objectif dès 2040.
                  </Milestone>
                </ol>

                <Tip>
                  <strong className="text-amber-700">💡 Nuance importante, rarement mentionnée :</strong> Bruxelles Environnement précise que « ces dates dépendent de l&apos;entrée en vigueur d&apos;un Arrêté du Gouvernement prévue le 1<sup>er</sup> janvier 2026 au plus tôt ». Le calendrier peut donc encore glisser dans son exécution. La trajectoire, elle, est actée : 275 kWh/m²/an, puis 150.
                </Tip>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Si votre bien est en immeuble à appartements, la répartition des rôles entre copropriétaire, syndic et ACP mérite un détour : nous l&apos;avons détaillée dans notre{' '}
                  <Link to="/blog/certificat-peb-copropriete-bruxelles" className="text-emerald-700 underline">guide PEB en copropriété pour syndics et copropriétaires</Link>.
                </p>
              </section>

              {/* SECTION 3 */}
              <section id="indexation" className="scroll-mt-24">
                <H2 id="indexation">3. Ce que votre classe PEB vous coûte déjà aujourd&apos;hui</H2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  C&apos;est le point que la plupart des propriétaires découvrent trop tard. Les échéances de 2033 sont lointaines, mais <strong>une classe E, F ou G a une conséquence financière immédiate</strong> : elle réduit le montant dont vous pouvez indexer le loyer.
                </p>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Selon la{' '}
                  <Src href="https://be.brussels/fr/logement/location/bail-dhabitation/indexation-des-loyers/indexation-des-loyers-avec-facteur-de-correction">Région de Bruxelles-Capitale</Src>, un <strong>facteur de correction</strong> s&apos;applique à l&apos;indexation lorsque les trois conditions suivantes sont réunies :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-5">
                  <li>le bail a pris effet <strong>avant le 14 octobre 2022</strong> ;</li>
                  <li>le certificat PEB du logement est <strong>E, F ou G</strong> ;</li>
                  <li>le bien est loué sur le marché privé ou public (hors SISP et Fonds du Logement).</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Le résultat de l&apos;indexation normale est alors <strong>multiplié par un coefficient inférieur à 1</strong>, qui dépend de la classe et du mois anniversaire du bail. Les logements <strong>F et G subissent la correction la plus forte</strong> — environ deux fois celle appliquée aux logements E.
                </p>

                <H3>Pourquoi seuls les vieux baux sont-ils pénalisés ?</H3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La règle paraît illogique au premier abord : un bail signé <em>récemment</em> sur un bien classé G s&apos;indexe pleinement, alors qu&apos;un bail ancien sur le même bien est amputé. On s&apos;attendrait à l&apos;inverse.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L&apos;explication tient à l&apos;histoire du dispositif. Entre le <strong>14 octobre 2022 et le 13 octobre 2023</strong>, en pleine crise énergétique, la Région avait <strong>gelé l&apos;indexation</strong> des loyers des logements les moins performants. L&apos;<a href="https://immospector.kluwer.be/NewsView.aspx?contentdomains=IMMOPRO%2CIMMORES%2CIMMONEW%2CIMMOMOD&id=kl2782208&lang=fr" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">ordonnance du 13 octobre 2023</a> a levé ce gel, mais en instaurant un facteur de correction permanent destiné à <strong>empêcher les bailleurs de rattraper l&apos;indexation perdue</strong> pendant l&apos;année de blocage.
                </p>
                <Info>
                  <strong className="text-blue-700">ℹ️ La formule officielle le confirme :</strong> pour les classes <strong>F et G</strong>, le facteur vaut <em>indice de l&apos;année N-1 ÷ indice de l&apos;année N</em> — soit exactement l&apos;annulation d&apos;une année d&apos;indexation. Pour la classe <strong>E</strong>, il vaut <em>50 % × ((indice N-1 + indice N) ÷ indice N)</em>, soit la moitié. Ce n&apos;est donc <strong>pas une pénalité liée au PEB</strong> : c&apos;est le gel de 2022-2023 rendu définitif.
                </Info>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tout s&apos;éclaire alors : un bail entré en vigueur <strong>après le 14 octobre 2022 n&apos;a jamais subi le gel</strong>. Il n&apos;y a donc rien à neutraliser, et son loyer s&apos;indexe normalement — quelle que soit la classe énergétique du bien.
                </p>

                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-900 text-white">
                        <th className="text-left p-3 font-semibold">Classe PEB</th>
                        <th className="text-left p-3 font-semibold">Bail avant le 14/10/2022</th>
                        <th className="text-left p-3 font-semibold">Bail à partir du 14/10/2022</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['A à D', 'Aucun facteur de correction', 'Aucun facteur de correction'],
                        ['E', 'Facteur de correction — réduction de 1 à 5,5 %', 'Aucun facteur de correction'],
                        ['F et G', 'Facteur de correction — réduction de 2 à 11 %', 'Aucun facteur de correction'],
                      ].map(([classe, avant, apres], i) => (
                        <tr key={classe} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                          <td className="p-3 font-bold border-b border-gray-100">{classe}</td>
                          <td className="p-3 border-b border-gray-100">{avant}</td>
                          <td className="p-3 border-b border-gray-100">{apres}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-xs mb-5">
                  Les coefficients exacts sont publiés mois par mois par la Région, en deux colonnes seulement : <strong>PEB = E</strong> et <strong>PEB = F-G</strong>. Les classes A à D ne sont pas concernées. Pour un bail F ou G dont la date anniversaire tombe en janvier, le facteur officiel est d&apos;environ 0,904 : une indexation qui aurait porté le loyer à 1 000 € le ramène à environ 904 €, soit près de <strong>1 150 € de manque à gagner sur l&apos;année</strong>.
                </p>

                <H3>Trois conditions à remplir avant toute indexation</H3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le facteur de correction ne joue que si vous avez déjà le droit d&apos;indexer. Quelle que soit la classe énergétique et quelle que soit la date du bail, la Région impose trois conditions préalables :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-5">
                  <li>le <strong>bail doit être enregistré</strong> ;</li>
                  <li>un <strong>certificat PEB valide</strong> doit avoir été communiqué au locataire ;</li>
                  <li>l&apos;indexation n&apos;est <strong>pas automatique</strong> : elle doit être demandée par écrit, et cette demande n&apos;a d&apos;effet rétroactif que sur les <strong>trois mois</strong> qui précèdent.</li>
                </ul>

                <Warn>
                  <strong className="text-red-700">⚠️ Sans certificat valide, pas d&apos;indexation du tout :</strong> la Région est explicite — « le certificat doit être valide au moment de la demande d&apos;indexation ; s&apos;il est expiré, un nouveau certificat doit avoir été transmis » au locataire. Un certificat périmé ne bloque pas seulement une vente : il vous prive purement et simplement du droit d&apos;indexer le loyer.
                </Warn>

                <Success>
                  <strong className="text-emerald-700">✅ À retenir :</strong> les trois conditions sont <strong>cumulatives</strong>. Le facteur ne s&apos;applique donc que <strong>tant que le certificat du logement indique E, F ou G</strong> : faire établir un nouveau certificat attestant une classe <strong>D ou meilleure</strong> fait tomber la deuxième condition et rétablit l&apos;indexation pleine. Pour un bailleur, améliorer sa classe produit ainsi un effet sur les revenus locatifs <strong>bien avant l&apos;échéance de 2033</strong>. L&apos;ordonnance ne réglant pas ce cas de figure noir sur blanc, faites confirmer votre situation précise auprès de Bruxelles Logement avant d&apos;indexer.
                </Success>
              </section>

              <Cta
                title="Votre certificat PEB est-il toujours valide ?"
                body="Un certificat expiré vous prive du droit d'indexer le loyer et bloque toute vente. KCertiPEB établit votre certificat sous 48h dans les 19 communes bruxelloises."
                href="/reserver"
                cta="Vérifier ma situation"
              />

              {/* SECTION 4 */}
              <section id="amendes" className="scroll-mt-24">
                <H2 id="amendes">4. Comment se calcule réellement l&apos;amende de 2033</H2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  On lit souvent des montants forfaitaires spectaculaires. La réalité est plus nuancée, et surtout <strong>proportionnelle</strong>. Selon{' '}
                  <Src href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/reglementation-peb-quelles-consequences-en-cas-de-non-respect">Bruxelles Environnement</Src>, l&apos;amende pour non-respect des objectifs PEB s&apos;établit ainsi :
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-2">Formule officielle</p>
                  <p className="text-lg font-extrabold text-emerald-900 mb-2">
                    2,5 € × surface (m²) × écart (kWh/m²/an)
                  </p>
                  <p className="text-xs text-gray-600">
                    Écart plafonné à 125 kWh/m²/an · Amende réclamée uniquement si le total dépasse 125 €
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-5">
                  Trois conséquences pratiques, souvent mal comprises :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-5">
                  <li><strong>Il n&apos;y a pas de montant maximal universel.</strong> L&apos;amende dépend de la surface : un studio et un duplex ne risquent pas la même chose.</li>
                  <li><strong>Un dépassement minime coûte peu.</strong> Frôler le seuil de quelques kWh reste sous la barre des 125 € et n&apos;est pas réclamé.</li>
                  <li><strong>Le plafond de 125 kWh/m² limite la casse</strong> pour les biens très énergivores — mais il est atteint dès 400 kWh/m²/an face à l&apos;objectif 275.</li>
                </ul>

                <H3>Les exemples officiels, pour un appartement de 85 m²</H3>
                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-900 text-white">
                        <th className="text-left p-3 font-semibold">Consommation du bien</th>
                        <th className="text-left p-3 font-semibold">Amende — objectif 2033 (275)</th>
                        <th className="text-left p-3 font-semibold">Amende — objectif 2046 (150)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['276 kWh/m²/an (juste au-dessus)', '212,50 €', '26 562,50 €'],
                        ['500 kWh/m²/an (classe G)', '26 562,50 €', '26 562,50 €'],
                      ].map(([conso, a2033, a2046], i) => (
                        <tr key={conso} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                          <td className="p-3 border-b border-gray-100">{conso}</td>
                          <td className="p-3 border-b border-gray-100 font-bold text-red-700">{a2033}</td>
                          <td className="p-3 border-b border-gray-100 font-bold text-red-700">{a2046}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-xs mb-5">
                  Exemples publiés par Bruxelles Environnement. Le montant de 26 562,50 € correspond au plafond atteint <strong>pour ce bien de 85 m²</strong> — il n&apos;est pas un maximum général. Des circonstances atténuantes peuvent être invoquées lors de la notification.
                </p>

                <Info>
                  <strong className="text-blue-700">ℹ️ À ne pas confondre avec les sanctions de procédure.</strong> Ne pas fournir de certificat PEB au locataire ou à l&apos;acheteur relève d&apos;un régime distinct : une peine d&apos;emprisonnement de 8 jours à 2 ans et/ou une amende de 50 € à 100 000 €, généralement remplacée par une amende administrative alternative. Ce sont deux mécanismes indépendants — voir notre article sur les{' '}
                  <Link to="/blog/amende-sans-certificat-peb-bruxelles" className="text-blue-700 underline">amendes PEB à Bruxelles</Link>.
                </Info>
              </section>

              {/* SECTION 5 */}
              <section id="decision" className="scroll-mt-24">
                <H2 id="decision">5. Bailleur ou vendeur : que faire maintenant ?</H2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  La bonne décision dépend de votre horizon. Voici comment se posent concrètement les arbitrages pour un bien classé F ou G en 2026.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  {[
                    {
                      icon: '🔑',
                      title: 'Vous louez et gardez le bien',
                      body: "C'est le profil le plus exposé. Vous cumulez la correction sur l'indexation aujourd'hui et l'amende de 2033 demain. Priorisez les travaux à fort impact : l'isolation de la toiture suffit souvent à passer sous les 275 kWh/m²/an.",
                    },
                    {
                      icon: '🏠',
                      title: 'Vous vendez à court terme',
                      body: "Rénover avant de vendre est rarement rentable si la vente est proche. En revanche, un certificat récent et des factures de travaux retrouvées peuvent suffire à gagner une classe — et à désamorcer la décote lors de la négociation.",
                    },
                    {
                      icon: '📄',
                      title: 'Votre certificat a plus de 10 ans',
                      body: "C'est l'urgence à traiter en premier. Un certificat périmé bloque la vente, empêche l'indexation du loyer et vous expose aux sanctions de procédure. Le renouveler coûte une fraction du risque encouru.",
                    },
                    {
                      icon: '🏢',
                      title: 'Vous êtes en copropriété',
                      body: "Chaque appartement a besoin de son propre certificat. À partir de 2033, l'ACP devient co-responsable, ce qui rend la coordination collective plus économique qu'une démarche individuelle tardive.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>

                <Success>
                  <strong className="text-emerald-700">✅ Le premier geste, dans tous les cas :</strong> connaître votre position exacte. Un certificat PEB donne votre consommation réelle en kWh/m²/an — la seule donnée qui permette de savoir si vous êtes à 20 ou à 200 kWh de l&apos;objectif 2033, et donc de chiffrer l&apos;effort à fournir. Établi en 2026, il reste valable jusqu&apos;en 2036.
                </Success>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour savoir quels travaux engager et dans quel ordre, consultez notre{' '}
                  <Link to="/blog/ameliorer-certificat-peb-bruxelles" className="text-emerald-700 underline">guide des travaux prioritaires pour améliorer son certificat PEB</Link>. Si vous hésitez entre un certificat et une analyse approfondie, notre{' '}
                  <Link to="/blog/difference-peb-audit-energetique" className="text-emerald-700 underline">comparatif entre PEB et audit énergétique</Link> éclaire le choix. Et pour le budget, tout est détaillé dans{' '}
                  <Link to="/blog/combien-coute-certificat-peb-bruxelles" className="text-emerald-700 underline">combien coûte un certificat PEB à Bruxelles</Link>.
                </p>
              </section>

              {/* SECTION 6 : FAQ */}
              <section id="faq" className="scroll-mt-24">
                <H2 id="faq">6. FAQ — Logements classés F et G à Bruxelles</H2>
                <div className="divide-y divide-gray-100">
                  {FAQ.map(({ q, a }) => (
                    <div key={q} className="py-5">
                      <p className="font-bold text-gray-900 mb-2">{q}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <Cta
                title="Connaître votre classe PEB, c'est reprendre la main"
                body="KCertiPEB — certificateurs agréés Bruxelles Environnement. Certificat sous 48h dans les 19 communes bruxelloises, appartement dès 120 € TVAC, maison dès 210 € TVAC."
                href="/reserver"
                cta="Demander mon certificat PEB"
              />

              {/* Voir aussi */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-bold text-gray-900 mb-3">🔗 Voir aussi sur le blog KCertiPEB</p>
                <ul className="space-y-2 text-sm">
                  {[
                    ['/blog/ameliorer-certificat-peb-bruxelles', 'Améliorer son certificat PEB : guide des travaux prioritaires 2026'],
                    ['/blog/amende-sans-certificat-peb-bruxelles', 'Amende sans certificat PEB à Bruxelles : montants et sanctions'],
                    ['/blog/certificat-peb-copropriete-bruxelles', 'Certificat PEB en copropriété : guide pour syndics et copropriétaires'],
                    ['/blog/combien-coute-certificat-peb-bruxelles', 'Combien coûte un certificat PEB à Bruxelles en 2026 ?'],
                    ['/blog/difference-peb-audit-energetique', 'Différence entre certificat PEB et audit énergétique'],
                    ['/blog/certificat-peb-bruxelles-guide-complet-2026', 'Certificat PEB à Bruxelles : le guide complet 2026'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link to={href} className="text-emerald-700 hover:underline">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sources */}
              <div id="sources" className="bg-gray-50 rounded-xl p-6 mb-6 scroll-mt-24">
                <p className="font-bold text-gray-900 mb-3">📚 Sources officielles</p>
                <ul className="list-disc list-inside space-y-2 text-xs text-gray-500">
                  {SOURCES.map(([href, label]) => (
                    <li key={href}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">{label}</a>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-200">
                  Article rédigé sur base des publications officielles de Bruxelles Environnement et de la Région de Bruxelles-Capitale, consultées le 21 septembre 2026. Les échéances réglementaires dépendent de l&apos;entrée en vigueur d&apos;un Arrêté du Gouvernement et peuvent évoluer.
                </p>
              </div>

              {/* Navigation articles */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between">
                <Link
                  to="/blog/ameliorer-certificat-peb-bruxelles"
                  className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-emerald-700 transition-colors"
                >
                  ← Améliorer son certificat PEB
                </Link>
                <Link
                  to="/blog"
                  className="group flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
                >
                  Tous les articles <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </article>
    </>
  );
}
