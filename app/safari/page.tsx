'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Binoculars, Footprints, Camera, Bird, Trees, Sun, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import ContactModal from '../../components/ContactModal';
import { SafariPackage } from '@/lib/types';
import Link from 'next/link';

const SafariPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [safaris, setSafaris] = useState<SafariPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fetch safaris from API
  useEffect(() => {
    async function fetchSafaris() {
      try {
        const response = await fetch('/api/safaris');
        if (response.ok) {
          const data = await response.json();
          setSafaris(data);
        }
      } catch (error) {
        console.error('Error fetching safaris:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSafaris();
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < safaris.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex + 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isLargeScreen = window.innerWidth >= 1280; // xl breakpoint
      
      if (isLargeScreen) {
        // On large screens, show 2 cards at a time
        const cardWidth = (container.scrollWidth + 32) / safaris.length; // 32 is gap-8
        container.scrollTo({
          left: cardWidth * index,
          behavior: 'smooth'
        });
      } else {
        // On small screens, show 1 card at a time
        const cardWidth = container.scrollWidth / safaris.length;
        container.scrollTo({
          left: cardWidth * index,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleBookNow = () => {
    setIsContactModalOpen(true);
  };

  const features = [
    {
      icon: Binoculars,
      title: 'Wildlife Spotting',
      description: 'Expert guides help you spot rare and exotic wildlife',
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Capture stunning moments with our photo-focused safaris',
    },
    {
      icon: Bird,
      title: 'Bird Watching',
      description: 'Observe hundreds of bird species in their natural habitat',
    },
    {
      icon: Trees,
      title: 'Nature Walks',
      description: 'Guided walks through pristine forests and grasslands',
    },
  ];

  const activities = [
    'Jeep Safari',
    'Elephant Safari',
    'Canoe Rides',
    'Jungle Walks',
    'Bird Watching',
    'Nature Photography',
    'Cultural Village Tours',
    'Sunset Views',
  ];

  return (
    <>
      <div className={`min-h-screen ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
         <div 
          className="absolute inset-0 bg-cover bg-top-center"
          style={{
            backgroundImage: 'url(/assets/sketch/safari.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Binoculars className="text-primary-500" size={40} />
              <h1 className="text-5xl md:text-6xl jaini-purva-regular font-bold text-white uppercase tracking-wider">
                Safari Adventure
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 font-body mb-6">
              Discover Nepal's incredible wildlife in pristine national parks
            </p>
            <p className="text-lg text-gray-300 font-body max-w-2xl">
              Experience rare animals in their natural habitat with expert naturalist guides. Our safari adventures 
              offer the perfect blend of wildlife encounters, cultural experiences, and conservation support.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-white">
                <Binoculars className="text-primary-500" size={20} />
                <span>Expert Naturalist Guides</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Trees className="text-primary-500" size={20} />
                <span>Conservation Support</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Camera className="text-primary-500" size={20} />
                <span>Wildlife Photography</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safari Packages Slider */}
      <div id="safari-packages" className="py-16 scroll-mt-32 md:scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl jaini-purva-regular font-bold uppercase tracking-wider mb-4">
              Our Safari Packages
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Choose from our exciting safari packages designed to give you the best wildlife experience
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Loading safaris...</p>
            </div>
          ) : safaris.length === 0 ? (
            <div className="text-center py-12">
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>No safaris available at the moment.</p>
            </div>
          ) : (
            <div className="relative">
              {/* Horizontal Slider */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 xl:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {safaris.map((safari) => (
                  <div
                    key={safari.id}
                    className={`flex-none w-full xl:w-[calc(50%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-white'
                    }`}
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
                      <h3 className="text-2xl jaini-purva-regular font-bold mb-3">{safari.name}</h3>
                      <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {safari.description}
                      </p>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="text-primary-500" size={18} />
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {safari.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="text-primary-500" size={18} />
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {safari.duration}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-display font-semibold mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {safari.highlights.map((highlight, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1 rounded-full text-xs font-display ${
                                isDarkMode
                                  ? 'bg-gray-700 text-gray-300'
                                  : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {highlight.split(':')[0]}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Link href={`/safari/${safari.id}`}>
                          <button 
                            className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            View Details
                          </button>
                        </Link>
                        <button
                          className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                          onClick={handleBookNow}
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-8 mt-8">
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    currentIndex === 0
                      ? 'bg-gray-300 cursor-not-allowed opacity-50'
                      : isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  }`}
                  aria-label="Previous safari"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Swipe Indicator */}
                <div className={`text-center px-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className="text-sm font-semibold">
                    {currentIndex + 1} / {safaris.length}
                  </p>
                  <p className="text-xs mt-1 opacity-75">
                    Swipe or click arrows for more
                  </p>
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  disabled={currentIndex === safaris.length - 1}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    currentIndex === safaris.length - 1
                      ? 'bg-gray-300 cursor-not-allowed opacity-50'
                      : isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  }`}
                  aria-label="Next safari"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

  {/* Features Section */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    isDarkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-primary-500'
                      : 'bg-white border-gray-200 hover:border-primary-500'
                  }`}
                >
                  <Icon className="text-primary-500 mb-4" size={32} />
                  <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Activities Section */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Footprints className="mx-auto text-primary-500 mb-4" size={48} />
            <h2 className="text-4xl jaini-purva-regular font-bold uppercase tracking-wider mb-4">
              Safari Activities
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Experience a variety of thrilling activities during your safari adventure
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 hover:border-primary-500'
                    : 'bg-gray-50 border-gray-200 hover:border-primary-500'
                }`}
              >
                <p className="font-display font-semibold text-sm">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Sun className="mx-auto text-primary-500 mb-6" size={48} />
          <h2 className="text-4xl jaini-purva-regular font-bold uppercase tracking-wider mb-4">
            Ready for a Wild Adventure?
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Book your safari today and experience the incredible wildlife and natural beauty of Nepal's national parks.
          </p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
    <ContactModal
      isOpen={isContactModalOpen}
      onClose={() => setIsContactModalOpen(false)}
      title="Enquire About Safari Adventure"
      subtitle="Get detailed information about our wildlife safari packages"
    />
    </>
  );
};

export default SafariPage;
