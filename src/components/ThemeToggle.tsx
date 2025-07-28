import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-full border-2 transition-all duration-300 hover:scale-110
        ${isDarkMode 
          ? 'bg-gray-800 border-gray-600 text-yellow-400 hover:bg-gray-700' 
          : 'bg-white border-gray-300 text-orange-500 hover:bg-gray-50'
        }
        shadow-lg hover:shadow-xl
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
              : 'opacity-100 rotate-0 scale-100'
            }
          `}
        />
        
        {/* Moon Icon */}
        <Moon
          size={20}
          className={`
            absolute inset-0 transition-all duration-300 transform
            ${isDarkMode 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-0'
            }
          `}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
