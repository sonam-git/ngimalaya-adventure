// Type definitions for Storyblok content

export interface StoryblokAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  meals: string;
  walkingHours?: string;
  _uid: string;
  component: 'itinerary_day';
}

export interface TrekContent {
  _uid: string;
  component: 'trek';
  name: string;
  duration: string;
  altitude: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Moderate to Hard' | 'Extreme' | 'Challenging' | 'Strenuous';
  description: string;
  highlights: Array<{ text: string; _uid: string }>;
  image: StoryblokAsset;
  price: string;
  season: string;
  groupSize: string;
  region: string;
  adventureType: 'trekking' | 'peak' | 'safari';
  itinerary: ItineraryDay[];
  included: Array<{ text: string; _uid: string }>;
  excluded: Array<{ text: string; _uid: string }>;
  requirements: Array<{ text: string; _uid: string }>;
  mapUrl?: string;
}

export interface TrekStory {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  created_at: string;
  published_at: string;
  content: TrekContent;
}

export interface RegionContent {
  _uid: string;
  component: 'region';
  name: string;
  description: string;
  image: StoryblokAsset;
  highlights: Array<{ text: string; _uid: string }>;
  bestSeason: string;
  difficulty: string;
  trekCount: number;
}

export interface RegionStory {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  created_at: string;
  published_at: string;
  content: RegionContent;
}

export interface PeakContent {
  _uid: string;
  component: 'peak';
  name: string;
  duration: string;
  altitude: string;
  difficulty: string;
  description: string;
  highlights: Array<{ text: string; _uid: string }>;
  image: StoryblokAsset;
  price: string;
  season: string;
  groupSize: string;
  region: string;
  itinerary: ItineraryDay[];
  included: Array<{ text: string; _uid: string }>;
  excluded: Array<{ text: string; _uid: string }>;
  requirements: Array<{ text: string; _uid: string }>;
  mapUrl?: string;
}

export interface PeakStory {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  created_at: string;
  published_at: string;
  content: PeakContent;
}

export interface SafariContent {
  _uid: string;
  component: 'safari';
  name: string;
  duration: string;
  difficulty: string;
  description: string;
  highlights: Array<{ text: string; _uid: string }>;
  image: StoryblokAsset;
  price: string;
  season: string;
  groupSize: string;
  location: string;
  itinerary: ItineraryDay[];
  included: Array<{ text: string; _uid: string }>;
  excluded: Array<{ text: string; _uid: string }>;
  requirements: Array<{ text: string; _uid: string }>;
}

export interface SafariStory {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  created_at: string;
  published_at: string;
  content: SafariContent;
}
