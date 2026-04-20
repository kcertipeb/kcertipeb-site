import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function BlogPostCopropriete() {
  return (
    <>
      <SEO
        title="Certificat PEB Copropriété Bruxelles : Guide Syndics 2026 | KCertiPEB"
        description="Certificat PEB en copropriété résidentielle à Bruxelles : obligations ACP, rôle du syndic, échéances 2030-2033. Guide complet par KCertiPEB, certificateurs agréés."
        canonical="https://kcertipeb.be/blog/certificat-peb-copropriete-bruxelles"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Certificat PEB en copropriété résidentielle à Bruxelles : ce que syndics et copropriétaires doivent savoir',
          description: 'Certificat PEB en copropriété résidentielle à Bruxelles : obligations ACP, rôle du syndic, échéances 2030-2033.',
          author: { '@type': 'Organization', name: 'KCertiPEB', url: 'https://kcertipeb.be' },
          publisher: { '@type': 'Organization', name: 'KCertiPEB', logo: { '@type': 'ImageObject', url: 'https://kcertipeb.be/logo.png' } },
          datePublished: '2026-04-20',
          dateModified: '2026-04-20',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop',
          url: 'https://kcertipeb.be/blog/certificat-peb-copropriete-bruxelles',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kcertipeb.be/blog/certificat-peb-copropriete-bruxelles' },
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
            <span className="text-gray-800 truncate">Copropriété — Guide 2026</span>
          </nav>
        </div>
      </div>

      <article className="bg-gray-50 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            {/* Header */}
            <div className="p-8 sm:p-12 pb-0">
              <span className="inline-block rounded bg-emerald-700 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide mb-5">
                🏢 Copropriété résidentielle — Guide 2026
              </span>

              <h1 id="top" className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Certificat PEB en copropriété résidentielle à Bruxelles : ce que syndics et copropriétaires doivent savoir
              </h1>

              <p className="text-gray-600 italic border-l-4 border-emerald-500 pl-4 mb-4 leading-relaxed">
                Chaque appartement doit avoir son propre certificat PEB. L'ACP devient co-responsable dès 2033. Voici tout ce qu'il faut anticiper dès maintenant.
              </p>

              <p className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-8">
                <span>Par <strong className="text-emerald-700">KCertiPEB</strong> — Certificateurs PEB agréés Bruxelles Environnement</span>
                <span>|</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Mis à jour le <strong>20 avril 2026</strong></span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </p>
            </div>

            {/* Hero image */}
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop"
              alt="Immeuble résidentiel à Bruxelles — certificat PEB copropriété"
              loading="eager"
              className="w-full object-cover h-72 sm:h-96"
            />

            <div className="p-8 sm:p-12">

              <p className="text-gray-700 leading-relaxed mb-5">
                Vous êtes syndic, copropriétaire ou propriétaire-bailleur dans un immeuble résidentiel à Bruxelles ? La réglementation PEB vous concerne directement et elle évolue.{' '}
                <a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/la-peb-en-copropriete" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Selon Bruxelles Environnement</a>, chaque logement d'une copropriété doit disposer de son propre{' '}
                <Link to="/certificat-peb-immeuble-bruxelles" className="text-emerald-700 hover:underline">certificat PEB individuel</Link>. Et dès 2033, l'Association des Copropriétaires (ACP) sera <strong>co-responsable</strong> de la conformité énergétique de tout l'immeuble.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 mb-8 text-sm text-gray-700">
                <strong className="text-red-700">⚠️ À retenir :</strong> Un certificat PEB émis aujourd'hui est valable <strong>10 ans</strong>, jusqu'en 2036. C'est le moment idéal pour figer votre score actuel et anticiper sereinement les échéances de 2030 et 2033.
              </div>

              {/* TOC */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mb-10">
                <h2 className="text-base font-bold text-gray-900 mb-4 border-0 p-0 m-0 mt-0">📋 Sommaire — Mis à jour le 20 avril 2026</h2>
                <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-700">
                  <li><a href="#principe" className="hover:underline">Un certificat PEB par logement, pas par immeuble</a></li>
                  <li><a href="#acp" className="hover:underline">Le rôle de l'ACP et la co-responsabilité</a></li>
                  <li><a href="#syndic" className="hover:underline">Le rôle clé du syndic</a></li>
                  <li><a href="#echeances" className="hover:underline">Les échéances à retenir : 2030, 2033, 2045</a></li>
                  <li><a href="#documents" className="hover:underline">Documents à préparer avant la visite</a></li>
                  <li><a href="#processus" className="hover:underline">Comment KCertiPEB certifie votre immeuble</a></li>
                  <li><a href="#sanctions" className="hover:underline">Sanctions en cas de non-conformité</a></li>
                  <li><a href="#faq" className="hover:underline">FAQ copropriété</a></li>
                  <li><a href="#sources" className="hover:underline">Sources</a></li>
                </ol>
              </div>

              {/* SECTION 1 */}
              <section id="principe" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  1. Un certificat PEB par logement, pas par immeuble
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  C'est le point que beaucoup de copropriétaires ignorent : <strong>il n'existe pas de certificat PEB pour l'immeuble dans son ensemble</strong>. La réglementation bruxelloise prévoit un certificat PEB <strong>par unité d'habitation individuelle</strong> — chaque appartement, chaque studio de la copropriété doit avoir le sien.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Concrètement, cela signifie que si votre immeuble compte 8 appartements, <strong>8 certificats PEB distincts</strong> doivent être établis, chacun portant sur les caractéristiques propres du logement concerné (isolation, vitrage, chauffage individuel, ventilation).
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 mb-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">💡 Bon à savoir :</strong> Les éléments communs comme la <strong>toiture, la façade ou la chaudière collective</strong> influencent le score PEB de chaque unité, mais il n'existe pas de score PEB spécifique pour les parties communes. C'est chaque appartement qui est évalué individuellement.
                </div>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-3">Qui est concerné ?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Toutes les copropriétés résidentielles bruxelloises dont les logements sont mis en <strong>vente ou en location</strong> — obligation en vigueur depuis 2011. Et <strong>d'ici 2030</strong>, l'obligation s'étendra à tous les logements, y compris ceux occupés par leur propriétaire.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-emerald-700">✅ Exception :</strong> Si vous êtes propriétaire de <strong>tout un immeuble de rapport</strong> (sans copropriété légale constituée), les règles spécifiques à l'ACP ne s'appliquent pas. Chaque logement doit quand même avoir son certificat PEB individuel.{' '}
                  <Link to="/contact" className="text-emerald-700 hover:underline">Contactez KCertiPEB pour un devis groupé →</Link>
                </div>
              </section>

              {/* SECTION 2 */}
              <section id="acp" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  2. Le rôle de l'ACP et la co-responsabilité énergétique
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La réforme du{' '}
                  <a href="https://environnement.brussels/pro/reglementation/textes-de-loi/le-code-bruxellois-de-lair-du-climat-et-de-la-maitrise-de-lenergie-cobrace" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">CoBrACE votée en mars 2024</a>{' '}
                  introduit une notion nouvelle et importante : la <strong>co-responsabilité de l'ACP</strong>. Voici ce que cela signifie concrètement.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Chaque copropriétaire reste personnellement responsable du certificat PEB de <strong>son propre logement</strong>. Mais si un logement de l'immeuble ne respecte pas les objectifs PEB, <strong>l'ACP peut être sanctionnée</strong> — sauf si elle peut prouver qu'elle a tout mis en œuvre pour y remédier.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-3">Pourquoi cette co-responsabilité ?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Certains travaux nécessaires pour améliorer le score PEB d'un appartement — isolation de la toiture, ravalement de façade — ne peuvent être réalisés que sur décision collective de l'assemblée générale. La co-responsabilité de l'ACP évite que des propriétaires récalcitrants bloquent la mise en conformité de l'ensemble de l'immeuble.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-3">L'Expert PEB de copropriété</h3>
                <p className="text-gray-700 leading-relaxed mb-3">Dans le cadre de la réforme, <strong>l'ACP devra désigner un unique Expert PEB</strong> pour l'immeuble. Cet expert sera chargé de :</p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 mb-4 text-sm">
                  <li>Établir les certificats PEB manquants pour chaque unité résidentielle</li>
                  <li>Mettre à jour les certificats existants si nécessaire</li>
                  <li>Rédiger un <strong>rapport de synthèse</strong> sur les travaux à prévoir sur les parties communes et le transmettre à l'ACP</li>
                </ul>
                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-red-700">⚠️ Ce dispositif n'est pas encore pleinement opérationnel.</strong> Les formations d'Expert PEB sont en cours de déploiement en 2026. En attendant, chaque unité doit disposer de son certificat PEB individuel, établi par un{' '}
                  <Link to="/" className="text-emerald-700 hover:underline">certificateur agréé comme KCertiPEB</Link>.
                </div>
              </section>

              {/* CTA 1 */}
              <div className="bg-emerald-700 text-white rounded-xl p-7 mb-10 text-center">
                <p className="font-bold text-lg mb-2">Votre immeuble n'est pas encore certifié ?</p>
                <p className="text-emerald-100 text-sm mb-4">KCertiPEB coordonne la certification de toutes les unités résidentielles en une seule organisation. Un interlocuteur, un planning, un certificat officiel par logement.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Demander un devis groupé pour votre copropriété →
                </Link>
              </div>

              {/* SECTION 3 */}
              <section id="syndic" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  3. Le rôle clé du syndic dans la certification PEB
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le syndic — bénévole ou professionnel — joue un rôle central dans l'organisation de la certification PEB d'une copropriété. Même si chaque certificat est établi pour une unité individuelle, c'est souvent le syndic qui coordonne l'ensemble de la démarche.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-3">Ce que le syndic peut faire</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 mb-4 text-sm">
                  <li><strong>Commander les certificats PEB en lot</strong> pour l'ensemble des unités, via un certificateur agréé</li>
                  <li>Transmettre les <strong>documents communs</strong> utiles (acte de base, permis d'urbanisme, fiches techniques des travaux sur parties communes, attestation de la chaudière collective)</li>
                  <li>Coordonner les <strong>rendez-vous de visite</strong> avec les copropriétaires et locataires</li>
                  <li>Veiller à ce que chaque propriétaire dispose bien de son certificat avant toute vente ou mise en location</li>
                </ul>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-3">Documents communs à fournir au certificateur</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">Avant la visite, le syndic peut rassembler les documents suivants qui bénéficieront à l'ensemble des unités :</p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left p-3">Document</th>
                        <th className="text-left p-3">Utilité pour le PEB</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-gray-200 font-medium">Acte de base de la copropriété</td>
                        <td className="p-3 border-b border-gray-200">Année de construction, description des parties communes</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200 font-medium">Permis d'urbanisme des travaux communs</td>
                        <td className="p-3 border-b border-gray-200">Preuve des rénovations de façade, toiture, etc.</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200 font-medium">Fiches techniques isolation toiture/façade</td>
                        <td className="p-3 border-b border-gray-200">Améliore le score PEB de chaque unité</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200 font-medium">Attestation entretien chaudière collective</td>
                        <td className="p-3 border-b border-gray-200">Obligatoire pour le calcul du chauffage</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200 font-medium">DIU (Dossier d'Intervention Ultérieure)</td>
                        <td className="p-3 border-b border-gray-200">Historique complet des travaux réalisés</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200 font-medium">PV des assemblées générales (travaux)</td>
                        <td className="p-3 border-b border-gray-200">Preuve des décisions de rénovation prises</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">💡 Règle d'or :</strong> Sans documents justificatifs, le certificateur applique des <strong>valeurs par défaut défavorables</strong>. Une toiture isolée sans preuve = considérée non isolée. Impact : <strong>-1 à -2 classes PEB</strong> par logement. Plus le syndic fournit de preuves, meilleur sera le score de chaque copropriétaire.
                </div>
              </section>

              {/* SECTION 4 */}
              <section id="echeances" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  4. Les échéances à retenir : 2030, 2033, 2045
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Les{' '}
                  <a href="https://environnement.brussels/citoyen/news/2024/fin-programmee-des-passoires-energetiques" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">objectifs de la Région bruxelloise</a>{' '}
                  sont clairs et progressifs. Voici le calendrier qui concerne les logements résidentiels en copropriété :
                </p>
                <div className="space-y-5 mb-6">
                  {[
                    {
                      year: '2026',
                      color: 'bg-emerald-700',
                      title: 'Dès aujourd\'hui — obligation de certification à la vente/location',
                      body: <>Chaque appartement mis en vente ou en location doit disposer d'un certificat PEB valide. La classe énergétique doit figurer dans l'annonce. <Link to="/certificat-peb-immeuble-bruxelles" className="text-emerald-700 hover:underline">Certification pour votre immeuble →</Link></>
                    },
                    {
                      year: '2030',
                      color: 'bg-yellow-500',
                      title: 'Certificat PEB obligatoire pour tous les logements',
                      body: <>Y compris ceux occupés par leur propriétaire, même s'ils ne sont pas sur le marché. L'ACP aura jusqu'au <strong>31 décembre 2030</strong> pour s'assurer que toutes les unités de l'immeuble sont certifiées. <Link to="/contact" className="text-emerald-700 hover:underline">Anticiper dès maintenant →</Link></>
                    },
                    {
                      year: '2033',
                      color: 'bg-emerald-700',
                      title: 'Objectif PEB 275 — fin des passoires énergétiques (F et G)',
                      body: <>Tous les logements bruxellois devront consommer moins de <strong>275 kWh/m²/an</strong>. Les logements en classe F ou G actuellement devront avoir été rénovés. L'ACP devient co-responsable. <a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/objectifs-peb-pour-chaque-logement-et-exigences-peb-en-cas-de-travaux" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Objectifs PEB officiels →</a></>
                    },
                    {
                      year: '2045',
                      color: 'bg-emerald-700',
                      title: 'Objectif PEB 150 — élimination des classes D et E',
                      body: <>À terme, aucun logement bruxellois ne pourra consommer plus de <strong>150 kWh/m²/an</strong>. Les classes D et E actuelles seront concernées. Des dérogations seront possibles dans certains cas spécifiques.</>
                    },
                  ].map((item) => (
                    <div key={item.year} className="flex gap-4 items-start">
                      <div className={`min-w-[52px] h-[52px] ${item.color} text-white rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0`}>
                        {item.year}
                      </div>
                      <div className="pt-2">
                        <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-emerald-700">✅ Bonne nouvelle :</strong> Plus d'un logement bruxellois sur deux satisfait déjà à l'objectif PEB 275 de 2033. Vérifiez l'état de votre immeuble en{' '}
                  <Link to="/contact" className="text-emerald-700 hover:underline">demandant une certification groupée</Link> dès maintenant.
                </div>
              </section>

              {/* SECTION 5 */}
              <section id="documents" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  5. Documents à préparer avant la visite PEB
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Une bonne préparation peut faire gagner <strong>1 à 2 classes</strong> à chaque logement. Retrouvez les informations officielles sur{' '}
                  <a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">la page dédiée de Bruxelles Environnement</a>.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-3">Documents à fournir par chaque copropriétaire</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 mb-4 text-sm">
                  <li>Factures de travaux réalisés dans le logement (isolation, vitrage, chaudière individuelle)</li>
                  <li>Fiches techniques des matériaux isolants posés</li>
                  <li>Attestation de contrôle de la chaudière individuelle (si applicable)</li>
                  <li>Tout document prouvant des améliorations énergétiques dans l'unité</li>
                </ul>
                <h3 className="text-lg font-bold text-emerald-700 mt-6 mb-3">Documents fournis par le syndic (valables pour toutes les unités)</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 mb-4 text-sm">
                  <li>Acte de base et règlement de copropriété</li>
                  <li>Fiches techniques des travaux d'isolation réalisés sur les parties communes</li>
                  <li>Attestation d'entretien de la chaudière collective</li>
                  <li>PV des AG mentionnant des travaux de rénovation énergétique</li>
                </ul>
                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-red-700">⚠️ Important :</strong> Sans justificatif, le certificateur est <strong>obligé</strong> d'appliquer des valeurs par défaut pénalisantes. Ce n'est pas une question de bonne volonté — c'est le protocole officiel imposé par Bruxelles Environnement. Chaque preuve fournie peut améliorer concrètement le score final.
                </div>
              </section>

              {/* CTA 2 */}
              <div className="bg-emerald-700 text-white rounded-xl p-7 mb-10 text-center">
                <p className="font-bold text-lg mb-2">Syndic ? Simplifiez tout avec KCertiPEB</p>
                <p className="text-emerald-100 text-sm mb-4">Un seul interlocuteur pour tout l'immeuble. Nous coordonnons les visites, collectons les documents et remettons un certificat officiel par unité sous 48h.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Obtenir un devis syndic gratuit →
                </Link>
              </div>

              {/* SECTION 6 */}
              <section id="processus" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  6. Comment KCertiPEB certifie votre immeuble résidentiel
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Organiser la certification PEB d'un immeuble entier peut sembler complexe. Avec KCertiPEB, la démarche est simplifiée au maximum pour le syndic et les copropriétaires.
                </p>
                <div className="space-y-5 mb-4">
                  {[
                    {
                      n: 1,
                      title: 'Prise de contact et devis groupé',
                      body: <>Le syndic ou l'ACP nous contacte avec le nombre d'unités et leur superficie approximative. Nous établissons un devis détaillé sous 2h. <Link to="/contact" className="text-emerald-700 hover:underline">Demander un devis →</Link></>
                    },
                    {
                      n: 2,
                      title: 'Collecte des documents communs',
                      body: 'Le syndic nous transmet les documents communs à l\'immeuble. Chaque propriétaire rassemble ses justificatifs individuels.'
                    },
                    {
                      n: 3,
                      title: 'Planification des visites',
                      body: 'Nous établissons un planning adapté aux disponibilités de chaque occupant, en coordination avec le syndic. Chaque visite dure environ 45 min à 1h par unité.'
                    },
                    {
                      n: 4,
                      title: 'Visites techniques et encodage',
                      body: 'Notre certificateur agréé inspecte chaque logement : isolation, vitrage, chauffage, ventilation. Toutes les données sont encodées dans le logiciel officiel de Bruxelles Environnement.'
                    },
                    {
                      n: 5,
                      title: 'Remise des certificats officiels',
                      body: 'Chaque copropriétaire reçoit son certificat PEB individuel sous 48 à 72h, valide 10 ans, enregistré dans le registre officiel. Le syndic reçoit un récapitulatif global de l\'immeuble.'
                    },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-4 items-start">
                      <div className="min-w-[36px] h-[36px] bg-yellow-500 text-white rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                        {step.n}
                      </div>
                      <div className="pt-1">
                        <p className="font-bold text-gray-900 text-sm mb-1">{step.title}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mt-4">
                  Nous intervenons dans les <strong>19 communes de la Région de Bruxelles-Capitale</strong>. Pour les immeubles en copropriété, découvrez notre{' '}
                  <Link to="/certificat-peb-immeuble-bruxelles" className="text-emerald-700 hover:underline">service dédié aux immeubles résidentiels</Link>{' '}
                  — nos certificateurs agréés par Bruxelles Environnement vous accompagnent.
                </p>
              </section>

              {/* SECTION 7 */}
              <section id="sanctions" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  7. Sanctions en cas de non-conformité
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ne pas disposer d'un certificat PEB valide lors d'une vente ou d'une mise en location expose le propriétaire à des amendes administratives. Et à partir de 2033, c'est le niveau énergétique du logement lui-même qui sera sanctionné.
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left p-3">Situation</th>
                        <th className="text-left p-3">Sanction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Absence de certificat PEB lors d'une vente ou location</td>
                        <td className="p-3 border-b border-gray-200 font-medium">200 € à 1 000 €</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200">Certificat PEB périmé présenté</td>
                        <td className="p-3 border-b border-gray-200 font-medium">300 € à 3 000 €</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Non-atteinte de l'objectif PEB 275 en 2033</td>
                        <td className="p-3 border-b border-gray-200 font-medium">Amende automatique : 2,5 € par kWh/an d'écart, minimum 125 €</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="p-3 border-b border-gray-200">ACP sanctionnée pour non-conformité collective</td>
                        <td className="p-3 border-b border-gray-200 font-medium">Amende calculée sur l'écart à l'objectif, sauf preuve de diligence</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">💡 Comment l'ACP peut se dégager de sa responsabilité :</strong> En démontrant qu'elle a fait tout ce qui était en son pouvoir — inscription des travaux à l'ordre du jour des AG, votes organisés, entreprises contactées — même si les résultats ne sont pas encore atteints. La <strong>traçabilité des démarches</strong> est donc cruciale.
                </div>
              </section>

              {/* SECTION 8 : FAQ */}
              <section id="faq" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  8. FAQ — Certificat PEB en copropriété résidentielle
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      q: 'Un seul certificat PEB peut-il couvrir tout l\'immeuble ?',
                      a: <>Non. Chaque logement doit avoir son propre certificat PEB individuel. Il n'existe pas de certificat global pour l'immeuble en copropriété résidentielle. <Link to="/certificat-peb-immeuble-bruxelles" className="text-emerald-700 hover:underline">Voir notre service immeuble →</Link></>
                    },
                    {
                      q: 'Qui commande les certificats PEB dans une copropriété ?',
                      a: <>Chaque propriétaire est responsable du certificat PEB de son propre logement. En pratique, le syndic peut centraliser la commande. <Link to="/contact" className="text-emerald-700 hover:underline">KCertiPEB propose des devis groupés pour syndics →</Link></>
                    },
                    {
                      q: 'Les travaux sur les parties communes améliorent-ils le PEB de chaque appartement ?',
                      a: 'Oui. L\'isolation de la toiture, le ravalement de façade avec isolation, ou le remplacement de la chaudière collective influencent directement le score PEB de chaque unité. Il est donc important de fournir au certificateur les documents prouvant ces travaux.'
                    },
                    {
                      q: 'Quand le certificat PEB devient-il obligatoire pour tous les logements, même non mis en vente ?',
                      a: <>D'ici le <strong>31 décembre 2030</strong>, tous les logements bruxellois — y compris ceux occupés par leur propriétaire — devront disposer d'un certificat PEB. <a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/la-peb-en-copropriete" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Source : Bruxelles Environnement →</a></>
                    },
                    {
                      q: 'Qu\'est-ce que la co-responsabilité de l\'ACP en 2033 ?',
                      a: 'Dès 2033, si un logement de la copropriété ne respecte pas l\'objectif de 275 kWh/m²/an, l\'ACP peut être sanctionnée — sauf si elle prouve qu\'elle a tout mis en œuvre pour y remédier (travaux votés en AG, démarches documentées).'
                    },
                    {
                      q: 'Mon appartement a un certificat PEB F — que faire avant 2033 ?',
                      a: <>Priorité : isolation des combles/toiture (gain possible de 1-2 classes), remplacement des châssis simple vitrage, modernisation du chauffage. Renseignez-vous sur les aides disponibles sur <a href="https://renolution.brussels/fr/coproprietes" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Renolution Bruxelles</a>. Ensuite, <Link to="/contact" className="text-emerald-700 hover:underline">faites établir un nouveau certificat PEB</Link> pour valoriser vos améliorations.</>
                    },
                    {
                      q: 'Combien coûte la certification PEB groupée d\'un immeuble ?',
                      a: <>Le tarif dépend du nombre d'unités et de leur superficie. <Link to="/contact" className="text-emerald-700 hover:underline">Contactez KCertiPEB pour un devis groupé gratuit</Link>. Nous intervenons dans les 19 communes bruxelloises.</>
                    },
                    {
                      q: 'Le locataire doit-il recevoir le certificat PEB ?',
                      a: <>Oui. Le propriétaire-bailleur doit fournir une copie du certificat PEB au locataire à la signature du bail. La classe énergétique doit également figurer dans l'annonce de location. <Link to="/certificat-peb-immeuble-bruxelles" className="text-emerald-700 hover:underline">Certification PEB pour votre immeuble →</Link></>
                    },
                    {
                      q: 'Un certificat PEB établi aujourd\'hui est-il valable jusqu\'en 2033 ?',
                      a: 'Oui. Un certificat PEB est valable 10 ans. Établi en 2026, il est valide jusqu\'en 2036 — bien au-delà de l\'échéance 2033. En revanche, si vous réalisez des travaux importants, il est recommandé d\'en faire établir un nouveau pour valoriser les améliorations.'
                    },
                    {
                      q: 'Peut-on obtenir des aides pour rénover et améliorer le PEB en copropriété ?',
                      a: <>Oui. Des primes et accompagnements sont disponibles pour les copropriétés résidentielles à Bruxelles, notamment via le programme <a href="https://renolution.brussels/fr/coproprietes" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Renolution</a>. L'ACP doit être enregistrée à la BCE pour en bénéficier.</>
                    },
                  ].map((item) => (
                    <div key={item.q} className="border-b border-gray-100 pb-5 last:border-0">
                      <p className="font-bold text-gray-900 mb-2 text-sm">{item.q}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA FINAL */}
              <div className="bg-emerald-700 text-white rounded-xl p-7 mb-10 text-center">
                <p className="font-bold text-lg mb-2">Besoin d'un certificat PEB pour votre copropriété résidentielle ?</p>
                <p className="text-emerald-100 text-sm mb-4">KCertiPEB — certificateurs agréés Bruxelles Environnement. Un interlocuteur unique, un planning coordonné, un certificat par unité sous 48h dans les 19 communes bruxelloises.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Demander un devis groupé gratuit →
                </Link>
              </div>

              {/* SOURCES */}
              <div id="sources" className="bg-gray-50 rounded-xl p-6 scroll-mt-24">
                <h2 className="text-base font-bold text-gray-900 mb-4 border-0 p-0 m-0 mt-0">📚 Sources</h2>
                <ul className="list-disc pl-5 space-y-2 text-xs text-gray-500">
                  <li><a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/la-peb-en-copropriete" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 hover:underline">Bruxelles Environnement — La PEB en copropriété résidentielle : obligations et exigences</a></li>
                  <li><a href="https://environnement.brussels/pro/reglementation-et-inspection/obligations-et-autorisations/copropriete-la-gestion-de-la-peb" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 hover:underline">Bruxelles Environnement — La gestion PEB d'un bâtiment en copropriété (version professionnels)</a></li>
                  <li><a href="https://environnement.brussels/citoyen/news/2024/fin-programmee-des-passoires-energetiques" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 hover:underline">Bruxelles Environnement — Fin programmée des passoires énergétiques : objectifs 2033 et 2045</a></li>
                  <li><a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 hover:underline">Bruxelles Environnement — Le certificat PEB d'un logement en Région bruxelloise</a></li>
                  <li><a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/objectifs-peb-pour-chaque-logement-et-exigences-peb-en-cas-de-travaux" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 hover:underline">Bruxelles Environnement — Objectifs PEB pour chaque logement résidentiel</a></li>
                  <li><a href="https://environnement.brussels/pro/reglementation/textes-de-loi/le-code-bruxellois-de-lair-du-climat-et-de-la-maitrise-de-lenergie-cobrace" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 hover:underline">Bruxelles Environnement — CoBrACE : révision mars 2024 et co-responsabilité ACP</a></li>
                  <li><a href="https://renolution.brussels/fr/coproprietes" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 hover:underline">Renolution Bruxelles — Copropriétés : aides, primes et accompagnement à la rénovation</a></li>
                  <li><a href="https://document.environnement.brussels/opac_css/elecfile/Reforme_PEB_Transition_Expert_PEB" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 hover:underline">Bruxelles Environnement — Info fiche Expert PEB, transition et nouveau rôle (janvier 2026)</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </article>
    </>
  );
}
