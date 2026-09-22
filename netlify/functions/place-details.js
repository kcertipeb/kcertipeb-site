/**
 * Adresse complète et code postal d'une suggestion retenue.
 *
 *   GET /.netlify/functions/place-details?placeId=...&session=<uuid>
 *   → { "address": "Rue de la Loi 16, 1000 Bruxelles, Belgique", "street": "Rue de la Loi",
 *       "streetNumber": "16", "postalCode": "1000", "locality": "Bruxelles" }
 *
 * Le code postal obtenu ici est structuré et fiable, contrairement à celui que
 * `extractPostalCode` devine dans une adresse tapée à la main.
 */

const json = (statusCode, payload) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify(payload),
});

const findComponent = (components, type) =>
  components?.find((component) => component.types?.includes(type))?.longText ?? null;

export async function handler(event) {
  if (event.httpMethod !== 'GET') {
    return json(405, { error: 'Méthode non autorisée' });
  }

  const placeId = event.queryStringParameters?.placeId?.trim();
  const sessionToken = event.queryStringParameters?.session;

  if (!placeId) {
    return json(400, { error: 'Paramètre « placeId » manquant' });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return json(200, { address: null, postalCode: null, locality: null, disabled: true });
  }

  try {
    const url = new URL(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`);
    if (sessionToken) {
      url.searchParams.set('sessionToken', sessionToken);
    }
    url.searchParams.set('languageCode', 'fr');

    const response = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'formattedAddress,addressComponents',
      },
    });

    if (!response.ok) {
      console.error('Places details a répondu', response.status, await response.text());
      return json(200, { address: null, postalCode: null, locality: null });
    }

    const payload = await response.json();

    return json(200, {
      address: payload.formattedAddress ?? null,
      street: findComponent(payload.addressComponents, 'route'),
      streetNumber: findComponent(payload.addressComponents, 'street_number'),
      postalCode: findComponent(payload.addressComponents, 'postal_code'),
      locality: findComponent(payload.addressComponents, 'locality'),
    });
  } catch (error) {
    console.error('Détails d’adresse indisponibles :', error);
    return json(200, { address: null, postalCode: null, locality: null });
  }
}
