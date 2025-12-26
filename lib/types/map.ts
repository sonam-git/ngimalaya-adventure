export interface TrekDay {
  day: number;
  title: string;
  location: string; // Single location for the day
  description?: string;
}

export interface TrekMapData {
  trekName: string;
  itinerary: TrekDay[];
}

export interface DayCoordinates {
  day: number;
  title: string;
  location: string; // Location name
  coordinates: { lat: number; lng: number } | null; // Geocoded coordinates
}
