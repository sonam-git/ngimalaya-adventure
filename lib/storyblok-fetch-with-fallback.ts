/**
 * Utility functions to fetch from Storyblok with fallback to static data
 * If Storyblok fails or is not configured, returns hardcoded data
 */

import { Trek, trekRegions } from '@/data/treks';
import { allTreks } from '@/data/treks';
import {
  getAllTreks,
  getTrekBySlug,
  getTreksByRegion,
  getAllRegions,
  getRegionBySlug,
  getAllPeaks,
  getPeakBySlug,
  getAllSafaris,
  getSafariBySlug,
} from './storyblok-api';
import {
  convertStoryblokTrekToTrek,
  convertStoryblokRegionToRegion,
  convertStoryblokPeakToPeak,
  convertStoryblokSafariToSafari,
} from './storyblok-converters';

// Check if Storyblok is configured
const isStoryblokConfigured = () => {
  return !!process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN;
};

/**
 * Fetch all treks with fallback to static data
 */
export async function fetchTreksWithFallback(): Promise<Trek[]> {
  // Return static data immediately if Storyblok is not configured
  if (!isStoryblokConfigured()) {
    console.log('🔴 Storyblok not configured, using static trek data');
    return allTreks.filter(t => t.adventureType === 'trekking');
  }

  try {
    const storyblokTreks = await getAllTreks();
    
    if (storyblokTreks && storyblokTreks.length > 0) {
      console.log(`✅ Fetched ${storyblokTreks.length} treks from Storyblok - ONLY showing Storyblok data`);
      // ONLY return Storyblok data, don't mix with static
      return storyblokTreks.map(convertStoryblokTrekToTrek);
    }
    
    // If no data returned, use static
    console.log('⚠️ No treks from Storyblok, using static data');
    return allTreks.filter(t => t.adventureType === 'trekking');
  } catch (error) {
    console.log('❌ Error fetching treks from Storyblok, using static data:', error);
    return allTreks.filter(t => t.adventureType === 'trekking');
  }
}

/**
 * Fetch a single trek by slug with fallback to static data
 */
export async function fetchTrekBySlugWithFallback(slug: string): Promise<Trek | null> {
  // Try static data first if Storyblok is not configured
  if (!isStoryblokConfigured()) {
    return allTreks.find(t => t.id === slug) || null;
  }

  try {
    const storyblokTrek = await getTrekBySlug(slug);
    
    if (storyblokTrek) {
      return convertStoryblokTrekToTrek(storyblokTrek);
    }
    
    // Fallback to static data
    return allTreks.find(t => t.id === slug) || null;
  } catch {
    return allTreks.find(t => t.id === slug) || null;
  }
}

/**
 * Fetch treks by region with fallback to static data
 */
export async function fetchTreksByRegionWithFallback(regionId: string): Promise<Trek[]> {
  // Helper function to filter static treks by region
  const filterStaticTreks = () => {
    // Convert region ID to match static data format
    // e.g., "everest" -> "Everest" or "everest" -> "everest region"
    const normalizedRegionId = regionId.toLowerCase().replace('-', ' ');
    
    return allTreks.filter(t => {
      const trekRegion = t.region.toLowerCase();
      // Only include treks with adventureType 'trekking' (exclude peaks and safaris)
      const isTrekking = t.adventureType === 'trekking';
      // Match if region contains the regionId (e.g., "everest region" contains "everest")
      // or if they're exactly equal (case-insensitive)
      const matchesRegion = trekRegion.includes(normalizedRegionId) || 
             trekRegion === normalizedRegionId ||
             trekRegion.replace(' region', '') === normalizedRegionId;
      
      return isTrekking && matchesRegion;
    });
  };

  if (!isStoryblokConfigured()) {
    const staticTreks = filterStaticTreks();
    console.log(`🔴 Storyblok not configured, using ${staticTreks.length} static treks for region: ${regionId}`);
    return staticTreks;
  }

  try {
    const storyblokTreks = await getTreksByRegion(regionId);
    
    if (storyblokTreks && storyblokTreks.length > 0) {
      // Convert and filter to only include trekking adventures
      const convertedTreks = storyblokTreks
        .map(convertStoryblokTrekToTrek)
        .filter((t: Trek) => t.adventureType === 'trekking');
      
      console.log(`✅ Fetched ${storyblokTreks.length} items for region ${regionId} from Storyblok, filtered to ${convertedTreks.length} treks (excluding peaks)`);
      // ONLY return Storyblok data, don't mix with static
      return convertedTreks;
    }
    
    // Fallback to static data only if Storyblok returns nothing
    const staticTreks = filterStaticTreks();
    console.log(`⚠️ No treks for region ${regionId} from Storyblok, using ${staticTreks.length} static treks`);
    return staticTreks;
  } catch (error) {
    const staticTreks = filterStaticTreks();
    console.log(`❌ Error fetching treks for region ${regionId}, using ${staticTreks.length} static treks:`, error);
    return staticTreks;
  }
}

/**
 * Fetch all regions with fallback to static data
 */
