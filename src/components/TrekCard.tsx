import React from 'react';
import { Calendar, Mountain, Users, Star, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { Trek } from '../data/treks';

interface TrekCardProps {
  trek: Trek;
  onExplore?: () => void;
}

const TrekCard: React.FC<TrekCardProps> = ({ trek, onExplore }) => {
  const { isDarkMode } = useTheme();
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-orange-100 text-orange-800';
      case 'Strenuous': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={trek.image}
          alt={trek.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(trek.difficulty)}`}>
            {trek.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-500 fill-current" size={14} />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors ${
          isDarkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          {trek.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {trek.description}
        </p>

        {/* Trek Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar size={16} className="text-blue-600" />
            <span>{trek.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Mountain size={16} className="text-blue-600" />
            <span>{trek.altitude}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users size={16} className="text-blue-600" />
            <span>{trek.groupSize}</span>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Season:</span> {trek.season}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div>
            <span className="text-2xl font-bold text-blue-600">{trek.price}</span>
            <span className={`text-sm ml-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>per person</span>
          </div>
          <button 
            onClick={onExplore}
            className="group/btn flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-300"
          >
            <span>Explore</span>
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrekCard;
