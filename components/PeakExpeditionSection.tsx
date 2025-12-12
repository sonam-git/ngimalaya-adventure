'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Flag, Mountain, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SectionHeader from './SectionHeader';

const PeakExpeditionSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedPeak, setSelectedPeak] = useState<typeof peaks[0] | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const peaks = [
    {
      id: 'peak-island',
      name: 'Island Peak (Imja Tse)',
      region: 'Everest',
      duration: '19 Days',
      difficulty: 'Strenuous',
      adventureType: 'peak',
      image: '/assets/images/islandpeak.png',
      description: "Nepal's most popular 6,000m peak, perfect for mountaineering beginners.",
      height: '6,189m',
    },
    {
      id: 'peak-mera',
      name: 'Mera Peak',
      region: 'Everest',
      duration: '18 Days',
      difficulty: 'Strenuous',
      adventureType: 'peak',
      image: '/assets/images/mera.jpg',
      description: "Nepal's highest trekking peak with stunning panoramic views of five 8,000m peaks.",
      height: '6,476m',
    },
    {
      id: 'peak-lobuche',
      name: 'Lobuche East',
      region: 'Everest',
      duration: '20 Days',
      difficulty: 'Challenging',
      adventureType: 'peak',
      image: '/assets/images/peak.png',
      description: 'Technical climbing peak in the Everest region offering spectacular views.',
      height: '6,119m',
    },
  ];

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -width : width, behavior: 'smooth' });
  };

  return (
    <section className={`py-16 md:py-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Peak Expeditions"
          title="Take Your Adventure to New Heights"
        />

        <div className="max-w-6xl mx-auto mb-12">
          <p className={`text-center text-lg max-w-3xl mx-auto mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Perfect for experienced trekkers ready for their next challenge. Our 6,000m+ peak expeditions 
            combine the thrill of mountaineering with comprehensive training and expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-primary-500">
              <Mountain size={20} />
              <span className="font-display font-semibold">Technical Training Included</span>
            </div>
            <div className="flex items-center gap-2 text-primary-500">
              <Flag size={20} />
              <span className="font-display font-semibold">Safety Equipment Provided</span>
            </div>
            <div className="flex items-center gap-2 text-primary-500">
              <Mountain size={20} />
              <span className="font-display font-semibold">Expert Guides</span>
            </div>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="relative block md:hidden mb-12">
          <div className="rounded-2xl border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 shadow-xl p-2 pb-10 relative">
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6">
              {peaks.map((peak) => (
                <div key={peak.id} className="flex-shrink-0 w-80 snap-center">
                  <div
                    className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                      isDarkMode ? 'bg-gray-900' : 'bg-white'
                    } cursor-pointer`}
                    onClick={() => { setSelectedPeak(peak); setShowDetail(true); }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={peak.image}
                        alt={peak.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-display font-bold text-sm shadow-lg">
                          {peak.height}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-display font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {peak.name}
                      </h3>
                      <p className={`mb-4 text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {peak.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-display font-semibold ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {peak.duration}
                        </span>
                      </div>
                    </div>
                  </div>
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
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {peaks.map((peak) => (
            <div
              key={peak.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              } cursor-pointer`}
              onClick={() => { setSelectedPeak(peak); setShowDetail(true); }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={peak.image}
                  alt={peak.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-display font-bold text-sm shadow-lg">
                    {peak.height}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-display font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {peak.name}
                </h3>
                <p className={`mb-4 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {peak.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-display font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {peak.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {showDetail && selectedPeak && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
              <button onClick={() => setShowDetail(false)} className="absolute top-4 right-4 z-10 bg-gray-200 dark:bg-gray-800 rounded-full p-2 hover:bg-primary-500 hover:text-white transition" aria-label="Close">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-primary-500">{selectedPeak.name}</h2>
                <img src={selectedPeak.image} alt={selectedPeak.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-display font-bold text-sm shadow-lg">{selectedPeak.height}</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-display font-semibold text-sm">{selectedPeak.difficulty}</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-display font-semibold text-sm">{selectedPeak.duration}</span>
                </div>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">{selectedPeak.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Region: {selectedPeak.region}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <Link
            href="/peak-expedition"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Peak Expeditions
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PeakExpeditionSection;
