"use client";
import React, { useRef, useState, useEffect } from "react";
import { Mountain, Compass, Backpack, Camera, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import SectionHeader from "./SectionHeader";

interface ServicesSectionProps {
  onBookNow?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookNow }) => {
  const { isDarkMode } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
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
      className={`scroll-offset-mobile py-16 md:py-24 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <SectionHeader subtitle="What We Offer" title="Our Services" />

        {/* Horizontal Scrolling Gallery */}
        <div className="relative max-w-7xl mx-auto">
          {/* Gallery Container with Border and Shadow */}
          <div className={`relative rounded-2xl p-6 ${
            isDarkMode 
              ? "bg-gray-900 border-2 border-gray-700 shadow-2xl" 
              : "bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 shadow-2xl"
          }`}>
            {/* Services Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-6 py-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-80 text-center p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border-gray-600"
                    : "bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl border-gray-200"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center mb-6 text-primary-500 group-hover:scale-110 transition-transform duration-300`}
                >
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

            {/* Navigation Buttons - Bottom Left and Right */}
            <div className="flex justify-between items-center mt-6 px-2">
              {/* Left Arrow - Bottom Left */}
              {canScrollLeft ? (
                <button
                  onClick={() => scroll('left')}
                  className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                    isDarkMode 
                      ? "bg-gray-700 text-white hover:bg-gray-600" 
                      : "bg-white text-primary-600 hover:bg-primary-50 border-2 border-primary-200"
                  }`}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              ) : (
                <div className="w-14"></div>
              )}

              {/* Scroll Indicator - Center */}
              <div className="flex gap-2">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === 0 ? 'w-8' : 'w-2'
                    } ${
                      isDarkMode ? 'bg-gray-600' : 'bg-primary-300'
                    }`}
                  />
                ))}
              </div>

              {/* Right Arrow - Bottom Right */}
              {canScrollRight ? (
                <button
                  onClick={() => scroll('right')}
                  className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                    isDarkMode 
                      ? "bg-gray-700 text-white hover:bg-gray-600" 
                      : "bg-white text-primary-600 hover:bg-primary-50 border-2 border-primary-200"
                  }`}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              ) : (
                <div className="w-14"></div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center p-12 rounded-2xl ${
            isDarkMode ? "bg-gray-700" : "bg-gradient-to-r from-primary-500 to-primary-600"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Get Ready for Next Trekking Adventure
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Start planning your unforgettable journey to the Himalayas with our expert team
          </p>
          <button 
            onClick={onBookNow}
            className="bg-white text-primary-500 hover:bg-gray-100 px-12 py-5 text-xl font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            START JOURNEY
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
