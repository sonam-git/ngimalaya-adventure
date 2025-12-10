import React, { useState } from 'react';
import { CheckCircle, MapPin, Shield, Users, Clock, Star, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { services } from '../data/treks';
import CustomTrekModal from './CustomTrekModal';
import lobucheImage from '../assets/images/peak.png';
import IslandPeakImage from '../assets/images/islandpeak.png';
import meraImage from '../assets/images/mera.jpg';
import chitawanImage from '../assets/images/chitawan.jpg';

const ServicesSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isCustomTrekModalOpen, setIsCustomTrekModalOpen] = useState(false);
  
  // Function to handle email enquiry
  const handleEnquireNow = (peakName: string) => {
    const email = 'ngiman81@gmail.com';
    const subject = `Enquiry for ${peakName} Expedition`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, '_blank');
  };
  const features = [
    {
      icon: <Shield className="text-blue-600" size={24} />,
      title: "Safety First",
      description: "Experienced guides, proper equipment, and comprehensive safety protocols"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Small Groups",
      description: "Intimate group sizes for personalized attention and better experiences"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Local Expertise",
      description: "Deep knowledge of local culture, terrain, and hidden gems"
    },
    {
      icon: <Clock className="text-purple-600" size={24} />,
      title: "Flexible Scheduling",
      description: "Customizable itineraries to match your timeline and preferences"
    }
  ];

  const whyChooseUs = [
    "Over 20 years of trekking experience",
    "Multilingual guides (6 languages)",
    "Sustainable and responsible tourism",
    "24/7 support during your journey",
    "All necessary permits and documentation",
    "Quality accommodation and meals",
    "Emergency evacuation insurance",
    "Cultural immersion experiences"
  ];

  return (
    <section id="services" className={`scroll-offset-mobile py-12 md:py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className={`font-heading text-responsive-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Our <span className="text-blue-600">Services</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className={`font-body text-responsive-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive adventure services designed to make your Himalayan dreams come true
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`font-heading text-lg font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <button
                  onClick={() => handleEnquireNow(service.title)}
                  className="w-full bg-green-600 hover:bg-white hover:text-green-600 text-white hover:border-green-600 border-2 border-green-600 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail size={14} />
                  <span>Enquire Now</span>
                </button>
              </div>
            ))}
          </div>

                 {/* Mountaineering Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                <span className="text-blue-600">Peak</span> Expeditions
              </h3>
              <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Take your adventure to new heights with our 6,000m+ peak expeditions. 
                Perfect for experienced trekkers ready for their next challenge.
              </p>
            </div>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-green-900/40 text-green-300' : 'bg-green-100 text-green-700'}`}>
                  <CheckCircle size={16} />
                  <span>Technical Training Included</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                  <Shield size={16} />
                  <span>Safety Equipment Provided</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-purple-900/40 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                  <Star size={16} />
                  <span>Expert Guides</span>
                </div>
              </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Island Peak */}
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="relative h-48">
                  <img 
                    src={IslandPeakImage}
                    alt="Island Peak"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    6,165m
                  </div>
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Island Peak (Imja Tse)
                  </h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    Nepal's most popular 6,000m peak, perfect for mountaineering beginners. 
                    Combines Everest Base Camp trek with technical climbing.
                  </p>
                  
                  {/* Key Facts */}
                  <div className={`mb-4 p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <h5 className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Key Facts</h5>
                    <div className="space-y-1 text-xs">
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Max. Altitude:</span>
                        <span className="font-semibold">6,165 m</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Trip Duration:</span>
                        <span className="font-semibold">19 days</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Trek Grade:</span>
                        <span className="font-semibold">Strenuous Plus</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Accommodation:</span>
                        <span className="font-semibold">Teahouse</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Meals:</span>
                        <span className="font-semibold">B, L & D</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Transport:</span>
                        <span className="font-semibold">Car/Van/Plane</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Per day Hiking:</span>
                        <span className="font-semibold">5-7 hours</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Best Time:</span>
                        <span className="font-semibold text-xs">Feb-May, Oct-Dec</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleEnquireNow('Island Peak (Imja Tse)')}
                    className="w-full bg-green-600 hover:bg-white hover:text-green-600 text-white hover:border-green-600 border-2 border-green-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail size={16} />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>

              {/* Mera Peak */}
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="relative h-48">
                  <img 
                    src={meraImage}
                    alt="Mera Peak"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    6,476m
                  </div>
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Mera Peak
                  </h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    Nepal's highest trekking peak with stunning panoramic views of 
                    five 8,000m peaks including Everest, Lhotse, and Cho Oyu.
                  </p>
                  
                  {/* Key Facts */}
                  <div className={`mb-4 p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <h5 className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Key Facts</h5>
                    <div className="space-y-1 text-xs">
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Max. Altitude:</span>
                        <span className="font-semibold">6,476 m</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Trip Duration:</span>
                        <span className="font-semibold">18 days</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Trek Grade:</span>
                        <span className="font-semibold">Strenuous Plus</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Accommodation:</span>
                        <span className="font-semibold">Teahouse</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Meals:</span>
                        <span className="font-semibold">B, L & D</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Transport:</span>
                        <span className="font-semibold">Car/Van/Plane</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Per day Hiking:</span>
                        <span className="font-semibold">5-7 hours</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Best Time:</span>
                        <span className="font-semibold text-xs">Jan-May, Oct-Dec</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleEnquireNow('Mera Peak')}
                    className="w-full bg-green-600 hover:bg-white hover:text-green-600 text-white hover:border-green-600 border-2 border-green-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail size={16} />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>

              {/* Lobuche East */}
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="relative h-48">
                  <img 
                    src={lobucheImage}
                    alt="Lobuche East"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    6,119m
                  </div>
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Lobuche East
                  </h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    Technical climbing peak in the Everest region offering spectacular 
                    views and excellent preparation for higher peaks.
                  </p>
                  
                  {/* Key Facts */}
                  <div className={`mb-4 p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <h5 className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Key Facts</h5>
                    <div className="space-y-1 text-xs">
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Max. Altitude:</span>
                        <span className="font-semibold">6,119 m</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Trip Duration:</span>
                        <span className="font-semibold">20 days</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Trek Grade:</span>
                        <span className="font-semibold">Strenuous Plus</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Accommodation:</span>
                        <span className="font-semibold">Teahouse</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Meals:</span>
                        <span className="font-semibold">B, L & D</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Transport:</span>
                        <span className="font-semibold">Car/Van/Plane</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Per day Hiking:</span>
                        <span className="font-semibold">5-7 hours</span>
                      </div>
                      <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Best Time:</span>
                        <span className="font-semibold text-xs">Jan-May, Oct-Dec</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleEnquireNow('Lobuche East')}
                    className="w-full bg-green-600 hover:bg-white hover:text-green-600 text-white hover:border-green-600 border-2 border-green-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail size={16} />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            </div>

     {/* Safari Adventures Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                <span className="text-green-600">Safari</span> Adventures
              </h3>
              <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Discover Nepal's incredible wildlife in pristine national parks and conservation areas. 
                Experience rare animals in their natural habitat with expert naturalist guides.
              </p>
            </div>

               <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-green-900/40 text-green-300' : 'bg-green-100 text-green-700'}`}>
                  <CheckCircle size={16} />
                  <span>Expert Naturalist Guides</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-teal-900/40 text-teal-300' : 'bg-teal-100 text-teal-700'}`}>
                  <Shield size={16} />
                  <span>Conservation Support</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-orange-900/40 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>
                  <Star size={16} />
                  <span>Wildlife Photography</span>
                </div>
              </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Chitwan National Park */}
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="relative h-48">
                  <img 
                    src={chitawanImage }
                    alt="Chitwan National Park"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    UNESCO Site
                  </div>
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Chitwan National Park
                  </h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    Home to the rare one-horned rhinoceros and Bengal tigers. 
                    Experience jungle safaris, canoe rides, and cultural programs.
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Clock size={16} className="mr-2 text-green-600" />
                      <span>2-4 days</span>
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Star size={16} className="mr-2 text-yellow-500" />
                      <span>Family Friendly</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleEnquireNow('Chitwan National Park Safari')}
                    className="w-full bg-green-600 hover:bg-white hover:text-green-600 text-white hover:border-green-600 border-2 border-green-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail size={16} />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>

              {/* Bardia National Park */}
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Bardia National Park"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Wild Tiger
                  </div>
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Bardia National Park
                  </h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    Nepal's largest and most pristine wilderness area. 
                    Best chances to spot wild tigers, elephants, and dolphins.
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Clock size={16} className="mr-2 text-orange-600" />
                      <span>3-5 days</span>
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Star size={16} className="mr-2 text-yellow-500" />
                      <span>Adventure</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleEnquireNow('Bardia National Park Safari')}
                    className="w-full bg-green-600 hover:bg-white hover:text-green-600 text-white hover:border-green-600 border-2 border-green-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail size={16} />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>

              {/* Koshi Tappu */}
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Koshi Tappu"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Bird Paradise
                  </div>
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Koshi Tappu Reserve
                  </h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    Premier bird watching destination with over 500 species. 
                    Perfect for wildlife photography and nature enthusiasts.
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Clock size={16} className="mr-2 text-blue-600" />
                      <span>2-3 days</span>
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Star size={16} className="mr-2 text-yellow-500" />
                      <span>Bird Watching</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleEnquireNow('Koshi Tappu Wildlife Reserve Safari')}
                    className="w-full bg-green-600 hover:bg-white hover:text-green-600 text-white hover:border-green-600 border-2 border-green-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail size={16} />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            </div>

          {/* Features Section: what makes us different */}
          <div className="mb-20">
            <h3 className={`text-3xl font-bold text-center ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-12`}>
              What Makes Us <span className="text-blue-600">Different</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {feature.icon}
                    <h4 className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {feature.title}
                    </h4>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Trekking in Nepal"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500 fill-current" size={20} />
                  <div>
                    <div className="font-bold text-lg dark:text-gray-400">4.9/5</div>
                    <div className="text-xs text-gray-600">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Why Choose Ngimalaya Adventure?
              </h3>
              
              <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                With over two decades of experience and a deep commitment to sustainable tourism, 
                we offer more than just trekking – we provide transformative experiences that 
                connect you with the heart of Nepal's culture and landscapes.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

   

     

          {/* Custom Planning CTA Section - Full Width */}
          <div className={`p-8 rounded-2xl border-2 border-dashed transition-all duration-300 ${
            isDarkMode 
              ? 'border-blue-400/30 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 hover:border-blue-400/50' 
              : 'border-blue-300/50 bg-gradient-to-br from-blue-50 to-indigo-50 hover:border-blue-400/70'
          }`}>
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="relative inline-block">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'
                    } mx-auto`}>
                      <Clock className="text-blue-600" size={32} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-yellow-900">!</span>
                    </div>
                  </div>

                  {/* Heading */}
                  <div>
                    <h4 className={`text-2xl font-bold mb-3 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Can't Find the Perfect Trek Duration?
                    </h4>
                    <p className={`text-lg leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Don't worry! We specialize in creating <span className="font-semibold text-blue-600">custom itineraries</span> that 
                      fit your exact schedule. Whether you have 3 days or 30 days, we'll craft the perfect adventure for you.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'
                    }`}>
                      <CheckCircle size={16} />
                      <span>Custom Duration</span>
                    </div>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      isDarkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'
                    }`}>
                      <MapPin size={16} />
                      <span>Your Choice Route</span>
                    </div>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      isDarkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'
                    }`}>
                      <Users size={16} />
                      <span>Flexible Group Size</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button 
                      onClick={() => setIsCustomTrekModalOpen(true)}
                      className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <span className="relative flex items-center space-x-3">
                        <Clock size={20} />
                        <span>Your Schedule, We Plan</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      </span>
                    </button>
                    
                    <p className={`mt-3 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      ✨ Free consultation • No obligation • Instant response
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>

      {/* Custom Trek Modal */}
      <CustomTrekModal 
        isOpen={isCustomTrekModalOpen}
        onClose={() => setIsCustomTrekModalOpen(false)}
        title="Your Schedule, We Plan"
        subtitle="Tell us about your schedule and we'll create the perfect itinerary"
      />
    </section>
  );
};

export default ServicesSection;
