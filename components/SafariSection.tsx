'use client';
import React from 'react';
import Link from 'next/link';
import { Binoculars, Camera, Trees, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

const SafariSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const safaris = [
    {
      id: 1,
      name: 'Chitwan National Park',
      type: 'UNESCO Site',
      duration: '2-4 Days',
      badge: 'Family Friendly',
      image: '/assets/images/chitawan.jpg',
      description: 'Home to the rare one-horned rhinoceros and Bengal tigers.',
    },
    {
      id: 2,
      name: 'Bardia National Park',
      type: 'Wild Tiger',
      duration: '3-5 Days',
      badge: 'Adventure',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Nepal\'s largest and most pristine wilderness area with best tiger spotting.',
    },
    {
      id: 3,
      name: 'Koshi Tappu Reserve',
      type: 'Bird Paradise',
      duration: '2-3 Days',
      badge: 'Bird Watching',
      image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premier bird watching destination with over 500 species.',
    },
  ];

  return (
    <section className={`py-16 md:py-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Safari Adventures"
          title="Discover Nepal's Incredible Wildlife"
        />

        <div className="max-w-6xl mx-auto mb-12">
          <p className={`text-center text-lg max-w-3xl mx-auto mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experience rare animals in their natural habitat with expert naturalist guides. 
            Our safari adventures offer the perfect blend of wildlife encounters and cultural experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-primary-500">
              <Binoculars size={20} />
              <span className="font-display font-semibold">Expert Naturalist Guides</span>
            </div>
            <div className="flex items-center gap-2 text-primary-500">
              <Trees size={20} />
              <span className="font-display font-semibold">Conservation Support</span>
            </div>
            <div className="flex items-center gap-2 text-primary-500">
              <Camera size={20} />
              <span className="font-display font-semibold">Wildlife Photography</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {safaris.map((safari) => (
            <div
              key={safari.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={safari.image}
                  alt={safari.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  unoptimized={safari.image.startsWith('http')}
                  priority={safari.id === 1}
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-display font-semibold ${
                    isDarkMode ? 'bg-gray-900/80 text-white' : 'bg-white/90 text-gray-900'
                  }`}>
                    {safari.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-display font-semibold text-xs shadow-lg">
                    {safari.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-display font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {safari.name}
                </h3>
                <p className={`mb-4 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {safari.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-display font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {safari.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/safari"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Safari Adventures
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SafariSection;
