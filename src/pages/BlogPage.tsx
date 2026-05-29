import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';

const blogPosts = [
  {
    slug: 'comment-obtenir-certificat-peb-bruxelles',
    title: 'Comment obtenir un certificat PEB à Bruxelles ? Guide 2026',
    titleNl: 'Hoe een EPC-certificaat verkrijgen in Brussel? Gids 2026',
    excerpt: 'Pour obtenir un certificat PEB à Bruxelles : contactez un Expert PEB agréé, planifiez la visite et recevez votre certificat officiel en 48h. Guide complet étape par étape.',
    excerptNl: 'Voor een EPC-certificaat in Brussel: neem contact op met een erkende EPC-deskundige, plan een bezoek en ontvang uw officieel certificaat in 48u. Stap-voor-stap gids.',
    date: '28 mai 2026',
    dateNl: '28 mei 2026',
    readTime: '5 min',
    badge: '📋 Guide Pratique — Mai 2026',
    badgeNl: '📋 Praktische Gids — Mei 2026',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop',
    category: 'Guide Pratique',
  },
  {
    slug: 'amende-sans-certificat-peb-bruxelles',
    title: 'Amende sans certificat PEB à Bruxelles : montants 2026',
    titleNl: 'Boete zonder EPC-certificaat in Brussel: bedragen 2026',
    excerpt: "Vendre ou louer sans certificat PEB à Bruxelles expose à une amende de 200 à 26 562 €. Montants officiels 2026, situations concernées et comment se régulariser rapidement.",
    excerptNl: 'Verkopen of verhuren zonder EPC-certificaat in Brussel riskeert een boete van 200 tot 26.562 €. Officiële bedragen 2026 en hoe u zich snel in orde stelt.',
    date: '28 mai 2026',
    dateNl: '28 mei 2026',
    readTime: '6 min',
    badge: '⚠️ Sanctions — Mai 2026',
    badgeNl: '⚠️ Sancties — Mei 2026',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop',
    category: 'Obligations légales',
  },
  {
    slug: 'difference-peb-audit-energetique',
    title: 'Différence entre PEB et Audit Énergétique à Bruxelles',
    titleNl: 'Verschil tussen EPC en Energie-audit in Brussel',
    excerpt: "Le certificat PEB est obligatoire pour vendre ou louer et classe votre bien de A à G. L'audit énergétique est une analyse approfondie qui recommande des travaux. Comparatif complet.",
    excerptNl: 'Het EPC-certificaat is verplicht voor verkoop of verhuur en klasseert uw pand van A tot G. De energie-audit is een diepgaande analyse met renovatieaanbevelingen. Volledig vergelijk.',
    date: '28 mai 2026',
    dateNl: '28 mei 2026',
    readTime: '5 min',
    badge: '🔍 Comparatif — Mai 2026',
    badgeNl: '🔍 Vergelijk — Mei 2026',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop',
    category: 'Comparatif',
  },
  {
    slug: 'combien-coute-certificat-peb-bruxelles',
    title: 'Combien coûte un certificat PEB à Bruxelles en 2026 ?',
    titleNl: 'Hoeveel kost een EPC-certificaat in Brussel in 2026?',
    excerpt:
      'Prix complet du certificat PEB à Bruxelles : appartement dès 120 € TVAC, maison dès 210 € TVAC. Tableau des tarifs 2026 par superficie, ce qui est inclus, et comment éviter les mauvaises surprises.',
    excerptNl:
      'Volledige prijs van het EPC-certificaat in Brussel: appartement vanaf 120 € incl. btw, woning vanaf 210 € incl. btw. Tarieftabel 2026 per oppervlakte en wat is inbegrepen.',
    date: '28 mai 2026',
    dateNl: '28 mei 2026',
    readTime: '6 min',
    badge: '💶 Prix & Tarifs — Mai 2026',
    badgeNl: '💶 Prijs & Tarieven — Mei 2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    category: 'Prix & Tarifs',
  },
  {
    slug: 'ameliorer-certificat-peb-bruxelles',
    title: 'Améliorer son Certificat PEB à Bruxelles : Guide Travaux 2026',
    titleNl: 'EPC-certificaat verbeteren in Brussel: Gids Werken 2026',
    excerpt: 'Votre bien est classé F ou G ? Découvrez les travaux prioritaires pour gagner 1 à 3 classes PEB, dans le bon ordre, avec les coûts et gains attendus. Guide complet par KCertiPEB.',
    excerptNl: 'Uw pand is F of G geklasseerd? Ontdek de prioritaire werken om 1 tot 3 EPC-klassen te winnen, in de juiste volgorde, met kosten en verwachte winsten.',
    date: '7 mai 2026',
    dateNl: '7 mei 2026',
    readTime: '10 min',
    badge: '🌿 Rénovation — Mai 2026',
    badgeNl: '🌿 Renovatie — Mei 2026',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop',
    category: 'Guide Rénovation',
  },
  {
    slug: 'certificat-peb-copropriete-bruxelles',
    title: 'Certificat PEB Copropriété Bruxelles : Guide Syndics 2026',
    titleNl: 'EPC-certificaat Mede-eigendom Brussel: Gids Syndici 2026',
    excerpt: 'Chaque appartement doit avoir son propre certificat PEB. L\'ACP devient co-responsable dès 2033. Guide complet pour syndics et copropriétaires à Bruxelles.',
    excerptNl: 'Elk appartement moet zijn eigen EPC-certificaat hebben. De VME wordt mede-verantwoordelijk vanaf 2033. Volledige gids voor syndici en mede-eigenaars in Brussel.',
    date: '20 avril 2026',
    dateNl: '20 april 2026',
    readTime: '10 min',
    badge: '🏢 Copropriété — Avril 2026',
    badgeNl: '🏢 Mede-eigendom — April 2026',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=400&fit=crop',
    category: 'Guide Syndic',
  },
  {
    slug: 'certificat-peb-bruxelles-guide-complet-2026',
    title: 'Certificat PEB à Bruxelles : Guide Complet 2026',
    titleNl: 'EPC-certificaat in Brussel: Complete Gids 2026',
    excerpt:
      'Le certificat PEB est obligatoire pour toute vente ou location à Bruxelles. Découvrez les obligations, les classes A–G, les prix, et la réforme d\'avril 2026 en détail.',
    excerptNl:
      'Het EPC-certificaat is verplicht voor elke verkoop of verhuur in Brussel. Ontdek de verplichtingen, klassen A–G, prijzen en de hervorming van april 2026.',
    date: '9 avril 2026',
    dateNl: '9 april 2026',
    readTime: '8 min',
    badge: '⚡ Actualité — Avril 2026',
    badgeNl: '⚡ Actueel — April 2026',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    category: 'Guide',
  },
];

