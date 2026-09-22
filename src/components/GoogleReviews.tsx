import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../lib/language';

interface Review {
  name: string;
  rating: number;
  text: string;
  /** Date ISO de publication, connue seulement pour les avis chargés depuis Google. */
  publishedAt?: string | null;
}

interface ReviewsPayload {
  source: 'business-profile' | 'places';
  rating: number | null;
  total: number | null;
  url: string | null;
  reviews: { author: string; rating: number; text: string; publishedAt: string | null }[];
}

/**
 * Avis de secours : affichés au prérendu, puis tant que l'API Google Business Profile ne
 * fournit pas les textes d'avis (Places API ne donne que la note et le nombre d'avis).
 */
const FALLBACK_REVIEWS: Review[] = [
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

/** « il y a 3 semaines » / « 3 weken geleden ». */
function formatRelativeDate(isoDate: string, locale: string): string {
  const days = Math.round((new Date(isoDate).getTime() - Date.now()) / 86400000);
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  if (Math.abs(days) < 7) return formatter.format(days, 'day');
  if (Math.abs(days) < 30) return formatter.format(Math.round(days / 7), 'week');
  if (Math.abs(days) < 365) return formatter.format(Math.round(days / 30), 'month');
  return formatter.format(Math.round(days / 365), 'year');
}

/** Données Google chargées après le montage : le HTML prérendu garde les avis de secours. */
function useGoogleReviews() {
  const [data, setData] = useState<ReviewsPayload | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/.netlify/functions/get-google-reviews', { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload: ReviewsPayload | null) => setData(payload))
      .catch(() => {
        // Google indisponible : la section reste affichée avec les avis de secours.
      });
    return () => controller.abort();
  }, []);

  const liveReviews: Review[] = (data?.reviews ?? []).map((review) => ({
    name: review.author,
    rating: review.rating,
    text: review.text,
    publishedAt: review.publishedAt,
  }));

  return {
    rating: data?.rating ?? null,
    total: data?.total ?? null,
    url: data?.url ?? null,
    isLive: liveReviews.length > 0,
    reviews: liveReviews.length > 0 ? liveReviews : FALLBACK_REVIEWS,
  };
}

export default function GoogleReviews({ compact = false }: { compact?: boolean }) {
  const { isDutch } = useLanguage();
  const { rating, total, url, isLive, reviews } = useGoogleReviews();
  const locale = isDutch ? 'nl-BE' : 'fr-BE';
  const ratingLabel = rating !== null ? rating.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : null;
  const googleUrl =
    url ??
    'https://www.google.com/search?sca_esv=8526ead1974f28d5&rlz=1C1GCEU_frBE1031BE1031&cs=1&sxsrf=ANbL-n6zfC1wTWA7JungtfoAeNVlTpfijw:1775505332029&q=Kcertipeb+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxKyNDY0Mze3NLG0tDAzMzU1MDfewMj4ilHQOzm1qCSzIDVJISi1LDO1vHgRK6YYAHL2bIFBAAAA&rldimm=931677949986655073&tbm=lcl&hl=en-BE&sa=X&ved=2ahUKEwisr_HkgNqTAxV987sIHeXFB3AQ9fQKegQIERAG&biw=1745&bih=866&dpr=2.2#lkt=LocalPoiReviews';

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/google-logo.svg"
          alt="Google"
          className="h-4 w-4"
        />
        <StarRating rating={Math.round(rating ?? 5)} size="sm" />
        <span className="text-sm font-bold text-gray-900">
          {ratingLabel && total
            ? `${ratingLabel} · ${total} ${isDutch ? 'Google-beoordelingen' : 'avis Google'}`
            : isDutch
              ? 'Selectie van klantbeoordelingen'
              : "Extrait d'avis clients"}
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
            {ratingLabel && total ? (
              <>
                <span className="mb-2 text-4xl font-extrabold leading-none text-gray-900">{ratingLabel}</span>
                <StarRating rating={Math.round(rating ?? 5)} size="lg" />
                <p className="mt-2 text-sm text-gray-500">
                  {isDutch ? `Gebaseerd op ${total} Google-beoordelingen` : `Sur la base de ${total} avis Google`}
                </p>
              </>
            ) : (
              <>
                <span className="mb-2 text-lg font-bold leading-none text-gray-900">
                  {isDutch ? 'Recente feedback' : 'Retours récents'}
                </span>
                <StarRating rating={5} size="lg" />
                <p className="mt-2 text-sm text-gray-500">
                  {isDutch
                    ? 'Enkele getuigenissen van tevreden klanten.'
                    : 'Voici quelques témoignages laissés par des clients satisfaits.'}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Featured review (1st) */}
        {(() => {
          const featured = reviews[0];
          return (
            <div className="mb-8 relative overflow-hidden rounded-2xl bg-emerald-700 px-8 py-7 shadow-xl text-white">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-600 opacity-40" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-emerald-800 opacity-30" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex-shrink-0">
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-100 mb-3">
                    {isLive
                      ? isDutch
                        ? '⭐ Nieuwste beoordeling'
                        : '⭐ Avis le plus récent'
                      : isDutch
                        ? '⭐ Klantbeoordeling'
                        : '⭐ Avis client'}
                  </span>
                  <div className="flex items-center gap-3">
                    <Avatar name={featured.name} />
                    <div>
                      <p className="font-bold text-white">{featured.name}</p>
                      {featured.publishedAt && (
                        <p className="text-xs text-emerald-200">{formatRelativeDate(featured.publishedAt, locale)}</p>
                      )}
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
          {reviews.slice(1, 5).map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-gray-100" />
              <div className="mb-3 flex items-center gap-3">
                <Avatar name={review.name} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  {review.publishedAt && (
                    <p className="text-xs text-gray-400">{formatRelativeDate(review.publishedAt, locale)}</p>
                  )}
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
            {total
              ? isDutch
                ? `Alle ${total} beoordelingen op Google bekijken`
                : `Voir les ${total} avis sur Google`
              : isDutch
                ? 'Google-profiel bekijken'
                : 'Voir la fiche Google'}
          </a>
        </div>
      </div>
    </section>
  );
}
