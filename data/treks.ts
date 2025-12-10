// Import StaticImageData type for image typing
import type { StaticImageData } from 'next/image';

// Import regional trek data
import { everestRegionTreks } from './regions/everest';
import { annapurnaRegionTreks } from './regions/annapurna';
import { manasluRegionTreks } from './regions/manaslu';
import { kanchenjungaRegionTreks } from './regions/kanchenjunga';
import { langtangRegionTreks } from './regions/langtang';
import { 
  dolpoRegionTreks, 
  mustangRegionTreks, 
  dhaulagiriRegionTreks, 
  makaluRegionTreks 
} from './regions/other-regions';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  meals: string;
  walkingHours?: string;
}

export interface Trek {
  id: string;
  name: string;
  duration: string;
  altitude: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
  description: string;
  highlights: string[];
  image: string | StaticImageData;
  price: string;
  season: string;
  groupSize: string;
  region: string;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  requirements: string[];
}

export interface Region {
  id: string;
  name: string;
  description: string;
  image: string | StaticImageData;
  trekCount: number;
  popularTreks: string[];
}

// Aggregate all treks from different regions
export const allTreks: Trek[] = [
  ...everestRegionTreks,
  ...annapurnaRegionTreks,
  ...manasluRegionTreks,
  ...kanchenjungaRegionTreks,
  ...langtangRegionTreks,
  ...dolpoRegionTreks,
  ...mustangRegionTreks,
  ...dhaulagiriRegionTreks,
  ...makaluRegionTreks
];

// Select popular treks for the home page (from different regions)
export const popularTreks: Trek[] = [
  // Feature the ABC trek with custom image

    ...annapurnaRegionTreks.slice(0, 1),
  // Feature 2 Everest treks
  ...everestRegionTreks.slice(0, 2),
  // Feature Manaslu trek
  ...manasluRegionTreks.slice(0, 1),
  // Feature Kanchenjunga trek
  ...kanchenjungaRegionTreks.slice(0, 1),
  // Feature Makalu trek
  ...makaluRegionTreks.slice(0, 1)
];

// Regions data with dynamic trek counts
export const trekRegions: Region[] = [
  {
    id: 'everest-region',
    name: 'Everest Region',
    description: 'Home to the world\'s highest peak, offering iconic treks with spectacular mountain views and rich Sherpa culture.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: everestRegionTreks.length,
    popularTreks: everestRegionTreks.slice(0, 3).map(trek => trek.name)
  },
  {
    id: 'annapurna-region',
    name: 'Annapurna Region',
    description: 'Diverse landscapes from subtropical forests to high alpine terrain with stunning Annapurna massif views.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: annapurnaRegionTreks.length,
    popularTreks: annapurnaRegionTreks.map(trek => trek.name)
  },
  {
    id: 'manaslu-region',
    name: 'Manaslu Region',
    description: 'Off-the-beaten-path treks around the eighth highest mountain with Tibetan Buddhist culture.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: manasluRegionTreks.length,
    popularTreks: manasluRegionTreks.map(trek => trek.name)
  },
  {
    id: 'kanchenjunga-region',
    name: 'Kanchenjunga Region',
    description: 'Remote wilderness around the third highest mountain in the world with pristine biodiversity.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: kanchenjungaRegionTreks.length,
    popularTreks: kanchenjungaRegionTreks.map(trek => trek.name)
  },
  {
    id: 'langtang-region',
    name: 'Langtang Region',
    description: 'Beautiful valley known as "Valley of Glaciers" with Tamang culture and stunning mountain views.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: langtangRegionTreks.length,
    popularTreks: langtangRegionTreks.map(trek => trek.name)
  },
  {
    id: 'dolpo-region',
    name: 'Dolpo Region',
    description: 'Remote and pristine region offering unique Tibetan Buddhist culture and stunning trans-Himalayan landscapes.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: dolpoRegionTreks.length,
    popularTreks: dolpoRegionTreks.map(trek => trek.name)
  },
  {
    id: 'mustang-region',
    name: 'Mustang Region',
    description: 'Ancient kingdom with unique culture, dramatic landscapes, and fascinating Buddhist monasteries.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: mustangRegionTreks.length,
    popularTreks: mustangRegionTreks.map(trek => trek.name)
  },
  {
    id: 'dhaulagiri-region',
    name: 'Dhaulagiri Region',
    description: 'Challenging treks around the seventh highest mountain with dramatic landscapes and remote villages.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: dhaulagiriRegionTreks.length,
    popularTreks: dhaulagiriRegionTreks.map(trek => trek.name)
  },
  {
    id: 'makalu-region',
    name: 'Makalu Region',
    description: 'Remote region around the fifth highest mountain with pristine wilderness and diverse wildlife.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: makaluRegionTreks.length,
    popularTreks: makaluRegionTreks.map(trek => trek.name)
  }
];

export const services = [
  {
    title: 'Trekking',
    description: 'Professional guided treks to Nepal\'s most spectacular destinations',
    icon: '🥾'
  },
  {
    title: 'Mountaineering',
    description: 'Expedition services for peak climbing and mountaineering adventures',
    icon: '⛰️'
  },
  {
    title: 'Cultural Tours',
    description: 'Immerse yourself in Nepal\'s rich cultural heritage and traditions',
    icon: '🏛️'
  },
  {
    title: 'Safari Adventures',
    description: 'Wildlife safaris in Nepal\'s national parks and conservation areas',
    icon: '🦏'
  },
  {
    title: 'Custom Packages',
    description: 'Personalized itineraries tailored to your preferences and schedule',
    icon: '🎯'
  }
];
