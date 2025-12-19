import Storyblok from '@/lib/storyblok-api';
import { fetchRegionsWithFallback, fetchTreksWithFallback } from '@/lib/storyblok-fetch-with-fallback';

export const dynamic = 'force-dynamic';

interface StoryblokStory {
  id: string;
  name: string;
  slug: string;
  full_slug: string;
  is_startpage?: boolean;
  content?: {
    component?: string;
    region?: string;
    [key: string]: unknown;
  };
}

export default async function TestStoryblokPage() {
  let regions: StoryblokStory[] = [];
  let treks: StoryblokStory[] = [];
  let allStories: StoryblokStory[] = [];
  let error: string | null = null;
  let fallbackRegions: unknown[] = [];
  let fallbackTreks: unknown[] = [];

  console.log('\n========== STORYBLOK DEBUG TEST ==========');
  console.log('Token configured:', !!process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);

  try {
    // Test fetching all stories
    console.log('\n📚 Fetching all stories...');
    const allResponse = await Storyblok.get('cdn/stories', {
      version: 'draft',
    });
    allStories = allResponse.data.stories;
    console.log(`✅ Found ${allStories.length} total stories`);

    // Test fetching regions (directly in regions/ folder, filtered by component)
    console.log('\n🏔️ Fetching regions...');
    const regionsResponse = await Storyblok.get('cdn/stories', {
      starts_with: 'regions/',
      version: 'draft',
      filter_query: {
        component: {
          in: 'region',
        },
      },
    });
    regions = regionsResponse.data.stories;
    console.log(`✅ Found ${regions.length} regions`);

    // Test fetching treks from regions/treks/ subfolder
    console.log('\n🥾 Fetching treks...');
    const treksResponse = await Storyblok.get('cdn/stories', {
      starts_with: 'regions/treks/',
      version: 'draft',
    });
    treks = treksResponse.data.stories;
    console.log(`✅ Found ${treks.length} treks`);

    // Test the fallback functions (what the app actually uses)
    console.log('\n🔄 Testing fallback functions (what app uses)...');
    fallbackRegions = await fetchRegionsWithFallback();
    fallbackTreks = await fetchTreksWithFallback();
    console.log(`Fallback returned: ${fallbackRegions.length} regions, ${fallbackTreks.length} treks`);
    
  } catch (e) {
    error = e instanceof Error ? e.message : 'Unknown error';
    console.error('❌ Error:', error);
  }

  console.log('========== END DEBUG TEST ==========\n');

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          🔍 Storyblok Debug Page
        </h1>

        {/* Token Status */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
          <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Token Status:</h3>
          <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
            {process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN
              ? `✅ Token configured: ${process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN.substring(0, 10)}...`
              : '❌ No token found in environment'}
          </p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* All Stories */}
        <div className="mb-8 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            📚 All Stories in Space: {allStories.length}
          </h2>
          {allStories.length === 0 ? (
            <p className="text-yellow-700 dark:text-yellow-300">
              ⚠️ No stories found at all. Your Storyblok space might be empty.
            </p>
          ) : (
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Your structure: Region stories directly in regions/ folder (e.g., regions/everest), Trek stories in regions/treks/ subfolder (e.g., regions/treks/everest-base-camp).
              </p>
              <ul className="space-y-2 max-h-64 overflow-y-auto">
                {allStories.map((story) => (
                  <li key={story.id} className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                    <span className="font-semibold text-gray-900 dark:text-white">{story.name}</span>
                    <br />
                    <span className="text-gray-600 dark:text-gray-400">
                      Path: /{story.full_slug} | Type: {story.content?.component || 'unknown'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Regions */}
        <div className="mb-8 bg-green-50 dark:bg-green-900/20 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            🏔️ Regions Found: {regions.length}
          </h2>
          {regions.length === 0 ? (
            <div className="text-yellow-700 dark:text-yellow-300">
              <p className="mb-2">⚠️ No region stories found in "regions/" folder.</p>
              <p className="text-sm mb-2">To fix:</p>
              <ol className="list-decimal ml-5 space-y-1 text-sm">
                <li>Go to Storyblok → Open the "regions" folder</li>
                <li>Click "Create New Entry" directly in regions/ (NOT in a subfolder)</li>
                <li>Select content type "region"</li>
                <li>Fill in: Name (e.g., "Everest"), Slug (e.g., "everest")</li>
                <li>Publish the story</li>
              </ol>
            </div>
          ) : (
            <ul className="space-y-2">
              {regions.map((region) => (
                <li key={region.id} className="bg-green-100 dark:bg-green-900/40 p-3 rounded">
                  <div className="text-gray-900 dark:text-white font-semibold">
                    ✅ {region.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Slug: {region.slug} | Full path: /{region.full_slug}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Treks */}
        <div className="mb-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            🥾 Treks Found: {treks.length}
          </h2>
          {treks.length === 0 ? (
            <div className="text-yellow-700 dark:text-yellow-300">
              <p className="mb-2">⚠️ No trek stories found in "regions/treks/" folder.</p>
              <p className="text-sm mb-2">To fix:</p>
              <ol className="list-decimal ml-5 space-y-1 text-sm">
                <li>Go to Storyblok → Open "regions" folder → Open "treks" subfolder</li>
                <li>Click "Create New Entry" inside the treks subfolder</li>
                <li>Select content type "trek"</li>
                <li>Fill in: Name (e.g., "Everest Base Camp Trek"), Slug (e.g., "everest-base-camp-trek")</li>
                <li><strong>IMPORTANT:</strong> Set "Region" field to match region slug exactly (e.g., "everest")</li>
                <li>Publish the story</li>
              </ol>
            </div>
          ) : (
            <div>
              <ul className="space-y-2 mb-4">
                {treks.map((trek) => (
                  <li key={trek.id} className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
                    <div className="text-gray-900 dark:text-white font-semibold">
                      ✅ {trek.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Slug: {trek.slug} | Full path: /{trek.full_slug}
                      {trek.content?.region ? (
                        <span className="ml-2 text-green-600 dark:text-green-400 font-semibold">
                          | ✓ Region: {trek.content.region}
                        </span>
                      ) : (
                        <span className="ml-2 text-red-600 dark:text-red-400 font-semibold">
                          | ✗ No region set!
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {treks.some(t => !t.content?.region) && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 p-4 rounded">
                  <p className="text-red-800 dark:text-red-200 font-semibold mb-2">
                    ⚠️ Some treks are missing region field!
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Treks without a region field won't appear on any region page. 
                    Edit them in Storyblok and set the "region" field to match a region slug.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Fallback Functions Results */}
        <div className="mb-8 bg-orange-50 dark:bg-orange-900/20 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            🔄 Fallback Function Results (What App Uses)
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Regions: {fallbackRegions.length}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {fallbackRegions.length > 0 
                  ? `✅ App will display ${fallbackRegions.length} regions` 
                  : '⚠️ App will show static fallback data'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Treks: {fallbackTreks.length}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {fallbackTreks.length > 0 
                  ? `✅ App will display ${fallbackTreks.length} treks` 
                  : '⚠️ App will show static fallback data'}
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded">
          <h3 className="text-xl font-bold mb-3 text-purple-900 dark:text-purple-200">
            📖 Next Steps
          </h3>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <p>
              <strong>If you see regions and treks above:</strong> ✅ Your setup is working! 
              Go to <a href="/regions" className="text-blue-600 hover:underline">/regions</a> to see them in action.
            </p>
            <p>
              <strong>If you don't see stories:</strong> Regions go directly in "regions/" folder, treks go in "regions/treks/" subfolder. 
              Make sure stories are published (not draft).
            </p>
            <p>
              <strong>Need help?</strong> Read the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">STORYBLOK_DEBUG_GUIDE.md</code> file 
              for detailed setup instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
