import { geocodePlacesWithRateLimit } from './geocoding';
import { TrekDay, DayCoordinates } from './types/map';

/**
 * Process trek itinerary and geocode all locations
 * @param itinerary - Array of trek days with location field
 * @returns Array of day coordinates
 */
export async function processTrekItinerary(
  itinerary: TrekDay[]
): Promise<DayCoordinates[]> {
  // Collect all unique locations
  const allLocations = itinerary
    .map((day) => day.location)
    .filter((location) => location && location.trim() !== '');
  const uniqueLocations = [...new Set(allLocations)];

  // Geocode all locations
  const coordinates = await geocodePlacesWithRateLimit(uniqueLocations);

  // Create a map of location -> coordinates
  const locationCoordinates = new Map<string, { lat: number; lng: number } | null>();
  uniqueLocations.forEach((location, index) => {
    locationCoordinates.set(location, coordinates[index]);
  });

  // Map itinerary to coordinates
  return itinerary
    .filter((day) => day.location && day.location.trim() !== '')
    .map((day) => ({
      day: day.day,
      title: day.title,
      location: day.location,
      coordinates: locationCoordinates.get(day.location) || null,
    }));
}

/**
 * Calculate midpoint between two coordinates
 */
export function getMidpoint(
  coord1: { lat: number; lng: number },
  coord2: { lat: number; lng: number }
): { lat: number; lng: number } {
  return {
    lat: (coord1.lat + coord2.lat) / 2,
    lng: (coord1.lng + coord2.lng) / 2,
  };
}
