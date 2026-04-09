import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';

const blogPosts = [
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
