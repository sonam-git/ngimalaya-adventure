'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import RegionsExplorer from '@/components/RegionsExplorer';
import type { Region, Trek } from '@/lib/types';

interface RegionsExplorerClientProps {
  regions: Region[];
  treks: Trek[];
}

export default function RegionsExplorerClient({ regions, treks }: RegionsExplorerClientProps) {
  const router = useRouter();

  // Calculate dynamic trek counts for each region based on actual treks
  const regionsWithCounts = useMemo(() => {
    return regions.map(region => {
      // Count treks that match this region
      const trekCount = treks.filter(trek => {
        const trekRegion = trek.region.toLowerCase();
        const regionId = region.id.toLowerCase();
        // Match if region contains the regionId or they're exactly equal
        return trekRegion === regionId || 
               trekRegion.includes(regionId) ||
               trekRegion.replace(' region', '') === regionId;
      }).length;

      // Also collect trek names for popularTreks
      const regionTreks = treks
        .filter(trek => {
          const trekRegion = trek.region.toLowerCase();
          const regionId = region.id.toLowerCase();
          return trekRegion === regionId || 
                 trekRegion.includes(regionId) ||
                 trekRegion.replace(' region', '') === regionId;
        })
        .map(trek => trek.name);

      return {
        ...region,
        trekCount, // Override with actual count
        popularTreks: regionTreks.length > 0 ? regionTreks.slice(0, 5) : region.popularTreks, // Update with actual trek names
      };
    });
  }, [regions, treks]);

  const handleRegionSelect = (region: Region) => {
    router.push(`/regions/${region.id}`);
  };

  return <RegionsExplorer regions={regionsWithCounts} treks={treks} onRegionSelect={handleRegionSelect} />;
}
