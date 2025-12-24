'use client';
import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Flag, Mountain } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ContactModal from './ContactModal';
import { useRouter } from 'next/navigation';
import { PeakExpedition } from '@/lib/types';

const PeakExpeditionSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const [peaks, setPeaks] = useState<PeakExpedition[]>([]);
  const [selectedPeak, setSelectedPeak] = useState<PeakExpedition | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fetch peaks from API
  useEffect(() => {
    async function fetchPeaks() {
      try {
        const response = await fetch('/api/peaks');
        if (response.ok) {
          const data = await response.json();
          setPeaks(data);
        }
      } catch (error) {
        console.error('Error fetching peaks:', error);
      }
    }
    fetchPeaks();
  }, []);

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
    <section className="relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-blue-600 dark:border-blue-400/60 py-12 md:py-16">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-2 sm:px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Peak Expeditions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 mx-auto rounded-full"></div>
        </div>
     
        <div className="max-w-6xl mx-auto mb-12">
          <p className={`text-center text-lg max-w-3xl mx-auto mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Perfect for experienced trekkers ready for their next challenge. Our 6,000m+ peak expeditions 
            combine the thrill of mountaineering with comprehensive training and expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-primary-500 dark:text-blue-300">
              <Mountain size={20} />
              <span className="font-display font-semibold">Technical Training Included</span>
            </div>
            <div className="flex items-center gap-2 text-primary-500 dark:text-blue-300">
              <Flag size={20} />
              <span className="font-display font-semibold">Safety Equipment Provided</span>
            </div>
            <div className="flex items-center gap-2 text-primary-500 dark:text-blue-300">
              <Mountain size={20} />
              <span className="font-display font-semibold">Expert Guides</span>
            </div>
          </div>
        </div>

        {/* Unified Slider for All Screen Sizes */}
        <div className="relative mb-12">
          <div className="rounded-2xl border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 shadow-xl p-2 md:p-4 relative">
            <div ref={scrollRef} className="flex gap-3 md:gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-1 md:px-2">
              {peaks.map((peak) => (
                <div key={peak.id} className="flex-shrink-0 w-[85vw] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.5rem)] snap-center">
                  <div
                    className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                      isDarkMode ? 'bg-gray-900' : 'bg-white'
                    } cursor-pointer h-full flex flex-col`}
                    onClick={() => { setSelectedPeak(peak); setShowDetail(true); }}
                  >
                    <div className="relative h-64 md:h-72 overflow-hidden flex-shrink-0">
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
                    <div className="p-6 flex flex-col flex-1 min-h-0">
                      <h3 className={`text-xl font-display font-bold mb-2 flex-shrink-0 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {peak.name}
                      </h3>
                      <div className="flex-1 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {peak.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between flex-shrink-0">
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
          </div>
          {/* Navigation and Explore More */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => scroll('left')}
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 text-white rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              onClick={() => router.push('/peak-expedition')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-display font-bold uppercase tracking-wider text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore More
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 text-white rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Peak Detail Modal - Portal to document body */}
    {mounted && showDetail && selectedPeak && createPortal(
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
          <button onClick={() => setShowDetail(false)} className="absolute top-4 right-4 z-10 bg-gray-200 dark:bg-gray-800 rounded-full p-2 hover:bg-primary-500 hover:text-white transition" aria-label="Close">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 times">{selectedPeak.name}</h2>
            <img src={selectedPeak.image} alt={selectedPeak.name} className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg" />
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-primary-500 text-white px-4 py-2 rounded-full font-display font-bold text-sm shadow-lg">{selectedPeak.height}</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-display font-semibold text-sm">{selectedPeak.difficulty}</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-display font-semibold text-sm">{selectedPeak.duration}</span>
            </div>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{selectedPeak.description}</p>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => {
                  setShowDetail(false);
                  router.push(`/peak-expedition/${selectedPeak.id}`);
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

    {/* Contact Modal - Portal to document body */}
    <ContactModal
      isOpen={isContactModalOpen}
      onClose={() => setIsContactModalOpen(false)}
      title="Enquire About Peak Expedition"
      subtitle="Get detailed information about our peak climbing expeditions"
    />
  </>
  );
};

export default PeakExpeditionSection;
