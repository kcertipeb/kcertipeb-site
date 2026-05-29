import { Link } from 'react-router-dom';
import { Calendar, Clock, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function BlogPostCopropriete() {
  return (
    <>
      <SEO
        title="Certificat PEB Copropriété Bruxelles : Guide Syndics 2026 | KCertiPEB"
        description="Certificat PEB en copropriété à Bruxelles : qui est responsable, délai 2030, rôle de l'ACP, prix par unité. Guide complet pour syndics et copropriétaires."
        canonical="https://kcertipeb.be/blog/certificat-peb-copropriete-bruxelles"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Certificat PEB Copropriété Bruxelles : Guide Syndics 2026',
          description:
            'Guide complet sur le certificat PEB en copropriété à Bruxelles : obligations légales, responsabilités, délais 2030/2033, prix par unité et rôle du syndic.',
          author: { '@type': 'Organization', name: 'KCertiPEB', url: 'https://kcertipeb.be' },
          publisher: {
            '@type': 'Organization',
            name: 'KCertiPEB',
            logo: { '@type': 'ImageObject', url: 'https://kcertipeb.be/logo.png' },
          },
          datePublished: '2026-04-20',
          dateModified: '2026-05-28',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop',
          url: 'https://kcertipeb.be/blog/certificat-peb-copropriete-bruxelles',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://kcertipeb.be/blog/certificat-peb-copropriete-bruxelles',
          },
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white pb-3 pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="transition-colors hover:text-emerald-700">Accueil</Link>
            <span>/</span>
            <Link to="/blog" className="transition-colors hover:text-emerald-700">Blog</Link>
            <span>/</span>
            <span className="truncate text-gray-800">Certificat PEB Copropriété</span>
          </nav>
        </div>
      </div>

      <article className="bg-gray-50 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

            {/* Header */}
            <div className="p-8 pb-0 sm:p-12 sm:pb-0">
              <span className="mb-5 inline-block rounded bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                🏢 Copropriété — Avril 2026
              </span>

              <h1 id="top" className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                Certificat PEB en copropriété à Bruxelles : guide complet pour syndics et copropriétaires (2026)
              </h1>

              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 20 avril 2026</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>

              {/* Alert deadline */}
              <div className="mb-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <p className="font-bold text-amber-900">Délai légal : 31 décembre 2030</p>
                  <p className="mt-1 text-sm text-amber-800">
                    Tous les appartements de la Région de Bruxelles-Capitale doivent disposer d'un certificat PEB valide avant le 31/12/2030. À partir de 2033, l'ACP devient co-responsable du respect de cette obligation.
                  </p>
                </div>
              </div>

              {/* Table of contents */}
              <nav className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-600">Sommaire</p>
                <ol className="space-y-2 text-sm">
                  {[
                    ['#obligation', "L'obligation PEB en copropriété"],
                    ['#responsabilite', "Qui est responsable : le copropriétaire ou l'ACP ?"],
                    ['#prix', 'Prix du certificat PEB par unité'],
                    ['#demarche', 'Comment organiser la démarche en immeuble ?'],
                    ['#sanctions', 'Sanctions en cas de non-conformité'],
                    ['#faq', 'Questions fréquentes'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="text-emerald-700 hover:underline">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Hero image */}
            <div className="px-8 sm:px-12">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=400&fit=crop"
                alt="Immeuble à appartements à Bruxelles"
                className="w-full rounded-xl object-cover"
                style={{ maxHeight: '360px' }}
              />
            </div>

            {/* Content */}
            <div className="space-y-12 p-8 sm:p-12">

              {/* Section 1 */}
              <section id="obligation" className="scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  L'obligation PEB en copropriété à Bruxelles
                </h2>
                <p className="mb-4 text-gray-700">
                  En Région de Bruxelles-Capitale, le <strong>certificat PEB</strong> est obligatoire pour toute vente ou mise en location d'un appartement — cette obligation existe depuis 2011 pour les ventes et 2012 pour les locations.
                </p>
                <p className="mb-6 text-gray-700">
                  Depuis la réforme de 2026, une nouvelle obligation s'ajoute : <strong>chaque appartement devra disposer d'un certificat PEB valide avant le 31 décembre 2030</strong>, indépendamment de toute transaction immobilière.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Vente d'appartement", detail: "PEB obligatoire depuis 2011 — à remettre à l'acheteur avant signature" },
                    { label: "Location d'appartement", detail: 'PEB obligatoire depuis 2012 — doit figurer dans chaque annonce' },
                    { label: 'Conformité générale 2030', detail: 'Tous les appartements devront avoir un PEB valide avant le 31/12/2030' },
                    { label: "Responsabilité ACP dès 2033", detail: "L'Association des Copropriétaires devient co-responsable de la conformité" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                      <p className="font-semibold text-emerald-900">{item.label}</p>
                      <p className="mt-1 text-sm text-gray-700">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2 */}
              <section id="responsabilite" className="scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Qui est responsable : le copropriétaire ou l'ACP ?
                </h2>
                <p className="mb-6 text-gray-700">
                  La question de la responsabilité est souvent source de confusion. Voici comment les obligations se répartissent :
                </p>
                <div className="mb-6 overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Situation</th>
                        <th className="px-4 py-3 text-left font-semibold">Responsable</th>
                        <th className="px-4 py-3 text-left font-semibold">Remarque</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="bg-white">
                        <td className="px-4 py-3">Vente ou location</td>
                        <td className="px-4 py-3 font-medium text-emerald-700">Le copropriétaire</td>
                        <td className="px-4 py-3 text-gray-500">Doit commander son propre PEB</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3">Conformité 2030</td>
                        <td className="px-4 py-3 font-medium text-emerald-700">Le copropriétaire</td>
                        <td className="px-4 py-3 text-gray-500">Chaque unité = son propre certificat individuel</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3">Coordination dès 2033</td>
                        <td className="px-4 py-3 font-medium text-amber-600">L'ACP / syndic</td>
                        <td className="px-4 py-3 text-gray-500">Co-responsable si des unités ne sont pas certifiées</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-sm text-gray-700">
                  <strong>Conseil pratique :</strong> De nombreux syndics organisent une démarche collective pour l'ensemble de l'immeuble, ce qui réduit le coût par unité et simplifie la coordination. KCertiPEB propose une offre groupée pour les immeubles à plusieurs unités.
                </div>
              </section>

              {/* Section 3 */}
              <section id="prix" className="scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Prix du certificat PEB par unité en copropriété
                </h2>
                <p className="mb-6 text-gray-700">
                  Le prix dépend de la surface du logement. Tarifs KCertiPEB pour les appartements individuels :
                </p>
                <div className="mb-6 overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Surface</th>
                        <th className="px-4 py-3 text-left font-semibold">Type</th>
                        <th className="px-4 py-3 text-left font-semibold">Prix TVAC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { size: '< 50 m²', type: 'Studio / T1', price: '120 €' },
                        { size: '50 – 75 m²', type: 'T2 / T3', price: '165 €' },
                        { size: '76 – 100 m²', type: 'Grand T3', price: '185 €' },
                        { size: '> 100 m²', type: 'Penthouse / duplex', price: '205 €' },
                      ].map((row, i) => (
                        <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3">{row.size}</td>
                          <td className="px-4 py-3 text-gray-500">{row.type}</td>
                          <td className="px-4 py-3 font-bold text-emerald-700">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mb-6 text-gray-700">
                  Pour les immeubles de <strong>5 unités ou plus</strong>, KCertiPEB propose une <strong>offre groupée sur devis</strong> avec un tarif dégressif par unité et une coordination centralisée avec le syndic.
                </p>
                <div className="text-center">
                  <Link
                    to="/certificat-peb-immeuble-bruxelles"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-600 px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
                  >
                    En savoir plus sur le PEB immeuble <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>

              {/* Section 4 */}
              <section id="demarche" className="scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Comment organiser la démarche PEB en immeuble ?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      num: '1',
                      title: 'Le syndic contacte KCertiPEB',
                      text: "Envoyez-nous la liste des unités avec leur surface approximative. Nous établissons un devis global gratuit en 24h.",
                    },
                    {
                      num: '2',
                      title: 'Communication aux copropriétaires',
                      text: "Le syndic informe les copropriétaires de la démarche, du prix par unité et des plages horaires prévues pour les visites.",
                    },
                    {
                      num: '3',
                      title: 'Planification groupée des visites',
                      text: "KCertiPEB organise les visites unité par unité sur 1 à 2 jours selon la taille de l'immeuble. Chaque copropriétaire est contacté individuellement.",
                    },
                    {
                      num: '4',
                      title: 'Remise des certificats',
                      text: "Chaque certificat PEB officiel est remis au copropriétaire concerné sous 48h après la visite. Le syndic reçoit une vue d'ensemble pour archivage.",
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex items-start gap-4 rounded-xl bg-gray-50 p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                        {step.num}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">{step.title}</p>
                        <p className="mt-1 text-sm text-gray-600">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5 */}
              <section id="sanctions" className="scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Sanctions en cas de non-conformité
                </h2>
                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: 'Vente sans PEB', penalty: '500 à 50 000 €', who: 'Copropriétaire vendeur' },
                    { label: 'Location sans PEB', penalty: '500 à 50 000 €', who: 'Propriétaire bailleur' },
                    { label: "Non-conformité 2030+", penalty: "2,5 €/kWh/an au-dessus de l'objectif", who: 'Copropriétaire + ACP dès 2033' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-red-200 bg-red-50 p-5 text-center">
                      <p className="mb-2 font-bold text-gray-900">{item.label}</p>
                      <p className="mb-1 font-extrabold text-red-700">{item.penalty}</p>
                      <p className="text-xs text-gray-500">{item.who}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm text-gray-700">
                    <strong>Agir maintenant vous protège :</strong> En anticipant la certification avant 2030, vous évitez les amendes et facilitez toute future vente ou location.{' '}
                    <Link to="/tarifs" className="font-semibold text-emerald-700 hover:underline">Voir les tarifs →</Link>
                  </p>
                </div>
              </section>

              {/* Section 6 — FAQ */}
              <section id="faq" className="scroll-mt-28">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Questions fréquentes — PEB en copropriété</h2>
                <div className="space-y-3">
                  {[
                    {
                      q: 'Chaque appartement doit-il avoir son propre certificat PEB ?',
                      a: "Oui, chaque logement individuel doit disposer de son propre certificat PEB. Il n'existe pas de certificat collectif pour un immeuble entier.",
                    },
                    {
                      q: 'Le syndic peut-il organiser les PEB pour tout l\'immeuble ?',
                      a: "Le syndic peut coordonner la démarche et mandater un certificateur pour l'ensemble des unités, mais chaque certificat reste la propriété du copropriétaire concerné.",
                    },
                    {
                      q: 'Quel est le délai pour obtenir le certificat PEB ?',
                      a: 'Chez KCertiPEB, la visite est planifiée sous 48h et le certificat officiel est remis sous 48h après la visite.',
                    },
                    {
                      q: 'Le certificat PEB est-il valable longtemps ?',
                      a: "Le certificat PEB est valable 10 ans. Il doit être renouvelé en cas de travaux importants affectant la performance énergétique du logement.",
                    },
                    {
                      q: 'Y a-t-il une réduction pour un immeuble entier ?',
                      a: "Oui, KCertiPEB propose une offre groupée avec tarif dégressif pour les immeubles de 5 unités ou plus. Contactez-nous pour un devis gratuit en 24h.",
                    },
                  ].map(({ q, a }) => (
                    <details key={q} className="group rounded-xl border border-gray-200 bg-white p-5">
                      <summary className="cursor-pointer font-semibold text-gray-900 marker:text-emerald-600 group-open:text-emerald-700">
                        {q}
                      </summary>
                      <p className="mt-3 text-sm text-gray-600">{a}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA final */}
              <div className="rounded-2xl bg-emerald-600 p-8 text-center text-white">
                <h2 className="mb-3 text-2xl font-bold">Besoin d'un PEB pour votre copropriété ?</h2>
                <p className="mb-6 text-emerald-100">
                  Intervention sous 48h dans les 19 communes bruxelloises. Tarif dégressif pour les immeubles. Devis gratuit en 24h.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-emerald-700 shadow transition hover:bg-emerald-50"
                  >
                    Demander un devis gratuit <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/certificat-peb-appartement-bruxelles"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
                  >
                    PEB pour un appartement
                  </Link>
                </div>
              </div>

              {/* Back */}
              <div className="border-t border-gray-100 pt-4">
                <Link to="/blog" className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline">
                  ← Retour au blog
                </Link>
              </div>

            </div>
          </div>
        </div>
      </article>
    </>
  );
}