export default function BlogPage() {
  const { isDutch } = useLanguage();

  return (
    <>
      <SEO
        title={isDutch ? 'Blog — EPC-advies & nieuws | KCertiPEB' : 'Blog — Conseils PEB & actualités | KCertiPEB'}
        description={
          isDutch
            ? 'Ontdek onze artikelen over het EPC-certificaat in Brussel: verplichtingen, klassen, prijzen en de hervorming van 2026.'
            : 'Découvrez nos articles sur le certificat PEB à Bruxelles : obligations, classes, prix et réforme 2026.'
        }
        canonical="https://kcertipeb.be/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-4">
            {isDutch ? 'Blog & Actualiteiten' : 'Blog & Actualités'}
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            {isDutch ? 'Alles over EPC in Brussel' : 'Tout sur le PEB à Bruxelles'}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {isDutch
              ? 'Gidsen, actualiteiten en praktisch advies van uw gecertificeerde EPC-deskundige in Brussel.'
              : 'Guides, actualités et conseils pratiques de vos certificateurs PEB agréés à Bruxelles.'}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={isDutch ? post.titleNl : post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                    {isDutch ? post.badgeNl : post.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {post.category}
                  </span>

                  <h2 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {isDutch ? post.titleNl : post.title}
                  </h2>

                  <p className="mb-4 flex-1 text-sm text-gray-600 leading-relaxed">
                    {isDutch ? post.excerptNl : post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {isDutch ? post.dateNl : post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 font-semibold text-emerald-600 group-hover:gap-2 transition-all">
                      {isDutch ? 'Lees meer' : 'Lire'} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <p className="text-center text-gray-500 py-16">
              {isDutch ? 'Binnenkort beschikbaar.' : 'Articles bientôt disponibles.'}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
