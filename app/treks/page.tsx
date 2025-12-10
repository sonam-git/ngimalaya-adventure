'use client';

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import RegionsExplorer from '@/components/RegionsExplorer'
import Footer from '@/components/Footer'
import type { Region } from '@/data/treks'

export default function TreksPage() {
  const router = useRouter()

  const handleRegionSelect = (region: Region) => {
    router.push(`/treks/regions/${region.id}`)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <RegionsExplorer onRegionSelect={handleRegionSelect} />
      <Footer />
    </main>
  )
}
