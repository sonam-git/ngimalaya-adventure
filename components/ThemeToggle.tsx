'use client';
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105
        ${isDarkMode 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-white/30 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20' 
          : 'bg-gradient-to-br from-sky-100 to-sky-200 hover:from-sky-200 hover:to-sky-300 shadow-lg shadow-sky-300/50 hover:shadow-xl hover:shadow-sky-400/60'
        }
      `}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          size={20}
          className={`
            absolute inset-0 transition-all duration-300 transform
            ${isDarkMode 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100 text-sky-600'
            }
          `}
        />
        
        {/* Moon Icon */}
        <Moon
          size={20}
          className={`
            absolute inset-0 transition-all duration-300 transform
            ${isDarkMode 
              ? 'opacity-100 rotate-0 scale-100 text-gray-300' 
              : 'opacity-0 -rotate-90 scale-0'
            }
          `}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
