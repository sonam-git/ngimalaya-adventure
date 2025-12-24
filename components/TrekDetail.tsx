'use client';
import React, { useState, useRef } from 'react';
import { 
  Calendar, 
  Mountain, 
  Users, 
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
  Thermometer,
  ChevronDown,
  ChevronUp,
  MapPin
} from 'lucide-react';
import type { Trek } from '@/lib/types';
import { useTheme } from '../contexts/ThemeContext';
import { useTrekTab } from '../contexts/TrekTabContext';
import { getImageSrc } from '../utils/imageHelpers';
import BookingModal from './BookingModal';
import CustomTrekModal from './CustomTrekModal';
import ContactModal from './ContactModal';

interface TrekDetailProps {
  trek: Trek;
}

const TrekDetail: React.FC<TrekDetailProps> = ({ trek }) => {
  const { isDarkMode } = useTheme();
  const { activeTab } = useTrekTab();
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCustomTrekModalOpen, setIsCustomTrekModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Get Google Maps URL - use custom mapUrl if available, otherwise generate generic map
  const getGoogleMapsUrl = () => {
    // If trek has a custom Google My Maps URL, use it
    if (trek.mapUrl) {
      return trek.mapUrl;
    }
    
    // Fallback: Generate a generic Google Maps search URL
    const query = encodeURIComponent(`${trek.name}, ${trek.region}, Nepal`);
    return `https://maps.google.com/maps?q=${query}&t=&z=9&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <div className="min-h-screen pt-[105px] xl:pt-[145px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-8">
        {/* Tab Content */}
        <div ref={contentRef} className="w-full">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Hero Section: Image (75%) + Booking Card (25%) */}
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                {/* Image Column - 75% width */}
                <div className="xl:col-span-3">
                  <div className="relative h-[500px] rounded-2xl overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `linear-gradient(${
                          isDarkMode 
                            ? 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)' 
                            : 'rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)'
                        }), url("${getImageSrc(trek.image)}")`
                      }}
                    />
                    
                    {/* Title Overlay at Top */}
                    <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent">
                      <h1 className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight leading-tight times drop-shadow-2xl">
                        {trek.name}
                      </h1>
                    </div>

                    {/* Trek Overview Overlay at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className={`${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm rounded-xl p-3 shadow-2xl`}>
                        <div className="grid grid-cols-2 xl:grid-cols-5 gap-3">
                          <div className="text-center">
                            <AlertTriangle className={`mx-auto mb-1 ${
                              trek.difficulty?.toLowerCase() === 'easy' ? 'text-green-400' :
                              trek.difficulty?.toLowerCase() === 'moderate' ? 'text-yellow-400' :
                              trek.difficulty?.toLowerCase() === 'challenging' ? 'text-blue-400' :
                              'text-red-400'
                            }`} size={18} />
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Difficulty</p>
                            <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trek.difficulty || 'Moderate'}</p>
                          </div>
                          <div className="text-center">
                            <Calendar className={`mx-auto mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={18} />
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
                            <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trek.duration}</p>
                          </div>
                          <div className="text-center">
                            <Mountain className={`mx-auto mb-1 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={18} />
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Max Altitude</p>
                            <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trek.altitude}</p>
                          </div>
                          <div className="text-center">
                            <Users className={`mx-auto mb-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} size={18} />
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Group Size</p>
                            <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trek.groupSize}</p>
                          </div>
                          <div className="text-center">
                            <Thermometer className={`mx-auto mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={18} />
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Best Season</p>
                            <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trek.season}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Card Column - 25% width */}
                <div className="xl:col-span-1">
                  <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                    <div className="text-center mb-6">
                      <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {trek.price}
                      </div>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>per person</p>
                    </div>

                    <button 
                      onClick={() => setIsBookingModalOpen(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-gray-100 hover:to-blue-400 hover:text-blue-950 hover:border border-blue-950 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
                    >
                      Book Now
                    </button>

                    <button 
                      onClick={() => setIsCustomTrekModalOpen(true)}
                      className={`w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-heading font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
                        isDarkMode ? 'border-blue-400 text-blue-800 dark:text-white hover:bg-blue-400 hover:text-gray-100' : ''
                      }`}
                    >
                      Request Custom Trek
                    </button>

                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className={`font-heading font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Need Help?
                      </h4>
                      <p className={`font-body text-responsive-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Contact our trek specialists for personalized advice
                      </p>
                      <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="w-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-3 uppercase tracking-wider"
                      >
                        Enquire Now
                      </button>
                      <div className="space-y-2 text-responsive-sm">
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

              {/* About This Trek */}
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h2 className={`text-2xl jaini-purva-regular font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  About This Trek
                </h2>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {trek.description}
                </p>
              </div>
            </div>
          )}

          {/* Highlights Tab */}
          {activeTab === 'highlights' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Trek Highlights
              </h2>
              <ul className="space-y-3">
                {trek.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Star className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} size={20} />
                    <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Itinerary Tab */}
          {activeTab === 'itinerary' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <button
                onClick={() => setIsItineraryOpen(!isItineraryOpen)}
                className="w-full flex items-center justify-between mb-4"
              >
                <h2 className={`text-2xl jaini-purva-regular font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Detailed Itinerary
                </h2>
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
                    style={{ scrollbarWidth: 'thin', scrollbarColor: '#3B82F6 #E5E7EB' }}
                  >
                    {trek.itinerary.map((day, index) => (
                      <div key={index} className={`border-l-4 border-blue-500 pl-6 pb-4 ${index !== trek.itinerary.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}> 
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">Day {day.day}</span>
                          {day.walkingHours && (
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              <Clock size={14} className="inline mr-1" />{day.walkingHours}
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
                    <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-1 rounded text-xs">
                      {trek.difficulty || 'Moderate'} Level
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Map Tab */}
          {activeTab === 'map' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <MapPin className="mr-3 text-blue-500" size={28} />
                Trek Route Map
              </h2>
              <div className="space-y-4">
                {/* Custom Map Notice */}
                {trek.mapUrl && (
                  <div className={`${isDarkMode ? 'bg-blue-900/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'} border rounded-lg p-3 mb-2`}>
                    <p className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center`}>
                      <MapPin className="mr-2 flex-shrink-0" size={16} />
                      <span>This is a custom route map showing the detailed trekking path and key locations.</span>
                    </p>
                  </div>
                )}
                
                {/* Google Maps Embed */}
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-xl overflow-hidden`}>
                  <iframe
                    src={getGoogleMapsUrl()}
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${trek.name} Map`}
                    className="rounded-xl"
                  />
                </div>

                {/* Map Information */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {/* Trek Location Info */}
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-xl p-5`}>
                    <h3 className={`font-bold mb-3 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <MapPin className="mr-2 text-blue-500" size={20} />
                      Location Details
                    </h3>
                    <div className="space-y-2">
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>Region:</strong> {trek.region}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>Max Altitude:</strong> {trek.altitude}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>Trek Duration:</strong> {trek.duration}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>Difficulty:</strong> {trek.difficulty || 'Moderate'}
                      </p>
                    </div>
                  </div>

                  {/* Route Overview */}
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} rounded-xl p-5`}>
                    <h3 className={`font-bold mb-3 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <MapPin className="mr-2 text-green-500" size={20} />
                      Route Overview
                    </h3>
                    <div className="space-y-2">
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>Starting Point:</strong> {trek.itinerary[0]?.title || 'N/A'}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>Ending Point:</strong> {trek.itinerary[trek.itinerary.length - 1]?.title || 'N/A'}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>Total Days:</strong> {trek.itinerary.length}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>Group Size:</strong> {trek.groupSize}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Key Locations on Route */}
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-xl p-5`}>
                  <h3 className={`font-bold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    <MapPin className="mr-2 text-blue-500" size={20} />
                    Key Stops Along the Route
                  </h3>
                  <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-3">
                    {trek.itinerary.map((day, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 mt-0.5">
                          {day.day}
                        </span>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {day.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                {trek.included.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="mt-0.5 text-green-500 flex-shrink-0" size={20} />
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
                {trek.excluded.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <XCircle className="mt-0.5 text-red-500 flex-shrink-0" size={20} />
                    <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <AlertTriangle className="mr-3 text-yellow-500" size={28} />
                Requirements & Prerequisites
              </h2>
              <ul className="space-y-3">
                {trek.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="mt-0.5 text-yellow-500 flex-shrink-0" size={20} />
                    <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        trek={trek}
      />

      {/* Custom Trek Modal */}
      <CustomTrekModal 
        isOpen={isCustomTrekModalOpen}
        onClose={() => setIsCustomTrekModalOpen(false)}
        title="Customize This Trek"
        subtitle={`Create a personalized version of ${trek.name}`}
      />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Enquire About This Trek"
        subtitle={`Get enquiries and advice about ${trek.name}`}
      />
    </div>
  );
};

export default TrekDetail;
