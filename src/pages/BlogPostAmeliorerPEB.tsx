import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

function StatBar() {
  return (
    <div className="grid grid-cols-3 gap-3 my-7">
      {[
        { num: '28,5%', label: 'des logements bruxellois sont en classe G' },
        { num: '+15%', label: 'de valeur en plus pour un bien classé A vs G' },
        { num: '2033', label: 'échéance pour atteindre 275 kWh/m²/an à Bruxelles' },
      ].map(({ num, label }) => (
        <div key={num} className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
          <span className="block text-2xl font-extrabold text-emerald-700">{num}</span>
          <span className="text-xs text-gray-500 leading-snug">{label}</span>
        </div>
      ))}
    </div>
  );
}

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

function ProgressBar({ label, pct, range }: { label: string; pct: number; range: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-semibold mb-1">
        <span>{label}</span><span>{range}</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

interface TravauxCardProps {
  rank: number;
  title: string;
  children: ReactNode;
  impact: string;
  cost: string;
  gain: string;
}
function TravauxCard({ rank, title, children, impact, cost, gain }: TravauxCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-4 px-5 py-4 bg-emerald-900 text-white">
        <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0">{rank}</div>
        <p className="font-bold text-base">{title}</p>
      </div>
      <div className="p-5 bg-white text-sm text-gray-600 leading-relaxed">
        {children}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full px-3 py-1 text-xs font-semibold">{impact}</span>
          <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full px-3 py-1 text-xs font-semibold">{cost}</span>
          <span className="bg-orange-50 border border-orange-200 text-orange-700 rounded-full px-3 py-1 text-xs font-semibold">{gain}</span>
        </div>
      </div>
    </div>
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

export default function BlogPostAmeliorerPEB() {
  return (
    <>
      <SEO
        title="Améliorer son Certificat PEB à Bruxelles : Guide Travaux 2026 | KCertiPEB"
        description="Comment améliorer son certificat PEB à Bruxelles ? Travaux prioritaires, gains de classes, coûts et ordre d'intervention. Guide complet par KCertiPEB, certificateurs agréés."
        canonical="https://kcertipeb.be/blog/ameliorer-certificat-peb-bruxelles"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Comment améliorer son Certificat PEB à Bruxelles : le guide des travaux prioritaires',
          description: 'Travaux prioritaires pour améliorer son certificat PEB à Bruxelles — gains de classes, coûts et ordre d\'intervention.',
          author: { '@type': 'Organization', name: 'KCertiPEB', url: 'https://kcertipeb.be' },
          publisher: { '@type': 'Organization', name: 'KCertiPEB', logo: { '@type': 'ImageObject', url: 'https://kcertipeb.be/logo.png' } },
          datePublished: '2026-05-07',
          dateModified: '2026-05-07',
          image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop',
          url: 'https://kcertipeb.be/blog/ameliorer-certificat-peb-bruxelles',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kcertipeb.be/blog/ameliorer-certificat-peb-bruxelles' },
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
            <span className="text-gray-800 truncate">Améliorer son certificat PEB</span>
          </nav>
        </div>
      </div>

      <article className="bg-gray-50 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            {/* Header */}
            <div className="p-8 sm:p-12 pb-0">
              <span className="inline-block rounded bg-emerald-700 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide mb-5">
                🌿 Rénovation énergétique — Guide 2026
              </span>
              <h1 id="top" className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Comment améliorer son Certificat PEB à Bruxelles : le guide des travaux prioritaires
              </h1>
              <p className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-l-4 border-emerald-600 pl-4 mb-8">
                <span>Par <strong className="text-emerald-700">KCertiPEB</strong> — Certificateurs PEB agréés Bruxelles Environnement</span>
                <span>|</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Mis à jour le <strong>7 mai 2026</strong></span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </p>
            </div>

            {/* Hero image */}
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop"
              alt="Travaux de rénovation énergétique — isolation toiture maison bruxelloise"
              loading="eager"
              className="w-full object-cover h-72 sm:h-96"
            />

            <div className="p-8 sm:p-12">

              {/* Intro */}
              <p className="text-gray-700 leading-relaxed mb-5">
                Votre bien est classé F ou G au certificat PEB ? Vous voulez gagner une ou deux classes avant de vendre ou de louer ? Ou simplement anticiper l'
                <a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/objectifs-peb-pour-chaque-logement-et-exigences-peb-en-cas-de-travaux" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
                  objectif PEB 275 imposé par Bruxelles Environnement d'ici 2033
                </a> ? Ce guide vous donne l'ordre exact des travaux à prioriser, les gains attendus et les coûts estimés — pour rénover intelligemment sans gaspiller votre budget.
              </p>

              <StatBar />

              <Warn>
                <strong className="text-red-700">⚠️ Attention :</strong> Dès 2033, tout logement bruxellois dépassant 275 kWh/m²/an (classes F et G actuelles) sera passible d'amendes automatiques : <strong>2,5 € par kWh/an d'écart</strong>, avec un minimum de 125 €. Mieux vaut anticiper les travaux maintenant, à votre rythme, que d'être contraint dans l'urgence.
              </Warn>

              {/* TOC */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
                <p className="font-bold text-gray-900 mb-4">📋 Sommaire</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  {[
                    ['#principe', "La règle d'or : enveloppe d'abord, chauffage ensuite"],
                    ['#deperditions', "D'où s'échappe la chaleur dans votre logement ?"],
                    ['#travaux', 'Les 6 travaux prioritaires classés par impact PEB'],
                    ['#scenarios', 'Combien de classes pouvez-vous gagner ?'],
                    ['#documents', 'Prouver vos travaux pour maximiser votre score'],
                    ['#recertification', 'Quand faire établir un nouveau certificat PEB ?'],
                    ['#faq', 'FAQ amélioration PEB'],
                    ['#sources', 'Sources'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="text-emerald-700 hover:underline font-medium">{label}</a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* SECTION 1 */}
              <section id="principe">
                <H2 id="principe">1. La règle d'or : enveloppe d'abord, chauffage ensuite</H2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Avant de remplacer votre chaudière ou d'installer une pompe à chaleur, il y a une règle fondamentale que tous les experts en rénovation énergétique respectent : <strong>on isole d'abord le bâtiment, on modernise le chauffage ensuite</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pourquoi ? Parce qu'un système de chauffage performant dans un logement mal isolé, c'est comme chauffer à la fenêtre ouverte. La chaleur produite s'échappe immédiatement par la toiture, les murs et les vitrages. En isolant d'abord l'enveloppe du bâtiment, vous réduisez les besoins en chaleur, ce qui permet ensuite de dimensionner correctement — et moins coûteusement — votre installation de chauffage.
                </p>
                <Success>
                  <strong className="text-emerald-700">✅ L'ordre recommandé :</strong><br />
                  <strong>1.</strong> Isolation toiture / combles &nbsp;→&nbsp;
                  <strong>2.</strong> Isolation murs &nbsp;→&nbsp;
                  <strong>3.</strong> Modernisation du chauffage &nbsp;→&nbsp;
                  <strong>4.</strong> Isolation sols &nbsp;→&nbsp;
                  <strong>5.</strong> Remplacement des vitrages &nbsp;→&nbsp;
                  <strong>6.</strong> Ventilation + énergies renouvelables
                </Success>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Après la toiture, le <strong>remplacement du système de chauffage est plus impactant sur le score PEB que l'isolation des façades</strong>. Une pompe à chaleur ou une chaudière à condensation performante réduit directement la consommation d'énergie primaire calculée dans le certificat. L'isolation des murs reste indispensable pour le confort et les économies à long terme, mais son impact PEB est moindre que celui du chauffage. Cet ordre correspond au meilleur rapport <strong>impact PEB / investissement</strong> recommandé par{' '}
                  <a href="https://renolution.brussels" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">Renolution Bruxelles</a>.
                </p>
              </section>

              {/* SECTION 2 */}
              <section id="deperditions">
                <H2 id="deperditions">2. D'où s'échappe la chaleur dans votre logement ?</H2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Pour améliorer efficacement son certificat PEB, il faut d'abord comprendre par où part la chaleur.{' '}
                  <a href="https://environnement.brussels/pro/reglementation/obligations-et-autorisations/certificat-peb-habitation-individuelle" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">Selon Bruxelles Environnement</a>, les déperditions thermiques d'un logement bruxellois typique se répartissent ainsi :
                </p>
                <ProgressBar label="🏠 Toiture / combles" range="25 à 30 %" pct={28} />
                <ProgressBar label="🧱 Murs extérieurs" range="20 à 25 %" pct={22} />
                <ProgressBar label="🪟 Fenêtres et châssis" range="15 à 20 %" pct={17} />
                <ProgressBar label="🪴 Sol / plancher" range="10 à 15 %" pct={12} />
                <ProgressBar label="💨 Ventilation / infiltrations" range="10 à 20 %" pct={15} />
                <Tip>
                  <strong className="text-amber-700">💡 Saviez-vous ?</strong> À Bruxelles, <strong>plus de 30 % des toitures ne sont pas isolées</strong>. C'est le geste de rénovation le plus impactant, le plus accessible financièrement et celui qui améliore le plus rapidement votre classe PEB.
                </Tip>
              </section>

              {/* SECTION 3 */}
              <section id="travaux">
                <H2 id="travaux">3. Les 6 travaux prioritaires classés par impact PEB</H2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Voici le détail de chaque poste de rénovation, classé par ordre d'impact sur votre score PEB, avec les coûts estimatifs et les gains attendus pour un logement bruxellois moyen.
                </p>
                <div className="flex flex-col gap-4">
                  <TravauxCard rank={1} title="Isolation toiture et combles" impact="💚 Impact PEB : très élevé" cost="💶 5 000 – 15 000 €" gain="+1 à +2 classes PEB">
                    <p className="mb-3">La toiture est responsable de <strong>25 à 30 %</strong> des déperditions thermiques. C'est le geste le plus rentable et le plus impactant sur le score PEB. Pour les combles accessibles, l'isolation en soufflage ou en rouleaux est rapide et peu coûteuse. Pour une toiture plate, une isolation par l'extérieur ou l'intérieur est nécessaire.</p>
                    <p><strong>Exigence minimale :</strong> résistance thermique R ≥ 4 m²K/W (l'épaisseur dépend du matériau isolant choisi).</p>
                  </TravauxCard>

                  <TravauxCard rank={2} title="Isolation des murs extérieurs" impact="💚 Impact PEB : élevé" cost="💶 5 000 – 20 000 €" gain="+1 à +2 classes PEB">
                    <p>Les murs représentent <strong>20 à 25 %</strong> des pertes de chaleur. Trois techniques existent à Bruxelles : isolation par l'intérieur (ITI), par l'extérieur (ITE) ou remplissage d'une cavité de mur creux. L'ITE est la plus efficace mais la plus coûteuse. Le remplissage de mur creux est souvent le plus abordable pour les immeubles anciens. L'impact sur le score PEB est réel mais inférieur à celui du chauffage.</p>
                  </TravauxCard>

                  <TravauxCard rank={3} title="Modernisation du système de chauffage" impact="💚 Impact PEB : très élevé" cost="💶 5 000 – 15 000 € (PAC)" gain="+1 à +3 classes PEB">
                    <p>Après la toiture, le chauffage est le poste le plus impactant sur le score PEB. Une fois l'enveloppe partiellement isolée, remplacer une vieille chaudière ou passer à une <strong>pompe à chaleur</strong> réduit directement la consommation d'énergie primaire calculée dans le certificat. La pompe à chaleur air/eau est aujourd'hui le choix le plus pérenne : très bon rendement, compatible avec les objectifs 2033, et <strong>TVA à 6 %</strong> depuis janvier 2026 pour tous les logements. À Bruxelles, l'interdiction des chaudières au mazout est déjà en vigueur pour les nouvelles installations.</p>
                  </TravauxCard>

                  <TravauxCard rank={4} title="Isolation du sol et plancher sur cave" impact="💚 Impact PEB : moyen" cost="💶 3 000 – 10 000 €" gain="+0,5 à +1 classe PEB">
                    <p>Souvent négligée, l'isolation du sol représente pourtant <strong>10 à 15 %</strong> des pertes. Elle est particulièrement impactante pour les rez-de-chaussée sur caves non chauffées ou sur vide sanitaire. On peut isoler par-dessus le sol existant ou sous le plancher depuis la cave.</p>
                  </TravauxCard>

                  <TravauxCard rank={5} title="Remplacement des vitrages et châssis" impact="💚 Impact PEB : modéré" cost="💶 800 – 1 500 €/fenêtre" gain="+0,5 à +1 classe PEB">
                    <p>Passer du simple au double vitrage HR++ (Ug ≤ 1,1 W/m²K) ou au triple vitrage divise par 3 les pertes par les fenêtres. Le châssis compte autant que le vitrage : privilégiez les profilés à rupture de pont thermique. L'impact sur le score PEB est <strong>modéré</strong> mais le gain en confort thermique et acoustique est immédiat et significatif.</p>
                  </TravauxCard>

                  <TravauxCard rank={6} title="Ventilation mécanique + énergies renouvelables" impact="💚 Impact PEB : moyen à élevé" cost="💶 3 000 – 12 000 €" gain="+0,5 à +1,5 classe PEB">
                    <p>Un système de ventilation mécanique double flux (VMC DF) avec récupération de chaleur améliore l'efficacité énergétique tout en garantissant la qualité de l'air intérieur. Les <strong>panneaux solaires photovoltaïques</strong> réduisent directement la consommation d'énergie primaire calculée dans le PEB. À Bruxelles, l'énergie autoproduite est prise en compte dans le calcul du certificat PEB.</p>
                  </TravauxCard>
                </div>
              </section>

              <Cta
                title="Connaissez-vous la classe PEB actuelle de votre bien ?"
                body="Avant d'investir dans des travaux, faites établir un certificat PEB par KCertiPEB. Il identifie précisément les travaux qui auront le plus d'impact sur votre logement spécifique."
                href="/contact"
                cta="Demander un certificat PEB"
              />

              {/* SECTION 4 */}
              <section id="scenarios">
                <H2 id="scenarios">4. Combien de classes pouvez-vous gagner ?</H2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Le gain dépend de l'état initial de votre logement et de la combinaison de travaux réalisés. Voici des scénarios représentatifs pour des logements bruxellois typiques :
                </p>
                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-900 text-white">
                        <th className="text-left p-3 font-semibold">Classe de départ</th>
                        <th className="text-left p-3 font-semibold">Travaux réalisés</th>
                        <th className="text-left p-3 font-semibold">Classe visée</th>
                        <th className="text-left p-3 font-semibold">Budget estimé</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['G → E', 'Isolation toiture seule', 'E (≤ 275 kWh/m²/an)', '5 000 – 15 000 €'],
                        ['G → D', 'Isolation toiture + murs', 'D', '10 000 – 25 000 €'],
                        ['F → C', 'Toiture + châssis + chaudière condensation', 'C', '15 000 – 35 000 €'],
                        ['E → B', 'Toiture + murs + châssis + pompe à chaleur', 'B', '25 000 – 50 000 €'],
                        ['D → A', 'Rénovation globale + PAC + panneaux solaires + VMC DF', 'A', '40 000 – 70 000 €'],
                      ].map(([dep, travaux, cible, budget], i) => (
                        <tr key={dep} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                          <td className="p-3 font-bold border-b border-gray-100">{dep}</td>
                          <td className="p-3 border-b border-gray-100">{travaux}</td>
                          <td className="p-3 border-b border-gray-100">{cible}</td>
                          <td className="p-3 border-b border-gray-100">{budget}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Info>
                  <strong className="text-blue-700">ℹ️ Pour atteindre l'objectif 2033 :</strong> Dans la plupart des cas, <strong>1 ou 2 travaux suffisent</strong> pour atteindre l'objectif de 275 kWh/m²/an imposé par Bruxelles. L'isolation de la toiture est souvent suffisante pour faire passer un bien de G à E ou D.{' '}
                  <a href="https://environnement.brussels/citoyen/news/2024/fin-programmee-des-passoires-energetiques" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Source : Bruxelles Environnement →</a>
                </Info>
                <H3>Impact sur la valeur du bien</H3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Améliorer son certificat PEB a un impact direct sur le prix de vente et les loyers pratiqués. Un bien classé <strong>A ou B se vend en moyenne 5 à 15 % plus cher</strong> qu'un bien équivalent classé E, F ou G — soit entre 12 500 € et 37 500 € de plus sur un bien estimé à 250 000 €. C'est un retour sur investissement souvent supérieur au coût des travaux réalisés.
                </p>
              </section>

              {/* SECTION 5 */}
              <section id="documents">
                <H2 id="documents">5. Prouver vos travaux pour maximiser votre score PEB</H2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Un point crucial que beaucoup de propriétaires ignorent : <strong>le certificateur PEB ne peut valoriser que ce qu'il peut prouver</strong>. Sans documents justificatifs, il est obligé d'appliquer des <strong>valeurs par défaut pénalisantes</strong> — même si votre toiture est isolée ou vos châssis récents.
                </p>
                <Warn>
                  <strong className="text-red-700">⚠️ Règle absolue :</strong> Un mur isolé sans facture = considéré non isolé. Une chaudière récente sans attestation = valeur par défaut appliquée. Impact : <strong>-1 à -2 classes PEB</strong> par rapport à la réalité. Ce n'est pas une décision du certificateur — c'est le protocole officiel imposé par Bruxelles Environnement.
                </Warn>
                <H3>Documents à conserver précieusement après chaque travail</H3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-4">
                  <li><strong>Factures détaillées</strong> de l'entrepreneur (type de matériau, épaisseur, surface)</li>
                  <li><strong>Fiches techniques des matériaux</strong> isolants (marque, λ, épaisseur)</li>
                  <li><strong>Photos avant/pendant/après</strong> les travaux (horodatées si possible)</li>
                  <li><strong>Attestation PEB chauffage</strong> pour toute nouvelle installation de chauffage</li>
                  <li><strong>Certificat de conformité</strong> pour les nouveaux châssis (valeur Ug)</li>
                  <li><strong>Rapport d'entretien annuel</strong> de la chaudière</li>
                </ul>
                <Tip>
                  <strong className="text-amber-700">💡 Bon à savoir :</strong> Même des <strong>travaux anciens</strong> peuvent être valorisés si vous retrouvez les factures ou les fiches techniques. Avant de faire établir un nouveau certificat PEB, faites le tour de vos archives — chaque document retrouvé peut améliorer votre score.
                </Tip>
              </section>

              {/* SECTION 6 */}
              <section id="recertification">
                <H2 id="recertification">6. Quand faire établir un nouveau certificat PEB après travaux ?</H2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Un certificat PEB est valable <strong>10 ans</strong>. Mais après des travaux importants, il est fortement recommandé d'en faire établir un nouveau pour valoriser vos améliorations — que ce soit pour vendre, louer ou simplement suivre l'évolution de votre bien.
                </p>
                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-900 text-white">
                        <th className="text-left p-3 font-semibold">Situation</th>
                        <th className="text-left p-3 font-semibold">Nouveau certificat PEB ?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Isolation toiture réalisée', '✅ Recommandé — gain de 1 à 2 classes'],
                        ['Remplacement chaudière ou installation PAC', '✅ Fortement recommandé'],
                        ['Remplacement des châssis et vitrages', '✅ Recommandé si toiture aussi isolée'],
                        ['Simple entretien / peinture', "❌ Inutile — pas d'impact PEB"],
                        ['Certificat de plus de 10 ans', '✅ Obligatoire avant vente ou location'],
                        ['Mise en vente ou en location', '✅ Obligatoire si pas de certificat valide'],
                      ].map(([situation, reponse], i) => (
                        <tr key={situation} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                          <td className="p-3 border-b border-gray-100">{situation}</td>
                          <td className="p-3 border-b border-gray-100">{reponse}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Chez KCertiPEB, la recertification après travaux est disponible dès 125 €. Nous intervenons sous 48h dans les 19 communes bruxelloises.{' '}
                  <Link to="/contact" className="text-emerald-700 underline">Demandez votre devis →</Link>
                </p>
                <Success>
                  <strong className="text-emerald-700">✅ Stratégie maline :</strong> Un certificat PEB établi <strong>aujourd'hui</strong> est valide jusqu'en 2036 — bien après l'échéance 2033. Il fige votre score actuel, sert de base pour planifier vos travaux, et répond à l'obligation légale de vente et de location. C'est le <strong>premier pas</strong> de toute stratégie de rénovation intelligente.
                </Success>
              </section>

              <Cta
                title="Prêt à améliorer votre certificat PEB ?"
                body="Commencez par faire établir votre certificat actuel : il identifie précisément les travaux prioritaires pour votre logement et leur impact estimé sur votre classe énergétique."
                href="/contact"
                cta="Obtenir mon certificat PEB"
              />

              {/* SECTION 7 : FAQ */}
              <section id="faq">
                <H2 id="faq">7. FAQ — Améliorer son certificat PEB à Bruxelles</H2>
                <div className="divide-y divide-gray-100">
                  {[
                    {
                      q: 'Quel est le travail le plus rentable pour améliorer son PEB à Bruxelles ?',
                      a: "L'isolation de la toiture. C'est le poste qui présente le meilleur rapport impact PEB / coût d'investissement. Pour un budget de 2 000 à 5 000 €, vous pouvez gagner 1 à 2 classes et atteindre l'objectif 275 kWh/m²/an imposé dès 2033.",
                    },
                    {
                      q: 'Peut-on passer de G à C avec une rénovation partielle ?',
                      a: "Pas directement. Passer de G à C nécessite généralement une rénovation combinée : isolation toiture + murs + châssis + chauffage performant. Budget estimé : 25 000 à 45 000 €. Mais pour l'objectif légal de 2033 (classe E minimum), l'isolation de la toiture seule peut suffire dans de nombreux cas.",
                    },
                    {
                      q: 'La pompe à chaleur améliore-t-elle automatiquement le PEB ?',
                      a: "Oui, significativement. Une pompe à chaleur produit 3 à 4 kWh de chaleur pour 1 kWh d'électricité consommée. Cela réduit fortement la consommation d'énergie primaire calculée dans le PEB. Mais pour en tirer le maximum, le logement doit être préalablement bien isolé. Depuis janvier 2026, la TVA sur les pompes à chaleur est à 6 % pour tous les logements.",
                    },
                    {
                      q: "Faut-il un nouveau certificat PEB après chaque travail ?",
                      a: "Non — attendez d'avoir réalisé plusieurs travaux pour maximiser le gain de classe. L'idéal est de faire établir un nouveau certificat après la combinaison toiture + chauffage, qui représente souvent les deux plus gros gains PEB.",
                    },
                    {
                      q: 'Puis-je améliorer mon PEB sans faire de travaux ?',
                      a: "Partiellement. En retrouvant et en fournissant les documents justificatifs de travaux déjà réalisés (factures, fiches techniques), vous pouvez potentiellement gagner 1 classe sans dépenser un euro de plus.",
                    },
                    {
                      q: "Y a-t-il encore des aides financières pour rénover à Bruxelles en 2026 ?",
                      a: "Les primes Rénolution sont suspendues depuis janvier 2025. En attendant le nouveau système de prêts à taux zéro, il reste le crédit EcoReno de Bruxelles Environnement (taux 1,5 à 2,5 %) et la TVA réduite à 6 % sur les pompes à chaleur depuis janvier 2026.",
                    },
                    {
                      q: 'Comment savoir quels travaux prioriser pour mon logement spécifique ?',
                      a: "Le certificat PEB contient une liste personnalisée de recommandations de travaux, classées par ordre d'impact. C'est le document de base pour toute stratégie de rénovation.",
                    },
                    {
                      q: "Mon bien classé G sera-t-il interdit à la vente en 2033 ?",
                      a: "Non, pas interdit à la vente. Mais tout propriétaire d'un logement dépassant 275 kWh/m²/an après 2033 sera passible d'amendes automatiques (minimum 125 €, calculé sur l'écart à l'objectif). De plus, un bien classé G se négocie déjà aujourd'hui environ 10 % sous la valeur d'un bien équivalent mieux classé.",
                    },
                  ].map(({ q, a }) => (
                    <div key={q} className="py-5">
                      <p className="font-bold text-gray-900 mb-2">{q}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <Cta
                title="Le premier pas : connaître votre classe PEB actuelle"
                body="KCertiPEB — certificateurs agréés Bruxelles Environnement. Votre certificat PEB sous 48h dans les 19 communes bruxelloises, avec les recommandations de travaux personnalisées pour votre logement."
                href="/contact"
                cta="Demander mon certificat PEB"
              />

              {/* Sources */}
              <div id="sources" className="bg-gray-50 rounded-xl p-6 mt-10">
                <p className="font-bold text-gray-900 mb-3">📚 Sources</p>
                <ul className="list-disc list-inside space-y-2 text-xs text-gray-500">
                  {[
                    ['https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/objectifs-peb-pour-chaque-logement-et-exigences-peb-en-cas-de-travaux', 'Bruxelles Environnement — Objectifs PEB par logement et exigences en cas de travaux'],
                    ['https://environnement.brussels/citoyen/news/2024/fin-programmee-des-passoires-energetiques', 'Bruxelles Environnement — Fin programmée des passoires énergétiques : objectifs 2033 et 2045'],
                    ['https://environnement.brussels/pro/reglementation/obligations-et-autorisations/certificat-peb-habitation-individuelle', 'Bruxelles Environnement — Déperditions thermiques et calcul du certificat PEB'],
                    ['https://renolution.brussels', "Renolution Bruxelles — Programme d'aide à la rénovation énergétique"],
                    ['https://environnement.brussels/citoyen/aides-primes-et-incitants/aides-financieres-pour-la-construction-et-la-renovation', 'Bruxelles Environnement — Aides financières pour la rénovation (EcoReno, prêts)'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation articles */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between">
                <Link
                  to="/blog/certificat-peb-bruxelles-guide-complet-2026"
                  className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-emerald-700 transition-colors"
                >
                  ← Guide complet certificat PEB
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
