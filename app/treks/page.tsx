'use client';

import { useRouter } from 'next/navigation'
import RegionsExplorer from '@/components/RegionsExplorer'
import type { Region } from '@/data/treks'

export default function TreksPage() {
  const router = useRouter()

  const handleRegionSelect = (region: Region) => {
    router.push(`/treks/regions/${region.id}`)
  }

  return (
    <main className="min-h-screen">
      <RegionsExplorer onRegionSelect={handleRegionSelect} />
    </main>
  )
}
