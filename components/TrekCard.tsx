'use client';
import React from 'react';
import { Calendar, Mountain, Users, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { Trek } from '../data/treks';

interface TrekCardProps {
  trek: Trek;
  onExplore?: () => void;
}

const TrekCard: React.FC<TrekCardProps> = ({ trek, onExplore }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      {/* Image with overlay badges */}
      <div className="relative overflow-hidden h-72">
        <img 
          src={typeof trek.image === 'string' ? trek.image.replace('/assets/', '/assets/images/') : ''}
          alt={trek.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-md shadow-lg">
            <div className="flex items-center space-x-2">
              <Users className="text-primary-500" size={18} />
              <div>
                <div className="text-2xl font-bold text-gray-900">05</div>
                <div className="text-xs text-gray-600 uppercase">Guest</div>
              </div>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-md shadow-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="text-primary-500" size={18} />
              <div>
                <div className="text-2xl font-bold text-gray-900">{trek.duration.split(' ')[0]}</div>
                <div className="text-xs text-gray-600 uppercase">Days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-primary-500 text-white px-5 py-3 rounded-md shadow-lg">
          <div className="text-2xl font-bold">{trek.price}</div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-2xl font-display font-bold mb-3 group-hover:text-primary-500 transition-colors ${
          isDarkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          {trek.name}
        </h3>

        <p className={`mb-4 flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <Mountain className="text-primary-500" size={18} />
          <span className="font-semibold">{trek.region || 'Nepal'}</span>
        </p>

        <p className={`mb-6 line-clamp-3 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {trek.description}
        </p>

        {/* CTA Button */}
        <button 
          onClick={onExplore}
          className="w-full group/btn flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>Start Journey</span>
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default TrekCard;
