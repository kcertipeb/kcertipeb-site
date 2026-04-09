import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function BlogPostCertificatPEB() {
  return (
    <>
      <SEO
        title="Certificat PEB Bruxelles : Guide Complet 2026 | KCertiPEB"
        description="Certificat PEB à Bruxelles : obligations, classes A-G, prix, réforme avril 2026. Guide complet par KCertiPEB, certificateurs agréés Bruxelles Environnement."
        canonical="https://kcertipeb.be/blog/certificat-peb-bruxelles-guide-complet-2026"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Certificat PEB à Bruxelles : Guide Complet 2026',
          description: 'Certificat PEB à Bruxelles : obligations, classes A-G, prix, réforme avril 2026.',
          author: { '@type': 'Organization', name: 'KCertiPEB', url: 'https://kcertipeb.be' },
          publisher: { '@type': 'Organization', name: 'KCertiPEB', logo: { '@type': 'ImageObject', url: 'https://kcertipeb.be/logo.png' } },
          datePublished: '2026-04-09',
          dateModified: '2026-04-09',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
          url: 'https://kcertipeb.be/blog/certificat-peb-bruxelles-guide-complet-2026',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kcertipeb.be/blog/certificat-peb-bruxelles-guide-complet-2026' },
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
            <span className="text-gray-800 truncate">Guide Complet 2026</span>
          </nav>
        </div>
      </div>

      <article className="bg-gray-50 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            {/* Header */}
            <div className="p-8 sm:p-12 pb-0">
              <span className="inline-block rounded bg-red-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide mb-5">
                ⚡ Actualité — Avril 2026
              </span>

              <h1 id="top" className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Certificat PEB à Bruxelles : Guide Complet 2026
              </h1>

              <p className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-l-4 border-emerald-600 pl-4 mb-8">
                <span>Par <strong className="text-emerald-700">KCertiPEB</strong> — Certificateurs PEB agréés Bruxelles Environnement</span>
                <span>|</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Mis à jour le <strong>9 avril 2026</strong></span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min de lecture</span>
              </p>
            </div>

            {/* Hero image */}
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop"
              alt="Façade d'immeuble bruxellois — performance énergétique des bâtiments"
              loading="eager"
              className="w-full object-cover h-72 sm:h-96"
            />

            <div className="p-8 sm:p-12">

              {/* Intro */}
              <p className="text-gray-700 leading-relaxed mb-5">
                Le <strong>certificat PEB</strong> (Performance Énergétique des Bâtiments) est le document officiel qui classe votre bien de <strong>A</strong> (très économe) à <strong>G</strong> (très énergivore). Obligatoire pour toute vente ou location à Bruxelles depuis 2011, il est aujourd'hui au cœur d'une réforme majeure : <strong>dès 2033, les passoires énergétiques (classes F et G) seront interdites à Bruxelles</strong>. KCertiPEB, certificateur agréé par Bruxelles Environnement, vous guide pas à pas.
              </p>

              {/* Alert */}
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4 mb-8 text-sm text-gray-700">
                <strong className="text-red-700">🔴 Réforme en cours :</strong> Le Gouvernement bruxellois a adopté un calendrier progressif d'élimination des passoires énergétiques. <strong>D'ici 2033</strong>, tous les logements bruxellois devront atteindre l'objectif PEB 275 kWh/m²/an — ce qui correspond aux classes F et G actuelles. En 2026, la Région bruxelloise déploie également un nouveau modèle de certificat PEB et un nouveau rôle d'Expert PEB. Il est donc urgent d'anticiper.
              </div>

              {/* Table of contents */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mb-10">
                <h2 className="text-base font-bold text-gray-900 mb-4 border-0 p-0 m-0 mt-0">📋 Sommaire — Mis à jour le 9 avril 2026</h2>
                <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-700">
                  <li><a href="#actu" className="hover:underline">Actualité : réforme PEB avril 2026</a></li>
                  <li><a href="#definition" className="hover:underline">Qu'est-ce qu'un certificat PEB ?</a></li>
                  <li><a href="#obligations" className="hover:underline">Certificat PEB obligatoire : qui est concerné ?</a></li>
                  <li><a href="#classes" className="hover:underline">Classes énergétiques A à G</a></li>
                  <li><a href="#regions" className="hover:underline">Certificat PEB : Bruxelles vs Wallonie vs Flandre</a></li>
                  <li><a href="#comment" className="hover:underline">Comment obtenir un certificat PEB ?</a></li>
                  <li><a href="#preparation" className="hover:underline">Préparer la visite PEB</a></li>
                  <li><a href="#prix" className="hover:underline">Prix du certificat PEB à Bruxelles</a></li>
                  <li><a href="#faq" className="hover:underline">FAQ</a></li>
                  <li><a href="#sources" className="hover:underline">Sources</a></li>
                </ol>
              </div>

              {/* ── SECTION 1 ── */}
              <section id="actu" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  1. Actualité : la réforme du certificat PEB change tout en 2026
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  À Bruxelles, <strong>le calendrier d'élimination des passoires énergétiques est désormais acté</strong> dans le Code bruxellois Air-Climat-Énergie (CoBrACE). D'ici <strong>2033</strong>, tous les logements devront atteindre l'objectif PEB 275 kWh/m²/an — ce qui correspond aujourd'hui aux classes F et G. D'ici <strong>2045</strong>, l'objectif sera abaissé à 150 kWh/m²/an. Ces échéances concernent tous les logements : qu'ils soient à vendre, à louer ou occupés par leur propriétaire.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Par ailleurs, le Gouvernement bruxellois a adopté une <strong>réforme profonde du certificat PEB</strong> lui-même : les quatre modèles de certificats existants seront fusionnés en deux (un pour les habitations individuelles, un pour le non résidentiel), un nouveau logiciel de calcul unique sera déployé, et le rôle de "certificateur" évolue vers celui d'<strong>Expert PEB</strong>, formé pour conseiller les propriétaires dans leurs travaux de rénovation.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 mb-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">💡 Le saviez-vous ?</strong> À Bruxelles, le bâtiment représente environ <strong>70% des émissions de CO₂</strong>{' '}
                  (<a href="https://environnement.brussels/pro/reglementation/textes-de-loi/reglementation-sur-la-performance-energetique-des-batiments-peb" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">source : Bruxelles Environnement — Réglementation PEB</a>).{' '}
                  La Région vise la neutralité carbone d'ici 2050, avec une étape clé en 2033 (max 275 kWh/m²/an) et 2045 (max 150 kWh/m²/an).
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Conséquence directe : la demande de certificats PEB a explosé. Les propriétaires qui n'ont pas encore fait certifier leur bien — ou dont le certificat est périmé — doivent agir rapidement.{' '}
                  <Link to="/contact" className="text-emerald-700 hover:underline">Contacter KCertiPEB</Link> pour obtenir un rendez-vous sous 48h.
                </p>
              </section>

              {/* ── SECTION 2 ── */}
              <section id="definition" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  2. Qu'est-ce qu'un certificat PEB ?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Selon Bruxelles Environnement</a>, le <strong>certificat PEB est la carte d'identité énergétique officielle d'un bien immobilier</strong>. Il évalue la consommation théorique en énergie primaire (chauffage, eau chaude, ventilation) et attribue une classe de <strong>A</strong> (très économe) à <strong>G</strong> (très énergivore) — comme l'étiquette énergie d'un électroménager.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-3">Ce que contient le certificat PEB</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 mb-4 text-sm">
                  <li>La <strong>classe énergétique</strong> (A à G)</li>
                  <li>La <strong>consommation en kWh/m²/an</strong></li>
                  <li>Le détail isolation / chauffage / ventilation / vitrages</li>
                  <li>Des <strong>recommandations de travaux</strong> personnalisées</li>
                  <li>Un numéro unique + QR code enregistré chez Bruxelles Environnement</li>
                </ul>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-3">Caractéristiques clés</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left p-3">Caractéristique</th>
                        <th className="text-left p-3">Détail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-gray-200 font-medium">Validité</td>
                        <td className="p-3 border-b border-gray-200">10 ans (un nouveau certificat est recommandé après travaux importants)</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200 font-medium">Qui le délivre ?</td>
                        <td className="p-3 border-b border-gray-200">Uniquement un <a href="https://www.kcertipeb.be" className="text-emerald-700 hover:underline">certificateur PEB agréé — comme KCertiPEB</a></td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200 font-medium">Consommation mesurée</td>
                        <td className="p-3 border-b border-gray-200">Théorique (le bâtiment, pas vos habitudes personnelles)</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200 font-medium">Délai de remise</td>
                        <td className="p-3 border-b border-gray-200">48 à 72h après la visite</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 mt-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">💡 Bon à savoir :</strong> Le PEB évalue le <em>bâtiment</em>, pas vos habitudes de vie. Votre consommation réelle peut différer de la note obtenue. La réforme 2026 prévoit d'intégrer progressivement les factures réelles dans le calcul.
                </div>
              </section>

              {/* CTA 1 */}
              <div className="bg-emerald-700 text-white rounded-xl p-7 mb-10 text-center">
                <p className="font-bold text-lg mb-2">Besoin d'un certificat PEB à Bruxelles ?</p>
                <p className="text-emerald-100 text-sm mb-4">KCertiPEB — certificateurs agréés Bruxelles Environnement. Intervention rapide dans les 19 communes.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Demander un devis certificat PEB →
                </Link>
              </div>

              {/* ── SECTION 3 ── */}
              <section id="obligations" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  3. Certificat PEB obligatoire : qui est concerné ?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le certificat PEB est <strong>obligatoire à Bruxelles depuis 2011</strong>, conformément à{' '}
                  <a href="https://environnement.brussels/pro/reglementation/textes-de-loi/le-code-bruxellois-de-lair-du-climat-et-de-la-maitrise-de-lenergie-cobrace" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">l'ordonnance COBRACE du 2 mai 2013</a>, elle-même issue de{' '}
                  <a href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=celex%3A32002L0091" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">la directive européenne 2002/91/CE</a>.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-2">Vente</h3>
                <p className="text-gray-700 text-sm mb-4">La classe PEB doit figurer dans toute annonce immobilière. L'original est remis au notaire lors de l'acte authentique. Sans certificat PEB valide, la transaction peut être bloquée.</p>
                <h3 className="text-lg font-bold text-emerald-700 mt-4 mb-2">Location</h3>
                <p className="text-gray-700 text-sm mb-4">La classe PEB est obligatoire dans l'annonce, une copie est remise au locataire et le numéro de certificat doit figurer dans le bail. Obligation en vigueur depuis 2019 pour la location.</p>
                <h3 className="text-lg font-bold text-emerald-700 mt-4 mb-3">Sanctions sans certificat PEB</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left p-3">Situation</th>
                        <th className="text-left p-3">Amende</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Certificat non fourni</td>
                        <td className="p-3 border-b border-gray-200 font-bold">200 € à 1 000 €</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200">Certificat périmé</td>
                        <td className="p-3 border-b border-gray-200 font-bold">300 € à 3 000 €</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Objectifs 2033 non respectés</td>
                        <td className="p-3 border-b border-gray-200 font-bold">jusqu'à 26 562 €</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200">Louer un bien classé G (dès 2026)</td>
                        <td className="p-3 border-b border-gray-200 font-bold">Nullité du bail possible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-2">Exemptions</h3>
                <p className="text-gray-700 text-sm mb-4">Monuments classés, bâtiments voués à la démolition (moins de 2 ans), logements inférieurs à 18 m², bâtiments industriels non résidentiels faiblement consommateurs.</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">💡 Bon à savoir :</strong> Aujourd'hui à Bruxelles, un propriétaire peut légalement louer un bien classé G à condition de disposer d'un certificat PEB valide. En revanche, <strong>dès 2033</strong>, les logements dépassant 275 kWh/m²/an (classes F et G actuelles) devront avoir été rénovés. Un mécanisme de sanctions progressives est déjà en place pour accompagner cette transition. Plus vous anticipez les travaux, plus vous évitez les amendes et valorisez votre bien.
                </div>
              </section>

              {/* ── SECTION 4 ── */}
              <section id="classes" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  4. Classes énergétiques du certificat PEB : de A à G
                </h2>
                <p className="text-gray-700 mb-4">L'échelle PEB bruxelloise comporte <strong>7 classes</strong>, de A (≤ 45 kWh/m²/an) à G ({'>'} 345 kWh/m²/an). La majorité des biens bruxellois se situent entre D et F.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left p-3">Classe</th>
                        <th className="text-left p-3">Consommation (kWh/m²/an)</th>
                        <th className="text-left p-3">Performance</th>
                        <th className="text-left p-3">Type de bien</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-gray-200"><span className="inline-block px-2 py-0.5 rounded font-bold text-white text-xs bg-green-900">A</span></td>
                        <td className="p-3 border-b border-gray-200">≤ 45</td>
                        <td className="p-3 border-b border-gray-200">Basse consommation</td>
                        <td className="p-3 border-b border-gray-200">Neuf ou rénové en profondeur</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200"><span className="inline-block px-2 py-0.5 rounded font-bold text-white text-xs bg-green-600">B</span></td>
                        <td className="p-3 border-b border-gray-200">46 – 95</td>
                        <td className="p-3 border-b border-gray-200">Bonne performance</td>
                        <td className="p-3 border-b border-gray-200">Construction récente ou rénovation performante</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200"><span className="inline-block px-2 py-0.5 rounded font-bold text-white text-xs bg-lime-500">C</span></td>
                        <td className="p-3 border-b border-gray-200">96 – 150</td>
                        <td className="p-3 border-b border-gray-200">Correcte</td>
                        <td className="p-3 border-b border-gray-200">Bien rénové avec isolation et bon chauffage</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200"><span className="inline-block px-2 py-0.5 rounded font-bold text-gray-800 text-xs bg-yellow-400">D</span></td>
                        <td className="p-3 border-b border-gray-200">151 – 210</td>
                        <td className="p-3 border-b border-gray-200">Moyenne</td>
                        <td className="p-3 border-b border-gray-200">Standard, partiellement rénové</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200"><span className="inline-block px-2 py-0.5 rounded font-bold text-white text-xs bg-orange-500">E</span></td>
                        <td className="p-3 border-b border-gray-200">211 – 275</td>
                        <td className="p-3 border-b border-gray-200">Faible</td>
                        <td className="p-3 border-b border-gray-200">Ancien, peu ou pas isolé</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200"><span className="inline-block px-2 py-0.5 rounded font-bold text-white text-xs bg-red-600">F</span></td>
                        <td className="p-3 border-b border-gray-200">276 – 345</td>
                        <td className="p-3 border-b border-gray-200">Très énergivore</td>
                        <td className="p-3 border-b border-gray-200">Rénovation urgente recommandée</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200"><span className="inline-block px-2 py-0.5 rounded font-bold text-white text-xs bg-red-900">G</span></td>
                        <td className="p-3 border-b border-gray-200">{'>'} 345</td>
                        <td className="p-3 border-b border-gray-200">Passoire énergétique</td>
                        <td className="p-3 border-b border-gray-200">Sans isolation — <strong>visé par l'interdiction bruxelloise dès 2033</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 mt-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">💡 Le saviez-vous ?</strong> Un bien classé <strong>A ou B se vend en moyenne 5 à 15% plus cher</strong> qu'un bien classé E, F ou G. Le certificat PEB est devenu un critère de décision majeur pour les acheteurs et locataires à Bruxelles.
                </div>
              </section>

              {/* ── SECTION 5 ── */}
              <section id="regions" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  5. Certificat PEB : Bruxelles, Wallonie et Flandre
                </h2>
                <p className="text-gray-700 mb-4">Chaque région belge a sa propre législation PEB. Un certificat délivré en Wallonie n'est <strong>pas valable à Bruxelles</strong> et vice-versa.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="p-3"></th>
                        <th className="text-left p-3">Bruxelles-Capitale</th>
                        <th className="text-left p-3">Wallonie</th>
                        <th className="text-left p-3">Flandre</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Autorité', 'Bruxelles Environnement', 'SPW Énergie', 'VEKA'],
                        ['Nom', 'Certificat PEB', 'Certificat PEB', 'EPC'],
                        ['Échelle', 'A à G', 'A++ à G', 'A+ à F + label'],
                        ['Obligatoire', 'Depuis 2011', 'Depuis 2010', 'Depuis 2008'],
                        ['Validité', '10 ans', '10 ans', '10 ans'],
                        ['Interdiction G', 'En cours (trajectoire 2033)', 'Dès avril 2026', 'Objectif 2050'],
                        ['Prix moyen', '120 € – 310 €', '150 € – 400 €', '200 € – 400 €'],
                      ].map(([label, bxl, wal, vla], i) => (
                        <tr key={label} className={i % 2 === 1 ? 'bg-emerald-50' : ''}>
                          <td className="p-3 border-b border-gray-200 font-semibold">{label}</td>
                          <td className="p-3 border-b border-gray-200">{bxl}</td>
                          <td className="p-3 border-b border-gray-200">{wal}</td>
                          <td className="p-3 border-b border-gray-200">{vla}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 text-sm mt-4"><strong>KCertiPEB intervient exclusivement en Région de Bruxelles-Capitale</strong> (19 communes). Pour un bien en Wallonie ou en Flandre, adressez-vous à un certificateur agréé par la région concernée.</p>
              </section>

              {/* ── SECTION 6 ── */}
              <section id="comment" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  6. Comment obtenir un certificat PEB à Bruxelles ?
                </h2>
                <p className="text-gray-700 mb-5">Du premier contact au certificat officiel en main : <strong>48 à 72 heures</strong> avec KCertiPEB.</p>

                <h3 className="text-lg font-bold text-emerald-700 mt-5 mb-2">Étape 1 — Prise de contact</h3>
                <p className="text-gray-700 text-sm mb-4">
                  <Link to="/contact" className="text-emerald-700 hover:underline">Demandez un devis certificat PEB</Link> en ligne. Réponse sous 2h, rendez-vous sous 24 à 48h dans les 19 communes bruxelloises.
                </p>

                <h3 className="text-lg font-bold text-emerald-700 mt-5 mb-2">Étape 2 — Visite technique</h3>
                <p className="text-gray-700 text-sm mb-4">L'expert PEB inspecte le bien : isolation (toit, murs, sol), type de vitrage, système de chauffage, ventilation, orientation. Durée : 30 min (studio) à 1h30 (maison).</p>

                <h3 className="text-lg font-bold text-emerald-700 mt-5 mb-2">Étape 3 — Calcul et encodage</h3>
                <p className="text-gray-700 text-sm mb-4">Les données sont encodées dans le logiciel officiel de Bruxelles Environnement. Le résultat est soumis à un contrôle qualité avant envoi.</p>

                <h3 className="text-lg font-bold text-emerald-700 mt-5 mb-2">Étape 4 — Certificat officiel</h3>
                <p className="text-gray-700 text-sm mb-4">Le certificat PEB est délivré avec un numéro unique et un QR code. Il est enregistré dans le registre officiel de Bruxelles Environnement et valable <strong>10 ans</strong>.</p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">⚠️ Valeurs par défaut :</strong> Sans justificatifs (factures, attestations), le certificateur applique des valeurs défavorables. Un mur isolé sans preuve = considéré non isolé. Impact : <strong>-1 à -2 classes PEB</strong>. Préparez vos documents avant la visite.
                </div>
              </section>

              {/* ── SECTION 7 ── */}
              <section id="preparation" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  7. Préparer la visite pour votre certificat PEB
                </h2>
                <p className="text-gray-700 mb-4">
                  Une bonne préparation peut vous faire gagner 1 à 2 classes. Retrouvez toutes les informations officielles sur{' '}
                  <a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">la page officielle du certificat PEB de Bruxelles Environnement</a>.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mb-3">Documents à rassembler</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm mb-4">
                  <li>Acte de vente (année de construction)</li>
                  <li>Factures de travaux d'isolation, de chauffage, de vitrages</li>
                  <li>Fiches techniques des matériaux isolants</li>
                  <li>Attestation de contrôle de la chaudière</li>
                  <li>DIU (Dossier d'Intervention Ultérieure)</li>
                  <li>En copropriété : documents fournis par le syndic</li>
                </ul>
                <h3 className="text-lg font-bold text-emerald-700 mb-2">Accès à prévoir</h3>
                <p className="text-gray-700 text-sm">Toutes les pièces, combles, cave et local technique (chaudière) doivent être accessibles. Si le bien est occupé par un locataire, prévenez-le à l'avance.</p>
              </section>

              {/* CTA 2 */}
              <div className="bg-emerald-700 text-white rounded-xl p-7 mb-10 text-center">
                <p className="font-bold text-lg mb-2">Certificat PEB sous 48h à Bruxelles</p>
                <p className="text-emerald-100 text-sm mb-4">Appartement, maison, studio, immeuble — KCertiPEB couvre les 19 communes.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Prendre rendez-vous →
                </Link>
              </div>

              {/* ── SECTION 8 ── */}
              <section id="prix" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  8. Prix du certificat PEB à Bruxelles
                </h2>
                <p className="text-gray-700 mb-4">
                  Le prix d'un certificat PEB à Bruxelles varie entre <strong>120 € et 310 € TVAC</strong> selon le type de bien, sa superficie et le certificateur. Consultez <Link to="/tarifs" className="text-emerald-700 hover:underline">nos tarifs certificat PEB</Link> pour une estimation précise.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left p-3">Type de bien</th>
                        <th className="text-left p-3">Prix KCertiPEB</th>
                        <th className="text-left p-3">Prix marché moyen</th>
                        <th className="text-left p-3">Lien</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Studio / Kot</td>
                        <td className="p-3 border-b border-gray-200">Sur devis</td>
                        <td className="p-3 border-b border-gray-200">120 – 180 €</td>
                        <td className="p-3 border-b border-gray-200">
                          <Link to="/certificat-peb-appartement-bruxelles" className="text-emerald-700 hover:underline flex items-center gap-1">
                            Certificat PEB pour un studio <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200">Appartement</td>
                        <td className="p-3 border-b border-gray-200">Sur devis</td>
                        <td className="p-3 border-b border-gray-200">150 – 240 €</td>
                        <td className="p-3 border-b border-gray-200">
                          <Link to="/certificat-peb-appartement-bruxelles" className="text-emerald-700 hover:underline flex items-center gap-1">
                            Certificat PEB pour un appartement <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Maison</td>
                        <td className="p-3 border-b border-gray-200">Sur devis</td>
                        <td className="p-3 border-b border-gray-200">230 – 310 €</td>
                        <td className="p-3 border-b border-gray-200">
                          <Link to="/certificat-peb-maison-bruxelles" className="text-emerald-700 hover:underline flex items-center gap-1">
                            Certificat PEB pour une maison <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200">Immeuble</td>
                        <td className="p-3 border-b border-gray-200">Sur devis</td>
                        <td className="p-3 border-b border-gray-200">Devis spécifique</td>
                        <td className="p-3 border-b border-gray-200">
                          <Link to="/contact" className="text-emerald-700 hover:underline flex items-center gap-1">
                            Demander un devis <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 text-sm mt-4">Le tarif inclut la visite technique, l'encodage, le certificat officiel et l'enregistrement auprès de Bruxelles Environnement. Aucun frais de déplacement dans les 19 communes bruxelloises.</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 mt-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">💡 Bon à savoir :</strong> L'isolation des combles est le <strong>meilleur rapport coût/efficacité</strong> pour améliorer son score PEB : à partir de 15 €/m², vous pouvez gagner 1 à 2 classes. C'est le premier investissement recommandé avant de faire établir un nouveau certificat.
                </div>
              </section>

              {/* ── SECTION 9 FAQ ── */}
              <section id="faq" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-6">
                  9. FAQ — Certificat PEB à Bruxelles
                </h2>
                <dl className="space-y-6">
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Qu'est-ce qu'un certificat PEB ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">Le certificat PEB (Performance Énergétique des Bâtiments) est le document officiel qui classe votre logement de A (très économe) à G (très énergivore), exprimé en kWh/m²/an. Il est obligatoire pour toute vente ou location à Bruxelles. <Link to="/" className="text-emerald-700 hover:underline">En savoir plus sur KCertiPEB →</Link></dd>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Le certificat PEB est-il obligatoire pour louer ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">Oui, obligatoire depuis 2011 à Bruxelles. La classe PEB doit figurer dans l'annonce, une copie est remise au locataire et le numéro de certificat doit être inscrit dans le bail. Depuis avril 2026, les biens classés G sont en outre interdits à la location.</dd>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Combien coûte un certificat PEB à Bruxelles ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">Entre 120 € et 310 € TVAC selon le type de bien. <Link to="/tarifs" className="text-emerald-700 hover:underline">Consultez nos tarifs certificat PEB →</Link></dd>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Quelle est la validité d'un certificat PEB ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed"><strong>10 ans.</strong> Après des travaux importants (isolation, remplacement chaudière, vitrages), un nouveau certificat valorise vos améliorations et peut changer la classe de votre bien.</dd>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Quel est le délai pour obtenir un certificat PEB ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">Avec KCertiPEB : <strong>48 à 72h</strong> du premier contact au certificat officiel en main. <Link to="/contact" className="text-emerald-700 hover:underline">Contacter KCertiPEB →</Link></dd>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Que se passe-t-il sans certificat PEB ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">Amende de <strong>200 à 1 000 €</strong> si non fourni, jusqu'à <strong>3 000 €</strong> si périmé, et jusqu'à <strong>26 562 €</strong> si les objectifs 2033 ne sont pas respectés. La vente peut être bloquée chez le notaire.</dd>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Peut-on améliorer son certificat PEB ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">Oui. Après travaux, un nouveau certificat peut être demandé. Priorités : isolation des combles (gain 1-2 classes), remplacement des vitrages, modernisation du chauffage. Renseignez-vous sur les aides disponibles auprès de <a href="https://environnement.brussels" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Bruxelles Environnement</a>.</dd>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Qui peut délivrer un certificat PEB à Bruxelles ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">Uniquement un Expert PEB agréé par Bruxelles Environnement. <Link to="/" className="text-emerald-700 hover:underline">KCertiPEB est certificateur agréé à Bruxelles — demandez votre devis →</Link></dd>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Un certificat PEB wallon est-il valable à Bruxelles ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">Non. Chaque région a ses propres certificateurs agréés et son propre registre. Un certificat établi en Wallonie n'a aucune valeur légale à Bruxelles. KCertiPEB intervient exclusivement en Région de Bruxelles-Capitale.</dd>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Le certificat PEB prédit-il ma consommation réelle ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">Non. Le PEB évalue le <em>bâtiment</em> sur la base d'une consommation théorique standardisée, pas vos habitudes personnelles. La réforme 2026 prévoit d'intégrer progressivement les consommations réelles dans le calcul.</dd>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                    <dt className="font-bold text-gray-900 mb-2 text-sm">Mon bien est classé G — que faire ?</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">Priorité : <strong>1)</strong> Isoler les combles (15-20 €/m²), <strong>2)</strong> Remplacer les châssis simple vitrage, <strong>3)</strong> Moderniser le chauffage. Renseignez-vous sur les aides régionales disponibles auprès de <a href="https://environnement.brussels" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Bruxelles Environnement</a>. <strong>Dès 2033</strong>, tout bien dépassant 275 kWh/m²/an (classes F et G) sera interdit en Région bruxelloise. <Link to="/certificat-peb-maison-bruxelles" className="text-emerald-700 hover:underline">Voir notre page certificat PEB pour une maison →</Link></dd>
                  </div>
                </dl>
              </section>

              {/* CTA Final */}
              <div className="bg-emerald-700 text-white rounded-xl p-7 mb-10 text-center">
                <p className="font-bold text-lg mb-2">Besoin d'un certificat PEB à Bruxelles ?</p>
                <p className="text-emerald-100 text-sm mb-4">Faites confiance à KCertiPEB — certificateurs agréés Bruxelles Environnement. Intervention dans les 19 communes, résultat sous 48h.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Demander un devis gratuit →
                </Link>
              </div>

              {/* ── SOURCES ── */}
              <section id="sources" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">Sources</h2>
                <ul className="space-y-2 text-xs text-gray-500 list-disc list-inside">
                  <li><a href="https://environnement.brussels/citoyen/news/2024/fin-programmee-des-passoires-energetiques" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">Bruxelles Environnement — Fin programmée des passoires énergétiques (objectifs 2033 et 2045)</a></li>
                  <li><a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">Bruxelles Environnement — Le certificat PEB d'un logement en Région bruxelloise</a></li>
                  <li><a href="https://environnement.brussels/pro/reglementation-et-inspection/obligations-et-autorisations/les-certificats-peb" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">Bruxelles Environnement — Nouveaux certificats PEB à Bruxelles (réforme 2026)</a></li>
                  <li><a href="https://environnement.brussels/pro/reglementation/textes-de-loi/reglementation-sur-la-performance-energetique-des-batiments-peb" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">Bruxelles Environnement — Réglementation PEB : les bâtiments représentent 70% des consommations énergétiques</a></li>
                  <li><a href="https://environnement.brussels/pro/reglementation/textes-de-loi/le-code-bruxellois-de-lair-du-climat-et-de-la-maitrise-de-lenergie-cobrace" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">Bruxelles Environnement — Le CoBrACE : Code Bruxellois de l'Air, du Climat et de la Maîtrise de l'Energie</a></li>
                  <li><a href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=celex%3A32002L0091" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">EUR-Lex — Directive européenne 2002/91/CE sur la performance énergétique des bâtiments</a></li>
                  <li><a href="https://www.kcertipeb.be" className="hover:text-emerald-700 transition-colors">KCertiPEB — Certificateur PEB agréé Bruxelles Environnement</a></li>
                  <li><a href="https://www.federia.immo/fr/thematiques/2025-07-08-nouveaux-certificats-peb-a-bruxelles-des-avancees-importantes-mais-aussi-un-gros-point-d-attention-pour-les-appartements" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">Federia — Nouveaux certificats PEB à Bruxelles : avancées et points d'attention — Juillet 2025</a></li>
                  <li><a href="https://document.environnement.brussels/opac_css/elecfile/Reforme_PEB_Transition_Expert_PEB" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">Bruxelles Environnement — Réforme PEB : transition vers l'Expert PEB (info fiche janvier 2026)</a></li>
                  <li><a href="https://www.rtbf.be/article/interdiction-des-peb-f-et-g-a-bruxelles-notre-enquete-pointe-un-risque-d-embouteillages-des-renovations-11670616" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">RTBF — Interdiction des PEB F et G à Bruxelles : enquête sur les défis de rénovation — Février 2026</a></li>
                  <li><a href="https://weinvest.be/fr-BE/blog/b2c/peb-calendar-by-region" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">We Invest — Échéances PEB par région : ce qui change en 2026 — Décembre 2025</a></li>
                </ul>
              </section>

              {/* Back to blog */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <Link to="/blog" className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:underline text-sm">
                  <ArrowLeft className="h-4 w-4" /> Retour au blog
                </Link>
              </div>

            </div>
          </div>
        </div>
      </article>
    </>
  );
}
