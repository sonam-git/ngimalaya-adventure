'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Binoculars, Camera, Trees, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SectionHeader from './SectionHeader';
import ContactModal from './ContactModal';
import { useRouter } from 'next/navigation';

const SafariSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const [selectedSafari, setSelectedSafari] = useState<typeof safaris[0] | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const safaris = [
    {
      id: 'chitwan-national-park',
      name: 'Chitwan National Park',
      type: 'UNESCO Site',
      duration: '2-4 Days',
      badge: 'Family Friendly',
      image: '/assets/images/chitawan.jpg',
      description: 'Home to the rare one-horned rhinoceros and Bengal tigers.',
    },
    {
      id: 'bardia-national-park',
      name: 'Bardia National Park',
      type: 'Wild Tiger',
      duration: '3-5 Days',
      badge: 'Adventure',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Nepal\'s largest and most pristine wilderness area with best tiger spotting.',
    },
    {
      id: 'koshi-tappu-reserve',
      name: 'Koshi Tappu Reserve',
      type: 'Bird Paradise',
      duration: '2-3 Days',
      badge: 'Bird Watching',
      image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premier bird watching destination with over 500 species.',
    },
  ];

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -width : width, behavior: 'smooth' });
  };

  return (
    <section className="relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-blue-600 dark:border-blue-400/60 py-12 md:py-16">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <SectionHeader
          subtitle="Safari Adventures"
          title="Discover Nepal's Incredible Wildlife"
        />

        <div className="max-w-6xl mx-auto mb-12">
          <p className={`text-center text-lg max-w-3xl mx-auto mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experience rare animals in their natural habitat with expert naturalist guides. 
            Our safari adventures offer the perfect blend of wildlife encounters and cultural experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-primary-500">
              <Binoculars size={20} />
              <span className="font-display font-semibold">Expert Naturalist Guides</span>
            </div>
            <div className="flex items-center gap-2 text-primary-500">
              <Trees size={20} />
              <span className="font-display font-semibold">Conservation Support</span>
            </div>
            <div className="flex items-center gap-2 text-primary-500">
              <Camera size={20} />
              <span className="font-display font-semibold">Wildlife Photography</span>
            </div>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="relative block md:hidden mb-12">
          <div className="rounded-2xl border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 shadow-xl p-2 pb-10 relative">
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6">
              {safaris.map((safari) => (
                <div key={safari.id} className="flex-shrink-0 w-80 snap-center">
                  <div
                    className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-white'
                    } cursor-pointer`}
                    onClick={() => { setSelectedSafari(safari); setShowDetail(true); }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={safari.image}
                        alt={safari.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-display font-semibold ${
                          isDarkMode ? 'bg-gray-900/80 text-white' : 'bg-white/90 text-gray-900'
                        }`}>
                          {safari.type}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-display font-semibold text-xs shadow-lg">
                          {safari.badge}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-display font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {safari.name}
                      </h3>
                      <p className={`mb-4 text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {safari.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-display font-semibold ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {safari.duration}
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
          {safaris.map((safari) => (
            <div
              key={safari.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } cursor-pointer`}
              onClick={() => { setSelectedSafari(safari); setShowDetail(true); }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={safari.image}
                  alt={safari.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-display font-semibold ${
                    isDarkMode ? 'bg-gray-900/80 text-white' : 'bg-white/90 text-gray-900'
                  }`}>
                    {safari.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-display font-semibold text-xs shadow-lg">
                    {safari.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-display font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {safari.name}
                </h3>
                <p className={`mb-4 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {safari.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-display font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {safari.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {showDetail && selectedSafari && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
              <button onClick={() => setShowDetail(false)} className="absolute top-4 right-4 z-10 bg-gray-200 dark:bg-gray-800 rounded-full p-2 hover:bg-primary-500 hover:text-white transition" aria-label="Close">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-primary-500">{selectedSafari.name}</h2>
                <img src={selectedSafari.image} alt={selectedSafari.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-display font-bold text-sm shadow-lg">{selectedSafari.type}</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-display font-semibold text-sm">{selectedSafari.badge}</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-display font-semibold text-sm">{selectedSafari.duration}</span>
                </div>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">{selectedSafari.description}</p>
                
                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => {
                      setShowDetail(false);
                      router.push(`/safari/${selectedSafari.id}`);
                    }}
                    className="w-full  bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white  py-3 rounded-lg font-display font-semibold uppercase tracking-wider text-sm transition-all duration-300 text-gray-900 dark:text-white"
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
          </div>
        )}

        {/* Contact Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          title="Enquire About Safari Adventure"
          subtitle="Get detailed information about our safari packages"
        />

        <div className="text-center">
          <Link
            href="/safari"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Safari Adventures
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SafariSection;
