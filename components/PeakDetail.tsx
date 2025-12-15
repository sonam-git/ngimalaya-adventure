'use client';
import React, { useState } from 'react';
import { 
  Calendar, 
  Mountain, 
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
  Award,
  Thermometer,
  ChevronDown,
  ChevronUp,
  Flag
} from 'lucide-react';
import type { PeakExpedition } from '../data/peakExpeditions';
import { useTheme } from '../contexts/ThemeContext';
import ContactModal from './ContactModal';

interface PeakDetailProps {
  peak: PeakExpedition;
}

const PeakDetail: React.FC<PeakDetailProps> = ({ peak }) => {
  const { isDarkMode } = useTheme();
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-[80px] md:pt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Image and Title */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(${
                isDarkMode 
                  ? 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)' 
                  : 'rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)'
              }), url("${peak.image}")`
            }}
          />
          <div className="absolute inset-0 flex items-end">
            <div className="p-8">
              <h1 className="text-4xl md:text-6xl jaini-purva-regular font-bold text-white mb-4">{peak.name}</h1>
              <div className="flex flex-wrap gap-4">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {peak.difficulty}
                </span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {peak.duration}
                </span>
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {peak.height}
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
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Expedition Overview
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Calendar className={`mx-auto mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.duration}</p>
                </div>
                <div className="text-center">
                  <Mountain className={`mx-auto mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={24} />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Peak Height</p>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.height}</p>
                </div>
                <div className="text-center">
                  <Flag className={`mx-auto mb-2 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} size={24} />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Difficulty</p>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.difficulty}</p>
                </div>
                <div className="text-center">
                  <Thermometer className={`mx-auto mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Best Season</p>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.season}</p>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                About This Expedition
              </h2>
              <div className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {peak.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              <h3 className={`text-xl jaini-purva-regular font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Expedition Highlights
              </h3>
              <ul className="space-y-2">
                {peak.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Star className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} size={16} />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Requirements */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h3 className={`text-xl jaini-purva-regular font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <AlertTriangle className="inline mr-2 text-orange-500" size={24} />
                Technical Requirements
              </h3>
              <ul className="space-y-2">
                {peak.technicalRequirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Mountain className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} size={16} />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Itinerary */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden w-full`}>
              <button
                onClick={() => setIsItineraryOpen(!isItineraryOpen)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <h2 className={`text-2xl jaini-purva-regular font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Detailed Itinerary
                </h2>
                {isItineraryOpen ? (
                  <ChevronUp className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} size={24} />
                ) : (
                  <ChevronDown className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} size={24} />
                )}
              </button>
              
              {isItineraryOpen && (
                <div className="px-6 pb-6">
                  {peak.itinerary.map((day, index) => (
                    <div key={index} className={`pb-6 ${index !== peak.itinerary.length - 1 ? 'border-b border-gray-200 dark:border-gray-700 mb-6' : ''}`}>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                            {day.day}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Day {day.day}: {day.title}
                          </h3>
                          <p className={`mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {day.description}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            {day.altitude && (
                              <span className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <Mountain className="mr-1" size={16} />
                                {day.altitude}
                              </span>
                            )}
                            {day.duration && (
                              <span className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <Clock className="mr-1" size={16} />
                                {day.duration}
                              </span>
                            )}
                            {day.meals && (
                              <span className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                🍽️ {day.meals}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* What's Included, Excluded, Requirements - Full Width Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* What's Included */}
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h3 className={`text-xl jaini-purva-regular font-semibold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <CheckCircle className="mr-2 text-green-500" size={24} />
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {peak.included.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={16} />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h3 className={`text-xl jaini-purva-regular font-semibold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <XCircle className="mr-2 text-red-500" size={24} />
                  What's Not Included
                </h3>
                <ul className="space-y-2">
                  {peak.excluded.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <XCircle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} size={16} />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h3 className={`text-xl jaini-purva-regular font-semibold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <AlertTriangle className="mr-2 text-orange-500" size={24} />
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {peak.requirements.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <AlertTriangle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} size={16} />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg sticky top-24`}>
              <div className="text-center mb-6">
                <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {peak.price}
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>per person</p>
              </div>

              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
              >
                Enquire Now
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className={`font-heading font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Need Help?
                </h4>
                <p className={`font-body text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Contact our expedition specialists for personalized advice
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
              <h4 className={`font-semibold jaini-purva-regular mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
                    Expert Climbing Sherpas
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mountain className="text-blue-500" size={20} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Safety First Approach
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    All Permits Included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title={`Enquire About ${peak.name}`}
        subtitle="Get detailed information about this peak expedition"
      />
    </div>
  );
};

export default PeakDetail;
