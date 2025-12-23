'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Home, User, Mountain, Flag, Binoculars, Mail, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import BookingModal from './BookingModal';
import PrayerFlagBorder from './PrayerFlagBorder';
import GoogleTranslateClient from './GoogleTranslateClient';
import PeakMenu from './PeakMenu';
import SafariMenu from './SafariMenu';
import TrekMenu from './TrekMenu';
import TrekDetailTabs from './TrekDetailTabs';
import SafariDetailTabs from './SafariDetailTabs';
import PeakDetailTabs from './PeakDetailTabs';
import { useTrekTab } from '../contexts/TrekTabContext';
import { useSafariTab } from '../contexts/SafariTabContext';
import { usePeakTab } from '../contexts/PeakTabContext';
import { Trek, Region, PeakExpedition, SafariPackage } from '@/lib/types';

const Header: React.FC = () => {
  const { activeTab, setActiveTab } = useTrekTab();
  const { activeTab: safariActiveTab, setActiveTab: setSafariActiveTab } = useSafariTab();
  const { activeTab: peakActiveTab, setActiveTab: setPeakActiveTab } = usePeakTab();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [trekRegions, setTrekRegions] = useState<Region[]>([]);
  const [allTreks, setAllTreks] = useState<Trek[]>([]);
  const [allPeaks, setAllPeaks] = useState<PeakExpedition[]>([]);
  const [allSafaris, setAllSafaris] = useState<SafariPackage[]>([]);
  const { isDarkMode } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  // Force font re-application after hydration to prevent FOUC
  useEffect(() => {
    // Inject a high-priority style tag that can't be overridden
    const styleId = 'jaini-purva-force-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        /* ULTRA HIGH PRIORITY - Force Jaini Purva */
        html body .jaini-purva-regular,
        html body .jaini-purva-regular *,
        html body div.jaini-purva-regular,
        html body span.jaini-purva-regular {
          font-family: 'Jaini Purva', system-ui !important;
          font-weight: 400 !important;
        }
        
        /* Override any font tags inside */
        html body .jaini-purva-regular font,
        html body .jaini-purva-regular font * {
          font-family: inherit !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    const applyFonts = () => {
      const elements = document.querySelectorAll('.jaini-purva-regular');
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Use setProperty with important flag
        htmlEl.style.setProperty('font-family', '"Jaini Purva", system-ui', 'important');
        htmlEl.style.fontWeight = '400';
      });
    };
    
    // Apply immediately
    applyFonts();
    
    // Apply repeatedly for the first 5 seconds to catch any overrides
    const intervals = [100, 200, 500, 1000, 2000, 5000];
    const timers = intervals.map(delay => setTimeout(applyFonts, delay));
    
    // Less aggressive interval - every 5 seconds instead of 2 (prevent flicker)
    const interval = setInterval(applyFonts, 5000);
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(interval);
    };
  }, []);

  // Fetch regions and treks from Storyblok on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch regions
        const regionsResponse = await fetch('/api/regions');
        if (regionsResponse.ok) {
          const regionsData = await regionsResponse.json();
          setTrekRegions(regionsData);
        }

        // Fetch treks
        const treksResponse = await fetch('/api/treks');
        if (treksResponse.ok) {
          const treksData = await treksResponse.json();
          setAllTreks(treksData);
        }

        // Fetch peaks
        const peaksResponse = await fetch('/api/peaks');
        if (peaksResponse.ok) {
          const peaksData = await peaksResponse.json();
          setAllPeaks(peaksData);
        }

        // Fetch safaris
        const safarisResponse = await fetch('/api/safaris');
        if (safarisResponse.ok) {
          const safarisData = await safarisResponse.json();
          setAllSafaris(safarisData);
        }
      } catch (error) {
        console.error('Error fetching data in Header:', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we should show the RegionMenu (for single region or single trek pages)
  const shouldShowRegionMenu = pathname.startsWith('/regions/') || 
                                (pathname.startsWith('/treks/') && pathname !== '/treks');
  
  // Check if we should show the PeakMenu
  const shouldShowPeakMenu = pathname === '/peak-expedition' || 
                              pathname.startsWith('/peak-expedition/');
  
  // Check if we should show the SafariMenu
  const shouldShowSafariMenu = pathname === '/safari' || 
                                pathname.startsWith('/safari/');
  
  // Check if we should show the TrekMenu (only on individual trek pages, not region pages)
  const shouldShowTrekMenu = pathname.startsWith('/treks/') && 
                             pathname !== '/treks' && 
                             !pathname.startsWith('/regions/');
  
  // Get current region from pathname
  const getCurrentRegion = () => {
    if (pathname.startsWith('/regions/')) {
      const regionId = pathname.split('/').pop();
      const region = trekRegions.find(r => r.id === regionId);
      return region?.name || '';
    }
    // For individual trek pages, get region from trek data
    if (pathname.startsWith('/treks/') && pathname !== '/treks') {
      const trekId = pathname.split('/').pop();
      const trek = allTreks.find(t => t.id === trekId);
      return trek?.region || '';
    }
    return '';
  };

  // Get current peak ID from pathname
  const getCurrentPeakId = () => {
    if (pathname.startsWith('/peak-expedition/') && pathname !== '/peak-expedition') {
      return pathname.split('/').pop() || '';
    }
    return '';
  };

  // Get current safari ID from pathname
  const getCurrentSafariId = () => {
    if (pathname.startsWith('/safari/') && pathname !== '/safari') {
      return pathname.split('/').pop() || '';
    }
    return '';
  };

  const handleRegionSelect = (regionName: string) => {
    const region = trekRegions.find(r => r.name === regionName);
    if (region) {
      router.push(`/regions/${region.id}`);
    }
  };

  const handlePeakSelect = (peakId: string) => {
    router.push(`/peak-expedition/${peakId}`);
  };

  const handleSafariSelect = (safariId: string) => {
    router.push(`/safari/${safariId}`);
  };

  // Get current trek ID from pathname
  const getCurrentTrekId = () => {
    if (pathname.startsWith('/treks/') && pathname !== '/treks' && !pathname.startsWith('/regions/')) {
      return pathname.split('/').pop() || '';
    }
    return '';
  };

  // Get treks from the same region as the current trek
  const getTreksFromCurrentRegion = () => {
    const currentRegion = getCurrentRegion();
    if (!currentRegion) return [];
    return allTreks.filter(trek => 
      trek.region === currentRegion && 
      trek.adventureType === 'trekking'
    );
  };

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Trekking', href: '/regions', icon: Mountain },
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
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? isDarkMode 
            ? 'bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
        <nav className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
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
              
              {/* Title Column - Visible on all screens - Two rows matching logo height */}
              <div className="notranslate flex flex-col justify-center gap-0.5 min-w-[120px] sm:min-w-[160px] h-14 md:h-16 lg:h-18">
                {/* First Row - Ngimalaya */}
                 <div 
                  className={`jaini-purva-regular font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none transition-all duration-300 whitespace-nowrap ${
                    isDarkMode ? 'text-gray-100 group-hover:text-primary-400' : 'text-blue-900 group-hover:text-primary-600'
                  } group-hover:scale-105`}
                  style={{ fontFamily: '"Jaini Purva", system-ui !important' }}
                >
                  Ngimalaya
                </div>
                {/* Second Row - Adventure with Sliding Underline */}
                <div className="relative">
                  <div 
                    className={`jaini-purva-regular font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none transition-all duration-300 whitespace-nowrap ${
                      isDarkMode ? 'text-gray-100 group-hover:text-primary-400' : 'text-blue-900 group-hover:text-primary-600'
                    } group-hover:scale-105`}
                    style={{ fontFamily: '"Jaini Purva", system-ui !important' }}
                  >
                    Adventure
                  </div>
                  {/* Sliding Horizontal Line */}
                  <div className={`absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out ${
                    isDarkMode ? 'bg-gradient-to-r from-primary-400 to-yellow-400' : 'bg-gradient-to-r from-blue-600 to-yellow-600'
                  }`}></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Only show above 1024px */}
            <div className="hidden min-[1024px]:flex items-center gap-1">
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

            {/* Mobile Controls - Show below 1024px */}
            <div className="min-[1024px]:hidden flex items-center gap-3">
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

          {/* Prayer flag border: always visible below header, full width across screen */}
          <div className={`relative h-2 -mx-4 md:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16 transition-opacity duration-500 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute left-0 right-0 w-full">
              <PrayerFlagBorder />
            </div>
          </div>

          {/* Region Menu - shown only on region and trek detail pages (hidden when mobile menu is open) */}
          {shouldShowRegionMenu && !isMobileMenuOpen && (
            <div className="relative -mx-4 md:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16">
              <div className="w-screen bg-white dark:bg-gray-900 shadow-md border-b border-blue-300">
                <ul className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 py-3 px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 justify-start md:justify-center lg:justify-center xl:justify-center 2xl:justify-center">
                {trekRegions.map(region => {
                  const isSelected = getCurrentRegion() === region.name;
                  return (
                    <li key={region.id} className="flex-shrink-0 w-max">
                      <button
                        type="button"
                        onClick={() => handleRegionSelect(region.name)}
                        className={`transition-colors duration-200 px-4 py-2 rounded-md font-semibold text-blue-900 dark:text-white whitespace-nowrap
                          ${isSelected
                            ? 'bg-blue-100 dark:bg-blue-900 shadow-md scale-105'
                            : 'bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-800 hover:scale-105'}
                          focus:outline-none focus:ring-2 focus:ring-blue-300`
                        }
                      >
                        {region.name.replace(/ Region$/i, '')}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            </div>
          )}

          {/* Trek Menu - shown only on individual trek detail pages (below Region Menu, hidden when mobile menu is open) */}
          {shouldShowTrekMenu && !isMobileMenuOpen && (
            <>
              <TrekMenu
                treks={getTreksFromCurrentRegion()}
                selectedTrekId={getCurrentTrekId()}
                regionName={getCurrentRegion()}
              />
              <TrekDetailTabs
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </>
          )}

          {/* Peak Menu - shown only on peak expedition and peak detail pages (hidden when mobile menu is open) */}
          {shouldShowPeakMenu && !isMobileMenuOpen && (
            <>
              <PeakMenu
                peaks={allPeaks.map(peak => ({ id: peak.id, name: peak.name }))}
                selectedPeak={getCurrentPeakId()}
                onSelect={handlePeakSelect}
              />
              {getCurrentPeakId() && (
                <PeakDetailTabs
                  activeTab={peakActiveTab}
                  onTabChange={setPeakActiveTab}
                />
              )}
            </>
          )}

          {/* Safari Menu - shown only on safari and safari detail pages (hidden when mobile menu is open) */}
          {shouldShowSafariMenu && !isMobileMenuOpen && (
            <>
              <SafariMenu
                safaris={allSafaris.map(safari => ({ id: safari.id, name: safari.name }))}
                selectedSafari={getCurrentSafariId()}
                onSelect={handleSafariSelect}
              />
              {getCurrentSafariId() && (
                <SafariDetailTabs
                  activeTab={safariActiveTab}
                  onTabChange={setSafariActiveTab}
                />
              )}
            </>
          )}

          {/* Mobile Menu - Show below 1024px */}
          {isMobileMenuOpen && (
            <div className="min-[1024px]:hidden absolute left-0 right-0 top-full z-50 bg-white dark:bg-gray-900 shadow-2xl border-t border-gray-200 dark:border-gray-700 animate-slideDown">
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
