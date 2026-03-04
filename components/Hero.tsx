"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroProps {
  onExploreTreks?: () => void;
  onWatchStory?: () => void;
  onBookNow?: () => void;
  searchComponent?: React.ReactNode;
  trekReelComponent?: React.ReactNode;
}

const HeroComponent: React.FC<HeroProps> = ({
  onExploreTreks,
  onBookNow,
  searchComponent,
  trekReelComponent,
}) => {
  // Hero slides - images only
  const heroSlides = [
    "/assets/images/threepasses.jpeg",
    "/assets/images/ebc.jpeg",
    "/assets/images/abc.jpeg",
    "/assets/images/gokyo.jpeg",
    "/assets/images/thorangla-pass.jpeg",
    "/assets/images/chitawan.jpg",
    "/assets/images/mustang.jpg",
    "/assets/images/mountain.jpg",
    "/assets/images/suspension-bridge.jpg",
    "/assets/images/kyangjin.jpg",
    "/assets/images/gokyo-ri.jpg",
    "/assets/images/dolpa.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  // Auto-rotate slides every 5 seconds (only when video fails)
  useEffect(() => {
    if (!showVideo || videoError) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [heroSlides.length, showVideo, videoError]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <section
      id="home"
      className="relative flex flex-col -mt-32 md:-mt-30"
    >
      {/* Full-screen Hero Video/Image Background - extends under header */}
      <div className="relative min-h-[55vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] w-full overflow-hidden">
        {/* Video Background (Primary) */}
        {showVideo && !videoError && (
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onError={() => {
                console.log('Video failed to load, falling back to image slideshow');
                setVideoError(true);
                setShowVideo(false);
              }}
              onLoadedData={() => {
                console.log('Video loaded successfully');
              }}
            >
              <source src="/assets/videos/Hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        
        {/* Background Images with Smooth Transitions (Fallback) */}
        {(!showVideo || videoError) && heroSlides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 z-0 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${image}")`,
                backgroundPosition: "center 40%",
              }}
            />
          </div>
        ))}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-10" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 pt-20 md:pt-24">
          {/* Main Headline with Trekker Images */}
          <div className="relative flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mb-2 md:mb-4 px-2">
            {/* Male Trekker - Left Side */}
            <div className="animate-fade-in-up flex-shrink-0" style={{ animationDelay: "0.15s" }}>
              <img 
                src="/assets/sketch/trekker-male.png" 
                alt="Male trekker" 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 drop-shadow-lg"
              />
            </div>
            
            {/* Main Headline */}
            <h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl jaini-purva-regular tracking-wide text-white animate-fade-in-up text-center px-1 drop-shadow-2xl"
              style={{ 
                animationDelay: "0.2s",
                fontFamily: '"Jaini Purva", system-ui !important',
                fontWeight: '400 !important',
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
              }}
            >
              Ngimalaya Adventure
            </h1>
            
            {/* Female Trekker - Right Side */}
            <div className="animate-fade-in-up flex-shrink-0" style={{ animationDelay: "0.25s" }}>
              <img 
                src="/assets/sketch/trekker-female.png" 
                alt="Female trekker" 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 drop-shadow-lg"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-lg md:text-xl lg:text-2xl font-body text-white/90 max-w-3xl mx-auto animate-fade-in-up text-center drop-shadow-lg"
            style={{ animationDelay: "0.3s", textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
          >
            Discover Your Himalayan Escape, Where Culture Meets the Clouds
          </p>
        </div>

        {/* Navigation Arrows - Only show for image slideshow */}
        {(!showVideo || videoError) && (
          <>
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm p-3 rounded-full transition-all duration-300 shadow-lg items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm p-3 rounded-full transition-all duration-300 shadow-lg items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
            </button>
          </>
        )}

        {/* Slide Indicators - Only show for image slideshow */}
        {(!showVideo || videoError) && (
          <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-30">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-10 md:w-12 h-2 md:h-3 bg-white"
                    : "w-2 md:w-3 h-2 md:h-3 bg-white/50 hover:bg-white/70"
                } rounded-full shadow-md`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Trek Reel - Right below hero */}
      {trekReelComponent && (
        <div className="relative z-0 w-full">
          {trekReelComponent}
        </div>
      )}

      {/* Mobile Layout - Tagline and CTAs right after TrekReel */}
      <div className="xl:hidden relative z-50 px-4 py-4">
        <div className="max-w-md mx-auto text-center">
          {/* Tagline for mobile */}
          <h2
            className="text-base sm:text-lg lugrasimo-regular mb-4 text-blue-800 dark:text-gray-200 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Expert-Guided Treks Through Nepal's Majestic Landscapes
          </h2>
          
          {/* Two-column buttons for mobile */}
          <div className="grid grid-cols-2 gap-3 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <button
              onClick={onBookNow}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-3 text-sm font-display font-semibold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book Now</span>
            </button>
            {/* Search button will be rendered here by searchComponent */}
            {searchComponent}
          </div>
        </div>
      </div>

      {/* Search Component - Desktop Only (full form) */}
      {searchComponent && (
        <div className="hidden xl:block relative z-50 w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20 py-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {searchComponent}
        </div>
      )}

      {/* Bottom Text & CTA Section - Desktop Only */}
      <div className="hidden xl:block relative py-4 md:py-6 lg:py-8 px-4 z-0">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl lugrasimo-regular mb-6 md:mb-8 text-blue-800 dark:text-gray-200 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Expert-Guided Treks Through Nepal's Majestic Landscapes
          </h2>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={onExploreTreks}
              className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-display font-semibold uppercase tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 rounded-lg"
            >
              <span>Explore Treks</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onBookNow}
              className="group bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-500 px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-display font-semibold uppercase tracking-wide transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 rounded-lg"
            >
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;