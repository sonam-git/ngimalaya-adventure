'use client';

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TreksSection from '@/components/TreksSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TreksSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
