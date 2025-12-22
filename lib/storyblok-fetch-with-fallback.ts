/**
 * Utility functions to fetch data from Storyblok CMS
 * All data is fetched from Storyblok - no fallback to static data
 * Returns null or empty arrays if data is not available
 */

import { Trek, PeakExpedition, SafariPackage } from './types';
import {
  getAllTreks,
  getTrekBySlug,
  getTreksByRegion,
  getAllRegions,
  getRegionBySlug,
  getAllPeaksFromSection,
  getPeakBySlugFromSection,
  getAllSafarisFromSection,
  getSafariBySlugFromSection,
} from './storyblok-api';
import {
  convertStoryblokTrekToTrek,
  convertStoryblokRegionToRegion,
  convertStoryblokPeakToPeak,
  convertStoryblokSafariToSafari,
  type StoryblokPeakBlock,
  type StoryblokSafariBlock,
} from './storyblok-converters';

/**
 * Fetch all treks from Storyblok
 * Returns empty array if fetch fails or no data available
 */
export async function fetchTreksWithFallback(): Promise<Trek[]> {
  try {
    const storyblokTreks = await getAllTreks();
    
    if (storyblokTreks && storyblokTreks.length > 0) {
      console.log(`✅ Fetched ${storyblokTreks.length} treks from Storyblok`);
      return storyblokTreks.map(convertStoryblokTrekToTrek);
    }
    
    console.log('⚠️ No treks returned from Storyblok');
    return [];
  } catch (error) {
    console.error('❌ Error fetching treks from Storyblok:', error);
    return [];
  }
}

/**
 * Fetch a single trek by slug from Storyblok
 * Returns null if not found or fetch fails
 */
export async function fetchTrekBySlugWithFallback(slug: string): Promise<Trek | null> {
  try {
    const storyblokTrek = await getTrekBySlug(slug);
    
    if (storyblokTrek) {
      console.log(`✅ Fetched trek "${slug}" from Storyblok`);
      return convertStoryblokTrekToTrek(storyblokTrek);
    }
    
    console.log(`⚠️ Trek "${slug}" not found in Storyblok`);
    return null;
  } catch (error) {
    console.error(`❌ Error fetching trek "${slug}" from Storyblok:`, error);
    return null;
  }
}

/**
 * Fetch treks by region from Storyblok
 * Returns empty array if fetch fails or no data available
 */
export async function fetchTreksByRegionWithFallback(regionId: string): Promise<Trek[]> {
  try {
    const storyblokTreks = await getTreksByRegion(regionId);
    
    if (storyblokTreks && storyblokTreks.length > 0) {
      // Convert and filter to only include trekking adventures
      const convertedTreks = storyblokTreks
        .map(convertStoryblokTrekToTrek)
        .filter((t: Trek) => t.adventureType === 'trekking');
      
      console.log(`✅ Fetched ${storyblokTreks.length} items for region "${regionId}" from Storyblok, filtered to ${convertedTreks.length} treks`);
      return convertedTreks;
    }
    
    console.log(`⚠️ No treks found for region "${regionId}" in Storyblok`);
    return [];
  } catch (error) {
    console.error(`❌ Error fetching treks for region "${regionId}" from Storyblok:`, error);
    return [];
  }
}

/**
 * Fetch all regions from Storyblok
 * Returns empty array if fetch fails or no data available
 */
export async function fetchRegionsWithFallback() {
  try {
    console.log('🔍 Fetching regions from Storyblok...');
    const storyblokRegions = await getAllRegions();
    
    if (storyblokRegions && storyblokRegions.length > 0) {
      console.log(`✅ Successfully fetched ${storyblokRegions.length} regions from Storyblok`);
      return storyblokRegions.map(convertStoryblokRegionToRegion);
    }
    
    console.log('⚠️ No regions returned from Storyblok');
    return [];
  } catch (error) {
    console.error('❌ Error fetching regions from Storyblok:', error);
    return [];
  }
}

/**
 * Fetch a single region by slug from Storyblok
 * Returns null if not found or fetch fails
 */
