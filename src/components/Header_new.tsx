import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center py-6">
          {/* Theme Toggle Button */}
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 mr-4"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Sonam J Sherpa
            </h1>
            <p className="text-sm text-purple-200 dark:text-gray-300">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 10.95.69-.069-.5-.04-.5-.04-.5-.04-.69-.199-.69-.478 0-.237.008-.868.013-1.703-3.342.724-4.042-1.61-4.042-1.61C2.265 18.477 1.519 18.107 1.519 18.107c-.877-.599.069-.586.069-.586.97.068 1.478.997 1.478.997.861 1.479 2.255 1.052 2.805.802.088-.623.339-1.05.618-1.291-2.142-.243-4.396-1.072-4.396-4.77 0-1.053.378-1.915 1.004-2.588-.101-.244-.436-1.224.095-2.553 0 0 .817-.262 2.676.994a9.305 9.305 0 012.439-.328c.826.004 1.659.112 2.438.328 1.856-1.256 2.673-.994 2.673-.994.533 1.329.198 2.309.097 2.553.627.673 1.002 1.535 1.002 2.588 0 3.709-2.258 4.523-4.408 4.762.347.297.656.887.656 1.787 0 1.29-.012 2.332-.012 2.646 0 .258.188.559.694.464C20.873 21.394 24 17.06 24 11.987 24.001 5.367 18.634.001 12.017.001z"/>
              </svg>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-red-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Email
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+1234567890"
              className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-green-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Phone
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Layout - Four Rows */}
        <div className="md:hidden py-4 text-center space-y-3">
          {/* Row 0: Theme Toggle */}
          <div className="flex justify-start">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Row 1: Name */}
          <div>
            <h1 className="text-xl font-bold text-white">
              Sonam J Sherpa
            </h1>
          </div>
          
          {/* Row 2: Title */}
          <div>
            <p className="text-sm text-purple-200 dark:text-gray-300">Full Stack Developer</p>
          </div>
          
          {/* Row 3: Social Links */}
          <div className="flex justify-center items-center space-x-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-gray-300 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 10.95.69-.069-.5-.04-.5-.04-.5-.04-.69-.199-.69-.478 0-.237.008-.868.013-1.703-3.342.724-4.042-1.61-4.042-1.61C2.265 18.477 1.519 18.107 1.519 18.107c-.877-.599.069-.586.069-.586.97.068 1.478.997 1.478.997.861 1.479 2.255 1.052 2.805.802.088-.623.339-1.05.618-1.291-2.142-.243-4.396-1.072-4.396-4.77 0-1.053.378-1.915 1.004-2.588-.101-.244-.436-1.224.095-2.553 0 0 .817-.262 2.676.994a9.305 9.305 0 012.439-.328c.826.004 1.659.112 2.438.328 1.856-1.256 2.673-.994 2.673-.994.533 1.329.198 2.309.097 2.553.627.673 1.002 1.535 1.002 2.588 0 3.709-2.258 4.523-4.408 4.762.347.297.656.887.656 1.787 0 1.29-.012 2.332-.012 2.646 0 .258.188.559.694.464C20.873 21.394 24 17.06 24 11.987 24.001 5.367 18.634.001 12.017.001z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="group relative p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-red-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>

            {/* Phone */}
            <a
              href="tel:+1234567890"
              className="group relative p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-green-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
