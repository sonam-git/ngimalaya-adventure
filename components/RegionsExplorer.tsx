'use client';
import React, { useState } from 'react';
import { Mountain, Map, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

import type { Region, Trek } from '@/lib/types';
import RegionCard from './RegionCard';
import TrekCard from './TrekCard';
import CustomTrekModal from './CustomTrekModal';
import { useRouter } from 'next/navigation';

interface RegionsExplorerProps {
  regions: Region[];
  treks: Trek[];
  onRegionSelect: (region: Region) => void;
}

const RegionsExplorer: React.FC<RegionsExplorerProps> = ({ regions, treks, onRegionSelect }) => {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRegions, setFilteredRegions] = useState<Region[]>(regions);
  const [filteredTreks, setFilteredTreks] = useState<Trek[]>([]);
  const [isCustomTrekModalOpen, setIsCustomTrekModalOpen] = useState(false);
  const [currentRegionIndex, setCurrentRegionIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Touch/swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  // Number of regions to show at once based on screen size
  const getRegionsPerView = () => {
    if (windowWidth >= 1024) return 3; // lg: 3 cards
    if (windowWidth >= 768) return 2;  // md: 2 cards
    return 1; // sm: 1 card
  };

  const regionsPerView = getRegionsPerView();

  // Update window width on mount and resize
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset index when regions per view changes to avoid out of bounds
  React.useEffect(() => {
    const maxIndex = Math.max(0, filteredRegions.length - regionsPerView);
    if (currentRegionIndex > maxIndex) {
      setCurrentRegionIndex(maxIndex);
    }
  }, [regionsPerView, currentRegionIndex, filteredRegions.length]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredRegions(regions);
      setFilteredTreks([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    
    // Filter regions
    const matchedRegions = regions.filter(region => {
      const regionNameMatch = region.name.toLowerCase().includes(query);
      const popularTrekMatch = region.popularTreks.some(trekName => 
        trekName.toLowerCase().includes(query)
      );
      return regionNameMatch || popularTrekMatch;
    });

    // Filter individual treks
    const matchedTreks = treks.filter(trek => 
      trek.name.toLowerCase().includes(query) ||
      trek.description.toLowerCase().includes(query) ||
      trek.region.toLowerCase().includes(query)
    );

    setFilteredRegions(matchedRegions);
    setFilteredTreks(matchedTreks);
  };

  const handleTrekExplore = (trek: Trek) => {
    // Navigate directly to the trek detail page
    router.push(`/treks/${trek.id}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Navigation functions for region carousel
  const handlePrevRegions = () => {
    setCurrentRegionIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextRegions = () => {
    setCurrentRegionIndex((prev) => 
      Math.min(filteredRegions.length - regionsPerView, prev + 1)
    );
  };

  const canGoPrev = currentRegionIndex > 0;
  const canGoNext = currentRegionIndex < filteredRegions.length - regionsPerView;

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && canGoNext) {
      handleNextRegions();
    }
    if (isRightSwipe && canGoPrev) {
      handlePrevRegions();
    }
  };

  // Get visible regions based on current index
  const visibleRegions = filteredRegions.slice(
    currentRegionIndex, 
    currentRegionIndex + regionsPerView
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-top-center"
          style={{
            backgroundImage: 'url(/assets/sketch/region.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Mountain className="text-primary-500" size={40} />
              <h1 className="text-5xl md:text-6xl jaini-purva-regular font-bold text-white uppercase tracking-wider">
                Trek Regions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 font-body mb-6">
              Discover Nepal's diverse trekking regions and unforgettable adventures
            </p>
            <p className="text-lg text-gray-300 font-body max-w-2xl">
              Explore the majestic Himalayas through our carefully curated trekking regions. 
              Each region offers unique landscapes, rich cultures, and breathtaking mountain views.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-white">
                <Map className="text-primary-500" size={20} />
                <span>{regions.length} Unique Regions</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Mountain className="text-primary-500" size={20} />
                <span>{regions.reduce((total: number, region: Region) => total + region.trekCount, 0)}+ Treks Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl jaini-purva-regular mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Adventure | Region
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Select from our diverse trekking regions to explore available trails
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search by region or trek name..."
                  className={`w-full pl-12 pr-4 py-4 rounded-lg font-body text-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20' 
                      : 'bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'
                  } outline-none`}
                />
              </div>
              <button
                onClick={handleSearch}
                className={`px-8 py-4 rounded-lg font-display font-semibold uppercase transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 ${
                  isDarkMode 
                    ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                    : 'bg-primary-500 hover:bg-primary-600 text-white'
                }`}
              >
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        {searchQuery && (
          <div className="text-center mb-8">
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {filteredRegions.length === 0 && filteredTreks.length === 0 ? (
                <>No results found for "<span className="font-semibold text-primary-500">{searchQuery}</span>"</>
              ) : (
                <>
                  Found{' '}
                  {filteredRegions.length > 0 && (
                    <><span className="font-semibold text-primary-500">{filteredRegions.length}</span> {filteredRegions.length === 1 ? 'region' : 'regions'}</>
                  )}
                  {filteredRegions.length > 0 && filteredTreks.length > 0 && ' and '}
                  {filteredTreks.length > 0 && (
                    <><span className="font-semibold text-primary-500">{filteredTreks.length}</span> {filteredTreks.length === 1 ? 'trek' : 'treks'}</>
                  )}
                  {' '}matching "<span className="font-semibold text-primary-500">{searchQuery}</span>"
                </>
              )}
            </p>
          </div>
        )}

        {/* Regions Section */}
        {filteredRegions.length > 0 && (
          <div className="mb-16">
            {searchQuery && (
              <h3 className={`text-2xl jaini-purva-regular font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Regions ({filteredRegions.length})
              </h3>
            )}
            
            {/* Single Row Region Grid with Overflow */}
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {visibleRegions.map((region) => (
                <RegionCard 
                  key={region.id} 
                  region={region} 
                  onSelect={onRegionSelect}
                />
              ))}
            </div>

            {/* Navigation Controls - Only show if there are more than regionsPerView */}
            {filteredRegions.length > regionsPerView && (
              <div className="flex justify-center items-center gap-3 md:gap-4 mt-8">
                {/* Previous Button */}
                <button
                  onClick={handlePrevRegions}
                  disabled={!canGoPrev}
                  className={`p-2 md:p-3 rounded-lg font-display font-semibold transition-all duration-300 flex items-center gap-1 md:gap-2 text-sm md:text-base ${
                    canGoPrev
                      ? isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-700 hover:border-primary-500' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-primary-500 shadow-md'
                      : isDarkMode
                        ? 'bg-gray-900 text-gray-600 border-2 border-gray-800 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                  }`}
                  aria-label="Previous regions"
                >
                  <ChevronLeft size={20} className="md:w-6 md:h-6" />
                  <span className="hidden sm:inline">Prev</span>
                </button>

                {/* Page Indicator */}
                <div className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
                  <span className="font-semibold">
                    {currentRegionIndex + 1}-{Math.min(currentRegionIndex + regionsPerView, filteredRegions.length)}
                  </span>
                  <span className={`mx-1 md:mx-2 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>of</span>
                  <span className="font-semibold">{filteredRegions.length}</span>
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNextRegions}
                  disabled={!canGoNext}
                  className={`p-2 md:p-3 rounded-lg font-display font-semibold transition-all duration-300 flex items-center gap-1 md:gap-2 text-sm md:text-base ${
                    canGoNext
                      ? isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-700 hover:border-primary-500' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-primary-500 shadow-md'
                      : isDarkMode
                        ? 'bg-gray-900 text-gray-600 border-2 border-gray-800 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                  }`}
                  aria-label="Next regions"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={20} className="md:w-6 md:h-6" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Treks Section */}
        {filteredTreks.length > 0 && (
          <div className="mb-16">
            {searchQuery && (
              <h3 className={`text-2xl jaini-purva-regular font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Treks ({filteredTreks.length})
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredTreks.map((trek) => (
                <TrekCard 
                  key={trek.id} 
                  trek={trek}
                  onExplore={() => handleTrekExplore(trek)}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Results Message */}
        {filteredRegions.length === 0 && filteredTreks.length === 0 && searchQuery && (
          <div className="text-center py-16">
            <Mountain className={`mx-auto mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} size={64} />
            <h3 className={`text-2xl jaini-purva-regular font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              No Results Found
            </h3>
            <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Try adjusting your search or browse all regions below
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilteredRegions(regions);
                setFilteredTreks([]);
              }}
              className={`px-6 py-3 rounded-lg font-display font-semibold uppercase transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              }`}
            >
              Clear Search
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-primary-500 to-primary-600'} text-white`}>
            <h3 className="text-xl md:text-2xl lg:text-3xl jaini-purva-regular mb-4">
              Need Help Choosing?
            </h3>
            <p className={`mb-6 max-w-2xl mx-auto font-body ${isDarkMode ? 'text-gray-300' : 'text-white/90'}`}>
              Not sure which region suits you best? Our trek specialists can recommend the perfect 
              region based on your experience level, time availability, and interests.
            </p>
            <button 
              onClick={() => setIsCustomTrekModalOpen(true)}
              className={`px-8 py-3 rounded-lg font-display font-semibold uppercase transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                  : 'bg-white text-primary-600 hover:bg-gray-50 shadow-lg'
              }`}
            >
              Contact Trek Specialist
            </button>
          </div>
        </div>
      </div>

      {/* Custom Trek Modal */}
      <CustomTrekModal
        isOpen={isCustomTrekModalOpen}
        onClose={() => setIsCustomTrekModalOpen(false)}
      />
    </div>
  );
};

export default RegionsExplorer;
