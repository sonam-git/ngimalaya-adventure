import React from 'react';
import { CheckCircle, MapPin, Shield, Users, Clock, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { services } from '../data/treks';

const ServicesSection: React.FC = () => {
  const { isDarkMode } = useTheme();
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
    <section id="services" className={`scroll-offset-mobile py-6 md:py-10 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Our <span className="text-blue-600">Services</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive adventure services designed to make your Himalayan dreams come true
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Makes Us <span className="text-blue-600">Different</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {feature.icon}
                    <h4 className="font-bold text-gray-900">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                    <div className="font-bold text-lg">4.9/5</div>
                    <div className="text-xs text-gray-600">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Ngimalaya Adventure?
              </h3>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With over two decades of experience and a deep commitment to sustainable tourism, 
                we offer more than just trekking – we provide transformative experiences that 
                connect you with the heart of Nepal's culture and landscapes.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                  Start Planning Your Adventure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
