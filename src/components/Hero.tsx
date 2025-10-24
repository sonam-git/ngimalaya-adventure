import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import threePassesImage from '../assets/images/threepasses.jpeg';
import abcImage from '../assets/images/abc.jpeg';
import ebcImage from '../assets/images/ebc.jpeg';
import gokyoImage from '../assets/images/gokyo.jpeg';
import thoranglaImage from '../assets/images/thorangla-pass.jpeg';
import villageImage from '../assets/images/village.jpg';
import kyangjinRiImage from '../assets/images/kyangjin-ri.jpg';
import suspensionBridgeImage from '../assets/images/suspension-bridge.jpg';
import ngimalayaImage from '../assets/images/ngimalaya.jpg';

export interface HeroProps {
  onExploreTreks?: () => void;
  onWatchStory?: () => void;
}

const HeroComponent: React.FC<HeroProps> = ({ onExploreTreks, onWatchStory }) => {
  const { isDarkMode } = useTheme();
  
  // Hero images array
  const heroImages = [
    threePassesImage,
    abcImage,
    ebcImage,
    gokyoImage,
    thoranglaImage,
    villageImage,
    kyangjinRiImage,
    suspensionBridgeImage,
    ngimalayaImage
  ];
  
  // State for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-28">
      {/* Background Images with Smooth Transitions */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(${
              isDarkMode 
                ? 'rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)' 
                : 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)'
            }), url("${image}")`
          }}
        />
      ))}
      
      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Where Culture Meets
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            the Clouds
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the mesmerizing beauty of the Himalayas with 
          <span className="font-semibold"> Ngima N Sherpa</span>, 
          your experienced guide with over 20 years of trekking expertise.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center space-x-2">
            <Star className="text-yellow-400" size={20} />
            <span className="text-lg">1000+ Happy Trekkers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="text-blue-400" size={20} />
            <span className="text-lg">20+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="text-green-400" size={20} />
            <span className="text-lg">Year Round Adventures</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onExploreTreks}
            className="group bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>Explore Treks</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={onWatchStory}
            className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl">
            <span>Watch Our Story</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Explicit default export with proper type
const Hero = HeroComponent;
export default Hero;
