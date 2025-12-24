"use client";
import React, { useRef } from "react";
import { Mountain, Compass, Backpack, Camera, Shield, Users } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import SectionHeader from "./SectionHeader";

interface ServicesSectionProps {
  onBookNow?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookNow }) => {
  const { isDarkMode } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Mountain className="w-16 h-16" />,
      title: "Mountain Trekking",
      description:
        "Experience breathtaking mountain trails with expert guides and comprehensive support.",
    },
    {
      icon: <Compass className="w-16 h-16" />,
      title: "Expedition Planning",
      description:
        "Custom itineraries tailored to your preferences, fitness level, and schedule.",
    },
    {
      icon: <Backpack className="w-16 h-16" />,
      title: "Equipment Support",
      description:
        "Quality trekking gear and equipment provided for your safety and comfort.",
    },
    {
      icon: <Camera className="w-16 h-16" />,
      title: "Cultural Tours",
      description:
        "Immerse yourself in local culture with authentic experiences and interactions.",
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Safety Assurance",
      description:
        "Professional guides, emergency support, and comprehensive insurance coverage.",
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "Group & Private",
      description:
        "Join group adventures or customize your own private trekking experience.",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="services"
      className="scroll-offset-mobile relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-blue-600 dark:border-blue-400/60 py-12 xl:py-16"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-2 sm:px-4">
        <SectionHeader subtitle="What We Offer" title="Our Services" />

        {/* Desktop Grid */}
        <div className="hidden xl:grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 ${
                isDarkMode
                  ? "bg-gray-800/70 border-gray-700 hover:bg-gray-700/70"
                  : "bg-white/70 border-gray-200 hover:bg-white shadow-lg"
              }`}
            >
              <div className="inline-flex items-center justify-center mb-6 text-primary-500 transition-transform duration-300 hover:scale-110">
                {service.icon}
              </div>
              <h3
                className={`text-2xl font-display font-bold mb-4 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`font-body leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="relative block xl:hidden">
          <div className="rounded-2xl border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 shadow-xl p-2 relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-1"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <div
                    className={`text-center p-8 rounded-xl transition-all duration-300 border-2 h-full ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200 shadow-lg"
                    }`}
                  >
                    <div className="inline-flex items-center justify-center mb-6 text-primary-500">
                      {service.icon}
                    </div>
                    <h3
                      className={`text-2xl font-display font-bold mb-4 ${
                        isDarkMode ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`font-body leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-12 mt-6">
            <button
              onClick={() => scroll('left')}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 text-white rounded-full px-5 py-3 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              aria-label="Previous"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              <span className="font-display font-semibold">Prev</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 text-white rounded-full px-5 py-3 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              aria-label="Next"
            >
              <span className="font-display font-semibold">Next</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center p-12 rounded-2xl ${
            isDarkMode ? "bg-gray-700" : "bg-gradient-to-r from-primary-500 to-primary-600"
          }`}
        >
          <h3 className="text-2xl xl:text-3xl 2xl:text-4xl jaini-purva-regular text-white mb-4">
            Get Ready for Next Trekking Adventure
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Start planning your unforgettable journey to the Himalayas with our expert team
          </p>
          <button 
            onClick={onBookNow}
            className="bg-white dark:bg-gray-800 text-primary-500 hover:bg-gray-100 px-12 py-5 text-xl font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            START JOURNEY
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
