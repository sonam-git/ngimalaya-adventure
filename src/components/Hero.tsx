import React from 'react';
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export interface HeroProps {
  onExploreTreks?: () => void;
  onWatchStory?: () => void;
}

const HeroComponent: React.FC<HeroProps> = ({ onExploreTreks, onWatchStory }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-28">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(${
            isDarkMode 
              ? 'rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)' 
              : 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)'
          }), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
        }}
      />
      
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
          <span className="font-semibold"> Ngima Nuru Sherpa</span>, 
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
