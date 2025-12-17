'use client';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { popularTreks } from '../data/treks';
import TrekCard from './TrekCard';
import SectionHeader from './SectionHeader';
import TrekDetail from './TrekDetail';

const TreksSection: React.FC = () => {
  const router = useRouter();
  const [selectedTrek, setSelectedTrek] = useState<import('../data/treks').Trek | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Show only top 3 treks on homepage
  const displayTreks = popularTreks.slice(0, 3);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -width : width, behavior: 'smooth' });
  };

  return (
    <section id="treks" className="scroll-offset-mobile relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-blue-600 dark:border-blue-400/60 py-12 md:py-16">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <SectionHeader
          subtitle="Discover"
          title="Most Popular Trekking"
        />

        {/* Mobile Slider */}
        <div className="relative block md:hidden mb-12">
          <div className="rounded-2xl border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 shadow-xl p-2 pb-10 relative">
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6">
              {displayTreks.map((trek) => (
                <div key={trek.id} className="flex-shrink-0 w-80 snap-center">
                  <TrekCard
                    trek={trek}
                    onExplore={() => { setSelectedTrek(trek); setShowDetail(true); }}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll('left')}
              className="absolute left-4 bottom-4 bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-2 hover:bg-primary-500 hover:text-white transition border border-primary-300 dark:border-primary-700 z-20"
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-4 bottom-4 bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-2 hover:bg-primary-500 hover:text-white transition border border-primary-300 dark:border-primary-700 z-20"
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayTreks.map((trek) => (
            <TrekCard
              key={trek.id}
              trek={trek}
              onExplore={() => { setSelectedTrek(trek); setShowDetail(true); }}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => router.push('/treks')}
            className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 text-lg font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            VIEW ALL TREKS
          </button>
        </div>

        {/* Trek Detail Modal */}
        {showDetail && selectedTrek && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
              <button onClick={() => setShowDetail(false)} className="absolute top-4 right-4 z-10 bg-gray-200 dark:bg-gray-800 rounded-full p-2 hover:bg-primary-500 hover:text-white transition" aria-label="Close">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <TrekDetail trek={selectedTrek} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TreksSection;
