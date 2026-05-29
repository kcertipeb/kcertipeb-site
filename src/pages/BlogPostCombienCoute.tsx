import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function BlogPostCombienCoute() {
  return (
    <>
      <SEO
        title="Combien coûte un certificat PEB à Bruxelles en 2026 ? | KCertiPEB"
        description="Prix d'un certificat PEB à Bruxelles en 2026 : appartement dès 120 € TVAC, maison dès 210 € TVAC. Tableau complet par superficie, facteurs de prix et comment éviter les mauvaises surprises."
        canonical="https://kcertipeb.be/blog/combien-coute-certificat-peb-bruxelles"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Combien coûte un certificat PEB à Bruxelles en 2026 ?',
          description:
            'Prix complet du certificat PEB à Bruxelles : appartement, maison, immeuble. Tableau des tarifs 2026, facteurs influençant le prix et conseils pour bien choisir.',
          author: { '@type': 'Organization', name: 'KCertiPEB', url: 'https://kcertipeb.be' },
          publisher: {
            '@type': 'Organization',
            name: 'KCertiPEB',
            logo: { '@type': 'ImageObject', url: 'https://kcertipeb.be/logo.png' },
          },
          datePublished: '2026-05-28',
          dateModified: '2026-05-28',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
          url: 'https://kcertipeb.be/blog/combien-coute-certificat-peb-bruxelles',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://kcertipeb.be/blog/combien-coute-certificat-peb-bruxelles',
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
            <span className="truncate text-gray-800">Combien coûte un certificat PEB ?</span>
          </nav>
        </div>
      </div>

      <article className="bg-gray-50 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

            {/* Header */}
            <div className="p-8 pb-0 sm:p-12 sm:pb-0">
              <span className="mb-5 inline-block rounded bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                💶 Prix & Tarifs — Mai 2026
              </span>

              <h1 id="top" className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                Combien coûte un certificat PEB à Bruxelles en 2026 ?
              </h1>

              <p className="mb-8 flex flex-wrap items-center gap-3 border-l-4 border-emerald-600 pl-4 text-sm text-gray-500">
                <span>Par <strong className="text-emerald-700">KCertiPEB</strong> — Certificateurs PEB agréés Bruxelles Environnement</span>
                <span>|</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Mis à jour le <strong>28 mai 2026</strong></span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min de lecture</span>
              </p>
            </div>

            {/* Hero image */}
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
              alt="Tableau de prix certificat PEB Bruxelles"
              loading="eager"
              className="h-64 w-full object-cover sm:h-80"
            />

            <div className="p-8 sm:p-12">

              {/* Intro */}
              <p className="mb-6 leading-relaxed text-gray-700">
                Le <strong>certificat PEB</strong> est obligatoire pour toute vente ou location d'un bien immobilier à Bruxelles. Mais combien coûte-t-il vraiment en 2026 ? Le prix dépend principalement du <strong>type de bien</strong> (appartement, maison, immeuble) et de la <strong>superficie</strong>. Voici les tarifs exacts pratiqués par KCertiPEB, sans frais cachés.
              </p>

              {/* Table des matières */}
              <div className="mb-10 rounded-xl border border-emerald-100 bg-emerald-50 p-6">
                <p className="mb-3 font-bold text-emerald-800">Sommaire</p>
                <ol className="space-y-1 text-sm text-emerald-700">
                  <li><a href="#prix-appartement" className="hover:underline">1. Prix PEB appartement à Bruxelles</a></li>
                  <li><a href="#prix-maison" className="hover:underline">2. Prix PEB maison à Bruxelles</a></li>
                  <li><a href="#prix-immeuble" className="hover:underline">3. Prix PEB immeuble à Bruxelles</a></li>
                  <li><a href="#ce-qui-est-inclus" className="hover:underline">4. Ce qui est inclus dans le prix</a></li>
                  <li><a href="#facteurs" className="hover:underline">5. Facteurs qui influencent le prix</a></li>
                  <li><a href="#faq" className="hover:underline">6. Questions fréquentes</a></li>
                </ol>
              </div>

              {/* Section 1 — Appartement */}
              <section id="prix-appartement" className="mb-12 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  1. Prix PEB appartement à Bruxelles
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Pour un <Link to="/certificat-peb-appartement-bruxelles" className="font-semibold text-emerald-600 hover:underline">certificat PEB appartement</Link>, le tarif est calculé en fonction de la superficie habitable. Plus l'appartement est grand, plus la visite prend du temps — et plus le prix est élevé.
                </p>

                <div className="mb-6 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Superficie</th>
                        <th className="px-4 py-3 font-semibold">Prix TVAC</th>
                        <th className="px-4 py-3 font-semibold">Cas typique</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-900">Moins de 50 m²</td>
                        <td className="px-4 py-3 font-bold text-emerald-600">120 €</td>
                        <td className="px-4 py-3 text-gray-600">Studio, T1</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="px-4 py-3 font-medium text-gray-900">50 – 75 m²</td>
                        <td className="px-4 py-3 font-bold text-emerald-600">165 €</td>
                        <td className="px-4 py-3 text-gray-600">T2, petit T3 — le plus courant</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-900">76 – 100 m²</td>
                        <td className="px-4 py-3 font-bold text-emerald-600">185 €</td>
                        <td className="px-4 py-3 text-gray-600">T3, grand T2</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="px-4 py-3 font-medium text-gray-900">Plus de 100 m²</td>
                        <td className="px-4 py-3 font-bold text-emerald-600">205 €</td>
                        <td className="px-4 py-3 text-gray-600">Grand appartement, penthouse</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm text-gray-700">
                  <strong>Prix d'entrée le plus bas de Bruxelles :</strong> 120 € TVAC pour un studio ou T1. La visite dure environ 45 minutes. Le certificat officiel est remis sous 48h.
                </div>
              </section>

              {/* Section 2 — Maison */}
              <section id="prix-maison" className="mb-12 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  2. Prix PEB maison à Bruxelles
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Le <Link to="/certificat-peb-maison-bruxelles" className="font-semibold text-emerald-600 hover:underline">certificat PEB maison</Link> est plus cher qu'un appartement car la visite est plus longue : cave, combles, chaufferie, et souvent plusieurs niveaux à mesurer et analyser.
                </p>

                <div className="mb-6 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Superficie</th>
                        <th className="px-4 py-3 font-semibold">Prix TVAC</th>
                        <th className="px-4 py-3 font-semibold">Cas typique</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="bg-emerald-50">
                        <td className="px-4 py-3 font-medium text-gray-900">Moins de 100 m²</td>
                        <td className="px-4 py-3 font-bold text-emerald-600">210 €</td>
                        <td className="px-4 py-3 text-gray-600">Maison de rangée, bel étage</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-900">101 – 200 m²</td>
                        <td className="px-4 py-3 font-bold text-emerald-600">240 €</td>
                        <td className="px-4 py-3 text-gray-600">Maison 3 façades, 4 chambres</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="px-4 py-3 font-medium text-gray-900">Plus de 200 m²</td>
                        <td className="px-4 py-3 font-bold text-emerald-600">275 €</td>
                        <td className="px-4 py-3 text-gray-600">Villa, maison 4 façades</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3 — Immeuble */}
              <section id="prix-immeuble" className="mb-12 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  3. Prix PEB immeuble à Bruxelles
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Pour un <Link to="/certificat-peb-immeuble-bruxelles" className="font-semibold text-emerald-600 hover:underline">certificat PEB immeuble</Link>, le prix est établi sur devis car il dépend du nombre d'unités, de la configuration du bâtiment et des parties communes. Chaque unité (appartement, bureau, commerce) doit avoir son propre certificat individuel.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  En règle générale, plus il y a d'unités à certifier dans un même immeuble, plus le tarif unitaire diminue grâce aux économies d'échelle sur le déplacement et la prise de mesures des parties communes.
                </p>
                <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6">
                  <p className="mb-3 font-bold text-gray-900">Vous avez un immeuble à certifier ?</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Contactez-nous pour recevoir un devis gratuit sous 24h, adapté au nombre d'unités et à la superficie totale.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Demander un devis gratuit →
                  </Link>
                </div>
              </section>

              {/* Section 4 — Ce qui est inclus */}
              <section id="ce-qui-est-inclus" className="mb-12 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  4. Ce qui est inclus dans le prix
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Chez KCertiPEB, le prix affiché est le prix final. Pas de frais de déplacement, pas de supplément pour l'enregistrement officiel, pas de facturation à l'heure.
                </p>
                <ul className="mb-6 space-y-3">
                  {[
                    'La visite complète du bien par un certificateur agréé Bruxelles Environnement',
                    "L'analyse de toutes les installations : isolation, chauffage, ventilation, eau chaude",
                    'La saisie des données et le calcul officiel du score PEB',
                    "L'enregistrement du certificat dans la base de données de Bruxelles Environnement",
                    'La remise du certificat officiel sous 48h',
                    "Les explications du résultat et les conseils d'amélioration si souhaité",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 5 — Facteurs */}
              <section id="facteurs" className="mb-12 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  5. Facteurs qui influencent le prix
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Le prix d'un certificat PEB à Bruxelles varie d'un opérateur à l'autre. Voici les facteurs à connaître pour comparer correctement.
                </p>

                <div className="mb-6 space-y-4">
                  <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="mb-2 font-bold text-gray-900">La superficie</h3>
                    <p className="text-sm text-gray-600">
                      C'est le facteur principal. Une superficie plus grande = visite plus longue = prix plus élevé. Chez KCertiPEB, nous proposons 4 tranches pour les appartements et 3 pour les maisons.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="mb-2 font-bold text-gray-900">Le type de bien</h3>
                    <p className="text-sm text-gray-600">
                      Une maison coûte plus cher qu'un appartement de même superficie car elle comporte plus d'éléments à analyser : cave, combles non chauffés, chaufferie indépendante, etc.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="mb-2 font-bold text-gray-900">La complexité technique</h3>
                    <p className="text-sm text-gray-600">
                      Un bien avec plusieurs systèmes de chauffage, des installations solaires ou une configuration atypique peut nécessiter plus de temps d'analyse.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="mb-2 font-bold text-gray-900">L'urgence</h3>
                    <p className="text-sm text-gray-600">
                      Certains opérateurs appliquent un supplément pour les interventions express (sous 24h). Chez KCertiPEB, le tarif standard inclut déjà une intervention sous 48h.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-gray-700">
                  <strong>Attention aux offres trop basses :</strong> Un certificat PEB à Bruxelles nécessite un certificateur agréé par Bruxelles Environnement. Méfiez-vous des prix anormalement bas (&lt; 80 €) qui peuvent correspondre à des certificats incomplets ou établis à distance sans visite.
                </div>
              </section>

              {/* Section 6 — FAQ */}
              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  6. Questions fréquentes sur le prix du certificat PEB
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      q: 'Le prix du certificat PEB est-il déductible fiscalement ?',
                      a: "Non, le certificat PEB n'est pas déductible fiscalement pour les particuliers. Pour les propriétaires-bailleurs, il peut dans certains cas être considéré comme une charge déductible — consultez votre comptable.",
                    },
                    {
                      q: 'Qui paie le certificat PEB, le vendeur ou l\'acheteur ?',
                      a: "En règle générale, c'est le vendeur (ou le propriétaire bailleur) qui doit fournir le certificat PEB avant toute vente ou mise en location. C'est donc lui qui en supporte le coût.",
                    },
                    {
                      q: 'Le certificat PEB est-il valable pour une vente et une location ?',
                      a: "Oui. Un certificat PEB établi pour une vente est valable 10 ans. Il peut être réutilisé pour une location ultérieure du même bien, sans refaire de nouvelle visite, tant qu'aucun travaux énergétiques majeurs n'ont été réalisés.",
                    },
                    {
                      q: 'Puis-je obtenir un certificat PEB moins cher en passant par une agence immobilière ?',
                      a: "Certaines agences proposent des partenariats avec des certificateurs à tarif réduit. Cependant, le certificateur reste responsable de son travail — assurez-vous qu'il est bien agréé par Bruxelles Environnement. Chez KCertiPEB, nous proposons des tarifs préférentiels aux professionnels de l'immobilier.",
                    },
                  ].map(({ q, a }) => (
                    <details key={q} className="group rounded-xl border border-gray-200 bg-white">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-gray-900 list-none">
                        {q}
                        <span className="shrink-0 text-emerald-600 transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-gray-600">{a}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA final */}
              <div className="rounded-2xl bg-emerald-600 p-8 text-center text-white">
                <h2 className="mb-3 text-2xl font-bold">Prêt à commander votre certificat PEB ?</h2>
                <p className="mb-6 text-emerald-100">
                  Intervention sous 48h dans les 19 communes bruxelloises. Certificat officiel en 48h.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Link
                    to="/tarifs"
                    className="rounded-lg bg-white px-8 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50"
                  >
                    Voir tous les tarifs
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Commander maintenant
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8 text-sm">
                <Link
                  to="/blog"
                  className="flex items-center gap-2 font-semibold text-emerald-600 transition hover:gap-3"
                >
                  <ArrowLeft className="h-4 w-4" /> Retour au blog
                </Link>
                <Link
                  to="/tarifs"
                  className="flex items-center gap-2 font-semibold text-emerald-600 transition hover:gap-3"
                >
                  Voir les tarifs <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </article>
    </>
  );
}
