import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function BlogPostAmende() {
  return (
    <>
      <SEO
        title="Amende sans certificat PEB à Bruxelles : montants 2026 | KCertiPEB"
        description="Vendre ou louer sans certificat PEB à Bruxelles expose à une amende de 200 à 26 562 €. Montants officiels 2026, situations concernées et comment régulariser rapidement."
        canonical="https://kcertipeb.be/blog/amende-sans-certificat-peb-bruxelles"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Amende sans certificat PEB à Bruxelles : montants et sanctions 2026',
          description: 'Montants des amendes PEB à Bruxelles : de 200 € à 26 562 €. Guide complet des sanctions et comment les éviter.',
          author: { '@type': 'Organization', name: 'KCertiPEB', url: 'https://kcertipeb.be' },
          publisher: { '@type': 'Organization', name: 'KCertiPEB', logo: { '@type': 'ImageObject', url: 'https://kcertipeb.be/logo.png' } },
          datePublished: '2026-05-28',
          dateModified: '2026-05-28',
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop',
          url: 'https://kcertipeb.be/blog/amende-sans-certificat-peb-bruxelles',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kcertipeb.be/blog/amende-sans-certificat-peb-bruxelles' },
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
            <span className="text-gray-800 truncate">Amende sans certificat PEB</span>
          </nav>
        </div>
      </div>

      <article className="bg-gray-50 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            {/* Header */}
            <div className="p-8 sm:p-12 pb-0">
              <span className="inline-block rounded bg-red-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide mb-5">
                ⚠️ Sanctions & Amendes — Mai 2026
              </span>
              <h1 id="top" className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Amende sans certificat PEB à Bruxelles : montants et sanctions 2026
              </h1>
              <p className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-l-4 border-red-600 pl-4 mb-8">
                <span>Par <strong className="text-emerald-700">KCertiPEB</strong> — Certificateurs PEB agréés Bruxelles Environnement</span>
                <span>|</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> <strong>28 mai 2026</strong></span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min de lecture</span>
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
              alt="Sanction légale — amende certificat PEB Bruxelles"
              loading="eager"
              className="w-full object-cover h-72 sm:h-96"
            />

            <div className="p-8 sm:p-12">

              {/* GEO-optimized lede — answer in first 2 sentences */}
              <p className="text-gray-700 leading-relaxed mb-4 text-lg font-medium">
                À Bruxelles, vendre ou louer sans certificat PEB expose à une <strong>amende de 200 à 1 000 €</strong>. En cas de certificat périmé, l'amende peut atteindre <strong>3 000 €</strong>, et si les objectifs énergétiques 2033 ne sont pas respectés, jusqu'à <strong>26 562 €</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Ces sanctions sont prononcées par Bruxelles Environnement et peuvent s'accompagner de la nullité du bail ou d'un blocage de la vente chez le notaire. Ce guide fait le point sur tous les montants officiels, les situations à risque et la marche à suivre pour se régulariser rapidement.
              </p>

              {/* Alert */}
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4 mb-8 text-sm text-gray-700">
                <strong className="text-red-700">🔴 Rappel légal :</strong> Le certificat PEB est obligatoire à Bruxelles depuis 2011 pour toute vente ou location de bien résidentiel. Il doit figurer dans l'annonce immobilière et être remis lors de la signature du bail ou de l'acte authentique.
              </div>

              {/* Table of contents */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mb-10">
                <p className="text-base font-bold text-gray-900 mb-4">📋 Sommaire</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-700">
                  <li><a href="#montants" className="hover:underline">Tableau des amendes PEB à Bruxelles</a></li>
                  <li><a href="#situations" className="hover:underline">Situations à risque</a></li>
                  <li><a href="#procedure" className="hover:underline">Comment Bruxelles Environnement contrôle-t-il ?</a></li>
                  <li><a href="#regulariser" className="hover:underline">Comment se régulariser rapidement</a></li>
                  <li><a href="#faq" className="hover:underline">FAQ</a></li>
                </ol>
              </div>

              {/* Section 1 */}
              <section id="montants" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  1. Tableau des amendes PEB à Bruxelles
                </h2>
                <p className="text-gray-700 mb-5">
                  Les sanctions sont fixées par{' '}
                  <a href="https://environnement.brussels/pro/reglementation/textes-de-loi/le-code-bruxellois-de-lair-du-climat-et-de-la-maitrise-de-lenergie-cobrace" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">l'ordonnance CoBrACE</a>{' '}
                  et prononcées par{' '}
                  <a href="https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Bruxelles Environnement</a>.
                  Elles sont progressives selon la gravité de l'infraction.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-red-600 text-white">
                        <th className="text-left p-3">Infraction</th>
                        <th className="text-left p-3">Montant de l'amende</th>
                        <th className="text-left p-3">Conséquence supplémentaire</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Absence de certificat PEB lors d'une vente</td>
                        <td className="p-3 border-b border-gray-200 font-bold text-red-700">200 € – 1 000 €</td>
                        <td className="p-3 border-b border-gray-200">Blocage possible chez le notaire</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-3 border-b border-gray-200">Absence de certificat PEB lors d'une location</td>
                        <td className="p-3 border-b border-gray-200 font-bold text-red-700">200 € – 1 000 €</td>
                        <td className="p-3 border-b border-gray-200">Nullité du bail possible</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Certificat PEB périmé (+ de 10 ans)</td>
                        <td className="p-3 border-b border-gray-200 font-bold text-red-700">300 € – 3 000 €</td>
                        <td className="p-3 border-b border-gray-200">Idem vente/location sans certificat</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-3 border-b border-gray-200">Classe PEB absente de l'annonce immobilière</td>
                        <td className="p-3 border-b border-gray-200 font-bold text-red-700">200 € – 500 €</td>
                        <td className="p-3 border-b border-gray-200">Avertissement ou amende selon récidive</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-200">Non-respect des objectifs PEB 2033 (275 kWh/m²/an)</td>
                        <td className="p-3 border-b border-gray-200 font-bold text-red-700">jusqu'à 26 562 €</td>
                        <td className="p-3 border-b border-gray-200">Interdiction de louer le bien</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-3 border-b border-gray-200">Location d'un bien classé G (dès 2026)</td>
                        <td className="p-3 border-b border-gray-200 font-bold text-red-700">Nullité du bail</td>
                        <td className="p-3 border-b border-gray-200">Recours possible du locataire</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-yellow-700">💡 À noter :</strong> Le montant exact de l'amende est fixé par l'inspecteur de Bruxelles Environnement en fonction de la gravité, du nombre d'infractions et de la bonne foi du propriétaire. Un propriétaire qui se régularise spontanément bénéficie généralement d'une sanction réduite.
                </div>
              </section>

              {/* Section 2 */}
              <section id="situations" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  2. Situations à risque : quand risque-t-on une amende ?
                </h2>

                <div className="grid gap-4 md:grid-cols-2 mb-6">
                  {[
                    {
                      title: 'Vendre sans certificat PEB',
                      desc: "Le certificat doit être remis au notaire avant la signature de l'acte authentique. Sans lui, le notaire peut refuser de passer l'acte — ou le passer sous réserve, exposant le vendeur à une amende.",
                      icon: '🏠',
                    },
                    {
                      title: 'Louer sans certificat PEB',
                      desc: "Depuis 2011, la classe PEB est obligatoire dans l'annonce et une copie du certificat doit être remise au locataire. L'absence de certificat peut entraîner la nullité du bail à la demande du locataire.",
                      icon: '🔑',
                    },
                    {
                      title: 'Certificat périmé',
                      desc: 'Un certificat PEB est valable 10 ans. Après expiration, il ne couvre plus légalement la vente ou la location. Un certificat périmé est traité comme une absence de certificat.',
                      icon: '📅',
                    },
                    {
                      title: 'Annonce sans classe PEB',
                      desc: "La classe énergétique (A à G) doit figurer dans toute annonce immobilière, qu'il s'agisse d'une vitrine d'agence, d'un site web ou d'une affiche. L'absence expose à une amende distincte.",
                      icon: '📢',
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4 text-sm text-gray-700">
                  <strong className="text-red-700">⚠️ Cas particulier — Biens classés G :</strong> Depuis 2026, les biens classés G sont progressivement interdits à la location à Bruxelles. Un locataire occupant un bien classé G peut demander la nullité du bail et le remboursement des loyers versés. <strong>La situation peut devenir extrêmement coûteuse pour le propriétaire.</strong>
                </div>
              </section>

              {/* CTA */}
              <div className="bg-emerald-700 text-white rounded-xl p-7 mb-10 text-center">
                <p className="font-bold text-lg mb-2">Régularisez votre situation sous 48h</p>
                <p className="text-emerald-100 text-sm mb-4">KCertiPEB — certificateurs agréés Bruxelles Environnement. Intervention dans les 19 communes bruxelloises.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Demander un certificat PEB d'urgence →
                </Link>
              </div>

              {/* Section 3 */}
              <section id="procedure" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  3. Comment Bruxelles Environnement contrôle-t-il ?
                </h2>
                <p className="text-gray-700 mb-4">
                  <a href="https://environnement.brussels" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Bruxelles Environnement</a> dispose d'inspecteurs habilités à contrôler les annonces immobilières (en ligne et en vitrine), les actes de vente et les contrats de bail. Le{' '}
                  <a href="https://peb.environnement.brussels/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">registre officiel des certificats PEB</a>{' '}
                  est consultable en ligne et permet de vérifier immédiatement si un bien dispose d'un certificat valide.
                </p>
                <h3 className="text-lg font-bold text-emerald-700 mb-3">Sources de signalement les plus fréquentes</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mb-4">
                  <li>Annonces immobilières sans classe PEB détectées par les agents de Bruxelles Environnement</li>
                  <li>Signalement par un locataire ou acheteur mécontent</li>
                  <li>Contrôle lors d'une transaction notariée</li>
                  <li>Inspection de routine dans les immeubles à appartements (syndics)</li>
                </ul>
                <p className="text-gray-700 text-sm">
                  Le délai entre le signalement et la notification d'amende varie entre quelques semaines et plusieurs mois. En cas de contrôle, le propriétaire est d'abord invité à se régulariser avant qu'une amende définitive soit prononcée.
                </p>
              </section>

              {/* Section 4 */}
              <section id="regulariser" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-5">
                  4. Comment se régulariser rapidement ?
                </h2>
                <p className="text-gray-700 mb-6">
                  La solution est simple : faire établir un certificat PEB par un Expert PEB agréé par Bruxelles Environnement. Avec KCertiPEB, l'ensemble du processus — du premier contact au certificat officiel — prend <strong>48 heures</strong>.
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    { step: '1', title: 'Contactez KCertiPEB', desc: 'Réponse sous 2h, rendez-vous possible dès le lendemain dans toutes les 19 communes bruxelloises.' },
                    { step: '2', title: 'Visite technique', desc: "L'expert PEB inspecte le bien : isolation, vitrage, chauffage, ventilation. Durée : 30 min à 1h30." },
                    { step: '3', title: 'Calcul et encodage', desc: "Les données sont encodées dans le logiciel officiel de Bruxelles Environnement et soumises à un contrôle qualité." },
                    { step: '4', title: 'Certificat officiel', desc: "Vous recevez votre certificat PEB avec numéro unique, enregistré au registre de Bruxelles Environnement. Valable 10 ans." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left p-3">Type de bien</th>
                        <th className="text-left p-3">Tarif KCertiPEB</th>
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
                        <td className="p-3 border-b border-gray-200">Immeuble</td>
                        <td className="p-3 border-b border-gray-200 font-bold">Sur devis</td>
                        <td className="p-3 border-b border-gray-200">Selon volume</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-xs mt-2">Tarifs toutes taxes comprises, visite et certificat inclus. Voir <Link to="/tarifs" className="text-emerald-700 hover:underline">la page tarifs</Link> pour le détail par superficie.</p>
              </section>

              {/* Section 5 FAQ */}
              <section id="faq" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-100 pb-3 mb-6">
                  5. FAQ — Amendes et sanctions PEB
                </h2>
                <dl className="space-y-5">
                  {[
                    {
                      q: "Peut-on vendre un bien sans certificat PEB à Bruxelles ?",
                      a: "Légalement, non. Le notaire ne peut pas authentifier la vente sans certificat PEB valide. En pratique, des actes sont parfois passés sous réserve, mais le vendeur s'expose à une amende de 200 à 1 000 €.",
                    },
                    {
                      q: "Le locataire peut-il annuler le bail si le bailleur n'a pas de certificat PEB ?",
                      a: "Oui. En l'absence de certificat PEB fourni lors de la signature du bail, le locataire peut demander la nullité du bail en justice et le remboursement des loyers versés.",
                    },
                    {
                      q: "Un certificat PEB périmé est-il valable ?",
                      a: "Non. Un certificat PEB a une durée de validité de 10 ans. Au-delà, il est légalement considéré comme inexistant. Un nouveau certificat doit être établi.",
                    },
                    {
                      q: "L'amende est-elle automatique ou peut-on la contester ?",
                      a: "L'amende est prononcée par un inspecteur de Bruxelles Environnement après notification. Le propriétaire dispose d'un délai pour présenter ses observations et peut contester devant le tribunal compétent.",
                    },
                    {
                      q: "Combien coûte un certificat PEB par rapport à une amende ?",
                      a: "Un certificat PEB chez KCertiPEB coûte entre 120 € et 310 € TVAC. L'amende minimale est de 200 €, la maximale de 26 562 €. La régularisation est toujours moins coûteuse que la sanction.",
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
                <p className="font-bold text-lg mb-2">Évitez l'amende — obtenez votre certificat PEB sous 48h</p>
                <p className="text-emerald-100 text-sm mb-4">KCertiPEB, certificateurs agréés Bruxelles Environnement. Appartement dès 120 €, maison dès 210 €.</p>
                <Link to="/contact" className="inline-block bg-white text-emerald-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition text-sm">
                  Demander un devis →
                </Link>
              </div>

              {/* Voir aussi */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-bold text-gray-900 mb-3">🔗 Voir aussi</p>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/certificat-peb-appartement-bruxelles" className="text-emerald-700 hover:underline">Certificat PEB appartement à Bruxelles — dès 120 €</Link></li>
                  <li><Link to="/certificat-peb-maison-bruxelles" className="text-emerald-700 hover:underline">Certificat PEB maison à Bruxelles — dès 210 €</Link></li>
                  <li><Link to="/certificat-peb-urgent-bruxelles" className="text-emerald-700 hover:underline">PEB Express — certificat en urgence sous 48h</Link></li>
                  <li><Link to="/tarifs" className="text-emerald-700 hover:underline">Tarifs certificat PEB 2026</Link></li>
                  <li><Link to="/blog/certificat-peb-bruxelles-guide-complet-2026" className="text-emerald-700 hover:underline">Guide complet : qu'est-ce qu'un certificat PEB ?</Link></li>
                </ul>
              </div>

              {/* Sources */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-bold text-gray-900 mb-3">📚 Sources officielles</p>
                <ul className="list-disc list-inside space-y-2 text-xs text-gray-500">
                  {[
                    ['https://environnement.brussels/pro/reglementation/textes-de-loi/le-code-bruxellois-de-lair-du-climat-et-de-la-maitrise-de-lenergie-cobrace', 'Bruxelles Environnement — CoBrACE : Code bruxellois de l\'Air, du Climat et de la Maîtrise de l\'Énergie (base légale des sanctions PEB)'],
                    ['https://environnement.brussels/citoyen/reglementation-et-inspection/obligations-et-autorisations/le-certificat-peb-dun-logement-en-region-bruxelloise', 'Bruxelles Environnement — Le certificat PEB d\'un logement en Région bruxelloise : obligations et sanctions'],
                    ['https://environnement.brussels/pro/reglementation-et-inspection/obligations-et-autorisations/les-certificats-peb', 'Bruxelles Environnement — Les certificats PEB : réglementation et procédures (professionnels)'],
                    ['https://environnement.brussels/citoyen/news/2024/fin-programmee-des-passoires-energetiques', 'Bruxelles Environnement — Fin programmée des passoires énergétiques : objectifs 2033 et sanctions associées'],
                    ['https://peb.environnement.brussels/', 'Bruxelles Environnement — Registre officiel des certificats PEB (consultation en ligne)'],
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
