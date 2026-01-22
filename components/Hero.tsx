"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroProps {
  onExploreTreks?: () => void;
  onWatchStory?: () => void;
  onBookNow?: () => void;
  searchComponent?: React.ReactNode;
}

const HeroComponent: React.FC<HeroProps> = ({
  onExploreTreks,
  onBookNow,
  searchComponent,
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
      className="relative min-h-screen flex flex-col -mt-10 md:-mt-28 lg:-mt-32"
    >
      {/* Mountain Sketch Background - Behind Top Section Only */}
      <div className="absolute -top-32 sm:-top-28 md:-top-20 lg:-top-24 left-0 right-0 h-[50vh] md:h-[55vh] z-0 overflow-hidden">
        <img 
          src="/assets/images/heading-hero.png" 
          alt="Mountain sketch background" 
          className="w-full h-full object-cover object-[center_35%] opacity-25 dark:opacity-30"
        />
        {/* Gradient fade at bottom */}
       
      </div>

      {/* Top Text Section */}
      <div className="relative z-10">
        <div className="relative max-w-6xl mx-auto text-center px-4 pt-24 sm:pt-24 md:pt-28 lg:pt-32">
          {/* Main Headline with Trekker Images */}
          <div className="relative flex items-center justify-center gap-0.5 sm:gap-2 md:gap-3 lg:gap-4 mb-1 md:mb-1 px-2">
            {/* Male Trekker - Left Side */}
            <div className="animate-fade-in-up flex-shrink-0" style={{ animationDelay: "0.15s" }}>
              <img 
                src="/assets/sketch/trekker-male.png" 
                alt="Male trekker" 
                className="w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain opacity-85 dark:opacity-75 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />
            </div>
            
            {/* Main Headline */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl jaini-purva-regular mt-0 tracking-wide text-blue-900 dark:text-blue-200 animate-fade-in-up text-center px-0.5 sm:px-1 whitespace-nowrap"
              style={{ 
                animationDelay: "0.2s",
                fontFamily: '"Jaini Purva", system-ui !important',
                fontWeight: '400 !important'
              }}
            >
              Ngimalaya Adventure
            </h1>
            
            {/* Female Trekker - Right Side */}
            <div className="animate-fade-in-up flex-shrink-0" style={{ animationDelay: "0.25s" }}>
              <img 
                src="/assets/sketch/trekker-female.png" 
                alt="Female trekker" 
                className="w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain opacity-85 dark:opacity-75 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="text-xs sm:text-xl md:text-2xl font-body text-gray-800 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Discover Your Himalayan Escape, Where Culture Meets the Clouds
          </p>
        </div>
      </div>

      {/* Image Carousel Section - Center Focus */}
      <div className="relative flex-1 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] px-4 md:px-8 lg:px-16 xl:px-24 flex items-center z-0">
        <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] max-w-[1600px] mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3),0_20px_80px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6),0_20px_80px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.4),0_25px_100px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_15px_50px_rgba(0,0,0,0.7),0_25px_100px_rgba(0,0,0,0.5)] transition-shadow duration-500">
          
          {/* Video Background (Primary) */}
          {showVideo && !videoError && (
            <div className="absolute inset-0 z-10">
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
              {/* Subtle vignette effect over video */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20 dark:from-gray-900/20 dark:to-gray-900/20 pointer-events-none" />
            </div>
          )}
          
          {/* Background Images with Smooth Transitions (Fallback) */}
          {(!showVideo || videoError) && heroSlides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
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
              {/* Subtle vignette effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/30 dark:from-gray-900/30 dark:to-gray-900/30" />
            </div>
          ))}

          {/* Navigation Arrows - Only show for image slideshow */}
          {(!showVideo || videoError) && (
            <>
              <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm p-3 rounded-full transition-all duration-300 shadow-lg items-center justify-center"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm p-3 rounded-full transition-all duration-300 shadow-lg items-center justify-center"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
              </button>
            </>
          )}

          {/* Slide Indicators - Only show for image slideshow */}
          {(!showVideo || videoError) && (
            <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "w-10 md:w-12 h-2 md:h-3 bg-blue-600 dark:bg-blue-500"
                      : "w-2 md:w-3 h-2 md:h-3 bg-gray-400 dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400"
                  } rounded-full shadow-md`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Text & CTA Section */}
      <div className="relative py-8 md:py-12 lg:py-16 px-4 z-0">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Search Component - visible only on small screens */}
          {searchComponent && (
            <div
              className="block md:hidden mb-6 animate-fade-in-up relative z-[100]"
              style={{ animationDelay: "0.3s" }}
            >
              {searchComponent}
            </div>
          )}

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