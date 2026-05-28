import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../lib/language';

const REVIEWS = [
  {
    name: 'Pascal Messinne',
    rating: 5,
    text: 'Super rapide, très aimable, efficace. Devis respecté à la lettre et ponctuel. Je recommande largement.',
  },
  {
    name: 'Bri Lefrancq',
    rating: 5,
    text: 'Réactif et donnant de très judicieux conseils.',
  },
  {
    name: 'Paulo Correia',
    rating: 5,
    text: 'Ponctuel, sérieux et compétent !',
  },
  {
    name: 'Carla Goncalves',
    rating: 5,
    text: 'Super certificateur ! Rapide, clair et efficace, je suis très satisfaite ! Je recommande.',
  },
  {
    name: 'Andreia Gomes',
    rating: 5,
    text: 'Service rapide et très professionnel. Le certificateur a été clair dans ses explications, de bons conseils et le certificat a été reçu rapidement. Très satisfaite, je recommande !',
  },
];

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-6 w-6' : 'h-4 w-4';

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i <= rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const colors = ['bg-emerald-500', 'bg-blue-500', 'bg-orange-500', 'bg-rose-500'];
  const color = colors[name.charCodeAt(0) % colors.length];

  return (
    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${color} text-sm font-bold text-white`}>
      {initials}
    </div>
  );
}

export default function GoogleReviews({ compact = false }: { compact?: boolean }) {
  const { isDutch } = useLanguage();
  const googleUrl =
    'https://www.google.com/search?sca_esv=8526ead1974f28d5&rlz=1C1GCEU_frBE1031BE1031&cs=1&sxsrf=ANbL-n6zfC1wTWA7JungtfoAeNVlTpfijw:1775505332029&q=Kcertipeb+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxKyNDY0Mze3NLG0tDAzMzU1MDfewMj4ilHQOzm1qCSzIDVJISi1LDO1vHgRK6YYAHL2bIFBAAAA&rldimm=931677949986655073&tbm=lcl&hl=en-BE&sa=X&ved=2ahUKEwisr_HkgNqTAxV987sIHeXFB3AQ9fQKegQIERAG&biw=1745&bih=866&dpr=2.2#lkt=LocalPoiReviews';

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/google-logo.svg"
          alt="Google"
          className="h-4 w-4"
        />
        <StarRating rating={5} size="sm" />
        <span className="text-sm font-bold text-gray-900">
          {isDutch ? 'Selectie van klantbeoordelingen' : "Extrait d'avis clients"}
        </span>
      </div>
    );
  }

  return (
    <section id="avis" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <img
              src="/google-logo.svg"
              alt="Google"
              className="h-7 w-7"
            />
            <h2 className="text-4xl font-bold text-gray-900">
              {isDutch ? 'Enkele klantenbeoordelingen' : 'Quelques avis clients'}
            </h2>
          </div>

          <div className="inline-flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 px-8 py-5 shadow-sm">
            <span className="mb-2 text-lg font-bold leading-none text-gray-900">
              {isDutch ? 'Recente feedback' : 'Retours récents'}
            </span>
            <StarRating rating={5} size="lg" />
            <p className="mt-2 text-sm text-gray-500">
              {isDutch
                ? 'Enkele getuigenissen van tevreden klanten.'
                : 'Voici quelques témoignages laissés par des clients satisfaits.'}
            </p>
          </div>
        </div>

        {/* Featured review (1st) */}
        {(() => {
          const featured = REVIEWS[0];
          return (
            <div className="mb-8 relative overflow-hidden rounded-2xl bg-emerald-700 px-8 py-7 shadow-xl text-white">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-600 opacity-40" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-emerald-800 opacity-30" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex-shrink-0">
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-100 mb-3">
                    {isDutch ? '⭐ Nieuwste avis' : '⭐ Avis le plus récent'}
                  </span>
                  <div className="flex items-center gap-3">
                    <Avatar name={featured.name} />
                    <div>
                      <p className="font-bold text-white">{featured.name}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <StarRating rating={featured.rating} size="md" />
                  </div>
                </div>
                <div className="sm:border-l sm:border-emerald-500 sm:pl-8">
                  <Quote className="mb-2 h-8 w-8 text-emerald-400" />
                  <p className="text-lg font-medium leading-relaxed text-emerald-50 italic">"{featured.text}"</p>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Grid — 4 remaining reviews */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.slice(1).map((review) => (
            <div
              key={review.name}
              className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-gray-100" />
              <div className="mb-3 flex items-center gap-3">
                <Avatar name={review.name} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                </div>
              </div>
              <StarRating rating={review.rating} size="sm" />
              <p className="mt-3 text-sm leading-relaxed text-gray-600">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition hover:border-emerald-500 hover:text-emerald-700"
          >
            <img
              src="/google-logo.svg"
              alt="Google"
              className="h-5 w-5"
            />
            {isDutch ? 'Google-profiel bekijken' : 'Voir la fiche Google'}
          </a>
        </div>
      </div>
    </section>
  );
}
