/**
 * Type definitions for Trek and Region data structures
 * These types are used throughout the application for both Storyblok and static data
 */

import type { StaticImageData } from 'next/image';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  meals: string;
  walkingHours?: string;
  location?: string; // Location name for map display (e.g., "Kathmandu", "Lukla", "Namche Bazaar")
}

export interface Trek {
  id: string;
  name: string;
  duration: string;
  altitude: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Moderate to Hard' | 'Extreme' | 'Challenging' | 'Strenuous';
  description: string;
  highlights: string[];
  image: string | StaticImageData;
  price: string;
  season: string;
  groupSize: string;
  region: string;
  adventureType: 'trekking' | 'peak' | 'safari';
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  requirements: string[];
  mapUrl?: string; // Optional Google My Maps embed URL
}

export interface Region {
  id: string;
  name: string;
  description: string;
  image: string | StaticImageData;
  trekCount: number;
  popularTreks: string[];
}

// Peak Expedition Types
export interface PeakItineraryDay {
  day: number;
  title: string;
  description: string;
  altitude?: string;
  duration?: string;
  meals?: string;
  location?: string; // Location name for map display (e.g., "Kathmandu", "Lukla", "Base Camp")
}

export interface PeakExpedition {
  id: string;
  name: string;
  height: string;
  duration: string;
  difficulty: string;
  season: string;
  image: string;
  description: string;
  price: string;
  accommodation: string;
  meals: string;
  hiking: string;
  overview: string;
  highlights: string[];
  itinerary?: PeakItineraryDay[]; // Optional - may not be available for all peaks
  included: string[];
  excluded: string[];
  requirements: string[];
  technicalRequirements: string[];
  region?: string; // Optional region field for filtering
}

// Safari Package Types
export interface SafariItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals?: string;
}

export interface SafariPackage {
  id: string;
  name: string;
  location: string;
  duration: string;
  type: string;
  image: string;
  description: string;
  highlights: string[];
  badge: string;
  overview: string;
  itinerary?: SafariItineraryDay[]; // Optional - may not be available for all safaris
  included: string[];
  excluded: string[];
  requirements: string[];
  bestTime: string;
  wildlife: string[];
  activities: string[];
}
