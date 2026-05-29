import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function BlogPostDifferencePebAudit() {
  return (
    <>
      <SEO
        title="Différence entre PEB et Audit Énergétique à Bruxelles | KCertiPEB"
        description="Le certificat PEB classe votre bien de A à G et est obligatoire pour vendre ou louer. L'audit énergétique analyse en profondeur et recommande des travaux. Comparatif complet 2026."
        canonical="https://kcertipeb.be/blog/difference-peb-audit-energetique"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Différence entre le certificat PEB et l\'audit énergétique à Bruxelles',
          description: 'Comparatif complet : certificat PEB vs audit énergétique. Obligation, prix, délai, utilité. Guide 2026 par KCertiPEB.',
          author: { '@type': 'Organization', name: 'KCertiPEB', url: 'https://kcertipeb.be' },
          publisher: { '@type': 'Organization', name: 'KCertiPEB', logo: { '@type': 'ImageObject', url: 'https://kcertipeb.be/logo.png' } },
          datePublished: '2026-05-28',
          dateModified: '2026-05-28',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop',
          url: 'https://kcertipeb.be/blog/difference-peb-audit-energetique',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kcertipeb.be/blog/difference-peb-audit-energetique' },
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
            <span className="text-gray-800 truncate">PEB vs Audit énergétique</span>
          </nav>
        </div>
      </div>

      <article className="bg-gray-50 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            {/* Header */}
            <div className="p-8 sm:p-12 pb-0">
              <span className="inline-block rounded bg-emerald-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide mb-5">
                🔍 Comparatif — Mai 2026
              </span>
              <h1 id="top" className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Différence entre le certificat PEB et l'audit énergétique à Bruxelles
              </h1>
              <p className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-l-4 border-emerald-600 pl-4 mb-8">
                <span>Par <strong className="text-emerald-700">KCertiPEB</strong> — Certificateurs PEB agréés Bruxelles Environnement</span>
                <span>|</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> <strong>28 mai 2026</strong></span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min de lecture</span>
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop"
              alt="Audit énergétique et certificat PEB — comparatif Bruxelles"
              loading="eager"
              className="w-full object-cover h-72 sm:h-96"
            />

            <div className="p-8 sm:p-12">

              {/* GEO lede */}
              <p className="text-gray-700 leading-relaxed mb-4 text-lg font-medium">
                Le certificat PEB et l'audit énergétique sont deux documents distincts : <strong>le certificat PEB est obligatoire</strong> pour vendre ou louer et classe votre bien de A à G, tandis que <strong>l'audit énergétique est une analyse approfondie</strong> qui recommande des travaux de rénovation prioritaires.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Beaucoup de propriétaires confondent les deux. Ce guide vous explique en détail à quoi sert chaque document, quand l'utiliser, et lequel vous concerne en ce moment.
              </p>

              {/* Quick comparison */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6">
                  <div className="text-3xl mb-3">📄</div>
                  <h2 className="text-xl font-bold text-emerald-900 mb-2">Certificat PEB</h2>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li>✅ <strong>Obligatoire</strong> pour vendre ou louer</li>
                    <li>✅ Classe le bien de <strong>A à G</strong></li>
                    <li>✅ Valable <strong>10 ans</strong></li>
                    <li>✅ Dès <strong>120 € TVAC</strong></li>
                    <li>✅ Délivré en <strong>48h</strong></li>
                    <li>❌ Ne prescrit pas de travaux précis</li>
                  </ul>
                </div>
                <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
                  <div className="text-3xl mb-3">🔬</div>
                  <h2 className="text-xl font-bold text-blue-900 mb-2">Audit énergétique</h2>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li>✅ Analyse approfondie du bâtiment</li>
                    <li>✅ <strong>Recommandations travaux</strong> chiffrées</li>
                    <li>✅ Plan de rénovation sur mesure</li>
                    <li>✅ Plan de rénovation chiffré et priorisé</li>
                    <li>❌ Non obligatoire</li>
                    <li>❌ Tarif plus élevé (sur devis)</li>
                  </ul>
                </div>
              </div>

              {/* Table of contents */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mb-10">
                <p className="text-base font-bold text-gray-900 mb-4">📋 Sommaire</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-700">
                  <li><a href="#peb" className="hover:underline">Le certificat PEB en détail</a></li>
                  <li><a href="#audit" className="hover:underline">L'audit énergétique en détail</a></li>
                  <li><a href="#tableau" className="hover:underline">Tableau comparatif complet</a></li>
                  <li><a href="#choisir" className="hover:underline">Lequel choisir ?</a></li>
                  <li><a href="#faq" className="hover:underline">FAQ</a></li>
                </ol>
              </div>

              {/* Section 1 */}
              <section id="peb" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  1. Le certificat PEB — la carte d'identité énergétique obligatoire
                </h2>
                <p className="text-gray-700 mb-4">
                  Le <strong>certificat PEB (Performance Énergétique des Bâtiments)</strong> est le document officiel qui évalue la consommation théorique en énergie primaire d'un logement et lui attribue une classe de <strong>A</strong> (très économe) à <strong>G</strong> (très énergivore). Il est délivré exclusivement par un Expert PEB agréé par{' '}
                  <a href="https://peb.environnement.brussels/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Bruxelles Environnement</a>.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mb-3">Quand est-il obligatoire ?</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mb-4">
                  <li>Lors de toute <strong>vente</strong> de bien résidentiel à Bruxelles (remis au notaire)</li>
                  <li>Lors de toute <strong>location</strong> de bien résidentiel (classe mentionnée dans l'annonce, copie au locataire)</li>
                  <li>Le numéro de certificat doit figurer dans le bail</li>
                </ul>
                <h3 className="text-lg font-bold text-emerald-700 mb-3">Ce qu'il contient</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mb-4">
                  <li>La classe énergétique (A à G) et la consommation en kWh/m²/an</li>
                  <li>Le détail isolation / chauffage / ventilation / vitrages</li>
                  <li>Des recommandations générales d'amélioration</li>
                  <li>Un numéro unique enregistré au registre de Bruxelles Environnement</li>
                </ul>
                <p className="text-gray-700 text-sm">
                  La durée de validité est de <strong>10 ans</strong>. Après travaux importants, un nouveau certificat est recommandé pour valoriser les améliorations. <Link to="/certificat-peb-appartement-bruxelles" className="text-emerald-700 hover:underline">Voir notre service certificat PEB appartement →</Link>
                </p>
              </section>

              {/* Section 2 */}
              <section id="audit" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  2. L'audit énergétique — l'analyse approfondie pour rénover
                </h2>
                <p className="text-gray-700 mb-4">
                  L'<strong>audit énergétique</strong> est une analyse détaillée et personnalisée du bâtiment. Contrairement au certificat PEB qui évalue l'état actuel, l'audit prescrit un <strong>plan d'action concret pour améliorer la performance énergétique</strong> : quels travaux faire, dans quel ordre, pour quel gain et à quel coût.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mb-3">Contenu d'un audit énergétique</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mb-4">
                  <li>Diagnostic complet de l'enveloppe du bâtiment (toiture, murs, sols, fenêtres)</li>
                  <li>Analyse des systèmes de chauffage, refroidissement, ventilation et eau chaude</li>
                  <li>Calcul des consommations actuelles et potentielles après travaux</li>
                  <li>Liste priorisée des travaux avec <strong>estimation des coûts et des économies</strong></li>
                  <li>Estimation des économies réalisables après travaux</li>
                </ul>
                <h3 className="text-lg font-bold text-emerald-700 mb-3">Quand est-il utile ?</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mb-4">
                  <li>Avant d'entamer une rénovation énergétique importante</li>
                  <li>Pour planifier une rénovation énergétique par étapes</li>
                  <li>Quand votre bien est classé E, F ou G et que vous souhaitez anticiper les obligations 2033</li>
                  <li>Pour un immeuble en copropriété souhaitant planifier une rénovation globale</li>
                </ul>
                <p className="text-gray-700 text-sm">
                  Pour en savoir plus sur le cadre légal de l'audit, consultez{' '}
                  <a href="https://environnement.brussels/citoyen/construction-et-renovation/renovation-de-logement/audit-energetique" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">la page officielle de Bruxelles Environnement sur l'audit énergétique</a>.{' '}
                  <Link to="/audit-energetique-bruxelles" className="text-emerald-700 hover:underline">Voir notre service d'audit énergétique →</Link>
                </p>
              </section>

              {/* Section 3 */}
              <section id="tableau" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  3. Tableau comparatif : PEB vs audit énergétique
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left p-3">Critère</th>
                        <th className="text-left p-3">Certificat PEB</th>
                        <th className="text-left p-3">Audit énergétique</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Objectif', 'Classer le bien (A à G)', 'Prescrire un plan de rénovation'],
                        ['Obligatoire ?', 'Oui — vente ou location', 'Non'],
                        ['Résultat', 'Classe + kWh/m²/an', 'Rapport détaillé + chiffrage travaux'],
                        ['Durée de validité', '10 ans', 'Pas de durée légale (snapshot)'],
                        ['Qui le réalise ?', 'Expert PEB agréé BE', 'Professionnel spécialisé'],
                        ['Délai', '48h (KCertiPEB)', 'Quelques jours à 3 semaines'],
                        ['Prix', 'Dès 120 € TVAC', 'Sur devis (souvent 500 – 1 500 €)'],
                        ['Recommandations travaux', 'Générales', 'Détaillées et chiffrées'],
                        ['Niveau de détail', 'Évaluation globale', 'Analyse technique approfondie'],
                      ].map(([crit, peb, audit], i) => (
                        <tr key={crit} className={i % 2 === 1 ? 'bg-emerald-50' : ''}>
                          <td className="p-3 border-b border-gray-200 font-semibold">{crit}</td>
                          <td className="p-3 border-b border-gray-200">{peb}</td>
                          <td className="p-3 border-b border-gray-200">{audit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4 */}
              <section id="choisir" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  4. Lequel choisir — et peuvent-ils se combiner ?
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                    <h3 className="font-bold text-emerald-900 mb-2">Vous vendez ou louez → Certificat PEB obligatoire</h3>
                    <p className="text-gray-700 text-sm">Aucune alternative. Le certificat PEB est requis par la loi. Commencez par là. <Link to="/contact" className="text-emerald-700 hover:underline">Demandez votre certificat PEB →</Link></p>
                  </div>
                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                    <h3 className="font-bold text-blue-900 mb-2">Votre bien est classé E, F ou G → Audit recommandé en complément</h3>
                    <p className="text-gray-700 text-sm">Le certificat PEB vous dit où vous en êtes. L'audit vous dit quoi faire et dans quel ordre pour améliorer la classe. Ils se complètent parfaitement.</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Vous planifiez une rénovation importante → Audit en premier</h3>
                    <p className="text-gray-700 text-sm">Un audit avant travaux permet d'optimiser l'ordre des interventions et de maximiser l'impact sur votre score PEB. Un nouveau certificat PEB après travaux valorise le résultat.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">💡 Bon à savoir :</strong> Le certificat PEB contient déjà des recommandations générales d'amélioration. Pour beaucoup de propriétaires qui ont uniquement besoin de se conformer à l'obligation légale, le certificat PEB seul suffit. L'audit n'est nécessaire que si vous planifiez des travaux importants ou souhaitez obtenir un plan de rénovation détaillé et chiffré.
                </div>
              </section>

              {/* CTA */}
              <div className="bg-emerald-700 text-white rounded-xl p-7 mb-10 text-center">
                <p className="font-bold text-lg mb-2">Besoin d'un certificat PEB ou d'un audit énergétique à Bruxelles ?</p>
                <p className="text-emerald-100 text-sm mb-4">KCertiPEB propose les deux services. Certificat PEB dès 120 €, livré en 48h dans les 19 communes bruxelloises.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Demander un devis →
                </Link>
              </div>

              {/* Section 5 FAQ */}
              <section id="faq" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-6">
                  5. FAQ — PEB vs audit énergétique
                </h2>
                <dl className="space-y-5">
                  {[
                    {
                      q: "Peut-on remplacer le certificat PEB par un audit énergétique ?",
                      a: "Non. Ce sont deux documents distincts avec des fonctions différentes. L'audit énergétique ne remplace pas le certificat PEB obligatoire pour la vente ou la location.",
                    },
                    {
                      q: "Le certificat PEB donne-t-il des conseils de rénovation ?",
                      a: "Le certificat PEB contient des recommandations générales d'amélioration. Mais il ne chiffre pas les travaux ni ne priorise les interventions de façon détaillée — c'est le rôle de l'audit énergétique.",
                    },
                    {
                      q: "Un audit énergétique est-il valable 10 ans comme le PEB ?",
                      a: "Non. L'audit n'a pas de durée de validité légale fixée — c'est une photo à un instant T. Après des travaux importants, un nouvel audit ou un nouveau certificat PEB est recommandé.",
                    },
                    {
                      q: "Quel est le prix d'un audit énergétique à Bruxelles ?",
                      a: "Le tarif d'un audit énergétique dépend du type de bien et de sa superficie. Comptez généralement entre 500 € et 1 500 € pour une maison. Contactez KCertiPEB pour un devis personnalisé.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                      <dt className="font-bold text-gray-900 mb-2 text-sm">{item.q}</dt>
                      <dd className="text-gray-700 text-sm leading-relaxed">{item.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Voir aussi */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-bold text-gray-900 mb-3">🔗 Voir aussi</p>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/certificat-peb-appartement-bruxelles" className="text-emerald-700 hover:underline">Certificat PEB appartement Bruxelles — dès 120 €</Link></li>
                  <li><Link to="/certificat-peb-maison-bruxelles" className="text-emerald-700 hover:underline">Certificat PEB maison Bruxelles — dès 210 €</Link></li>
                  <li><Link to="/audit-energetique-bruxelles" className="text-emerald-700 hover:underline">Audit énergétique à Bruxelles — analyse complète</Link></li>
                  <li><Link to="/blog/comment-obtenir-certificat-peb-bruxelles" className="text-emerald-700 hover:underline">Comment obtenir un certificat PEB ? Guide étape par étape</Link></li>
                  <li><Link to="/blog/amende-sans-certificat-peb-bruxelles" className="text-emerald-700 hover:underline">Amende sans certificat PEB : montants 2026</Link></li>
                  <li><Link to="/tarifs" className="text-emerald-700 hover:underline">Tarifs certificat PEB et audit 2026</Link></li>
                </ul>
              </div>

              {/* Sources */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-bold text-gray-900 mb-3">📚 Sources officielles</p>
                <ul className="list-disc list-inside space-y-2 text-xs text-gray-500">
                  {[
                    ['https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise', 'Bruxelles Environnement — Le certificat PEB d\'un logement : définition, obligations, validité'],
                    ['https://peb.environnement.brussels/', 'Bruxelles Environnement — Registre officiel et experts PEB agréés en Région bruxelloise'],
                    ['https://environnement.brussels/citoyen/construction-et-renovation/renovation-de-logement/audit-energetique', 'Bruxelles Environnement — L\'audit énergétique : définition et utilité'],
                    ['https://environnement.brussels/pro/reglementation-et-inspection/obligations-et-autorisations/les-certificats-peb', 'Bruxelles Environnement — Les certificats PEB : réforme 2026 et nouveaux modèles'],
                    ['https://environnement.brussels/pro/reglementation/textes-de-loi/le-code-bruxellois-de-lair-du-climat-et-de-la-maitrise-de-lenergie-cobrace', 'Bruxelles Environnement — CoBrACE : cadre légal des obligations PEB à Bruxelles'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
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
