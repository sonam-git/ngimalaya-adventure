'use client';
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getImageSrc } from '../utils/imageHelpers';
import type { Region, Trek } from '@/lib/types';
import TrekCard from './TrekCard';
import CustomTrekModal from './CustomTrekModal';
import ContactModal from './ContactModal';
import { Mountain, Clock, TrendingUp } from 'lucide-react';

interface RegionTreksProps {
  region: Region;
  treks: Trek[];
  onTrekSelect: (trek: Trek) => void;
}

const RegionTreks: React.FC<RegionTreksProps> = ({ region, treks, onTrekSelect }) => {
  const { isDarkMode } = useTheme();
  const [isCustomTrekModalOpen, setIsCustomTrekModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-[20px] xl:pt-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-8">
        {/* Region Hero */}
        <div className="relative h-80 rounded-2xl overflow-hidden mb-8">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(${
                isDarkMode 
                  ? 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)' 
                  : 'rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)'
              }), url("${getImageSrc(region.image)}")`
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
            <div className="text-center text-white w-full max-w-5xl">
              {/* Title with consistent sizing */}
              <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl jaini-purva-regular font-bold mb-3 xl:mb-4 drop-shadow-2xl leading-tight px-2">
                {region.name}
              </h1>
              
              {/* Description with line clamp to prevent overflow */}
              <p className="text-base sm:text-lg xl:text-xl 2xl:text-2xl max-w-3xl mx-auto leading-relaxed px-4 mb-4 xl:mb-6 drop-shadow-lg line-clamp-2">
                {region.description}
              </p>
              
              {/* Stats with better responsive behavior */}
              <div 
                className="mt-4 xl:mt-6 inline-flex items-center justify-center gap-3 sm:gap-4 xl:gap-6 bg-black/30 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20 shadow-2xl jaini-purva-regular"
                style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}
              >
                {/* Available Treks */}
                <div className="text-center min-w-[70px] sm:min-w-[80px]">
                  <div className="flex items-center justify-center mb-1">
                    <Mountain className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 mr-1 sm:mr-1.5 opacity-90" />
                    <div className="text-xl sm:text-2xl xl:text-3xl font-bold drop-shadow-lg" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>{treks.length}</div>
                  </div>
                  <div className="text-[10px] sm:text-xs xl:text-sm opacity-90 uppercase tracking-wider font-semibold" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>Treks</div>
                </div>
                
                {/* Divider */}
                <div className="w-px h-10 sm:h-12 bg-white/30"></div>
                
                {/* Duration Range */}
                <div className="text-center min-w-[90px] sm:min-w-[110px] xl:min-w-[130px]">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 mr-1 sm:mr-1.5 opacity-90" />
                    <div className="text-lg sm:text-xl xl:text-2xl font-bold drop-shadow-lg whitespace-nowrap" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>
                      {treks.length > 0 ? (() => {
                        const minDuration = Math.min(...treks.map(t => parseInt(t.duration)));
                        const maxDuration = Math.max(...treks.map(t => parseInt(t.duration)));
                        return minDuration === maxDuration 
                          ? `Up to ${maxDuration}` 
                          : `${minDuration}-${maxDuration}`;
                      })() : 'N/A'}
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs xl:text-sm opacity-90 uppercase tracking-wider font-semibold" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>
                    {treks.length > 0 && Math.min(...treks.map(t => parseInt(t.duration))) === Math.max(...treks.map(t => parseInt(t.duration))) ? 'Days' : 'Days'}
                  </div>
                </div>
                
                {/* Divider */}
                <div className="w-px h-10 sm:h-12 bg-white/30"></div>
                
                {/* Difficulty */}
                <div className="text-center min-w-[70px] sm:min-w-[90px]">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 mr-1 sm:mr-1.5 opacity-90" />
                    <div className="text-xl sm:text-2xl xl:text-3xl font-bold drop-shadow-lg" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>All</div>
                  </div>
                  <div className="text-[10px] sm:text-xs xl:text-sm opacity-90 uppercase tracking-wider font-semibold" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>Levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treks Section */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className={`text-3xl jaini-purva-regular font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Popular Treks
            </h2>
            <span className={`text-lg font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {treks.length} {treks.length === 1 ? 'Trek' : 'Treks'} Available
            </span>
          </div>

          {/* Trek Names List */}
          {treks.length > 0 && (
            <div className={`mb-6 p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
              <p className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Treks in this region:
              </p>
              <div className="flex flex-wrap gap-2">
                {treks.map((trek, index) => (
                  <span 
                    key={trek.id}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${
                      isDarkMode 
                        ? 'bg-blue-900/30 text-blue-300 border border-blue-700/50' 
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}
                  >
                    {index + 1}. {trek.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {treks.length > 0 ? (
            <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-8">
              {treks.map((trek) => (
                <TrekCard 
                  key={trek.id} 
                  trek={trek} 
                  onExplore={() => onTrekSelect(trek)} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <div className="text-6xl mb-4">🏔️</div>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                More Treks Coming Soon
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                We're working on adding more amazing treks in this region. 
                Contact us for custom trek options.
              </p>
              <button 
                onClick={() => setIsCustomTrekModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-heading font-semibold transition-colors"
              >
                Request Custom Trek
              </button>
            </div>
          )}
        </div>

        {/* Region Features */}
        <div className={`rounded-2xl p-8 mb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-2xl jaini-purva-regular font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            What Makes {region.name} Special
          </h3>
          <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            <div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Unique Landscapes
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Experience diverse terrain from lush valleys to high alpine environments
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Rich Culture
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Immerse yourself in local traditions and authentic mountain communities
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Stunning Views
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Witness breathtaking mountain panoramas and pristine natural beauty
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-600 to-cyan-600'} text-white`}>
            <h3 className="text-2xl jaini-purva-regular font-bold mb-4">
              Ready to Explore {region.name}?
            </h3>
            <p className={`mb-6 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-blue-100'}`}>
              Choose from our carefully curated treks or let us create a custom itinerary 
              just for you. Every adventure is tailored to your experience and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsCustomTrekModalOpen(true)}
                className={`px-8 py-3 rounded-full font-heading font-semibold transition-colors ${
                  isDarkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Plan My Trek
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className={`px-8 py-3 rounded-full font-heading font-semibold border-2 transition-colors ${
                  isDarkMode 
                    ? 'border-gray-400 text-gray-300 hover:bg-gray-700' 
                    : 'border-white text-white hover:bg-white hover:text-blue-600'
                }`}
              >
                Contact Specialist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CustomTrekModal 
        isOpen={isCustomTrekModalOpen}
        onClose={() => setIsCustomTrekModalOpen(false)}
        title="Plan Your Custom Trek"
        subtitle={`Create a personalized itinerary for ${region.name} region`}
      />

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Contact Trek Specialist"
        subtitle={`Get expert advice for trekking in ${region.name}`}
      />
    </div>
  );
};

export default RegionTreks;