export async function fetchRegionsWithFallback() {
  if (!isStoryblokConfigured()) {
    console.log('🔴 Storyblok not configured, using static regions data');
    return trekRegions;
  }

  try {
    console.log('🔍 Fetching regions from Storyblok...');
    const storyblokRegions = await getAllRegions();
    
    if (storyblokRegions && storyblokRegions.length > 0) {
      console.log(`✅ Successfully fetched ${storyblokRegions.length} regions from Storyblok - ONLY showing Storyblok data`);
      // ONLY return Storyblok data, don't mix with static
      return storyblokRegions.map(convertStoryblokRegionToRegion);
    }
    
    // Only fallback if Storyblok returns nothing
    console.log('⚠️ No regions from Storyblok, using static data');
    return trekRegions;
  } catch (error) {
    console.error('❌ Error fetching regions from Storyblok, using static data:', error);
    return trekRegions;
  }
}

/**
 * Fetch a single region by slug with fallback to static data
 */
export async function fetchRegionBySlugWithFallback(slug: string) {
  if (!isStoryblokConfigured()) {
    return trekRegions.find(r => r.id === slug) || null;
  }

  try {
    const storyblokRegion = await getRegionBySlug(slug);
    
    if (storyblokRegion) {
      return convertStoryblokRegionToRegion(storyblokRegion);
    }
    
    // Fallback to static data
    return trekRegions.find(r => r.id === slug) || null;
  } catch {
    return trekRegions.find(r => r.id === slug) || null;
  }
}

/**
 * Fetch all peaks with fallback to static data
 */
export async function fetchPeaksWithFallback(): Promise<Trek[]> {
  if (!isStoryblokConfigured()) {
    console.log('Storyblok not configured, using static peaks data');
    return allTreks.filter(t => t.adventureType === 'peak');
  }

  try {
    console.log('Fetching peaks from Storyblok...');
    const storyblokPeaks = await getAllPeaks();
    
    if (storyblokPeaks && storyblokPeaks.length > 0) {
      console.log(`Successfully fetched ${storyblokPeaks.length} peaks from Storyblok`);
      return storyblokPeaks.map(convertStoryblokPeakToPeak);
    }
    
    console.log('No peaks from Storyblok, using static data');
    return allTreks.filter(t => t.adventureType === 'peak');
  } catch (error) {
    console.error('Error fetching peaks from Storyblok, using static data:', error);
    return allTreks.filter(t => t.adventureType === 'peak');
  }
}

/**
 * Fetch a single peak by slug with fallback to static data
 */
export async function fetchPeakBySlugWithFallback(slug: string): Promise<Trek | null> {
  if (!isStoryblokConfigured()) {
    console.log('Storyblok not configured, using static peak data');
    return allTreks.find(t => t.id === slug && t.adventureType === 'peak') || null;
  }

  try {
    console.log(`Fetching peak ${slug} from Storyblok...`);
    const storyblokPeak = await getPeakBySlug(slug);
    
    if (storyblokPeak) {
      console.log(`Successfully fetched peak ${slug} from Storyblok`);
      return convertStoryblokPeakToPeak(storyblokPeak);
    }
    
    console.log(`Peak ${slug} not found in Storyblok, using static data`);
    return allTreks.find(t => t.id === slug && t.adventureType === 'peak') || null;
  } catch (error) {
    console.error(`Error fetching peak ${slug} from Storyblok, using static data:`, error);
    return allTreks.find(t => t.id === slug && t.adventureType === 'peak') || null;
  }
}

/**
 * Fetch all safaris with fallback to static data
 */
export async function fetchSafarisWithFallback(): Promise<Trek[]> {
  if (!isStoryblokConfigured()) {
    console.log('Storyblok not configured, using static safaris data');
    return allTreks.filter(t => t.adventureType === 'safari');
  }

  try {
    console.log('Fetching safaris from Storyblok...');
    const storyblokSafaris = await getAllSafaris();
    
    if (storyblokSafaris && storyblokSafaris.length > 0) {
      console.log(`Successfully fetched ${storyblokSafaris.length} safaris from Storyblok`);
      return storyblokSafaris.map(convertStoryblokSafariToSafari);
    }
    
    console.log('No safaris from Storyblok, using static data');
    return allTreks.filter(t => t.adventureType === 'safari');
  } catch (error) {
    console.error('Error fetching safaris from Storyblok, using static data:', error);
    return allTreks.filter(t => t.adventureType === 'safari');
  }
}

/**
 * Fetch a single safari by slug with fallback to static data
 */
export async function fetchSafariBySlugWithFallback(slug: string): Promise<Trek | null> {
  if (!isStoryblokConfigured()) {
    console.log('Storyblok not configured, using static safari data');
    return allTreks.find(t => t.id === slug && t.adventureType === 'safari') || null;
  }

  try {
    console.log(`Fetching safari ${slug} from Storyblok...`);
    const storyblokSafari = await getSafariBySlug(slug);
    
    if (storyblokSafari) {
      console.log(`Successfully fetched safari ${slug} from Storyblok`);
      return convertStoryblokSafariToSafari(storyblokSafari);
    }
    
    console.log(`Safari ${slug} not found in Storyblok, using static data`);
    return allTreks.find(t => t.id === slug && t.adventureType === 'safari') || null;
  } catch (error) {
    console.error(`Error fetching safari ${slug} from Storyblok, using static data:`, error);
    return allTreks.find(t => t.id === slug && t.adventureType === 'safari') || null;
  }
}
