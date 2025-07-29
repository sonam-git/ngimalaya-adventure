import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, MessageCircle, Home, User, Mountain, Settings, MessageSquare, ArrowLeft } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logoImage from '../assets/images/logo.png';
import ThemeToggle from './ThemeToggle';
import BookingModal from './BookingModal';

type ViewState = 'home' | 'regions' | 'region-treks' | 'trek-detail' | 'treks';

interface HeaderProps {
  currentView?: ViewState;
  onBackToHome?: () => void;
  onBackToRegions?: () => void;
  onBackToTreks?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentView = 'home', 
  onBackToHome, 
  onBackToRegions, 
  onBackToTreks 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position only for home view
      if (currentView === 'home') {
        const sections = ['home', 'about', 'treks', 'services', 'contact'];
        const scrollPosition = window.scrollY + 200;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Define navigation items based on current view
  const getNavItems = () => {
    switch (currentView) {
      case 'regions':
        return [
          { name: 'Home', href: '#home', action: onBackToHome, icon: Home, id: 'home' }
        ];
      case 'region-treks':
        return [
          { name: 'Home', href: '#home', action: onBackToHome, icon: Home, id: 'home' },
          { name: 'Back to Regions', href: '#', action: onBackToRegions, icon: ArrowLeft, id: 'back-regions' }
        ];
      case 'trek-detail':
        return [
          { name: 'Home', href: '#home', action: onBackToHome, icon: Home, id: 'home' },
          { name: 'Back to Treks', href: '#', action: onBackToTreks, icon: ArrowLeft, id: 'back-treks' }
        ];
      case 'treks':
        return [
          { name: 'Home', href: '#home', action: onBackToHome, icon: Home, id: 'home' }
        ];
      default: // 'home'
        return [
          { name: 'Home', href: '#home', icon: Home, id: 'home' },
          { name: 'About', href: '#about', icon: User, id: 'about' },
          { name: 'Treks', href: '#treks', icon: Mountain, id: 'treks' },
          { name: 'Services', href: '#services', icon: Settings, id: 'services' },
          { name: 'Contact', href: '#contact', icon: MessageSquare, id: 'contact' }
        ];
    }
  };

  const navItems = getNavItems();

  return (
    <>
      {/* Top bar with contact info and social icons - Enhanced UI */}
      <div className="fixed top-0 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-3 px-4 text-sm z-50 shadow-lg border-b border-blue-700/30">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="flex items-center space-x-2 bg-blue-800/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-blue-700/30">
              <Phone size={14} className="text-blue-200" />
              <span className="hidden sm:inline text-blue-100 font-medium">+977 980-3499156</span>
              <span className="sm:hidden text-blue-100 font-medium">Call Us</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-800/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-blue-700/30">
              <Mail size={14} className="text-blue-200" />
              <span className="hidden md:inline text-blue-100 font-medium">ngiman81@gmail.com</span>
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
        currentView === 'home'
          ? isScrolled 
            ? `${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg` 
            : 'bg-transparent'
          : `${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg`
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 md:space-x-4 group relative">
              {/* Logo Container with Enhanced Styling */}
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Ngimalaya Adventure Logo" 
                  className="h-18 w-16 md:h-25 md:w-25 object-contain group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                />
              </div>
              
              {/* Brand Text with Enhanced Typography */}
              <div className="flex flex-col">
                <h1 className={`text-xl md:text-3xl font-bold tracking-tight leading-none transition-all duration-300 ${
                  currentView === 'home'
                    ? isScrolled 
                      ? `${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}` 
                      : 'text-white group-hover:text-blue-200'
                    : `${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}`
                }`}>
                  Ngimalaya Adventure
                </h1>
                <div className="flex items-center space-x-2 mt-1">
                  <p className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                    currentView === 'home'
                      ? isScrolled ? `${isDarkMode ? 'text-gray-300' : 'text-gray-500'}` : 'text-gray-300'
                      : `${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`
                  }`}>
                    Nepal
                  </p>
                  <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                    currentView === 'home'
                      ? isScrolled ? 'bg-blue-400' : 'bg-blue-300'
                      : 'bg-blue-400'
                  }`}></div>
                  <p className={`text-xs font-medium transition-colors duration-300 ${
                    currentView === 'home'
                      ? isScrolled ? 'text-gray-400' : 'text-gray-400'
                      : 'text-gray-400'
                  }`}>
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
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id && currentView === 'home';
                const isBackButton = item.name.startsWith('Back');
                const isHomeButton = item.name === 'Home' && currentView !== 'home';
                
