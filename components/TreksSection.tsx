'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '../contexts/ThemeContext';
import { popularTreks } from '../data/treks';
import TrekCard from './TrekCard';
import SectionHeader from './SectionHeader';

const TreksSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  
  // Show only top 3 treks on homepage
  const displayTreks = popularTreks.slice(0, 3);

  return (
    <section id="treks" className={`scroll-offset-mobile py-16 md:py-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Discover"
          title="Most Popular Trekking"
        />

        {/* Treks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayTreks.map((trek) => (
            <TrekCard
              key={trek.id}
              trek={trek}
              onExplore={() => router.push(`/treks/${trek.id}`)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => router.push('/treks')}
            className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 text-lg font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            VIEW ALL TREKS
          </button>
        </div>
      </div>
    </section>
  );
};

export default TreksSection;
