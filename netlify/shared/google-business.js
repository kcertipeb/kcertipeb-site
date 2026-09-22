/**
 * Avis Google via l'API Google Business Profile.
 *
 * C'est la seule source qui donne les textes d'avis : Places API ne renvoie que la note et
 * le nombre d'avis pour ce projet. L'accès à cette API est soumis à validation par Google
 * (demande « Basic API Access »).
 *
 * Authentification OAuth du compte propriétaire de la fiche, par jeton de rafraîchissement
 * obtenu une seule fois. Variables d'environnement attendues :
 *
 *   GBP_CLIENT_ID       identifiant du client OAuth (Google Cloud)
 *   GBP_CLIENT_SECRET   secret de ce client
 *   GBP_REFRESH_TOKEN   jeton de rafraîchissement (portée business.manage)
 *   GBP_ACCOUNT_ID      identifiant numérique du compte Business Profile
 *   GBP_LOCATION_ID     identifiant numérique de l'établissement
 *
 * ⚠️ L'écran de consentement OAuth doit être « En production » : en mode test, Google
 * révoque le jeton de rafraîchissement au bout de 7 jours.
 */

const STAR_VALUES = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

export const isBusinessProfileConfigured = () =>
  Boolean(
    process.env.GBP_CLIENT_ID &&
      process.env.GBP_CLIENT_SECRET &&
      process.env.GBP_REFRESH_TOKEN &&
      process.env.GBP_ACCOUNT_ID &&
      process.env.GBP_LOCATION_ID
  );

const getAccessToken = async () => {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GBP_CLIENT_ID,
      client_secret: process.env.GBP_CLIENT_SECRET,
      refresh_token: process.env.GBP_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });

  if (!response.ok) {
    throw new Error(`Jeton Google refusé (${response.status}) : ${await response.text()}`);
  }

  return (await response.json()).access_token;
};

/**
 * Google ajoute sa traduction automatique au texte d'origine :
 *   « texte traduit\n\n(Original)\ntexte d'origine » ou
 *   « texte d'origine\n\n(Translated by Google)\ntraduction ».
 * On ne garde que le texte écrit par le client.
 */
const extractOriginalText = (comment) => {
  const text = String(comment ?? '');
  const originalMarker = text.indexOf('(Original)');
  if (originalMarker !== -1) {
    return text.slice(originalMarker + '(Original)'.length).trim();
  }
  const translatedMarker = text.indexOf('(Translated by Google)');
  if (translatedMarker !== -1) {
    return text.slice(0, translatedMarker).trim();
  }
  return text.trim();
};

/** Avis de l'établissement, du plus récent au plus ancien, avec la note globale. */
export const getBusinessProfileReviews = async () => {
  const token = await getAccessToken();
  const url = new URL(
    `https://mybusiness.googleapis.com/v4/accounts/${process.env.GBP_ACCOUNT_ID}/locations/${process.env.GBP_LOCATION_ID}/reviews`
  );
  url.searchParams.set('pageSize', '50');
  url.searchParams.set('orderBy', 'updateTime desc');

  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!response.ok) {
    throw new Error(`Business Profile a répondu ${response.status} : ${await response.text()}`);
  }

  const payload = await response.json();

  return {
    rating: payload.averageRating ?? null,
    total: payload.totalReviewCount ?? null,
    reviews: (payload.reviews ?? [])
      .map((review) => ({
        author: review.reviewer?.displayName ?? 'Client Google',
        rating: STAR_VALUES[review.starRating] ?? 0,
        text: extractOriginalText(review.comment),
        publishedAt: review.createTime ?? null,
      }))
      .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt))),
  };
};
