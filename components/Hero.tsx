'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { getImageSrc } from '../utils/imageHelpers';
import lightImage from '../assets/images/logo-light.png';
import threePassesImage from '../assets/images/threepasses.jpeg';
import abcImage from '../assets/images/abc.jpeg';
import ebcImage from '../assets/images/ebc.jpeg';
import gokyoImage from '../assets/images/gokyo.jpeg';
import thoranglaImage from '../assets/images/thorangla-pass.jpeg';

export interface HeroProps {
  onExploreTreks?: () => void;
  onWatchStory?: () => void;
  onBookNow?: () => void;
}

const HeroComponent: React.FC<HeroProps> = ({ onExploreTreks, onBookNow }) => {
  
  // Hero slides - images only
  const heroSlides = [
    threePassesImage,
    ebcImage,
    abcImage,
    gokyoImage,
    thoranglaImage
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      {heroSlides.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${typeof image === 'string' ? image : image.src}")`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-blue-600 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-blue-600 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Logo with Horizontal Lines */}
        <div className="mb-3 flex items-center justify-center gap-6 md:gap-8">
          {/* Left Line */}
          <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-white/60"></div>
          
          {/* Logo */}
          <img
            src={getImageSrc(lightImage)}
            alt="Ngimalaya Adventure Logo"
            className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain animate-pulse"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 1)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 120px rgba(255, 255, 255, 0.6)) brightness(1.3)',
            }}
          />
          
          {/* Right Line */}
          <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-l from-transparent via-white/60 to-white/60"></div>
        </div>
        
        {/* Static Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-wide uppercase animate-fade-in-up">
          NGIMALAYA ADVENTURE
        </h1>
        
        {/* Static Subtitle/Slogan */}
        <p className="text-xl md:text-2xl lg:text-3xl font-body mb-12 text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Where Culture Meets the Clouds, and Every Trek Tells a Story
        </p>

        {/* CTA Buttons - Blue and White */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={onExploreTreks}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 text-xl font-display font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 rounded-xl"
          >
            <span>EXPLORE TREKS</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <button 
            onClick={onBookNow}
            className="group bg-white hover:bg-gray-100 text-blue-600 px-12 py-5 text-xl font-display font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-white/50 hover:scale-105 rounded-xl"
          >
            <span>BOOK NOW</span>
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-12 h-3 bg-blue-600' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroComponent;