export async function fetchRegionBySlugWithFallback(slug: string) {
  try {
    const storyblokRegion = await getRegionBySlug(slug);
    
    if (storyblokRegion) {
      console.log(`✅ Fetched region "${slug}" from Storyblok`);
      return convertStoryblokRegionToRegion(storyblokRegion);
    }
    
    console.log(`⚠️ Region "${slug}" not found in Storyblok`);
    return null;
  } catch (error) {
    console.error(`❌ Error fetching region "${slug}" from Storyblok:`, error);
    return null;
  }
}

/**
 * Fetch all peaks from Storyblok (using nested peak_section structure)
 * Returns empty array if fetch fails or no data available
 */
export async function fetchPeaksWithFallback(): Promise<PeakExpedition[]> {
  try {
    console.log('🔍 Fetching peaks from Storyblok peak_section...');
    const storyblokPeaks = await getAllPeaksFromSection();
    
    if (storyblokPeaks && storyblokPeaks.length > 0) {
      const peaks = storyblokPeaks.map((p: unknown) => convertStoryblokPeakToPeak(p as StoryblokPeakBlock));
      console.log(`✅ Found ${peaks.length} peaks from Storyblok`);
      return peaks;
    }
    
    console.log('⚠️ No peaks found in Storyblok');
    return [];
  } catch (error) {
    console.error('❌ Error fetching peaks from Storyblok:', error);
    return [];
  }
}

/**
 * Fetch a single peak by slug from Storyblok (using nested peak_section structure)
 * Returns null if not found or fetch fails
 */
export async function fetchPeakBySlugWithFallback(slug: string): Promise<PeakExpedition | null> {
  try {
    console.log(`🔍 Fetching peak "${slug}" from Storyblok peak_section...`);
    const storyblokPeak = await getPeakBySlugFromSection(slug);
    
    if (storyblokPeak) {
      const peak = convertStoryblokPeakToPeak(storyblokPeak as StoryblokPeakBlock);
      console.log(`✅ Fetched peak "${slug}" from Storyblok`);
      return peak;
    }
    
    console.log(`⚠️ Peak "${slug}" not found in Storyblok`);
    return null;
  } catch (error) {
    console.error(`❌ Error fetching peak "${slug}" from Storyblok:`, error);
    return null;
  }
}

/**
 * Fetch all safaris from Storyblok (using nested safari_section structure)
 * Returns empty array if fetch fails or no data available
 */
export async function fetchSafarisWithFallback(): Promise<SafariPackage[]> {
  try {
    console.log('🔍 Fetching safaris from Storyblok safari_section...');
    const storyblokSafaris = await getAllSafarisFromSection();
    
    if (storyblokSafaris && storyblokSafaris.length > 0) {
      const safaris = storyblokSafaris.map((s: unknown) => convertStoryblokSafariToSafari(s as StoryblokSafariBlock));
      console.log(`✅ Found ${safaris.length} safaris from Storyblok`);
      return safaris;
    }
    
    console.log('⚠️ No safaris found in Storyblok');
    return [];
  } catch (error) {
    console.error('❌ Error fetching safaris from Storyblok:', error);
    return [];
  }
}

/**
 * Fetch a single safari by slug from Storyblok (using nested safari_section structure)
 * Returns null if not found or fetch fails
 */
export async function fetchSafariBySlugWithFallback(slug: string): Promise<SafariPackage | null> {
  try {
    console.log(`🔍 Fetching safari "${slug}" from Storyblok safari_section...`);
    const storyblokSafari = await getSafariBySlugFromSection(slug);
    
    if (storyblokSafari) {
      const safari = convertStoryblokSafariToSafari(storyblokSafari as StoryblokSafariBlock);
      console.log(`✅ Fetched safari "${slug}" from Storyblok`);
      return safari;
    }
    
    console.log(`⚠️ Safari "${slug}" not found in Storyblok`);
    return null;
  } catch (error) {
    console.error(`❌ Error fetching safari "${slug}" from Storyblok:`, error);
    return null;
  }
}
