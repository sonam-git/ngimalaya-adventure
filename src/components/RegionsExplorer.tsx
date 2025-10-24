import React from 'react';
import { Mountain, Map } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { trekRegions } from '../data/treks';
import type { Region } from '../data/treks';
import RegionCard from './RegionCard';

interface RegionsExplorerProps {
  onRegionSelect: (region: Region) => void;
}

const RegionsExplorer: React.FC<RegionsExplorerProps> = ({ onRegionSelect }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Mountain className={`mr-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={32} />
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Explore Trek <span className="text-blue-600">Regions</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover Nepal's diverse trekking regions, each offering unique landscapes, cultures, and adventures. 
            Choose your preferred region to explore available treks.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <Map className={`mx-auto mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={32} />
            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {trekRegions.length}
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Trekking Regions
            </div>
          </div>
          
          <div className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <Mountain className={`mx-auto mb-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={32} />
            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {trekRegions.reduce((total, region) => total + region.trekCount, 0)}+
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Available Treks
            </div>
          </div>
          
          <div className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="text-2xl mb-3">🏔️</div>
            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              8,000m+
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Peak Heights
            </div>
          </div>
        </div>

        {/* Quick Region Navigation */}
        <div className="mb-12">
          <h3 className={`text-center text-xl font-semibold mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Jump to Region
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {trekRegions.map((region) => (
              <button
                key={region.id}
                onClick={() => onRegionSelect(region)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-200 hover:bg-blue-600 hover:text-white border border-gray-700 hover:border-blue-500' 
                    : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white border border-gray-200 hover:border-blue-500 shadow-sm'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trekRegions.map((region) => (
            <div key={region.id} id={`region-${region.id}`}>
              <RegionCard 
                region={region} 
                onSelect={onRegionSelect}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-600 to-cyan-600'} text-white`}>
            <h3 className="text-2xl font-bold mb-4">
              Need Help Choosing?
            </h3>
            <p className={`mb-6 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-blue-100'}`}>
              Not sure which region suits you best? Our trek specialists can recommend the perfect 
              region based on your experience level, time availability, and interests.
            </p>
            <button className={`px-8 py-3 rounded-full font-semibold transition-colors ${
              isDarkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}>
              Contact Trek Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionsExplorer;
