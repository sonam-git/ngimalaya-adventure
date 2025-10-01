import React, { useState } from 'react';
import { CheckCircle, MapPin, Shield, Users, Clock, Star, X, Calendar, Globe, User, Mail, MessageSquare, Mountain } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { services } from '../data/treks';

const ServicesSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isCustomPlanModalOpen, setIsCustomPlanModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    availableDays: '',
    preferredDate: '',
    destination: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const countries = [
    'Nepal', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 
    'France', 'Japan', 'South Korea', 'India', 'China', 'Netherlands', 'Switzerland',
    'Sweden', 'Norway', 'Denmark', 'Belgium', 'Austria', 'Italy', 'Spain', 'Other'
  ];

  const trekDestinations = [
    'Everest Base Camp', 'Annapurna Base Camp', 'Manaslu Circuit', 'Langtang Valley',
    'Everest Three Passes', 'Annapurna Circuit', 'Upper Mustang', 'Kanchenjunga',
    'Gokyo Lakes', 'Nar Phu Valley', 'Tsum Valley', 'Dolpo', 'Other/Custom Route'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      country: '',
      availableDays: '',
      preferredDate: '',
      destination: '',
      email: '',
      message: ''
    });
    setIsSubmitted(false);
    setIsCustomPlanModalOpen(false);
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 ">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group`}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Features Section */}
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
                      onClick={() => setIsCustomPlanModalOpen(true)}
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

      {/* Custom Planning Modal */}
      {isCustomPlanModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Header */}
            <div className={`sticky top-0 flex items-center justify-between p-6 border-b ${
              isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
            }`}>
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Custom Trek Planning
                </h2>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Tell us about your schedule and we'll create the perfect itinerary
                </p>
              </div>
              <button
                onClick={() => setIsCustomPlanModalOpen(false)}
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSubmitted ? (
                // Success Message
                <div className="text-center py-12">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Thank You for Your Interest!
                    </h3>
                    <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      We have received your custom planning request.
                    </p>
                    <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Our expert team will analyze your requirements and create a personalized itinerary. 
                      You will receive a detailed proposal within 24 hours.
                    </p>
                    <div className={`p-4 rounded-lg mb-6 ${isDarkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
                      <p className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                        <strong>Next Steps:</strong><br />
                        • Check your email for confirmation<br />
                        • Our team will call you within 24 hours<br />
                        • Receive your custom itinerary proposal<br />
                        • Make adjustments as needed
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={resetForm}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                // Custom Planning Form
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <User className="inline mr-2" size={16} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Globe className="inline mr-2" size={16} />
                        Country *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="">Select your country</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Clock className="inline mr-2" size={16} />
                        Available Days *
                      </label>
                      <input
                        type="number"
                        name="availableDays"
                        value={formData.availableDays}
                        onChange={handleInputChange}
                        required
                        min="3"
                        max="60"
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="How many days can you trek?"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Calendar className="inline mr-2" size={16} />
                        Preferred Start Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Trek Preferences */}
                  <div className="space-y-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Mountain className="inline mr-2" size={16} />
                        Preferred Destination *
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="">Select your preferred destination</option>
                        {trekDestinations.map(destination => (
                          <option key={destination} value={destination}>{destination}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Mail className="inline mr-2" size={16} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <MessageSquare className="inline mr-2" size={16} />
                        Additional Requirements / Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Tell us about your fitness level, specific interests, budget preferences, or any other requirements..."
                      />
                    </div>
                  </div>

                  {/* Important Notice */}
                  <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-yellow-900/20 border border-yellow-800' : 'bg-yellow-50 border border-yellow-200'}`}>
                    <p className={`text-sm ${isDarkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                      <strong>Note:</strong> Our team will create a custom itinerary based on your requirements. 
                      This is a free consultation service. Final booking and payment will be discussed after you approve the proposed itinerary.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setIsCustomPlanModalOpen(false)}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Planning Request'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
