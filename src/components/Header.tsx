import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logoImage from '../assets/images/logo.png';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treks', href: '#treks' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top bar with contact info and social icons - Enhanced UI */}
      <div className="fixed top-0 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-3 px-4 text-sm z-50 shadow-lg border-b border-blue-700/30">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="flex items-center space-x-2 bg-blue-800/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-blue-700/30">
              <Phone size={14} className="text-blue-200" />
              <span className="hidden sm:inline text-blue-100 font-medium">+977-9841234567</span>
              <span className="sm:hidden text-blue-100 font-medium">Call Us</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-800/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-blue-700/30">
              <Mail size={14} className="text-blue-200" />
              <span className="hidden md:inline text-blue-100 font-medium">info@ngimalayaadventure.com</span>
              <span className="md:hidden hidden sm:inline text-blue-100 font-medium">Email</span>
            </div>
          </div>

          {/* Center Tagline */}
          <div className="text-sm hidden lg:block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-cyan-200">
            Trek Higher. Breathe Deeper. Live Fuller.
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-blue-200 hidden md:inline mr-2 font-medium">Follow Us:</span>
            <div className="flex items-center space-x-1 bg-blue-800/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-blue-700/30">
              <a 
                href="https://facebook.com/ngimalayaadventure" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-all duration-200 hover:scale-110 transform p-1 rounded-full hover:bg-blue-700/50"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://instagram.com/ngimalayaadventure" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-all duration-200 hover:scale-110 transform p-1 rounded-full hover:bg-blue-700/50"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://wa.me/9779841234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-all duration-200 hover:scale-110 transform p-1 rounded-full hover:bg-blue-700/50"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`fixed top-[52px] w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? `${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg` 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 md:space-x-4 group relative">
              {/* Logo Container with Enhanced Styling */}
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Ngimalaya Adventure Logo" 
                  className="h-16 w-16 md:h-20 md:w-20 object-contain group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                />
              </div>
              
              {/* Brand Text with Enhanced Typography */}
              <div className="flex flex-col">
                <h1 className={`text-xl md:text-3xl font-bold tracking-tight leading-none transition-all duration-300 ${
                  isScrolled 
                    ? `${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}` 
                    : 'text-white group-hover:text-blue-200'
                }`}>
                  Ngimalaya Adventure
                </h1>
                <div className="flex items-center space-x-2 mt-1">
                  <p className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                    isScrolled ? `${isDarkMode ? 'text-gray-300' : 'text-gray-500'}` : 'text-gray-300'
                  }`}>
                    Nepal
                  </p>
                  <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                    isScrolled ? 'bg-blue-400' : 'bg-blue-300'
                  }`}></div>
                  <p className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-400' : 'text-gray-400'
                  } hidden sm:block`}>
                    Since 2016
                  </p>
                </div>
              </div>
              
              {/* Animated underline */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                'w-0 group-hover:w-full'
              }`}></div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isScrolled 
                      ? `${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}` 
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <ThemeToggle />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className={`md:hidden ${isScrolled ? `${isDarkMode ? 'text-white' : 'text-gray-900'}` : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block py-2 transition-colors ${
                    isDarkMode 
                      ? 'text-gray-200 hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-between mt-4">
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Theme:</span>
                <ThemeToggle />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors mt-4">
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
