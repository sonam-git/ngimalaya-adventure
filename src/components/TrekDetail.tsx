import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Mountain, 
  Users, 
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
  Award,
  Thermometer,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import type { Trek } from '../data/treks';
import { useTheme } from '../contexts/ThemeContext';
import BookingModal from './BookingModal';

interface TrekDetailProps {
  trek: Trek;
  onBack: () => void;
}

const TrekDetail: React.FC<TrekDetailProps> = ({ trek, onBack }) => {
  const { isDarkMode } = useTheme();
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
      case 'moderate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'challenging': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400';
      case 'strenuous': return 'text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} pt-20 md:pt-28`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className={`flex items-center space-x-2 mb-6 text-blue-600 hover:text-blue-800 transition-colors ${
            isDarkMode ? 'text-blue-400 hover:text-blue-300' : ''
          }`}
        >
          <ArrowLeft size={20} />
          <span>Back to Treks</span>
        </button>

        {/* Hero Image and Title */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(${
                isDarkMode 
                  ? 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)' 
                  : 'rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)'
              }), url("${trek.image}")`
            }}
          />
          <div className="absolute inset-0 flex items-end">
            <div className="p-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{trek.name}</h1>
              <div className="flex flex-wrap gap-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getDifficultyColor(trek.difficulty)}`}>
                  {trek.difficulty} Level
                </span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {trek.duration}
                </span>
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {trek.price}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Trek Overview
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Calendar className={`mx-auto mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trek.duration}</p>
                </div>
                <div className="text-center">
                  <Mountain className={`mx-auto mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={24} />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Max Altitude</p>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trek.altitude}</p>
                </div>
                <div className="text-center">
                  <Users className={`mx-auto mb-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} size={24} />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Group Size</p>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trek.groupSize}</p>
                </div>
                <div className="text-center">
                  <Thermometer className={`mx-auto mb-2 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} size={24} />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Best Season</p>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trek.season}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                About This Trek
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {trek.description}
              </p>
              
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Trek Highlights
              </h3>
              <ul className="space-y-2">
                {trek.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Star className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} size={16} />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <button
                onClick={() => setIsItineraryOpen(!isItineraryOpen)}
                className={`w-full flex items-center justify-between text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
              >
                <span>Detailed Itinerary</span>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {isItineraryOpen ? 'Hide' : 'Show'} Details
                  </span>
                  {isItineraryOpen ? (
                    <ChevronUp className="text-blue-600 dark:text-blue-400" size={24} />
                  ) : (
                    <ChevronDown className="text-blue-600 dark:text-blue-400" size={24} />
                  )}
                </div>
              </button>
              
              {isItineraryOpen && (
                <div className="pt-2">
                  <div 
                    className="scrollable-itinerary max-h-[500px] overflow-y-auto pr-2 space-y-4"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#3B82F6 #E5E7EB'
                    }}
                  >
                    {trek.itinerary.map((day, index) => (
                      <div key={index} className={`border-l-4 border-blue-500 pl-6 pb-4 ${
                        index !== trek.itinerary.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
                      }`}>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                            Day {day.day}
                          </span>
                          {day.walkingHours && (
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              <Clock size={14} className="inline mr-1" />
                              {day.walkingHours}
                            </span>
                          )}
                        </div>
                        <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {day.title}
                        </h4>
                        <p className={`mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {day.description}
                        </p>
                        <div className="flex space-x-4 text-sm">
                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                            <strong>Accommodation:</strong> {day.accommodation}
                          </span>
                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                            <strong>Meals:</strong> {day.meals}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Itinerary Summary when collapsed */}
              {!isItineraryOpen && (
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  <p className="mb-2">
                    This {trek.duration.toLowerCase()} trek includes {trek.itinerary.length} days of detailed activities from arrival to departure.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-1 rounded text-xs">
                      {trek.itinerary.length} Days Total
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded text-xs">
                      Max Altitude: {trek.altitude}
                    </span>
                    <span className="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 px-2 py-1 rounded text-xs">
                      {trek.difficulty} Level
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Included/Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h3 className={`text-xl font-bold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <CheckCircle className="mr-2 text-green-500" size={24} />
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {trek.included.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="mt-0.5 text-green-500 flex-shrink-0" size={16} />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h3 className={`text-xl font-bold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <XCircle className="mr-2 text-red-500" size={24} />
                  What's Not Included
                </h3>
                <ul className="space-y-2">
                  {trek.excluded.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <XCircle className="mt-0.5 text-red-500 flex-shrink-0" size={16} />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Requirements */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <AlertTriangle className="mr-2 text-yellow-500" size={24} />
                Requirements & Prerequisites
              </h3>
              <ul className="space-y-2">
                {trek.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <AlertTriangle className="mt-0.5 text-yellow-500 flex-shrink-0" size={16} />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg sticky top-24`}>
              <div className="text-center mb-6">
                <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {trek.price}
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>per person</p>
              </div>

              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
              >
                Book Now
              </button>

              <button className={`w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
                isDarkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' : ''
              }`}>
                Request Custom Quote
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Need Help?
                </h4>
                <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Contact our trek specialists for personalized advice
                </p>
                <div className="space-y-2 text-sm">
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    📞 +977 980-3499156
                  </p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    ✉️ ngiman81@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Why Choose Us?
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="text-yellow-500" size={20} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    20+ Years Experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-500" size={20} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    500+ Happy Trekkers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    100% Safety Record
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        trek={trek}
      />
    </div>
  );
};

export default TrekDetail;
