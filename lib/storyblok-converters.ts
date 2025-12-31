import { Trek, PeakExpedition, SafariPackage } from './types';

// Type for trek block from nested structure
interface StoryblokTrekBlock {
  component: 'trek';
  name: string;
  description?: string;
  image?: { filename: string };
  duration?: string;
  altitude?: string;
  difficulty?: string;
  price?: string;
  season?: string;
  groupSize?: string;
  adventureType?: string;
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
    accommodation?: string;
    meals?: string;
    walkingHours?: string;
  }>;
  highlights?: Array<{ text: string }>;
  included?: Array<{ text: string }>;
  excluded?: Array<{ text: string }>;
  requirements?: Array<{ text: string }>;
  mapUrl?: string;
  regionName?: string;
  regionSlug?: string;
  [key: string]: unknown;
}

// Type for region block from nested structure  
interface StoryblokRegionBlock {
  component: 'region';
  name: string;
  description?: string;
  image?: { filename: string };
  treks?: StoryblokTrekBlock[];
  [key: string]: unknown;
}

// Type for peak block from nested structure
export interface StoryblokPeakBlock {
  component: 'peak';
  name: string;
  height?: string;
  duration?: string;
  difficulty?: string;
  season?: string;
  region?: string;
  image?: { filename: string };
  description?: string;
  price?: string;
  accommodation?: string;
  meals?: string;
  hiking?: string;
  overview?: string;
  highlights?: Array<{ text: string }>;
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
    altitude?: string;
    duration?: string;
    meals?: string;
    accommodation?: string;
    walkingHours?: string;
    location?: string;
  }>;
  included?: Array<{ text: string }>;
  excluded?: Array<{ text: string }>;
  requirements?: Array<{ text: string }>;
  technicalRequirements?: Array<{ text: string }>;
  [key: string]: unknown;
}

// Type for safari block from nested structure
export interface StoryblokSafariBlock {
  component: 'safari';
  name: string;
  location?: string;
  duration?: string;
  type?: string;
  image?: { filename: string };
  description?: string;
  highlights?: Array<{ text: string }>;
  badge?: string;
  overview?: string;
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
    activities?: Array<{ text: string }>;
    meals?: string;
  }>;
  included?: Array<{ text: string }>;
  excluded?: Array<{ text: string }>;
  requirements?: Array<{ text: string }>;
  bestTime?: string;
  wildlife?: Array<{ text: string }>;
  activities?: Array<{ text: string }>;
  [key: string]: unknown;
}

// Convert Storyblok Trek block to local Trek format
export function convertStoryblokTrekToTrek(trekBlock: StoryblokTrekBlock): Trek {
  // Generate slug from trek name
  const slug = trekBlock.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || 'untitled-trek';
  
  // Use regionName from the block if available (added during fetch)
  const region = trekBlock.regionName || 'unknown';
  
  // Validate that difficulty field is set
  if (!trekBlock.difficulty) {
    console.warn(`⚠️ Trek "${trekBlock.name}" is missing a difficulty field!`);
  }
  
  return {
    id: slug,
    name: trekBlock.name || 'Untitled Trek',
    duration: trekBlock.duration || 'N/A',
    altitude: trekBlock.altitude || 'N/A',
    difficulty: (trekBlock.difficulty as Trek['difficulty']) || 'Moderate',
    description: trekBlock.description || '',
    highlights: trekBlock.highlights?.map(h => h.text) || [],
    image: trekBlock.image?.filename || '/assets/images/default-trek.jpg',
    price: trekBlock.price || 'Contact for pricing',
    season: trekBlock.season || 'Year-round',
    groupSize: trekBlock.groupSize || '1-10 people',
    region: region,
    // Normalize adventureType to lowercase to handle "Trekking" → "trekking"
    adventureType: (trekBlock.adventureType?.toLowerCase() as Trek['adventureType']) || 'trekking',
    itinerary: trekBlock.itinerary?.map(day => ({
      day: day.day,
      title: day.title,
      description: day.description,
      accommodation: day.accommodation || '',
      meals: day.meals || '',
      walkingHours: day.walkingHours || '',
    })) || [],
    included: trekBlock.included?.map(i => i.text) || [],
    excluded: trekBlock.excluded?.map(e => e.text) || [],
    requirements: trekBlock.requirements?.map(r => r.text) || [],
    mapUrl: trekBlock.mapUrl,
  };
}

