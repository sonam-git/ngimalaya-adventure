import RegionTreksClient from './RegionTreksClient';
import { fetchRegionBySlugWithFallback, fetchTreksByRegionWithFallback } from '@/lib/storyblok-fetch-with-fallback';

// Enable ISR - revalidate every hour
export const revalidate = 3600;

interface RegionTreksPageProps {
  params: Promise<{
    regionId: string;
  }>;
}

export default async function RegionTreksPage({ params }: RegionTreksPageProps) {
  // In Next.js 15+, params is a Promise and needs to be awaited
  const { regionId } = await params;
  
  // Fetch from Storyblok with fallback to static data
  const region = await fetchRegionBySlugWithFallback(regionId);
  const regionTreks = await fetchTreksByRegionWithFallback(regionId);

  if (!region) {
    return (
      <main className="min-h-screen">
        <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Region Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The region you're looking for doesn't exist.
            </p>
            <a
              href="/treks"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Back to Regions
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <RegionTreksClient 
        region={region}
        treks={regionTreks}
      />
    </main>
  );
}
