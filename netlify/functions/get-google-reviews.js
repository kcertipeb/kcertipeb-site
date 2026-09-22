/**
 * Avis Google de KCertiPEB.
 *
 *   GET /.netlify/functions/get-google-reviews
 *   → { "source": "business-profile" | "places", "rating": 5, "total": 18,
 *       "reviews": [{ "author", "rating", "text", "publishedAt" }], "url": "..." }
 *
 * Deux sources, par ordre de préférence :
 *   1. API Google Business Profile : note, nombre d'avis et textes (voir google-business.js) ;
 *   2. Places API (New) : note et nombre d'avis uniquement — les textes ne sont pas fournis.
 *      `reviews` est alors vide et la page garde ses avis de secours.
 *
 * La réponse est mise en cache 6 heures par le CDN de Netlify : environ 4 appels à Google
 * par jour au lieu d'un par visite. Le quota « Place Details » du projet Google est limité
 * par jour et sert aussi à l'autocomplétion d'adresse, qui doit rester prioritaire.
 */

import { getBusinessProfileReviews, isBusinessProfileConfigured } from '../shared/google-business.js';

/** Fiche « Kcertipeb » (Anderlecht). Identifiant public, surchargeable par l'environnement. */
const DEFAULT_PLACE_ID = 'ChIJA9-H2urHw0cRYcsExij87Qw';

const MIN_RATING = 4;
const MAX_REVIEWS = 8;

const json = (statusCode, payload, cacheable = false) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    ...(cacheable
      ? {
          'Cache-Control': 'public, max-age=1800',
          'Netlify-CDN-Cache-Control': 'public, durable, s-maxage=21600, stale-while-revalidate=86400',
        }
      : { 'Cache-Control': 'no-store' }),
  },
  body: JSON.stringify(payload),
});

const getPlacesSummary = async () => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY ?? process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    throw new Error('GOOGLE_MAPS_API_KEY manquante');
  }

  const placeId = process.env.GOOGLE_PLACE_ID ?? DEFAULT_PLACE_ID;
  const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri',
    },
  });

  if (!response.ok) {
    throw new Error(`Places a répondu ${response.status} : ${await response.text()}`);
  }

  const payload = await response.json();
  return {
    rating: payload.rating ?? null,
    total: payload.userRatingCount ?? null,
    url: payload.googleMapsUri ?? null,
  };
};

export async function handler(event) {
  if (event.httpMethod !== 'GET') {
    return json(405, { error: 'Méthode non autorisée' });
  }

  try {
    const places = await getPlacesSummary().catch((error) => {
      console.error('Résumé Places indisponible :', error);
      return { rating: null, total: null, url: null };
    });

    if (isBusinessProfileConfigured()) {
      try {
        const profile = await getBusinessProfileReviews();
        return json(
          200,
          {
            source: 'business-profile',
            rating: profile.rating ?? places.rating,
            total: profile.total ?? places.total,
            url: places.url,
            reviews: profile.reviews
              .filter((review) => review.rating >= MIN_RATING && review.text)
              .slice(0, MAX_REVIEWS),
          },
          true
        );
      } catch (error) {
        // On retombe sur la note Places : la section reste affichée avec ses avis de secours.
        console.error('Avis Business Profile indisponibles :', error);
      }
    }

    if (places.rating === null) {
      return json(503, { error: 'Avis Google temporairement indisponibles' });
    }

    return json(200, { source: 'places', ...places, reviews: [] }, true);
  } catch (error) {
    console.error('Avis Google indisponibles :', error);
    return json(503, { error: 'Avis Google temporairement indisponibles' });
  }
}