// Convert Storyblok Region block to local Region format
export function convertStoryblokRegionToRegion(regionBlock: StoryblokRegionBlock) {
  // Generate slug from region name
  const slug = regionBlock.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || 'untitled-region';
  
  // Count treks in this region
  const trekCount = regionBlock.treks?.length || 0;
  
  // Get popular treks (first 3 treks) as IDs
  const popularTreks = (regionBlock.treks || [])
    .slice(0, 3)
    .map(trek => trek.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '');
  
  return {
    id: slug,
    name: regionBlock.name,
    description: regionBlock.description || '',
    image: regionBlock.image?.filename || '/assets/images/default-region.jpg',
    highlights: [], // Removed from region structure as per new design
    bestSeason: '', // Removed from region structure as per new design
    difficulty: '', // Removed from region structure as per new design
    trekCount: trekCount,
    popularTreks: popularTreks,
  };
}

// Convert Storyblok Peak block to local PeakExpedition format
export function convertStoryblokPeakToPeak(peakBlock: StoryblokPeakBlock): PeakExpedition {
  // Generate slug from peak name
  const slug = peakBlock.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || 'untitled-peak';
  
  return {
    id: slug,
    name: peakBlock.name || 'Untitled Peak',
    height: peakBlock.height || 'N/A',
    duration: peakBlock.duration || 'N/A',
    difficulty: peakBlock.difficulty || 'Strenuous',
    season: peakBlock.season || 'Year-round',
    region: peakBlock.region,
    image: peakBlock.image?.filename || '/assets/images/default-peak.jpg',
    description: peakBlock.description || '',
    price: peakBlock.price || 'Contact for pricing',
    accommodation: peakBlock.accommodation || 'Teahouse/Camping',
    meals: peakBlock.meals || 'B, L & D',
    hiking: peakBlock.hiking || '5-7 hours',
    overview: peakBlock.overview || '',
    highlights: peakBlock.highlights?.map(h => h.text) || [],
    itinerary: peakBlock.itinerary?.map(day => ({
      day: day.day,
      title: day.title,
      description: day.description,
      altitude: day.altitude || '',
      duration: day.duration || '',
      meals: day.meals || '',
      accommodation: day.accommodation || '',
      walkingHours: day.walkingHours || '',
      location: day.location || '',
    })) || [],
    included: peakBlock.included?.map(i => i.text) || [],
    excluded: peakBlock.excluded?.map(e => e.text) || [],
    requirements: peakBlock.requirements?.map(r => r.text) || [],
    technicalRequirements: peakBlock.technicalRequirements?.map(t => t.text) || [],
  };
}

// Convert Storyblok Safari block to local SafariPackage format
export function convertStoryblokSafariToSafari(safariBlock: StoryblokSafariBlock): SafariPackage {
  // Generate slug from safari name
  const slug = safariBlock.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || 'untitled-safari';
  
  // Extract location from name if location field is empty or just "Nepal"
  let location = safariBlock.location || 'Nepal';
  if (!safariBlock.location || safariBlock.location.trim() === '' || safariBlock.location === 'Nepal') {
    // Try to extract location from safari name
    const name = safariBlock.name || '';
    if (name.toLowerCase().includes('koshi')) {
      location = 'Koshi';
    } else if (name.toLowerCase().includes('bardia')) {
      location = 'Bardia';
    } else if (name.toLowerCase().includes('chitwan') || name.toLowerCase().includes('chitawan')) {
      location = 'Chitwan';
    }
  }
  
  console.log(`📍 Safari "${safariBlock.name}" - extracted location: "${location}" (original: "${safariBlock.location || 'undefined'}")`);
  
  return {
    id: slug,
    name: safariBlock.name || 'Untitled Safari',
    location: location,
    duration: safariBlock.duration || 'N/A',
    type: safariBlock.type || 'Wildlife Safari',
    image: safariBlock.image?.filename || '/assets/images/default-safari.jpg',
    description: safariBlock.description || '',
    highlights: safariBlock.highlights?.map(h => h.text) || [],
    badge: safariBlock.badge || 'Adventure',
    overview: safariBlock.overview || '',
    itinerary: safariBlock.itinerary?.map(day => ({
      day: day.day,
      title: day.title,
      description: day.description,
      activities: day.activities?.map(a => a.text) || [],
      meals: day.meals || '',
    })) || [],
    included: safariBlock.included?.map(i => i.text) || [],
    excluded: safariBlock.excluded?.map(e => e.text) || [],
    requirements: safariBlock.requirements?.map(r => r.text) || [],
    bestTime: safariBlock.bestTime || 'Year-round',
    wildlife: safariBlock.wildlife?.map(w => w.text) || [],
    activities: safariBlock.activities?.map(a => a.text) || [],
  };
}
