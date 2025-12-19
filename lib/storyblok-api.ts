import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || '',
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});

export default Storyblok;

// Fetch all treks from Storyblok
export async function getAllTreks() {
  try {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'regions/treks/',
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      resolve_relations: 'trek.region',
    });
    return data.stories;
  } catch (error) {
    console.error('Error fetching treks from Storyblok:', error);
    return [];
  }
}

// Fetch a single trek by slug
export async function getTrekBySlug(slug: string) {
  try {
    const { data } = await Storyblok.get(`cdn/stories/regions/treks/${slug}`, {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      resolve_relations: 'trek.region',
    });
    return data.story;
  } catch {
    // Silently fail - fallback system will handle it
    return null;
  }
}

// Fetch all regions from Storyblok
export async function getAllRegions() {
  try {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'regions/',
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      filter_query: {
        component: {
          in: 'region',
        },
      },
    });
    return data.stories;
  } catch (error) {
    console.error('Error fetching regions from Storyblok:', error);
    return [];
  }
}

// Fetch a single region by slug
export async function getRegionBySlug(slug: string) {
  try {
    const { data } = await Storyblok.get(`cdn/stories/regions/${slug}`, {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
    return data.story;
  } catch (error) {
    // Only log if it's not a 404 (content not found)
    const err = error as { response?: { status?: number }; message?: string };
    if (err?.response?.status !== 404) {
      console.error(`Error fetching region ${slug} from Storyblok:`, err?.message || error);
    }
    return null;
  }
}

// Fetch treks by region
export async function getTreksByRegion(regionSlug: string) {
  try {
    // First, get all treks
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'regions/treks/',
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
    
    // Then filter client-side because filter_query might not work reliably for text fields
    // The region field in trek content should match the region slug (e.g., "everest")
    const filteredTreks = data.stories.filter((story: { content: { region?: string } }) => {
      const trekRegion = story.content?.region?.toLowerCase();
      const targetRegion = regionSlug.toLowerCase();
      
      // Match if the region field equals the slug, or contains the slug
      return trekRegion === targetRegion || trekRegion?.includes(targetRegion);
    });
    
    console.log(`📊 Region filter: ${regionSlug} -> Found ${filteredTreks.length}/${data.stories.length} treks`);
    return filteredTreks;
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
