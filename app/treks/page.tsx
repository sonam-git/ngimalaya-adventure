'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import RegionsExplorer from '@/components/RegionsExplorer'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import BookingModal from '@/components/BookingModal'
import type { Region } from '@/data/treks'

export default function TreksPage() {
  const router = useRouter()
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleRegionSelect = (region: Region) => {
    router.push(`/treks/regions/${region.id}`)
  }

  const handleBookNow = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <RegionsExplorer onRegionSelect={handleRegionSelect} />
      <Footer />
      <MobileBottomBar onBookNow={handleBookNow} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  )
}
