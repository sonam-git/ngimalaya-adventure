'use client';

import { useState } from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import BookingModal from '@/components/BookingModal'

export default function AboutPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleBookNow = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Footer />
      <MobileBottomBar onBookNow={handleBookNow} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  )
}
