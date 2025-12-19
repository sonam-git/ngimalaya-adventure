import RegionsExplorerClient from '@/app/regions/RegionsExplorerClient';
import { fetchRegionsWithFallback, fetchTreksWithFallback } from '@/lib/storyblok-fetch-with-fallback';

// Enable ISR - revalidate every hour
export const revalidate = 3600;

export default async function RegionsPage() {
  // Fetch regions and treks from Storyblok with fallback
  const regions = await fetchRegionsWithFallback();
  const treks = await fetchTreksWithFallback();

  return (
    <main className="min-h-screen">
      <RegionsExplorerClient regions={regions} treks={treks} />
    </main>
  );
}
