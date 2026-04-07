// netlify/functions/get-google-reviews.js
// Fetches Google Reviews server-side to keep the API key secret

exports.handler = async function (event, context) {
  const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Missing API configuration' })
    };
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=name,rating,user_ratings_total,reviews&language=fr&key=${GOOGLE_PLACES_API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: `Places API error: ${data.status}` })
      };
    }

    const result = data.result;

    // Filter to 4 and 5 star reviews only, sorted by most recent
    const reviews = (result.reviews || [])
      .filter(r => r.rating >= 4)
      .sort((a, b) => b.time - a.time)
      .slice(0, 5)
      .map(r => ({
        author_name: r.author_name,
        rating: r.rating,
        text: r.text,
        relative_time: r.relative_time_description,
        time: r.time,
        profile_photo_url: r.profile_photo_url
      }));

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600' // Cache 1 hour
      },
      body: JSON.stringify({
        name: result.name,
        rating: result.rating,
        total: result.user_ratings_total,
        reviews
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
