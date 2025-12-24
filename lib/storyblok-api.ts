import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || '',
  cache: {
    clear: 'auto',
    type: 'none', // Disable caching to always fetch fresh data
  },
});

export default Storyblok;

// Type definitions for nested Storyblok structure
interface StoryblokAsset {
  filename: string;
  alt?: string;
}

interface StoryblokTrek {
  component: 'trek';
  name: string;
  description?: string;
  image?: StoryblokAsset;
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
  [key: string]: unknown;
}

interface StoryblokRegion {
  component: 'region';
  name: string;
  description?: string;
  image?: StoryblokAsset;
  treks?: StoryblokTrek[];
  [key: string]: unknown;
}

interface StoryblokRegionSection {
  component: 'region_section';
  regions?: StoryblokRegion[];
  [key: string]: unknown;
}

interface StoryblokSection {
  component: string;
  [key: string]: unknown;
}

interface TrekPageContent {
  sections?: StoryblokSection[];
  [key: string]: unknown;
}

interface TrekPageStory {
  content: TrekPageContent;
  [key: string]: unknown;
}

interface TrekWithRegion extends StoryblokTrek {
  regionName?: string;
  regionSlug?: string;
}

// Fetch the main trek_page with all nested regions and treks
export async function getTrekPage(): Promise<TrekPageStory | null> {
  try {
    const { data } = await Storyblok.get('cdn/stories/trek', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
    return data.story;
  } catch (error: unknown) {
    // Log detailed error information
    const err = error as { response?: { status?: number; statusText?: string; data?: unknown }; message?: string };
    if (err?.response?.status === 404) {
      console.info('ℹ️ Trek story not found in Storyblok (looking for slug "trek"). This is expected if you haven\'t created content yet. The app will use static fallback data.');
    } else if (err?.response) {
      console.error('Error fetching trek page from Storyblok:', {
        status: err.response.status,
        statusText: err.response.statusText,
        message: err.message,
        data: err.response.data,
      });
    } else {
      console.error('Error fetching trek page from Storyblok:', err?.message || 'Unknown error');
    }
    return null;
  }
}

// Fetch all treks from the nested structure
export async function getAllTreks(): Promise<TrekWithRegion[]> {
  try {
    const trekPage = await getTrekPage();
    if (!trekPage?.content?.sections) {
      return [];
    }

    const allTreks: TrekWithRegion[] = [];
    
    // Find region_section blocks in sections
    const sections = trekPage.content.sections;
    const regionSections = sections.filter((section): section is StoryblokRegionSection => 
      section.component === 'region_section'
    );
    
    // Extract all treks from all regions
    regionSections.forEach((regionSection) => {
      if (regionSection.regions && Array.isArray(regionSection.regions)) {
        regionSection.regions.forEach((region) => {
          if (region.treks && Array.isArray(region.treks)) {
            // Add region name to each trek for reference
            region.treks.forEach((trek) => {
              allTreks.push({
                ...trek,
                regionName: region.name, // Add parent region name
                regionSlug: region.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
              });
            });
          }
        });
      }
    });
    
    return allTreks;
  } catch (error) {
    console.error('Error fetching treks from Storyblok:', error);
    return [];
  }
}

// Fetch a single trek by slug
export async function getTrekBySlug(slug: string): Promise<TrekWithRegion | null> {
  try {
    const allTreks = await getAllTreks();
    // Find trek by matching id or name slug
    const trek = allTreks.find((t) => {
      const trekSlug = t.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return trekSlug === slug;
    });
    
    return trek || null;
  } catch (error) {
    console.error(`Error fetching trek ${slug} from Storyblok:`, error);
    return null;
  }
}

// Fetch all regions from the nested structure
export async function getAllRegions(): Promise<StoryblokRegion[]> {
  try {
    const trekPage = await getTrekPage();
    if (!trekPage?.content?.sections) {
      return [];
    }

    const allRegions: StoryblokRegion[] = [];
    
    // Find region_section blocks in sections
    const sections = trekPage.content.sections;
    const regionSections = sections.filter((section): section is StoryblokRegionSection => 
      section.component === 'region_section'
    );
    
    // Extract all regions
    regionSections.forEach((regionSection) => {
      if (regionSection.regions && Array.isArray(regionSection.regions)) {
        allRegions.push(...regionSection.regions);
      }
    });
    
    return allRegions;
  } catch (error) {
    console.error('Error fetching regions from Storyblok:', error);
    return [];
  }
}

// Fetch a single region by slug
export async function getRegionBySlug(slug: string): Promise<StoryblokRegion | null> {
  try {
    const allRegions = await getAllRegions();
    // Find region by matching slug
    const region = allRegions.find((r) => {
      const regionSlug = r.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return regionSlug === slug;
    });
    
    return region || null;
  } catch (error) {
    console.error(`Error fetching region ${slug} from Storyblok:`, error);
    return null;
  }
}

// Fetch treks by region
export async function getTreksByRegion(regionSlug: string): Promise<TrekWithRegion[]> {
  try {
    const region = await getRegionBySlug(regionSlug);
    if (!region || !region.treks) {
      return [];
    }
    
    // Treks are nested directly in the region
    const treks = region.treks.map((trek) => ({
      ...trek,
      regionName: region.name,
      regionSlug: regionSlug,
    }));
    
    console.log(`📊 Region ${regionSlug} contains ${treks.length} treks`);
    return treks;
  } catch (error) {
    console.error(`Error fetching treks for region ${regionSlug}:`, error);
    return [];
  }
}

// Fetch all peak expeditions
export async function getAllPeaks() {
  try {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'peaks/',
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
    return data.stories;
  } catch (error) {
    console.error('Error fetching peaks from Storyblok:', error);
    return [];
  }
}

// Fetch a single peak by slug
export async function getPeakBySlug(slug: string) {
  try {
    const { data } = await Storyblok.get(`cdn/stories/peaks/${slug}`, {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
    return data.story;
  } catch (error) {
    console.error(`Error fetching peak ${slug} from Storyblok:`, error);
    return null;
  }
}

// Fetch all safari packages
export async function getAllSafaris() {
  try {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'safaris/',
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
    return data.stories;
  } catch (error) {
    console.error('Error fetching safaris from Storyblok:', error);
    return [];
  }
}

// Fetch a single safari by slug
export async function getSafariBySlug(slug: string) {
  try {
    const { data } = await Storyblok.get(`cdn/stories/safaris/${slug}`, {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
    return data.story;
  } catch (error) {
    console.error(`Error fetching safari ${slug} from Storyblok:`, error);
    return null;
  }
}

// NEW: Fetch peak_section page with all nested peaks
export async function getPeakSectionPage() {
  try {
    const { data } = await Storyblok.get('cdn/stories/peak', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
    return data.story;
  } catch (error: unknown) {
    const err = error as { response?: { status?: number; statusText?: string; data?: unknown }; message?: string };
    if (err?.response?.status === 404) {
      console.info('ℹ️ Peak story not found in Storyblok (looking for slug "peak"). This is expected if you haven\'t created content yet.');
    } else if (err?.response) {
      console.error('Error fetching peak page from Storyblok:', {
        status: err.response.status,
        statusText: err.response.statusText,
        message: err.message,
      });
    } else {
      console.error('Error fetching peak page from Storyblok:', err?.message || error);
    }
    return null;
  }
}

// NEW: Fetch safari_section page with all nested safaris
export async function getSafariSectionPage() {
  try {
    const { data } = await Storyblok.get('cdn/stories/safari', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
    return data.story;
  } catch (error: unknown) {
    const err = error as { response?: { status?: number; statusText?: string; data?: unknown }; message?: string };
    if (err?.response?.status === 404) {
      console.info('ℹ️ Safari story not found in Storyblok (looking for slug "safari"). This is expected if you haven\'t created content yet.');
    } else if (err?.response) {
      console.error('Error fetching safari page from Storyblok:', {
        status: err.response.status,
        statusText: err.response.statusText,
        message: err.message,
      });
    } else {
      console.error('Error fetching safari page from Storyblok:', err?.message || error);
    }
    return null;
  }
}

// NEW: Get all peaks from nested peak_section structure
export async function getAllPeaksFromSection() {
  try {
    const story = await getPeakSectionPage();
    if (!story || !story.content) {
      console.info('ℹ️ No peak page content found');
      return [];
    }

    const sections = story.content.sections || [];
    const peakSection = sections.find((s: { component: string }) => s.component === 'peak_section');
    
    if (!peakSection) {
      console.info('ℹ️ No peak_section component found in story');
      return [];
    }

    const peaks = (peakSection as { peaks?: unknown[] }).peaks || [];
    console.info(`✅ Found ${peaks.length} peaks in peak_section`);
    return peaks;
  } catch (error) {
    console.error('Error getting all peaks from section:', error);
    return [];
  }
}

// NEW: Get single peak by slug from nested structure
export async function getPeakBySlugFromSection(slug: string) {
  try {
    const allPeaks = await getAllPeaksFromSection();
    const peak = allPeaks.find((p: unknown) => {
      const peakItem = p as { name?: string };
      const peakSlug = peakItem.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
      return peakSlug === slug;
    });
    
    if (peak) {
      console.info(`✅ Found peak "${slug}" in peak_section`);
    } else {
      console.info(`⚠️ Peak "${slug}" not found in peak_section`);
    }
    
    return peak || null;
  } catch (error) {
    console.error(`Error getting peak ${slug} from section:`, error);
    return null;
  }
}

// NEW: Get all safaris from nested safari_section structure
export async function getAllSafarisFromSection() {
  try {
    const story = await getSafariSectionPage();
    if (!story || !story.content) {
      console.info('ℹ️ No safari page content found');
      return [];
    }

    const sections = story.content.sections || [];
    const safariSection = sections.find((s: { component: string }) => s.component === 'safari_section');
    
    if (!safariSection) {
      console.info('ℹ️ No safari_section component found in story');
      return [];
    }

    const safaris = (safariSection as { safaris?: unknown[] }).safaris || [];
    console.info(`✅ Found ${safaris.length} safaris in safari_section`);
    return safaris;
  } catch (error) {
    console.error('Error getting all safaris from section:', error);
    return [];
  }
}

// NEW: Get single safari by slug from nested structure
export async function getSafariBySlugFromSection(slug: string) {
  try {
    const allSafaris = await getAllSafarisFromSection();
    const safari = allSafaris.find((s: unknown) => {
      const safariItem = s as { name?: string };
      const safariSlug = safariItem.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
      return safariSlug === slug;
    });
    
    if (safari) {
      console.info(`✅ Found safari "${slug}" in safari_section`);
    } else {
      console.info(`⚠️ Safari "${slug}" not found in safari_section`);
    }
    
    return safari || null;
  } catch (error) {
    console.error(`Error getting safari ${slug} from section:`, error);
    return null;
  }
}