                // Define different button styles based on type
                const getButtonStyles = () => {
                  if (isActive) {
                    return 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 border-2 border-blue-500';
                  }
                  
                  if (isBackButton) {
                    return isScrolled 
                      ? `${isDarkMode 
                          ? 'bg-orange-600/90 text-white hover:bg-orange-500 border-2 border-orange-500/50 shadow-lg shadow-orange-600/20' 
                          : 'bg-orange-600 text-white hover:bg-orange-700 border-2 border-orange-500 shadow-lg shadow-orange-600/20'
                        }` 
                      : 'bg-orange-600/90 text-white hover:bg-orange-500 border-2 border-orange-400/50 backdrop-blur-sm shadow-lg shadow-orange-600/25';
                  }
                  
                  if (isHomeButton) {
                    return isScrolled 
                      ? `${isDarkMode 
                          ? 'bg-green-600/90 text-white hover:bg-green-500 border-2 border-green-500/50 shadow-lg shadow-green-600/20' 
                          : 'bg-green-600 text-white hover:bg-green-700 border-2 border-green-500 shadow-lg shadow-green-600/20'
                        }` 
                      : 'bg-green-600/90 text-white hover:bg-green-500 border-2 border-green-400/50 backdrop-blur-sm shadow-lg shadow-green-600/25';
                  }
                  
                  // Regular menu items
                  return isScrolled 
                    ? `${isDarkMode 
                        ? 'text-gray-200 hover:text-white hover:bg-blue-600/20 hover:shadow-lg border-2 border-transparent hover:border-blue-500/30' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md border-2 border-transparent hover:border-blue-200'
                      }` 
                    : 'text-white hover:text-blue-200 hover:bg-white/10 backdrop-blur-sm hover:shadow-lg border-2 border-transparent hover:border-white/20';
                };
                
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      if ('action' in item && item.action) {
                        item.action();
                      } else {
                        setActiveSection(item.id);
                        // For home view, scroll to section
                        if (currentView === 'home') {
                          const element = document.getElementById(item.id);
                          if (element) {
                            element.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }
                        }
                      }
                    }}
                    className={`group relative flex items-center space-x-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${getButtonStyles()}`}
                  >
                    <IconComponent 
                      size={18} 
                      className={`transition-all duration-300 ${
                        isActive || isBackButton || isHomeButton
                          ? 'text-white' 
                          : 'group-hover:scale-110'
                      }`} 
                    />
                    <span className="hidden lg:inline">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Enhanced glow effect for special buttons */}
                    {(isBackButton || isHomeButton) && (
                      <div className="absolute inset-0 rounded-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-sm"
                           style={{
                             background: isBackButton 
                               ? 'linear-gradient(45deg, rgba(234, 88, 12, 0.3), rgba(251, 146, 60, 0.3))' 
                               : 'linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(74, 222, 128, 0.3))'
                           }}>
                      </div>
                    )}
                  </button>
                );
              })}
              
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
              
              <ThemeToggle />
              
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 group overflow-hidden"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
          <div className={`md:hidden border-t backdrop-blur-md ${
            isDarkMode 
              ? 'bg-gray-800/95 border-gray-700' 
              : 'bg-white/95 border-gray-200'
          }`}>
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id && currentView === 'home';
                const isBackButton = item.name.startsWith('Back');
                const isHomeButton = item.name === 'Home' && currentView !== 'home';
                
                // Define different mobile button styles based on type
                const getMobileButtonStyles = () => {
                  if (isActive) {
                    return 'bg-blue-600 text-white shadow-lg border-2 border-blue-500';
                  }
                  
                  if (isBackButton) {
                    return isDarkMode 
                      ? 'bg-orange-600/90 text-white hover:bg-orange-500 border-2 border-orange-500/50 shadow-lg shadow-orange-600/20' 
                      : 'bg-orange-600 text-white hover:bg-orange-700 border-2 border-orange-500 shadow-lg shadow-orange-600/20';
                  }
                  
                  if (isHomeButton) {
                    return isDarkMode 
                      ? 'bg-green-600/90 text-white hover:bg-green-500 border-2 border-green-500/50 shadow-lg shadow-green-600/20' 
                      : 'bg-green-600 text-white hover:bg-green-700 border-2 border-green-500 shadow-lg shadow-green-600/20';
                  }
                  
                  // Regular menu items
                  return isDarkMode 
                    ? 'text-gray-200 hover:text-white hover:bg-blue-600/20 hover:shadow-md border-2 border-transparent hover:border-blue-500/30' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md border-2 border-transparent hover:border-blue-200';
                };
                
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if ('action' in item && item.action) {
                        item.action();
                      } else {
                        setActiveSection(item.id);
                        // For home view, scroll to section
                        if (currentView === 'home') {
                          const element = document.getElementById(item.id);
                          if (element) {
                            element.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }
                        }
                      }
                    }}
                    className={`group w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden ${getMobileButtonStyles()}`}
                  >
                    <IconComponent 
                      size={20} 
                      className={`transition-all duration-300 z-10 ${
                        isActive || isBackButton || isHomeButton
                          ? 'text-white' 
                          : 'group-hover:scale-110'
                      }`} 
                    />
                    <span className="font-semibold z-10">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse z-10"></div>
                    )}
                    
                    {/* Enhanced mobile button effects */}
                    {(isBackButton || isHomeButton) && (
                      <>
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                             style={{
                               background: isBackButton 
                                 ? 'linear-gradient(135deg, rgba(234, 88, 12, 0.4), rgba(251, 146, 60, 0.4))' 
                                 : 'linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(74, 222, 128, 0.4))'
                             }}>
                        </div>
                        <div className="ml-auto">
                          {isBackButton && <span className="text-xs bg-orange-500/20 text-orange-100 px-2 py-1 rounded-full">Back</span>}
                          {isHomeButton && <span className="text-xs bg-green-500/20 text-green-100 px-2 py-1 rounded-full">Home</span>}
                        </div>
                      </>
                    )}
                  </button>
                );
              })}
              
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Theme:
                  </span>
                  <ThemeToggle />
                </div>
                
                <button 
                  onClick={() => {
                    setIsBookingModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group overflow-hidden"
                >
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                </button>
              </div>
            </div>
          </div>
        )}
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
