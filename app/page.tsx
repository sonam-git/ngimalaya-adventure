'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TreksSection from '@/components/TreksSection'
import PeakExpeditionSection from '@/components/PeakExpeditionSection'
import SafariSection from '@/components/SafariSection'
import ReviewsSection from '@/components/ReviewsSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'

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
      <Header />
      <Hero 
        onExploreTreks={handleExploreTreks}
        onBookNow={handleBookNow}
      />
      <About />
      <TreksSection />
      <PeakExpeditionSection />
      <SafariSection />
      <ReviewsSection />
      <ServicesSection onBookNow={handleBookNow} />
      <ContactSection />
      <Footer />
      
      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  )
}
