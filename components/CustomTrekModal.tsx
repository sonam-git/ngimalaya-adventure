'use client';
import React, { useState } from 'react';
import { X, User, Globe, Clock, Calendar, Mountain, Mail, MessageSquare, CheckCircle, Loader2, XCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface CustomTrekModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

const CustomTrekModal: React.FC<CustomTrekModalProps> = ({
  isOpen,
  onClose,
  title = "Custom Trek Planning",
  subtitle = "Tell us about your schedule and we'll create the perfect itinerary"
}) => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    availableDays: '',
    preferredDate: '',
    destination: '',
    email: '',
    message: '',
    website: '' // Honeypot field
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/customtrek', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit custom trek request');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We have received your custom trek planning request and will contact you within 24 hours.'
      });
      setIsSubmitted(true);

      // Auto-hide success message and close modal after 5 seconds
      setTimeout(() => {
        resetForm();
      }, 5000);

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit request. Please try again or contact us directly.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      country: '',
      availableDays: '',
      preferredDate: '',
      destination: '',
      email: '',
      message: '',
      website: ''
    });
    setIsSubmitted(false);
    setSubmitStatus({ type: null, message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`sticky top-0 flex items-center justify-between p-6 border-b ${
          isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
        }`}>
          <div>
            <h2 className={`font-heading text-responsive-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h2>
            <p className={`font-body text-responsive-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
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
                <h3 className={`font-heading text-responsive-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Thank You for Your Interest!
                </h3>
                <p className={`font-body text-responsive-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  We have received your custom planning request.
                </p>
                <p className={`font-body text-responsive-base mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Our expert team will analyze your requirements and create a personalized itinerary. 
                  You will receive a detailed proposal within 24 hours.
                </p>
                <div className={`p-4 rounded-lg mb-6 ${isDarkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
                  <p className={`font-body text-responsive-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            // Custom Planning Form
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {submitStatus.type === 'success' && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-start space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-300">Success!</h4>
                    <p className="text-green-700 dark:text-green-400 text-sm">{submitStatus.message}</p>
                  </div>
                </div>
              )}
              
              {submitStatus.type === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-start space-x-3">
                  <XCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-300">Error</h4>
                    <p className="text-red-700 dark:text-red-400 text-sm">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block font-body text-responsive-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <User className="inline mr-2" size={16} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-body text-responsive-base ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className={`block font-body text-responsive-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Globe className="inline mr-2" size={16} />
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-body text-responsive-base ${
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
                  <label className={`block font-body text-responsive-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-body text-responsive-base ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="How many days can you trek?"
                  />
                </div>

                <div>
                  <label className={`block font-body text-responsive-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-body text-responsive-base ${
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
                  <label className={`block font-body text-responsive-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Mountain className="inline mr-2" size={16} />
                    Preferred Destination *
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-body text-responsive-base ${
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
                  <label className={`block font-body text-responsive-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Mail className="inline mr-2" size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-body text-responsive-base ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className={`block font-body text-responsive-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <MessageSquare className="inline mr-2" size={16} />
                    Additional Requirements / Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-body text-responsive-base ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell us about your fitness level, specific interests, budget preferences, or any other requirements..."
                  />
                </div>
              </div>

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  opacity: 0,
                  pointerEvents: 'none'
                }}
                aria-hidden="true"
              />

              {/* Important Notice */}
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-yellow-900/20 border border-yellow-800' : 'bg-yellow-50 border border-yellow-200'}`}>
                <p className={`font-body text-responsive-sm ${isDarkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                  <strong>Note:</strong> Our team will create a custom itinerary based on your requirements. 
                  This is a free consultation service. Final booking and payment will be discussed after you approve the proposed itinerary.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className={`flex-1 py-3 px-6 rounded-lg font-heading font-semibold transition-colors ${
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
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-400 text-white font-heading font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="animate-spin mr-2" size={20} />
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
  );
};

export default CustomTrekModal;
