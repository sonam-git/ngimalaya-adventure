'use client';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TreksSection from '@/components/TreksSection'
import PeakExpeditionSection from '@/components/PeakExpeditionSection'
import SafariSection from '@/components/SafariSection'
import GallerySection from '@/components/GallerySection'
import ReviewsSection from '@/components/ReviewsSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import BookingModal from '@/components/BookingModal'
import SearchTrekking from '@/components/SearchTrekking'
import { Trek } from '@/lib/types'

export default function HomePage() {
  const router = useRouter()
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [treks, setTreks] = useState<Trek[]>([])

  // Fetch treks on mount
  useEffect(() => {
    async function fetchTreks() {
      try {
        const response = await fetch('/api/treks')
        if (response.ok) {
          const data = await response.json()
          setTreks(data)
        }
      } catch (error) {
        console.error('Error fetching treks:', error)
      }
    }
    fetchTreks()
  }, [])

  const handleExploreTreks = () => {
    router.push('/regions')
  }

  const handleBookNow = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <div className="relative">
        <Hero 
          onExploreTreks={handleExploreTreks}
          onBookNow={handleBookNow}
          searchComponent={<SearchTrekking treks={treks} />}
        />
        {/* Overlay SearchTrekking - visible only on desktop, aligned with bottom of slideshow */}
        <div className="hidden md:flex absolute left-0 right-0 w-full z-30 items-end justify-center md:top-28 md:bottom-[200px] lg:bottom-[240px]">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20 pb-6">
            <SearchTrekking treks={treks} />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-6 lg:px-8 space-y-8 md:space-y-12 py-8">
        <About showFull={false} />
        <TreksSection />
        <PeakExpeditionSection />
        <SafariSection />
        <GallerySection />
        <ReviewsSection />
        <ServicesSection onBookNow={handleBookNow} />
        <ContactSection />
      </div>
      
      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  )
}
