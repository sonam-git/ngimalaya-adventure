'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, User, Mountain, Flag, Binoculars, Mail, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import BookingModal from './BookingModal';
import PrayerFlagBorder from './PrayerFlagBorder';
import GoogleTranslateClient from './GoogleTranslateClient';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Trekking', href: '/treks', icon: Mountain },
    { name: 'Peak', href: '/peak-expedition', icon: Flag },
    { name: 'Safari', href: '/safari', icon: Binoculars },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Header */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode 
            ? 'bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95 backdrop-blur-md shadow-lg'
          : isDarkMode 
            ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-r from-white via-blue-50 to-white'
      }`}>
        <nav className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-24 md:h-28">
            {/* Logo and Title */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Column with Sun-like Circle Background */}
              <div className={`relative p-2 rounded-full transition-all duration-300 group-hover:scale-110 ${
                isDarkMode 
                  ? 'bg-gray-900 border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4),0_0_50px_rgba(255,255,255,0.3)]' 
                  : 'bg-white border-2 border-blue-800 shadow-[0_0_20px_rgba(30,64,175,0.3),0_0_40px_rgba(30,64,175,0.2)] group-hover:shadow-[0_0_25px_rgba(30,64,175,0.4),0_0_50px_rgba(30,64,175,0.3)]'
              }`}>
                {/* Ringing Circle Animation on Hover */}
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping ${
                  isDarkMode ? 'border-2 border-white' : 'border-2 border-blue-800'
                }`} style={{ animationDuration: '1s' }}></div>
                
                <img
                  src={isDarkMode ? '/assets/images/logo-dark.png' : '/assets/images/logo-light.png'}
                  alt="Ngimalaya Adventure Nepal"
                  className="h-14 md:h-16 lg:h-18 w-auto relative z-10 transition-transform duration-300 group-hover:rotate-3"
                />
              </div>
              
              {/* Title Column - Visible on all screens */}
              <div className="notranslate flex flex-col justify-center gap-1 min-w-[160px] sm:min-w-[220px]">
                {/* English */}
                <div className={`font-display font-bold text-sm sm:text-lg lg:text-xl leading-tight transition-colors whitespace-nowrap ${
                  isDarkMode ? 'text-gray-100 group-hover:text-primary-400' : 'text-blue-900 group-hover:text-primary-600'
                }`}>
                  Ngimalaya Adventure
                </div>
                {/* Nepali Script */}
                <div className={`font-sans font-bold text-sm sm:text-lg lg:text-xl leading-tight transition-colors whitespace-nowrap ${
                  isDarkMode ? 'text-gray-300 group-hover:text-primary-300' : 'text-blue-800 group-hover:text-primary-500'
                }`} style={{ letterSpacing: '0.25em' }}>
                  ङिमालय एडभेन्चर
                </div>
                {/* Tibetan Script with Sliding Line */}
                <div className="relative">
                  <div className={`font-sans font-bold text-sm sm:text-lg lg:text-xl leading-tight transition-colors whitespace-nowrap ${
                    isDarkMode ? 'text-gray-400 group-hover:text-primary-300' : 'text-blue-700 group-hover:text-primary-500'
                  }`} style={{ letterSpacing: '0.4em' }}>
                    སྤོ་ལོ་ཧི་མ་ལ་ཡ
                  </div>
                  {/* Sliding Horizontal Line */}
                  <div className={`absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out ${
                    isDarkMode ? 'bg-primary-400' : 'bg-yellow-600'
                  }`}></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex flex-col items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 ${
                      active
                        ? isDarkMode
                          ? 'bg-primary-600/20 text-primary-400'
                          : 'bg-primary-50 text-primary-600'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-800 hover:text-primary-400'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                    }`}
                  >
                    <Icon size={22} className={`mb-1 transition-transform duration-300 group-hover:scale-110 ${
                      active ? 'text-primary-500' : ''
                    }`} />
                    <span className="font-display font-semibold uppercase tracking-wider text-sm">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
              
              {/* Book Now Button */}
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="group flex flex-col items-center justify-center px-5 py-2 ml-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Calendar size={22} className="mb-1 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-display font-bold uppercase tracking-wider text-sm">
                  Book Now
                </span>
              </button>

              {/* Theme Toggle and Translate Button */}
              <div className="ml-3 flex items-center gap-2">
                <ThemeToggle />
                <GoogleTranslateClient />
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Theme Toggle for Mobile */}
              <ThemeToggle />
              <GoogleTranslateClient />
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`relative p-2 rounded-lg transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'bg-primary-500 text-white'
                    : isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu size={24} className="transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* Prayer flag border: always visible below header, both mobile and desktop */}
          <div className="w-full">
            <PrayerFlagBorder />
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full z-50 bg-white dark:bg-gray-900 shadow-2xl border-t border-gray-200 dark:border-gray-700 animate-slideDown">
              <div className={`py-4 border-t ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-4 py-4 px-4 mx-2 mb-2 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                        active
                          ? isDarkMode
                            ? 'bg-gradient-to-r from-primary-600/30 to-primary-500/20 text-primary-200 shadow-lg'
                            : 'bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 shadow-md'
                          : isDarkMode
                            ? 'text-gray-100 hover:bg-gray-800 hover:text-primary-200'
                            : 'text-gray-900 hover:bg-gray-50 hover:text-primary-700'
                      }`}
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animation: 'fadeInUp 0.3s ease-out forwards',
                        opacity: 0
                      }}
                    >
                      <div className={`p-2 rounded-lg ${
                        active 
                          ? 'bg-primary-500 text-white' 
                          : isDarkMode 
                            ? 'bg-gray-700' 
                            : 'bg-gray-200'
                      }`}>
                        <Icon size={22} />
                      </div>
                      <div className="flex-1">
                        <span className="font-display font-bold uppercase tracking-wider text-base block">
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  );
                })}
                
                <div className="px-4 pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={() => {
                      setIsBookingModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 font-display font-bold uppercase tracking-wider text-base transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl flex items-center justify-center gap-3 transform hover:scale-[1.02]"
                    style={{ 
                      animationDelay: `${navItems.length * 50}ms`,
                      animation: 'fadeInUp 0.3s ease-out forwards',
                      opacity: 0
                    }}
                  >
                    <Calendar size={22} />
                    Book Now
                  </button>
                </div>
              </div>

              {/* Prayer flag border at the bottom of mobile menu */}
              <div className="relative w-full z-20">
                <PrayerFlagBorder />
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Header;
