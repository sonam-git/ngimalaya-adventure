'use client';
import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { popularTreks } from '../data/treks';
import TrekCard from './TrekCard';
import SectionHeader from './SectionHeader';
import ContactModal from './ContactModal';

const TreksSection: React.FC = () => {
  const router = useRouter();
  const [selectedTrek, setSelectedTrek] = useState<import('../data/treks').Trek | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Show only top 3 treks on homepage
  const displayTreks = popularTreks.slice(0, 3);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -width : width, behavior: 'smooth' });
  };

  return (
    <>
      <section id="treks" className="scroll-offset-mobile relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-blue-600 dark:border-blue-400/60 py-12 md:py-16">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-2 sm:px-4">
        <SectionHeader
          subtitle="Discover"
          title="Most Popular Trekking"
        />

        {/* Mobile Slider */}
        <div className="relative block md:hidden">
          <div className="rounded-2xl border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 shadow-xl p-2 relative">
            <div ref={scrollRef} className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-1">
              {displayTreks.map((trek) => (
                <div key={trek.id} className="flex-shrink-0 w-[85vw] snap-center">
                  <TrekCard
                    trek={trek}
                    onExplore={() => { setSelectedTrek(trek); setShowDetail(true); }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Navigation and Explore More */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => scroll('left')}
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 text-white rounded-full p-3 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              onClick={() => router.push('/treks')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore More
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 text-white rounded-full p-3 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {displayTreks.map((trek) => (
              <TrekCard
                key={trek.id}
                trek={trek}
                onExplore={() => { setSelectedTrek(trek); setShowDetail(true); }}
              />
            ))}
          </div>
          {/* Desktop Explore More Button */}
          <div className="text-center">
            <button
              onClick={() => router.push('/treks')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 text-lg font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Explore More
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* Trek Detail Modal - Portal to document body */}
      {mounted && showDetail && selectedTrek && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
            <button onClick={() => setShowDetail(false)} className="absolute top-4 right-4 z-10 bg-gray-200 dark:bg-gray-800 rounded-full p-2 hover:bg-primary-500 hover:text-white transition" aria-label="Close">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-primary-500 times">{selectedTrek.name}</h2>
              <img 
                src={typeof selectedTrek.image === 'string' ? selectedTrek.image : ''} 
                alt={selectedTrek.name} 
                className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg" 
              />
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-primary-500 text-white px-4 py-2 rounded-full font-display font-bold text-sm shadow-lg">
                  {selectedTrek.duration}
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-display font-semibold text-sm">
                  {selectedTrek.difficulty}
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-display font-semibold text-sm">
                  {selectedTrek.region}
                </span>
                {selectedTrek.altitude && (
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-display font-semibold text-sm">
                    {selectedTrek.altitude}
                  </span>
                )}
              </div>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedTrek.description}
              </p>
              
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => {
                    setShowDetail(false);
                    router.push(`/treks/${selectedTrek.id}`);
                  }}
                  className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 rounded-lg font-display font-semibold uppercase tracking-wider text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Details
                </button>
                <button 
                  onClick={() => {
                    setShowDetail(false);
                    setIsContactModalOpen(true);
                  }}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Contact Modal - Outside section for portal behavior */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default TreksSection;
