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
import type { SafariPackage } from '../data/safariPackages';
import { useTheme } from '../contexts/ThemeContext';
import { useSafariTab } from '../contexts/SafariTabContext';
import ContactModal from './ContactModal';

interface SafariDetailProps {
  safari: SafariPackage;
}

const SafariDetail: React.FC<SafariDetailProps> = ({ safari }) => {
  const { isDarkMode } = useTheme();
  const { activeTab, setActiveTab } = useSafariTab();
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
    { id: 'overview', label: 'Overview', icon: Binoculars },
    { id: 'highlights', label: 'Highlights', icon: Star },
    { id: 'wildlife', label: 'Wildlife & Activities', icon: Trees },
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'includes', label: 'Cost Includes', icon: CheckCircle },
    { id: 'excludes', label: 'Cost Excludes', icon: XCircle },
    { id: 'requirements', label: 'Prerequisites', icon: AlertTriangle },
  ];

  // Generate Google Maps embed URL for the safari
  const getGoogleMapsUrl = () => {
    const query = encodeURIComponent(`${safari.location}, Nepal`);
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
                        ? `${isDarkMode ? 'text-green-400 border-green-400 bg-green-900/20' : 'text-green-600 border-green-600 bg-green-50'}`
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
              {/* Safari Quick Info - Shown on small screens only */}
              <div className="md:hidden mb-6">
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-xl p-4`}>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <Calendar className={`mx-auto mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{safari.duration}</p>
                    </div>
                    <div className="text-center">
                      <MapPin className={`mx-auto mb-1 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} size={20} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Location</p>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{safari.location}</p>
                    </div>
                    <div className="text-center">
                      <Binoculars className={`mx-auto mb-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} size={20} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Park Type</p>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{safari.type}</p>
                    </div>
                    <div className="text-center">
                      <Thermometer className={`mx-auto mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Best Time</p>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{safari.bestTime.split('.')[0]}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overview Content */}
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <h2 className={`text-2xl jaini-purva-regular font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  About This Safari
                </h2>
                <div className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {safari.overview.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
                
                {/* Best Time to Visit */}
                <div className={`${isDarkMode ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'} rounded-2xl p-6 mt-6`}>
                  <h3 className={`text-xl jaini-purva-regular font-semibold mb-3 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    <Thermometer className="mr-2 text-blue-500" size={24} />
                    Best Time to Visit
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {safari.bestTime}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Highlights Tab */}
          {activeTab === 'highlights' && (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
              <h2 className={`text-2xl jaini-purva-regular font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
