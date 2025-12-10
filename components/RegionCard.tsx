'use client';
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { Region } from '../data/treks';
import { getImageSrc } from '../utils/imageHelpers';


interface RegionCardProps {
  region: Region;
  onSelect: (region: Region) => void;
}

const RegionCard: React.FC<RegionCardProps> = ({ region, onSelect }) => {
  const { isDarkMode } = useTheme();

  return (
    <div 
      className={`group relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
      onClick={() => onSelect(region)}
    >
      {/* Background Image */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={getImageSrc(region.image)}
          alt={region.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Trek Count Badge */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {region.trekCount} Trek{region.trekCount !== 1 ? 's' : ''}
        </div>

        {/* Region Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">{region.name}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin size={14} className="mr-1" />
            <span>Nepal Himalayas</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className={`text-gray-600 mb-4 line-clamp-3 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
          {region.description}
        </p>

        {/* Popular Treks */}
        <div className="mb-6">
          <h4 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Popular Treks:
          </h4>
          <div className="space-y-1">
            {region.popularTreks.slice(0, 2).map((trek, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{trek}</span>
              </div>
            ))}
            {region.popularTreks.length > 2 && (
              <div className="text-sm text-blue-600 font-medium">
                +{region.popularTreks.length - 2} more treks
              </div>
            )}
          </div>
        </div>

        {/* Explore Button */}
        <button className="group/btn w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <span>Explore {region.name}</span>
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default RegionCard;
