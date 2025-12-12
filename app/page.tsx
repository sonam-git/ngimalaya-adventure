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
        />
        {/* Overlay SearchTrekking below Hero buttons with more gap */}
        <div className="absolute left-0 right-0 w-full flex justify-center z-30" style={{ top: 'calc(60vh + 200px)' }}>
          <div className="w-full max-w-4xl px-2">
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
