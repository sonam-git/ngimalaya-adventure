'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TreksSection from '@/components/TreksSection'
import PeakExpeditionSection from '@/components/PeakExpeditionSection'
import SafariSection from '@/components/SafariSection'
import ReviewsSection from '@/components/ReviewsSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import BookingModal from '@/components/BookingModal'
import SearchTrekking from '@/components/SearchTrekking'

export default function HomePage() {
  const router = useRouter()
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleExploreTreks = () => {
    router.push('/treks')
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
          searchComponent={<SearchTrekking />}
        />
        {/* Overlay SearchTrekking - visible only on desktop, aligned with bottom of slideshow */}
        <div className="hidden md:flex absolute left-0 right-0 w-full z-30 items-end justify-center md:top-28 md:bottom-[200px] lg:bottom-[240px]">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20 pb-6">
            <SearchTrekking />
          </div>
        </div>
      </div>
      <About showFull={false} />
      <TreksSection />
      <PeakExpeditionSection />
      <SafariSection />
      <ReviewsSection />
      <ServicesSection onBookNow={handleBookNow} />
      <ContactSection />
      
      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  )
}
