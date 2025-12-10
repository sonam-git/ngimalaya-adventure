'use client';
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import type { Region, Trek } from '../data/treks';
import TrekCard from './TrekCard';
import CustomTrekModal from './CustomTrekModal';
import ContactModal from './ContactModal';

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
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} pt-20 md:pt-28`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Region Hero */}
        <div className="relative h-80 rounded-2xl overflow-hidden mb-8">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(${
                isDarkMode 
                  ? 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)' 
                  : 'rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)'
              }), url("${region.image}")`
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{region.name}</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
                {region.description}
              </p>
              <div className="mt-6 flex justify-center items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{treks.length}</div>
                  <div className="text-sm opacity-80">Available Treks</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {treks.length > 0 ? 
                      `${Math.min(...treks.map(t => parseInt(t.duration)))} - ${Math.max(...treks.map(t => parseInt(t.duration)))} Days`
                      : 'N/A'
                    }
                  </div>
                  <div className="text-sm opacity-80">Duration Range</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">All Levels</div>
                  <div className="text-sm opacity-80">Difficulty</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treks Section */}
        <div className="mb-8">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Available Treks in {region.name}
          </h2>
          
          {treks.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            What Makes {region.name} Special
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h3 className="text-2xl font-bold mb-4">
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
