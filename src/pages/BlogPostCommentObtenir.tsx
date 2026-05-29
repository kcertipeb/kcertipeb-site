import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function BlogPostCommentObtenir() {
  return (
    <>
      <SEO
        title="Comment obtenir un certificat PEB à Bruxelles ? Guide 2026 | KCertiPEB"
        description="Pour obtenir un certificat PEB à Bruxelles : contactez un Expert PEB agréé, planifiez la visite, recevez le certificat en 48h. Guide complet étape par étape."
        canonical="https://kcertipeb.be/blog/comment-obtenir-certificat-peb-bruxelles"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Comment obtenir un certificat PEB à Bruxelles ? Guide complet 2026',
          description: 'Guide étape par étape pour obtenir un certificat PEB à Bruxelles : de la demande à la remise du certificat officiel en 48h.',
          author: { '@type': 'Organization', name: 'KCertiPEB', url: 'https://kcertipeb.be' },
          publisher: { '@type': 'Organization', name: 'KCertiPEB', logo: { '@type': 'ImageObject', url: 'https://kcertipeb.be/logo.png' } },
          datePublished: '2026-05-28',
          dateModified: '2026-05-28',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
          url: 'https://kcertipeb.be/blog/comment-obtenir-certificat-peb-bruxelles',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kcertipeb.be/blog/comment-obtenir-certificat-peb-bruxelles' },
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
            <span className="text-gray-800 truncate">Comment obtenir un certificat PEB</span>
          </nav>
        </div>
      </div>

      <article className="bg-gray-50 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            {/* Header */}
            <div className="p-8 sm:p-12 pb-0">
              <span className="inline-block rounded bg-emerald-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide mb-5">
                📋 Guide Pratique — Mai 2026
              </span>
              <h1 id="top" className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Comment obtenir un certificat PEB à Bruxelles ? Guide complet 2026
              </h1>
              <p className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-l-4 border-emerald-600 pl-4 mb-8">
                <span>Par <strong className="text-emerald-700">KCertiPEB</strong> — Certificateurs PEB agréés Bruxelles Environnement</span>
                <span>|</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> <strong>28 mai 2026</strong></span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min de lecture</span>
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Obtenir un certificat PEB à Bruxelles — démarches étape par étape"
              loading="eager"
              className="w-full object-cover h-72 sm:h-96"
            />

            <div className="p-8 sm:p-12">

              {/* GEO lede */}
              <p className="text-gray-700 leading-relaxed mb-4 text-lg font-medium">
                Pour obtenir un certificat PEB à Bruxelles, contactez un <strong>Expert PEB agréé par Bruxelles Environnement</strong> et planifiez une visite technique de votre bien. En 4 étapes — devis, visite, calcul, remise du certificat officiel — le processus prend <strong>48 heures</strong> avec KCertiPEB.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Ce guide vous explique chaque étape en détail : ce que l'expert inspecte, quels documents préparer, ce qui influence votre classe énergétique, et comment obtenir le meilleur résultat possible.
              </p>

              {/* Alert */}
              <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg p-4 mb-8 text-sm text-gray-700">
                <strong className="text-emerald-700">✅ Important :</strong> Seul un{' '}
                <a href="https://peb.environnement.brussels/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-semibold">Expert PEB agréé par Bruxelles Environnement</a>{' '}
                peut délivrer un certificat PEB légalement valable en Région bruxelloise. Méfiez-vous des offres non agréées — le certificat n'aurait aucune valeur légale.
              </div>

              {/* Table of contents */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mb-10">
                <p className="text-base font-bold text-gray-900 mb-4">📋 Sommaire</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-700">
                  <li><a href="#etapes" className="hover:underline">Les 4 étapes pour obtenir un certificat PEB</a></li>
                  <li><a href="#preparer" className="hover:underline">Quels documents préparer ?</a></li>
                  <li><a href="#visite" className="hover:underline">Que se passe-t-il lors de la visite ?</a></li>
                  <li><a href="#classe" className="hover:underline">Ce qui influence votre classe PEB</a></li>
                  <li><a href="#prix" className="hover:underline">Prix et délais</a></li>
                  <li><a href="#faq" className="hover:underline">FAQ</a></li>
                </ol>
              </div>

              {/* Section 1 */}
              <section id="etapes" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-6">
                  1. Les 4 étapes pour obtenir un certificat PEB à Bruxelles
                </h2>

                <div className="space-y-5">
                  <div className="flex gap-5 rounded-xl border-2 border-emerald-100 bg-white p-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Demande de devis et prise de rendez-vous</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <Link to="/contact" className="text-emerald-700 hover:underline font-semibold">Contactez KCertiPEB</Link> en ligne ou par téléphone. Indiquez le type de bien (appartement, maison), la superficie approximative et votre commune. Vous recevez votre devis sous 2h et un rendez-vous sous 24 à 48h dans les 19 communes bruxelloises.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 rounded-xl border-2 border-emerald-100 bg-white p-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Visite technique par l'expert PEB</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        L'expert PEB inspecte physiquement le bien : toiture, murs, sols, fenêtres, système de chauffage, ventilation, production d'eau chaude. La visite dure 30 minutes pour un studio, jusqu'à 1h30 pour une grande maison. Votre présence (ou celle d'un représentant) est requise.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 rounded-xl border-2 border-emerald-100 bg-white p-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Calcul et encodage dans le logiciel officiel</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Les données collectées sont encodées dans le logiciel officiel homologué par{' '}
                        <a href="https://environnement.brussels/pro/reglementation-et-inspection/obligations-et-autorisations/les-certificats-peb" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Bruxelles Environnement</a>.
                        Le calcul tient compte de tous les éléments du bâtiment selon une méthodologie standardisée.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 rounded-xl border-2 border-emerald-100 bg-white p-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center">4</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Remise du certificat PEB officiel</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Vous recevez votre certificat PEB officiel avec un <strong>numéro unique</strong> . Il est automatiquement enregistré dans le registre de Bruxelles Environnement. Validité : <strong>10 ans</strong>. Vous pouvez l'utiliser immédiatement pour votre annonce ou votre notaire.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="bg-emerald-700 text-white rounded-xl p-7 mb-10 text-center">
                <p className="font-bold text-lg mb-2">Certificat PEB à Bruxelles en 48h</p>
                <p className="text-emerald-100 text-sm mb-4">Appartement dès 120 €, maison dès 210 € — KCertiPEB, agréé Bruxelles Environnement.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Demander un devis →
                </Link>
              </div>

              {/* Section 2 */}
              <section id="preparer" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  2. Quels documents préparer pour la visite PEB ?
                </h2>
                <p className="text-gray-700 mb-4">
                  Une bonne préparation peut vous faire gagner <strong>1 à 2 classes PEB</strong>. Sans justificatifs, l'expert applique des valeurs par défaut défavorables — un mur isolé sans preuve est considéré comme non isolé.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-5">
                    <h3 className="font-bold text-gray-900 mb-3 text-sm">Documents essentiels</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Acte de vente ou permis de construire (année de construction)</li>
                      <li>✓ Factures de travaux d'isolation (combles, murs, sol)</li>
                      <li>✓ Factures de remplacement de fenêtres / double vitrage</li>
                      <li>✓ Attestation de contrôle de chaudière</li>
                    </ul>
                  </div>
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-5">
                    <h3 className="font-bold text-gray-900 mb-3 text-sm">Documents utiles</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Plans du logement (superficie, hauteur sous plafond)</li>
                      <li>✓ Fiches techniques des matériaux isolants</li>
                      <li>✓ Documents sur la ventilation (type, débit)</li>
                      <li>✓ En copropriété : infos du syndic sur les parties communes</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">⚠️ Règle importante :</strong> Sans preuve documentée, l'expert applique systématiquement les <strong>valeurs par défaut défavorables</strong>. Exemple : isolation de toiture non prouvée = toiture non isolée dans le calcul. L'impact peut être de -1 à -2 classes. Préparez vos documents à l'avance.
                </div>
              </section>

              {/* Section 3 */}
              <section id="visite" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  3. Que se passe-t-il lors de la visite PEB ?
                </h2>
                <p className="text-gray-700 mb-4">
                  L'expert PEB réalise une inspection visuelle complète du bien. Il n'utilise pas d'équipement de mesure thermique (caméra infrarouge, etc.) — il s'appuie sur les caractéristiques observables et les documents fournis. La méthodologie de calcul est définie par{' '}
                  <a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Bruxelles Environnement</a>.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mb-3">Ce que l'expert inspecte</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mb-4">
                  <li><strong>Toiture / combles :</strong> présence et type d'isolation, état général</li>
                  <li><strong>Murs :</strong> type de construction, isolation intérieure ou extérieure</li>
                  <li><strong>Sol :</strong> isolation du plancher bas (cave, vide sanitaire)</li>
                  <li><strong>Fenêtres :</strong> type de vitrage (simple, double, triple), matériau du châssis</li>
                  <li><strong>Chauffage :</strong> type (gaz, mazout, pompe à chaleur, électrique), puissance, rendement</li>
                  <li><strong>Eau chaude sanitaire :</strong> chauffe-eau, production combinée ou séparée</li>
                  <li><strong>Ventilation :</strong> type (naturelle, mécanique), présence de VMC</li>
                  <li><strong>Énergie solaire :</strong> panneaux photovoltaïques ou solaires thermiques</li>
                </ul>
                <p className="text-gray-700 text-sm">
                  Toutes les pièces, ainsi que la cave et le local technique (chaudière), doivent être accessibles. Si le bien est occupé par un locataire, prévenez-le à l'avance.
                </p>
              </section>

              {/* Section 4 */}
              <section id="classe" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  4. Ce qui influence votre classe PEB
                </h2>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left p-3">Élément</th>
                        <th className="text-left p-3">Impact sur la classe PEB</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Isolation toiture', "Très élevé — jusqu'à +2 classes si bien isolé"],
                        ['Type de vitrage', 'Élevé — triple vitrage vs simple vitrage = ±1 classe'],
                        ['Type de chauffage', 'Élevé — pompe à chaleur vs chaudière ancienne = ±1-2 classes'],
                        ["Isolation des murs", "Moyen à élevé selon l'épaisseur"],
                        ['Ventilation', 'Moyen — VMC double flux améliore la classe'],
                        ['Panneaux solaires (PV)', 'Moyen — améliore la classe selon puissance installée'],
                        ['Année de construction', 'Important — les bâtiments anciens partent avec un désavantage'],
                        ['Superficie', 'Indirect — plus grand = plus à isoler'],
                      ].map(([elem, impact], i) => (
                        <tr key={elem} className={i % 2 === 1 ? 'bg-emerald-50' : ''}>
                          <td className="p-3 border-b border-gray-200 font-medium">{elem}</td>
                          <td className="p-3 border-b border-gray-200">{impact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5 */}
              <section id="prix" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  5. Prix et délais — certificat PEB à Bruxelles
                </h2>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left p-3">Type de bien</th>
                        <th className="text-left p-3">Prix KCertiPEB</th>
                        <th className="text-left p-3">Délai</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Appartement</td>
                        <td className="p-3 border-b border-gray-200 font-bold">Dès 120 € TVAC</td>
                        <td className="p-3 border-b border-gray-200">48h</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200">Maison</td>
                        <td className="p-3 border-b border-gray-200 font-bold">Dès 210 € TVAC</td>
                        <td className="p-3 border-b border-gray-200">48h</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Immeuble (multiple unités)</td>
                        <td className="p-3 border-b border-gray-200 font-bold">Sur devis</td>
                        <td className="p-3 border-b border-gray-200">Selon volume</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-xs mt-2">Le tarif inclut la visite technique, l'encodage, le certificat officiel et l'enregistrement auprès de Bruxelles Environnement. Aucun frais de déplacement dans les 19 communes. <Link to="/tarifs" className="text-emerald-700 hover:underline">Voir les tarifs détaillés →</Link></p>
              </section>

              {/* Section 6 FAQ */}
              <section id="faq" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-6">
                  6. FAQ — obtenir un certificat PEB à Bruxelles
                </h2>
                <dl className="space-y-5">
                  {[
                    {
                      q: "Combien de temps faut-il pour obtenir un certificat PEB ?",
                      a: "Avec KCertiPEB, l'ensemble du processus prend 48 heures du premier contact au certificat officiel. La visite est programmée sous 24h, le certificat est remis dans les 24h suivantes.",
                    },
                    {
                      q: "Dois-je être présent lors de la visite PEB ?",
                      a: "Oui, votre présence ou celle d'une personne connaissant bien le bien est indispensable pour donner accès à toutes les pièces et répondre aux questions de l'expert.",
                    },
                    {
                      q: "Peut-on obtenir un certificat PEB pour un bien vacant (sans locataire) ?",
                      a: "Oui, absolument. Un bien vacant peut être certifié normalement. Assurez-vous que toutes les pièces et locaux techniques sont accessibles lors de la visite.",
                    },
                    {
                      q: "Le certificat PEB est-il différent selon qu'on vend ou loue ?",
                      a: "Non. Le certificat PEB est le même document, utilisable pour une vente comme pour une location. Sa validité est de 10 ans dans les deux cas.",
                    },
                    {
                      q: "Faut-il un nouveau certificat PEB après des travaux de rénovation ?",
                      a: "Non obligatoire, mais fortement recommandé. Après des travaux importants (isolation, remplacement de la chaudière, vitrages), un nouveau certificat reflète les améliorations et peut augmenter la valeur de revente ou locative de votre bien.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                      <dt className="font-bold text-gray-900 mb-2 text-sm">{item.q}</dt>
                      <dd className="text-gray-700 text-sm leading-relaxed">{item.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* CTA final */}
              <div className="bg-emerald-700 text-white rounded-xl p-7 mb-10 text-center">
                <p className="font-bold text-lg mb-2">Obtenez votre certificat PEB sous 48h</p>
                <p className="text-emerald-100 text-sm mb-4">KCertiPEB — Expert PEB agréé Bruxelles Environnement. Actif dans les 19 communes bruxelloises.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Prendre rendez-vous →
                </Link>
              </div>

              {/* Voir aussi */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-bold text-gray-900 mb-3">🔗 Voir aussi</p>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/certificat-peb-appartement-bruxelles" className="text-emerald-700 hover:underline">Certificat PEB appartement Bruxelles — dès 120 €</Link></li>
                  <li><Link to="/certificat-peb-maison-bruxelles" className="text-emerald-700 hover:underline">Certificat PEB maison Bruxelles — dès 210 €</Link></li>
                  <li><Link to="/certificat-peb-immeuble-bruxelles" className="text-emerald-700 hover:underline">Certificat PEB immeuble / copropriété</Link></li>
                  <li><Link to="/certificat-peb-urgent-bruxelles" className="text-emerald-700 hover:underline">PEB Express — besoin urgent, intervention sous 48h</Link></li>
                  <li><Link to="/blog/amende-sans-certificat-peb-bruxelles" className="text-emerald-700 hover:underline">Que risque-t-on sans certificat PEB ? Amendes 2026</Link></li>
                  <li><Link to="/faq" className="text-emerald-700 hover:underline">FAQ — toutes les questions sur le certificat PEB</Link></li>
                </ul>
              </div>

              {/* Sources */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-bold text-gray-900 mb-3">📚 Sources officielles</p>
                <ul className="list-disc list-inside space-y-2 text-xs text-gray-500">
                  {[
                    ['https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise', 'Bruxelles Environnement — Le certificat PEB d\'un logement en Région bruxelloise : procédure et obligations'],
                    ['https://peb.environnement.brussels/', 'Bruxelles Environnement — Registre officiel des certificats PEB et liste des experts agréés'],
                    ['https://environnement.brussels/pro/reglementation-et-inspection/obligations-et-autorisations/les-certificats-peb', 'Bruxelles Environnement — Les certificats PEB : méthodologie de calcul (logiciel officiel)'],
                    ['https://environnement.brussels/citoyen/news/2024/fin-programmee-des-passoires-energetiques', 'Bruxelles Environnement — Objectifs PEB 2033 et 2045 : fin programmée des passoires énergétiques'],
                    ['https://environnement.brussels/pro/reglementation/textes-de-loi/le-code-bruxellois-de-lair-du-climat-et-de-la-maitrise-de-lenergie-cobrace', 'Bruxelles Environnement — CoBrACE : cadre légal de la certification PEB en Région bruxelloise'],
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
