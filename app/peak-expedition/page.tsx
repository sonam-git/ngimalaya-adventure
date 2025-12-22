'use client';
import React, { useState, useEffect } from 'react';
import { Flag, Mountain, Award, Shield, Camera } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import ContactModal from '../../components/ContactModal';
import { PeakExpedition } from '@/lib/types';
import Link from 'next/link';

const PeakExpeditionPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [peaks, setPeaks] = useState<PeakExpedition[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch peaks from API
  useEffect(() => {
    async function fetchPeaks() {
      try {
        const response = await fetch('/api/peaks');
        if (response.ok) {
          const data = await response.json();
          setPeaks(data);
        }
      } catch (error) {
        console.error('Error fetching peaks:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPeaks();
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Experienced guides and comprehensive safety protocols',
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Professional Sherpa guides with summit experience',
    },
    {
      icon: Mountain,
      title: 'Quality Equipment',
      description: 'Top-notch climbing gear and oxygen systems',
    },
    {
      icon: Camera,
      title: 'Documentation',
      description: 'Photo and video documentation of your expedition',
    },
  ];

  return (
    <>
      <div className={`min-h-screen ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Flag className="text-primary-500" size={40} />
              <h1 className="text-5xl md:text-6xl jaini-purva-regular font-bold text-white uppercase tracking-wider">
                Peak Expedition
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 font-body mb-6">
              Take your adventure to new heights with our 6,000m+ peak expeditions
            </p>
            <p className="text-lg text-gray-300 font-body max-w-2xl">
              Perfect for experienced trekkers ready for their next challenge. Our peak expeditions combine 
              the thrill of mountaineering with comprehensive training and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-white">
                <Shield className="text-primary-500" size={20} />
                <span>Technical Training Included</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Award className="text-primary-500" size={20} />
                <span>Safety Equipment Provided</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Mountain className="text-primary-500" size={20} />
                <span>Expert Guides</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    isDarkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-primary-500'
                      : 'bg-white border-gray-200 hover:border-primary-500'
                  }`}
                >
                  <Icon className="text-primary-500 mb-4" size={32} />
                  <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expeditions Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl jaini-purva-regular font-bold uppercase tracking-wider mb-4">
              Our Expeditions
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Choose from our carefully curated peak expeditions, each designed to provide an unforgettable mountaineering experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <div className="col-span-full text-center py-12">
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Loading peaks...</p>
              </div>
            ) : peaks.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>No peaks available at the moment.</p>
              </div>
            ) : (
              peaks.map((expedition) => (
              <div
                key={expedition.id}
                className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={expedition.image}
                    alt={expedition.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full font-display font-bold text-sm shadow-lg">
                      {expedition.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl jaini-purva-regular font-bold mb-3">{expedition.name}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {expedition.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Max. Altitude</p>
                        <p className="font-display font-semibold text-primary-500">{expedition.height}</p>
                      </div>
                      <div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Trip Duration</p>
                        <p className="font-display font-semibold">{expedition.duration}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Trek Grade</p>
                        <p className="font-display font-semibold">{expedition.difficulty}</p>
                      </div>
                      <div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Best Time</p>
                        <p className="font-display font-semibold text-sm">{expedition.season}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Accommodation</p>
                        <p className="font-display font-semibold">{expedition.accommodation}</p>
                      </div>
                      <div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Per Day Hiking</p>
                        <p className="font-display font-semibold">{expedition.hiking}</p>
                      </div>
                    </div>
                    <div>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Meals Included</p>
                      <p className="font-display font-semibold">{expedition.meals}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link href={`/peak-expedition/${expedition.id}`}>
                      <button 
                        className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        View Details
                      </button>
                    </Link>
                    <button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-primary-50'}`}>
        <div className="container mx-auto px-4 text-center">
          <Flag className="mx-auto text-primary-500 mb-6" size={48} />
          <h2 className="text-4xl jaini-purva-regular font-bold uppercase tracking-wider mb-4">
            Ready for the Ultimate Challenge?
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Join us on an unforgettable journey to the top of the world. Our experienced team will guide you every step of the way.
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
    <ContactModal
      isOpen={isContactModalOpen}
      onClose={() => setIsContactModalOpen(false)}
      title="Enquire About Peak Expedition"
      subtitle="Get detailed information about our peak climbing expeditions"
    />
    </>
  );
};

export default PeakExpeditionPage;
