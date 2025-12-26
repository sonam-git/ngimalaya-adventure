'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
  Calendar, 
  Mountain, 
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
  Thermometer,
  Flag,
  MapPin
} from 'lucide-react';
import type { PeakExpedition } from '../lib/types';
import { useTheme } from '../contexts/ThemeContext';
import { usePeakTab } from '../contexts/PeakTabContext';
import ContactModal from './ContactModal';
import PeakMapModal from './PeakMapModal';

interface PeakDetailProps {
  peak: PeakExpedition;
}

const PeakDetail: React.FC<PeakDetailProps> = ({ peak }) => {
  const { isDarkMode } = useTheme();
  const { activeTab, setActiveTab } = usePeakTab();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset to overview tab whenever the peak changes
  useEffect(() => {
    setActiveTab('overview');
  }, [peak.id, setActiveTab]);

  // Generate Google Maps embed URL for the peak (no API key needed)
  const getGoogleMapsUrl = () => {
    const query = encodeURIComponent(`${peak.name}, Nepal`);
    return `https://maps.google.com/maps?q=${query}&t=&z=9&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <div className="min-h-screen pt-[55px] xl:pt-[105px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-8">
        {/* Tab Content */}
        <div ref={contentRef} className="w-full">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Hero Section: Image (75%) + Contact Card (25%) */}
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
                  }), url("${peak.image}")`
                }}
              />
              
              {/* Title Overlay at Top */}
              <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent">
                <h1 className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight leading-tight times drop-shadow-2xl">
                  {peak.name}
                </h1>
              </div>

              {/* Peak Overview Overlay at Bottom - Hidden on small screens */}
              <div className="hidden xl:block absolute bottom-0 left-0 right-0 p-4">
                <div className={`${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm rounded-xl p-3 shadow-2xl`}>
                  <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                    <div className="text-center">
                      <Calendar className={`mx-auto mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={18} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
                      <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.duration}</p>
                    </div>
                    <div className="text-center">
                      <Mountain className={`mx-auto mb-1 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={18} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Peak Height</p>
                      <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.height}</p>
                    </div>
                    <div className="text-center">
                      <Flag className={`mx-auto mb-1 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} size={18} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Difficulty</p>
                      <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.difficulty}</p>
                    </div>
                    <div className="text-center">
                      <Thermometer className={`mx-auto mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={18} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Best Season</p>
                      <p className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.season}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card Column - 25% width */}
          <div className="xl:col-span-1">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg sticky top-[100px] xl:top-[120px]`}>
              <div className="text-center mb-6">
                <div 
                  className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                  style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 700 }}
                >
                  {peak.price}
                </div>
                <p 
                  className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
                >
                  per person
                </p>
              </div>

              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
                style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 700 }}
              >
                Inquire Now
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
          </div>
              </div>

              {/* About This Peak */}
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h2 className={`text-2xl jaini-purva-regular font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  About This Peak
                </h2>
                <p className={`text-md leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {peak.overview}
                </p>
              </div>
            </div>
          )}

          {/* Highlights Tab */}
          {activeTab === 'highlights' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Expedition Highlights
              </h2>
              <ul className="space-y-3">
                {peak.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Star className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} size={20} />
                    <span className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Itinerary Tab */}
          {activeTab === 'itinerary' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Detailed Itinerary
              </h2>
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

          {/* Map Tab */}
          {activeTab === 'map' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <MapPin className="mr-3 text-blue-500" size={28} />
                Expedition Route Map
              </h2>
              <div className="space-y-4">
                {/* Interactive Map Button */}
                <div className={`${isDarkMode ? 'bg-blue-900/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-4`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 700 }}>
                        Interactive Expedition Route Map
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`} style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}>
                        View day-by-day expedition route with interactive markers showing all camps and locations
                      </p>
                    </div>
                    <button
                      onClick={() => setIsMapModalOpen(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                      style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 700 }}
                    >
                      <MapPin size={20} />
                      <span>Open Interactive Map</span>
                    </button>
                  </div>
                </div>

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
                    title={`${peak.name} Map`}
                    className="rounded-xl"
                  />
                </div>

                {/* Map Information */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {/* Peak Location Info */}
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-xl p-5`}>
                    <h3 className={`font-bold mb-3 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <MapPin className="mr-2 text-blue-500" size={20} />
                      Location Details
                    </h3>
                    <div className="space-y-2">
                      <p className={`text-sm font-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}>
                        <strong>Peak:</strong> {peak.name}
                      </p>
                      <p className={`text-sm font-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}>
                        <strong>Height:</strong> {peak.height}
                      </p>
                      <p className={`text-sm font-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}>
                        <strong>Duration:</strong> {peak.duration}
                      </p>
                      <p className={`text-sm font-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}>
                        <strong>Difficulty:</strong> {peak.difficulty}
                      </p>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-xl p-5`}>
                    <h3 className={`font-bold mb-3 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <Mountain className="mr-2 text-blue-500" size={20} />
                      Expedition Info
                    </h3>
                    <div className="space-y-2">
                      <p className={`text-sm font-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}>
                        <strong>Best Season:</strong> {peak.season}
                      </p>
                      <p className={`text-sm font-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}>
                        <strong>Accommodation:</strong> {peak.accommodation}
                      </p>
                      <p className={`text-sm font-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}>
                        <strong>Meals:</strong> {peak.meals}
                      </p>
                    </div>
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
                {peak.included.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={20} />
                    <span className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
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
                {peak.excluded.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <XCircle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} size={20} />
                    <span className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
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
                {peak.requirements.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertTriangle className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} size={20} />
                    <span className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Technical Requirements Tab */}
          {activeTab === ' technicalRequirements' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Mountain className="mr-3 text-green-500" size={28} />
                Technical Requirements
              </h2>
              <ul className="space-y-3">
                {peak.technicalRequirements.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Mountain className={`mt-1 flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={20} />
                    <span className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
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
        title={`Inquire About ${peak.name}`}
        subtitle="Get detailed information about this peak expedition"
      />
      <PeakMapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        peak={peak}
      />
    </div>
  );
};

export default PeakDetail;
