'use client';
import React from 'react';
import Link from 'next/link';
import { Flag, Mountain, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SectionHeader from './SectionHeader';

const PeakExpeditionSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const peaks = [
    {
      id: 1,
      name: 'Island Peak (Imja Tse)',
      height: '6,165m',
      duration: '19 Days',
      image: '/assets/images/islandpeak.png',
      description: 'Nepal\'s most popular 6,000m peak, perfect for mountaineering beginners.',
    },
    {
      id: 2,
      name: 'Mera Peak',
      height: '6,476m',
      duration: '18 Days',
      image: '/assets/images/mera.jpg',
      description: 'Nepal\'s highest trekking peak with stunning panoramic views of five 8,000m peaks.',
    },
    {
      id: 3,
      name: 'Lobuche East',
      height: '6,119m',
      duration: '20 Days',
      image: '/assets/images/peak.png',
      description: 'Technical climbing peak in the Everest region offering spectacular views.',
    },
  ];

  return (
    <section className={`py-16 md:py-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Peak Expeditions"
          title="Take Your Adventure to New Heights"
        />

        <div className="max-w-6xl mx-auto mb-12">
          <p className={`text-center text-lg max-w-3xl mx-auto mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Perfect for experienced trekkers ready for their next challenge. Our 6,000m+ peak expeditions 
            combine the thrill of mountaineering with comprehensive training and expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-primary-500">
              <Mountain size={20} />
              <span className="font-display font-semibold">Technical Training Included</span>
            </div>
            <div className="flex items-center gap-2 text-primary-500">
              <Flag size={20} />
              <span className="font-display font-semibold">Safety Equipment Provided</span>
            </div>
            <div className="flex items-center gap-2 text-primary-500">
              <Mountain size={20} />
              <span className="font-display font-semibold">Expert Guides</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {peaks.map((peak) => (
            <div
              key={peak.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={peak.image}
                  alt={peak.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-display font-bold text-sm shadow-lg">
                    {peak.height}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-display font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {peak.name}
                </h3>
                <p className={`mb-4 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {peak.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-display font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {peak.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/peak-expedition"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Peak Expeditions
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PeakExpeditionSection;
