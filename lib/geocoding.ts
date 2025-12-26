interface GeocodeResult {
  lat: number;
  lon: number;
  display_name: string;
}

interface CachedCoordinates {
  [key: string]: { lat: number; lng: number } | null;
}

// In-memory cache to avoid repeated API calls
const geocodeCache: CachedCoordinates = {};

/**
 * Geocode a place name to coordinates using Nominatim API
 * @param placeName - Full place name (e.g., "Lukla, Nepal")
 * @returns Coordinates or null if not found
 */
export async function geocodePlace(
  placeName: string
): Promise<{ lat: number; lng: number } | null> {
  // Check cache first
  if (geocodeCache[placeName] !== undefined) {
    return geocodeCache[placeName];
  }

  try {
    // Use Nominatim API (OpenStreetMap)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?` +
        new URLSearchParams({
          q: placeName,
          format: 'json',
          limit: '1',
          addressdetails: '1',
        }),
      {
        headers: {
          'User-Agent': 'NgimalayaAdventure/1.0', // Required by Nominatim
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Geocoding failed: ${response.statusText}`);
    }

    const data: GeocodeResult[] = await response.json();

    if (data && data.length > 0) {
      const result = {
        lat: typeof data[0].lat === 'number' ? data[0].lat : parseFloat(data[0].lat),
        lng: typeof data[0].lon === 'number' ? data[0].lon : parseFloat(data[0].lon),
      };
      geocodeCache[placeName] = result;
      return result;
    }

    // Cache null result to avoid repeated failed lookups
    geocodeCache[placeName] = null;
    return null;
  } catch (error) {
    console.error(`Error geocoding ${placeName}:`, error);
    geocodeCache[placeName] = null;
    return null;
  }
}

/**
 * Geocode multiple places in parallel
 * @param places - Array of place names
 * @returns Array of coordinates (null for failed lookups)
 */
export async function geocodePlaces(
  places: string[]
): Promise<Array<{ lat: number; lng: number } | null>> {
  const uniquePlaces = [...new Set(places)];
  const promises = uniquePlaces.map((place) => geocodePlace(place));
  return Promise.all(promises);
}

/**
 * Add delay between geocoding requests to respect Nominatim rate limits
 * (max 1 request per second)
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Geocode places with rate limiting
 */
export async function geocodePlacesWithRateLimit(
  places: string[]
): Promise<Array<{ lat: number; lng: number } | null>> {
  const uniquePlaces = [...new Set(places)];
  const results: Array<{ lat: number; lng: number } | null> = [];

  for (const place of uniquePlaces) {
    const result = await geocodePlace(place);
    results.push(result);
    // Wait 1 second between requests to respect rate limits
    if (uniquePlaces.indexOf(place) < uniquePlaces.length - 1) {
      await delay(1000);
    }
  }

  return results;
}
