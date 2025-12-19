'use client';

import { useRouter } from 'next/navigation';
import RegionTreks from '@/components/RegionTreks';
import type { Trek, Region } from '@/data/treks';

interface RegionTreksClientProps {
  region: Region;
  treks: Trek[];
}

export default function RegionTreksClient({ region, treks }: RegionTreksClientProps) {
  const router = useRouter();

  const handleTrekSelect = (trek: Trek) => {
    router.push(`/treks/${trek.id}`);
  };

  return (
    <RegionTreks 
      region={region}
      treks={treks}
      onTrekSelect={handleTrekSelect}
    />
  );
}
