import { Trek } from '@/data/treks';
import { TrekStory, RegionStory, PeakStory, SafariStory } from '@/types/storyblok';

// Convert Storyblok Trek to local Trek format
export function convertStoryblokTrekToTrek(story: TrekStory): Trek {
  const { content } = story;
  
  // Validate that region field is set
  if (!content.region) {
    console.warn(`⚠️ Trek "${content.name}" (${story.slug}) is missing a region field! This trek won't appear on any region page.`);
  }
  
  // Validate that difficulty field is set
  if (!content.difficulty) {
    console.warn(`⚠️ Trek "${content.name}" (${story.slug}) is missing a difficulty field!`);
  }
  
  return {
    id: story.slug,
    name: content.name || 'Untitled Trek',
    duration: content.duration || 'N/A',
    altitude: content.altitude || 'N/A',
    difficulty: content.difficulty || 'Moderate', // Fallback to 'Moderate' if not set
    description: content.description || '',
    highlights: content.highlights?.map(h => h.text) || [],
    image: content.image?.filename || '/assets/images/default-trek.jpg',
    price: content.price || 'Contact for pricing',
    season: content.season || 'Year-round',
    groupSize: content.groupSize || '1-10 people',
    region: content.region || 'unknown', // Fallback to 'unknown' if not set
    adventureType: content.adventureType || 'trekking',
    itinerary: content.itinerary?.map(day => ({
      day: day.day,
      title: day.title,
      description: day.description,
      accommodation: day.accommodation,
      meals: day.meals,
      walkingHours: day.walkingHours,
    })) || [],
    included: content.included?.map(i => i.text) || [],
    excluded: content.excluded?.map(e => e.text) || [],
    requirements: content.requirements?.map(r => r.text) || [],
    mapUrl: content.mapUrl,
  };
}

// Convert Storyblok Region to local Region format
export function convertStoryblokRegionToRegion(story: RegionStory) {
  const { content } = story;
  
  return {
    id: story.slug,
    name: content.name,
    description: content.description,
    image: content.image?.filename || '/assets/images/default-region.jpg',
    highlights: content.highlights?.map(h => h.text) || [],
    bestSeason: content.bestSeason,
    difficulty: content.difficulty,
    trekCount: 0, // Will be calculated dynamically based on actual treks
    popularTreks: [], // Will be populated dynamically based on actual treks
  };
}

// Convert Storyblok Peak to local format
export function convertStoryblokPeakToPeak(story: PeakStory): Trek {
  const { content } = story;
  
  return {
    id: story.slug,
    name: content.name || 'Untitled Peak',
    duration: content.duration || 'N/A',
    altitude: content.altitude || 'N/A',
    difficulty: (content.difficulty as Trek['difficulty']) || 'Moderate',
    description: content.description || '',
    highlights: content.highlights?.map(h => h.text) || [],
    image: content.image?.filename || '/assets/images/default-peak.jpg',
    price: content.price || 'Contact for pricing',
    season: content.season || 'Year-round',
    groupSize: content.groupSize || '1-10 people',
    region: content.region || 'unknown',
    adventureType: 'peak',
    itinerary: content.itinerary?.map(day => ({
      day: day.day,
      title: day.title,
      description: day.description,
      accommodation: day.accommodation,
      meals: day.meals,
      walkingHours: day.walkingHours,
    })) || [],
    included: content.included?.map(i => i.text) || [],
    excluded: content.excluded?.map(e => e.text) || [],
    requirements: content.requirements?.map(r => r.text) || [],
    mapUrl: content.mapUrl,
  };
}

// Convert Storyblok Safari to local format
export function convertStoryblokSafariToSafari(story: SafariStory): Trek {
  const { content } = story;
  
  return {
    id: story.slug,
    name: content.name || 'Untitled Safari',
    duration: content.duration || 'N/A',
    altitude: '0m', // Safaris don't have altitude
    difficulty: (content.difficulty as Trek['difficulty']) || 'Easy',
    description: content.description || '',
    highlights: content.highlights?.map(h => h.text) || [],
    image: content.image?.filename || '/assets/images/default-safari.jpg',
    price: content.price || 'Contact for pricing',
    season: content.season || 'Year-round',
    groupSize: content.groupSize || '1-10 people',
    region: content.location || 'unknown',
    adventureType: 'safari',
    itinerary: content.itinerary?.map(day => ({
      day: day.day,
      title: day.title,
      description: day.description,
      accommodation: day.accommodation,
      meals: day.meals,
      walkingHours: day.walkingHours,
    })) || [],
    included: content.included?.map(i => i.text) || [],
    excluded: content.excluded?.map(e => e.text) || [],
    requirements: content.requirements?.map(r => r.text) || [],
  };
}
