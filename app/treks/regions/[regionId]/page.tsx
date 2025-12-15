'use client';

import { useParams, useRouter } from 'next/navigation';
import RegionTreks from '@/components/RegionTreks';
import { trekRegions, allTreks } from '@/data/treks';
import type { Trek } from '@/data/treks';

export default function RegionTreksPage() {
  const params = useParams();
  const router = useRouter();
  const regionId = params.regionId as string;
  
  const region = trekRegions.find((r) => r.id === regionId);
  const regionTreks = allTreks.filter(trek => {
    return region && trek.region === region.name;
  });

  const handleTrekSelect = (trek: Trek) => {
    router.push(`/treks/${trek.id}`);
  };

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
            <button
              onClick={() => router.push('/treks')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Back to Regions
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <RegionTreks 
        region={region}
        treks={regionTreks}
        onTrekSelect={handleTrekSelect}
      />
    </main>
  );
}
