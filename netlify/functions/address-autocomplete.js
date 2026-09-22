/**
 * Suggestions d'adresses, limitées à la zone de Bruxelles.
 *
 *   GET /.netlify/functions/address-autocomplete?q=rue de la loi&session=<uuid>
 *   → { "suggestions": [{ "placeId": "...", "label": "Rue de la Loi 16, Bruxelles" }] }
 *
 * La clé Google reste côté serveur : exposée dans le bundle, elle serait consommable par
 * n'importe qui et facturée sur votre compte.
 *
 * Sans `GOOGLE_MAPS_API_KEY`, la fonction renvoie une liste vide plutôt qu'une erreur :
 * le champ d'adresse retombe alors en saisie libre, ce qui reste parfaitement utilisable.
 */

const json = (statusCode, payload) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify(payload),
});

export async function handler(event) {
  if (event.httpMethod !== 'GET') {
    return json(405, { error: 'Méthode non autorisée' });
  }

  const query = event.queryStringParameters?.q?.trim() ?? '';
  const sessionToken = event.queryStringParameters?.session;

  if (query.length < 3) {
    return json(200, { suggestions: [] });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return json(200, { suggestions: [], disabled: true });
  }

  try {
    const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
      },
      body: JSON.stringify({
        input: query,
        includedRegionCodes: ['be'],
        // Rectangle englobant la Région bruxelloise : seules les adresses de cette zone
        // sont suggérées. Le code postal reste vérifié ensuite (communes limitrophes).
        locationRestriction: {
          rectangle: {
            low: { latitude: 50.76, longitude: 4.24 },
            high: { latitude: 50.92, longitude: 4.49 },
          },
        },
        includedPrimaryTypes: ['street_address', 'premise', 'subpremise', 'route'],
        languageCode: 'fr',
        ...(sessionToken ? { sessionToken } : {}),
      }),
    });

    if (!response.ok) {
      console.error('Places autocomplete a répondu', response.status, await response.text());
      return json(200, { suggestions: [] });
    }

    const payload = await response.json();
    const suggestions = (payload.suggestions ?? [])
      .filter((item) => item.placePrediction)
      .map((item) => ({
        placeId: item.placePrediction.placeId,
        label: item.placePrediction.text?.text ?? '',
      }))
      .filter((item) => item.label);

    return json(200, { suggestions });
  } catch (error) {
    // Une panne de l'autocomplétion ne doit pas empêcher de réserver.
    console.error('Autocomplétion indisponible :', error);
    return json(200, { suggestions: [] });
  }
}
