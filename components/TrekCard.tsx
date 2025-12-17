'use client';
import React from 'react';
import { Calendar, Mountain, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { Trek } from '../data/treks';

interface TrekCardProps {
  trek: Trek;
  onExplore?: () => void;
}

const TrekCard: React.FC<TrekCardProps> = ({ trek, onExplore }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] transition-all duration-500 hover:-translate-y-2 border-2 ${
      isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-400'
    }`}>
      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 to-transparent pointer-events-none z-10" />
      
      {/* Image with overlay badges */}
      <div className="relative overflow-hidden h-72">
        {/* Image with enhanced hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img 
          src={typeof trek.image === 'string' ? trek.image : ''}
          alt={trek.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {/* Enhanced days badge */}
          <div className="bg-gradient-to-br from-white/95 to-blue-50/95 dark:from-gray-700 dark:to-gray-800 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border-2 border-blue-300/50 dark:border-blue-500/30">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-blue-500/10 rounded-lg">
                <Calendar className="text-blue-600 dark:text-blue-400" size={18} />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                  {trek.duration.split(' ')[0]}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 uppercase font-semibold">Days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Badge - Enhanced styling */}
        {trek.price && trek.price.trim() !== '' && (
          <div className="absolute top-4 right-4 bg-gradient-to-br from-green-500 to-emerald-600 backdrop-blur-md text-white px-5 py-3 rounded-xl shadow-xl border-2 border-white/20 z-20">
            <div className="text-sm font-semibold uppercase tracking-wider opacity-90">From</div>
            <div className="text-2xl font-bold">{trek.price}</div>
          </div>
        )}

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Trek Name Overlay on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-2xl times group-hover:text-blue-300 transition-colors duration-300">
            {trek.name}
          </h3>
          <div className="flex items-center gap-2 text-white/90">
            <Mountain className="text-blue-400" size={18} />
            <span className="font-semibold text-sm">{trek.region || 'Nepal'}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        {/* Decorative top border */}
        <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        {/* Description with icon */}
        <div className={`min-h-[80px] leading-relaxed text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <p className="line-clamp-3">
            {trek.description}
          </p>
        </div>

        {/* Divider */}
        <div className={`h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent`} />

        {/* Trek Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className={`p-3 rounded-lg border ${
            isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">Duration</div>
            <div className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {trek.duration}
            </div>
          </div>
          <div className={`p-3 rounded-lg border ${
            isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">Region</div>
            <div className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {trek.region || 'Nepal'}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button with gradient */}
        <button 
          onClick={onExplore}
          className="relative w-full group/btn overflow-hidden flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 hover:from-blue-700 hover:via-blue-600 hover:to-green-600 text-white px-6 py-4 rounded-xl font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-2xl mt-2"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
          
          <span className="relative z-10">Explore Trek</span>
          <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TrekCard;
