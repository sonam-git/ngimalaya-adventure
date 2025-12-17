'use client';
import React, { useState, useRef } from 'react';
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
import type { PeakExpedition } from '../data/peakExpeditions';
import { useTheme } from '../contexts/ThemeContext';
import { usePeakTab } from '../contexts/PeakTabContext';
import ContactModal from './ContactModal';

interface PeakDetailProps {
  peak: PeakExpedition;
}

const PeakDetail: React.FC<PeakDetailProps> = ({ peak }) => {
  const { isDarkMode } = useTheme();
  const { activeTab, setActiveTab } = usePeakTab();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Small delay to ensure content is rendered before scrolling
    setTimeout(() => {
      if (contentRef.current) {
        const headerOffset = 350; // Offset for sticky headers and tabs
        const elementPosition = contentRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Mountain },
    { id: 'highlights', label: 'Highlights', icon: Star },
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'includes', label: 'Cost Includes', icon: CheckCircle },
    { id: 'excludes', label: 'Cost Excludes', icon: XCircle },
    { id: 'requirements', label: 'Prerequisites', icon: AlertTriangle },
  ];

  // Generate Google Maps embed URL for the peak
  const getGoogleMapsUrl = () => {
    const query = encodeURIComponent(`${peak.name}, Nepal`);
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=10`;
  };

  return (
    <div className="min-h-screen pt-[80px] md:pt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* First Row: Image (75%) + Booking Card (25%) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
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
                  }), url("${peak.image}")`
                }}
              />
              
              {/* Title Overlay at Top */}
              <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight times drop-shadow-2xl">
                  {peak.name}
                </h1>
              </div>

              {/* Peak Overview Overlay at Bottom - Hidden on small screens */}
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-4">
                <div className={`${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm rounded-xl p-3 shadow-2xl`}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
          <div className="lg:col-span-1">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg sticky top-[100px] md:top-[120px]`}>
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
          </div>
        </div>

        {/* Tab Navigation - Sticky */}
        <div className="sticky top-[170px] md:top-[180px] z-40 mt-8 mb-6">
          <div className={`${isDarkMode ? 'bg-gray-800/95 border border-gray-700' : 'bg-white/95 border border-gray-200'} rounded-xl shadow-lg overflow-x-auto backdrop-blur-md`}>
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex-shrink-0 px-4 md:px-6 py-3 md:py-4 font-semibold text-xs md:text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 border-b-2 ${
                      activeTab === tab.id
                        ? `${isDarkMode ? 'text-blue-400 border-blue-400 bg-blue-900/20' : 'text-blue-600 border-blue-600 bg-blue-50'}`
                        : `${isDarkMode ? 'text-gray-400 hover:text-gray-200 border-transparent hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 border-transparent hover:bg-gray-100'}`
                    }`}
                  >
                    <IconComponent size={18} />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div ref={contentRef} className="w-full">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Peak Quick Info - Shown on small screens only */}
              <div className="md:hidden mb-6">
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-xl p-4`}>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <Calendar className={`mx-auto mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.duration}</p>
                    </div>
                    <div className="text-center">
                      <Mountain className={`mx-auto mb-1 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={20} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Peak Height</p>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.height}</p>
                    </div>
                    <div className="text-center">
                      <Flag className={`mx-auto mb-1 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} size={20} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Difficulty</p>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.difficulty}</p>
                    </div>
                    <div className="text-center">
                      <Thermometer className={`mx-auto mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Best Season</p>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{peak.season}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overview Content */}
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h2 className={`text-2xl jaini-purva-regular font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  About This Expedition
                </h2>
                <div className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {peak.overview.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
                
                {/* Technical Requirements */}
                <h3 className={`text-xl jaini-purva-regular font-semibold mb-4 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
                    <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{highlight}</span>
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
                  title={`Map of ${peak.name}`}
                />
              </div>
              <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                📍 {peak.name}, Nepal
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
                {peak.included.map((item, index) => (
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
                {peak.excluded.map((item, index) => (
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
                {peak.requirements.map((item, index) => (
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
        title={`Enquire About ${peak.name}`}
        subtitle="Get detailed information about this peak expedition"
      />
    </div>
  );
};

export default PeakDetail;
