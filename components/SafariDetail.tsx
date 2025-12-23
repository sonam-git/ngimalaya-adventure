'use client';
import React, { useState, useRef } from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
  Thermometer,
  Binoculars,
  Trees,
  Camera
} from 'lucide-react';
import type { SafariPackage } from '../lib/types';
import { useTheme } from '../contexts/ThemeContext';
import { useSafariTab } from '../contexts/SafariTabContext';
import ContactModal from './ContactModal';

interface SafariDetailProps {
  safari: SafariPackage;
}

const SafariDetail: React.FC<SafariDetailProps> = ({ safari }) => {
  const { isDarkMode } = useTheme();
  const { activeTab } = useSafariTab();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Generate Google Maps embed URL for the safari
  const getGoogleMapsUrl = () => {
    const query = encodeURIComponent(`${safari.location}, Nepal`);
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=10`;
  };

  return (
    <div className="min-h-screen pt-[55px] md:pt-[105px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Content */}
        <div ref={contentRef} className="w-full">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Hero Section: Image (75%) + Contact Card (25%) */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Image Column - 75% width */}
          <div className="lg:col-span-3">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(${
                    isDarkMode 
                      ? 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)' 
                      : 'rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)'
                  }), url("${safari.image}")`
                }}
              />
              
              {/* Title Overlay at Top */}
              <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight times drop-shadow-2xl">
                  {safari.name}
                </h1>
              </div>

              {/* Safari Overview Overlay at Bottom - Hidden on small screens */}
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-4">
                <div className={`${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm rounded-xl p-3 shadow-2xl`}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center">
                      <Calendar className={`mx-auto mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={18} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
                      <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{safari.duration}</p>
                    </div>
                    <div className="text-center">
                      <MapPin className={`mx-auto mb-1 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={18} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Location</p>
                      <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{safari.location}</p>
                    </div>
                    <div className="text-center">
                      <Binoculars className={`mx-auto mb-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} size={18} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Park Type</p>
                      <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{safari.type}</p>
                    </div>
                    <div className="text-center">
                      <Thermometer className={`mx-auto mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={18} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Best Time</p>
                      <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{safari.bestTime.split('.')[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card Column - 25% width */}
          <div className="lg:col-span-1">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg sticky top-[100px] md:top-[120px]`}>
              <div className="text-center mb-6">
                <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Contact for Price
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>per person</p>
              </div>

              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
              >
                Enquire Now
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className={`font-heading font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Need Help?
                </h4>
                <p className={`font-body text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Contact our safari specialists for personalized advice
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
          </div>
        </div>
              
              {/* About This Safari */}
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h2 className={`text-2xl jaini-purva-regular font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  About This Safari
                </h2>
                <div className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {safari.overview.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Highlights Tab */}
          {activeTab === 'highlights' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Star className="mr-3 text-yellow-500" size={28} />
                Safari Highlights
              </h2>
              <ul className="space-y-3">
                {safari.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Star className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} size={20} />
                    <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Wildlife & Activities Tab */}
          {activeTab === 'wildlife' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h3 className={`text-2xl jaini-purva-regular font-bold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Trees className="mr-3 text-green-500" size={28} />
                  Wildlife to Spot
                </h3>
                <ul className="space-y-3">
                  {safari.wildlife.map((animal, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 text-xl">🦁</span>
                      <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{animal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h3 className={`text-2xl jaini-purva-regular font-bold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Camera className="mr-3 text-blue-500" size={28} />
                  Activities
                </h3>
                <ul className="space-y-3">
                  {safari.activities.map((activity, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                      <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Itinerary Tab */}
          {activeTab === 'itinerary' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Detailed Itinerary
              </h2>
              {safari.itinerary.map((day, index) => (
                <div key={index} className={`pb-6 ${index !== safari.itinerary.length - 1 ? 'border-b border-gray-200 dark:border-gray-700 mb-6' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
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
                      <div className="mb-3">
                        <h4 className={`font-semibold text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Activities:
                        </h4>
                        <ul className="space-y-1">
                          {day.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={14} />
                              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {day.meals && (
                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          🍽️ Meals: {day.meals}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Map Tab */}
          {activeTab === 'map' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Location Map
              </h2>
              <div className="w-full h-[500px] rounded-xl overflow-hidden">
                <iframe
                  src={getGoogleMapsUrl()}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${safari.name}`}
                />
              </div>
              <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                📍 {safari.location}, Nepal
              </p>
            </div>
          )}

          {/* Cost Includes Tab */}
          {activeTab === 'includes' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <CheckCircle className="mr-3 text-green-500" size={28} />
                What's Included
              </h2>
              <ul className="space-y-3">
                {safari.included.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={20} />
                    <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cost Excludes Tab */}
          {activeTab === 'excludes' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <XCircle className="mr-3 text-red-500" size={28} />
                What's Not Included
              </h2>
              <ul className="space-y-3">
                {safari.excluded.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <XCircle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} size={20} />
                    <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Prerequisites Tab */}
          {activeTab === 'requirements' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <AlertTriangle className="mr-3 text-orange-500" size={28} />
                Prerequisites & Requirements
              </h2>
              <ul className="space-y-3">
                {safari.requirements.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertTriangle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} size={20} />
                    <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title={`Enquire About ${safari.name}`}
        subtitle="Get detailed information about this safari adventure"
      />
    </div>
  );
};

export default SafariDetail;
