'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, User, Mountain, Flag, Binoculars, Mail, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import BookingModal from './BookingModal';
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
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

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
  const regionScrollRef = useRef<HTMLUListElement>(null);
  const [regionCanScrollLeft, setRegionCanScrollLeft] = useState(false);
  const [regionCanScrollRight, setRegionCanScrollRight] = useState(false);
  const { isDarkMode } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const checkRegionScroll = useCallback(() => {
    const el = regionScrollRef.current;
    if (!el) return;
    setRegionCanScrollLeft(el.scrollLeft > 0);
    setRegionCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkRegionScroll();
    const el = regionScrollRef.current;
    if (el) el.addEventListener('scroll', checkRegionScroll, { passive: true });
    return () => el?.removeEventListener('scroll', checkRegionScroll);
  }, [trekRegions, checkRegionScroll]);

  // Scroll active region to center in header menu
  useEffect(() => {
    const container = regionScrollRef.current;
    if (!container) return;
    const activeEl = container.querySelector('[data-active="true"]') as HTMLElement | null;
    if (!activeEl) return;
    container.scrollTo({
      left: activeEl.offsetLeft - container.clientWidth / 2 + activeEl.offsetWidth / 2,
      behavior: 'smooth',
    });
  }, [pathname]);

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

  // Determine if the header should always have a background (for pages without hero sections)
  const shouldAlwaysHaveBackground = pathname === '/regions' || 
                                      pathname.startsWith('/regions/') ||
                                      pathname.startsWith('/treks/') ||
                                      pathname === '/peak-expedition' || 
                                      pathname.startsWith('/peak-expedition/') ||
                                      pathname === '/safari' || 
                                      pathname.startsWith('/safari/') ||
                                      pathname === '/about' ||
                                      pathname === '/contact' ||
                                      pathname === '/services';

  // Trekking, peak, and safari sections should keep a full blurred header in both themes.
  const useSectionFullBlurHeader = pathname === '/regions' ||
                                   pathname.startsWith('/regions/') ||
                                   pathname === '/treks' ||
                                   pathname.startsWith('/treks/') ||
                                   pathname === '/peak-expedition' ||
                                   pathname.startsWith('/peak-expedition/') ||
                                   pathname === '/safari' ||
                                   pathname.startsWith('/safari/');

  // Check if we're on the homepage (for transparent header with white text)
  const isHomePage = pathname === '/';
  
  // Use hero mode (white text/icons) when on homepage and not scrolled
  const useHeroMode = isHomePage && !isScrolled && isDarkMode;

  // Light theme styling for pages that allow transparent header treatment
  const useLightTopStyle = !isDarkMode && !shouldAlwaysHaveBackground && !isMobileMenuOpen;

  // Make desktop menu more legible once page is scrolled (or on content-heavy pages).
  const useScrolledMenuStyle = isScrolled || shouldAlwaysHaveBackground;

  // Light glass effect only for the 6 desktop menu items
  const useLightGlassMenuItems = !isDarkMode && !shouldAlwaysHaveBackground && !isMobileMenuOpen;

  // Check if we should show the RegionMenu (for regions page, single region, or single trek pages)
  const shouldShowRegionMenu = pathname === '/regions' ||
                                pathname.startsWith('/regions/') || 
                                (pathname.startsWith('/treks/') && pathname !== '/treks');
  
  // Check if we should show the PeakMenu
  const shouldShowPeakMenu = pathname === '/peak-expedition' || 
                              pathname.startsWith('/peak-expedition/');
  
  // Check if we should show the SafariMenu
  const shouldShowSafariMenu = pathname === '/safari' || 
                                pathname.startsWith('/safari/');
  
  // Check if we should show the TrekMenu:
  // - on region detail pages (as associated sub-tabs)
  // - on individual trek pages
  const shouldShowTrekMenu = pathname.startsWith('/regions/') ||
                             (pathname.startsWith('/treks/') &&
                              pathname !== '/treks' &&
                              !pathname.startsWith('/regions/'));
  
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

  const normalizeRegionName = (name: string) =>
    name.toLowerCase().replace(/\s+region$/i, '').trim();

  const handleRegionSelect = (regionName: string) => {
    const region = trekRegions.find(r => r.name === regionName);
    if (!region) return;

    const regionTreks = allTreks.filter(trek =>
      trek.adventureType === 'trekking' &&
      normalizeRegionName(trek.region) === normalizeRegionName(region.name)
    );

    // Open the first trek by default so its detail sub-tabs are immediately meaningful.
    if (regionTreks.length > 0) {
      setActiveTab('overview');
      router.push(`/treks/${regionTreks[0].id}`);
      return;
    }

    router.push(`/regions/${region.id}`);
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
    const normalizedCurrentRegion = normalizeRegionName(currentRegion);
    return allTreks.filter(trek =>
      trek.adventureType === 'trekking' &&
      normalizeRegionName(trek.region) === normalizedCurrentRegion
    );
  };

  // On region pages, default to first associated trek as active in sub-menu.
  const getEffectiveSelectedTrekId = () => {
    const currentTrekId = getCurrentTrekId();
    if (currentTrekId) return currentTrekId;
    if (pathname.startsWith('/regions/')) {
      const regionTreks = getTreksFromCurrentRegion();
      return regionTreks[0]?.id || '';
    }
    return '';
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

  const handleMobileNav = (href: string) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* Main Header */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isMobileMenuOpen
          ? isDarkMode
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-[#fdfcf6] backdrop-blur-sm shadow-sm'
          : isScrolled
            ? isDarkMode
              ? 'bg-gray-900/85 backdrop-blur-sm shadow-md min-[1024px]:bg-transparent min-[1024px]:backdrop-blur-none min-[1024px]:shadow-none'
              : 'bg-white/85 backdrop-blur-sm shadow-sm border-b border-black/10 min-[1024px]:bg-transparent min-[1024px]:backdrop-blur-none min-[1024px]:shadow-none min-[1024px]:border-b-0'
          : useSectionFullBlurHeader
            ? isDarkMode
              ? 'bg-gray-900/85 backdrop-blur-md shadow-lg'
              : 'bg-white/85 backdrop-blur-md shadow-md border-b border-black/10'
          : 'bg-transparent'
      }`}>
        <nav className="w-full px-4 xl:px-6 2xl:px-8 3xl:px-12 4xl:px-16 relative">
          <div className="flex items-center justify-between h-24 xl:h-28 transition-all duration-500">
            {/* Logo Only - Clean and Simple */}
            <Link href="/" className="group ml-4 sm:ml-6 xl:ml-8 2xl:ml-10">
              <img
                src={(isDarkMode || useHeroMode) ? '/assets/images/logos/logo-bw.png' : '/assets/images/logos/logo-light.png'}
                alt="Ngimalaya Adventure Nepal"
                className="h-20 sm:h-24 xl:h-28 2xl:h-32 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation - Only show above 1024px */}
            <div className="hidden min-[1024px]:flex items-center">
              <div className={`flex items-center overflow-hidden rounded-2xl transition-all duration-500 ${
                useScrolledMenuStyle
                  ? isDarkMode
                    ? 'bg-gray-900/75 backdrop-blur-sm border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
                    : 'bg-black/20 backdrop-blur-sm border border-black/20 shadow-[0_8px_30px_rgba(15,23,42,0.18)]'
                  : useLightGlassMenuItems
                  ? 'bg-white/25 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(15,23,42,0.08)]'
                  : ''
              }`}>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group inline-flex items-center gap-2 px-4 xl:px-5 2xl:px-6 h-[3.25rem] xl:h-[3.75rem] font-display font-bold uppercase tracking-[0.14em] text-sm border-r transition-all duration-300 hover:underline decoration-2 underline-offset-[10px] ${
                        active
                          ? (isDarkMode || useHeroMode)
                            ? 'bg-amber-500/20 text-amber-300 border-white/20'
                            : useScrolledMenuStyle
                              ? 'bg-[#1f4f1f] text-white border-white/25 shadow-lg'
                            : useLightTopStyle
                              ? 'bg-[#2f6f2f] text-white border-[#d4ba84] shadow-lg'
                              : 'bg-primary-600 text-white border-primary-300 shadow-lg'
                          : (isDarkMode || useHeroMode)
                            ? 'text-white border-white/20 hover:text-white'
                            : isHomePage
                              ? useLightTopStyle
                                ? 'text-white border-[#d4ba84] hover:text-white'
                                : 'text-white border-gray-200 hover:text-white'
                              : 'text-blue-900 border-blue-900/25 hover:text-blue-950'
                      }`}
                    >
                      <Icon size={18} className={`transition-transform duration-300 group-hover:scale-110 ${
                        active
                          ? (isDarkMode || useHeroMode)
                            ? 'text-amber-300'
                            : 'text-white'
                          : (isDarkMode || useHeroMode)
                            ? 'text-white'
                            : 'text-current'
                      }`} />
                      <span>
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
              
              {/* Book Now Button */}
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="group inline-flex items-center gap-2 h-14 xl:h-16 px-5 xl:px-6 ml-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-display font-bold uppercase tracking-[0.14em] text-sm"
              >
                <Calendar size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <span>
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
              {/* Modern Animated Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                  isMobileMenuOpen
                    ? 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-xl shadow-primary-400/50 scale-95'
                    : (isDarkMode || useHeroMode)
                      ? 'bg-white/10 hover:bg-white/20 border border-white/30 shadow-lg backdrop-blur-sm' 
                      : useLightTopStyle
                        ? 'bg-white hover:bg-blue-50 shadow-md hover:shadow-lg border border-blue-900/30'
                        : 'bg-gradient-to-r from-sky-50/80 via-blue-50/80 to-sky-50/80 hover:from-sky-100 hover:to-blue-100 shadow-md hover:shadow-lg border border-sky-100/50 backdrop-blur-sm'
                }`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <div className="relative w-6 h-5 flex flex-col justify-center items-center">
                  {/* Top Line */}
                  <span
                    className={`absolute w-6 h-0.5 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen 
                        ? 'bg-white rotate-45 translate-y-0' 
                        : (isDarkMode || useHeroMode)
                          ? 'bg-white -translate-y-2' 
                          : 'bg-blue-900 -translate-y-2'
                    }`}
                  />
                  {/* Middle Line */}
                  <span
                    className={`absolute w-6 h-0.5 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen 
                        ? 'bg-white opacity-0 scale-0' 
                        : (isDarkMode || useHeroMode)
                          ? 'bg-white opacity-100 scale-100' 
                          : 'bg-blue-900 opacity-100 scale-100'
                    }`}
                  />
                  {/* Bottom Line */}
                  <span
                    className={`absolute w-6 h-0.5 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen 
                        ? 'bg-white -rotate-45 translate-y-0' 
                        : (isDarkMode || useHeroMode)
                          ? 'bg-white translate-y-2' 
                          : 'bg-blue-900 translate-y-2'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Region Menu - shown only on region and trek detail pages (hidden when mobile menu is open) */}
          {shouldShowRegionMenu && !isMobileMenuOpen && (
            <div className="relative -mx-4 xl:-mx-6 2xl:-mx-8 3xl:-mx-12 4xl:-mx-16">
              <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 shadow-md border-b border-blue-200 dark:border-gray-700">
                <button
                  onClick={() => regionScrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' })}
                  disabled={!regionCanScrollLeft}
                  className="xl:hidden absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center w-10 bg-blue-50 dark:bg-gray-800 disabled:opacity-45 disabled:cursor-not-allowed"
                  aria-label="Scroll left"
                >
                  <MdChevronLeft className="w-6 h-6 text-blue-700 dark:text-blue-300 drop-shadow" />
                </button>
                <ul ref={regionScrollRef} className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 py-2 px-4 xl:px-6 2xl:px-8 3xl:px-12 4xl:px-16 justify-start xl:justify-center 2xl:justify-center 3xl:justify-center 4xl:justify-center">
                {trekRegions.map(region => {
                  const isSelected = getCurrentRegion() === region.name;
                  return (
                    <li key={region.id} className="flex-shrink-0 w-max">
                      <button
                        type="button"
                        onClick={() => handleRegionSelect(region.name)}
                        data-active={isSelected ? 'true' : undefined}
                        className={`transition-all duration-200 px-3 py-1.5 rounded-md text-sm font-medium text-blue-900 dark:text-white whitespace-nowrap
                          ${isSelected
                            ? 'bg-blue-200 dark:bg-blue-800 shadow-md scale-105'
                            : 'bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-700 hover:scale-105'}
                          focus:outline-none focus:ring-2 focus:ring-blue-300`
                        }
                      >
                        {region.name.replace(/ Region$/i, '')}
                      </button>
                    </li>
                  );
                })}
              </ul>
                <button
                  onClick={() => regionScrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' })}
                  disabled={!regionCanScrollRight}
                  className="xl:hidden absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center w-10 bg-blue-50 dark:bg-gray-800 disabled:opacity-45 disabled:cursor-not-allowed"
                  aria-label="Scroll right"
                >
                  <MdChevronRight className="w-6 h-6 text-blue-700 dark:text-blue-300 drop-shadow" />
                </button>
              </div>
            </div>
          )}

          {/* Trek Menu - shown on region detail and trek detail pages (below Region Menu, hidden when mobile menu is open) */}
          {shouldShowTrekMenu && !isMobileMenuOpen && (
            <>
              <TrekMenu
                treks={getTreksFromCurrentRegion()}
                selectedTrekId={getEffectiveSelectedTrekId()}
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
            <div className="min-[1024px]:hidden absolute left-0 right-0 top-full z-50 animate-slideDown">
              <div className="flex items-start">
                <div className={`w-[78%] max-w-[360px] shadow-2xl border-r rounded-br-2xl ${
                  isDarkMode
                    ? 'bg-gray-900/95 border-gray-700'
                    : 'bg-[#fdfcf6] border-[#d8c496]'
                }`}>
                  <div className="px-5 py-5">
                    <div className="space-y-2">
                      {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);
                        return (
                          <button
                            type="button"
                            key={item.name}
                            onClick={() => handleMobileNav(item.href)}
                            className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl border transition-all duration-300 ${
                              active
                                ? isDarkMode
                                  ? 'bg-blue-800 text-white border-blue-600 shadow-lg'
                                  : 'bg-blue-900 text-white border-[#d8c496] shadow-lg'
                                : isDarkMode
                                  ? 'bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700'
                                  : 'bg-white text-gray-900 border-[#d8c496] hover:bg-gray-50'
                            }`}
                            style={{
                              animationDelay: `${index * 50}ms`,
                              animation: 'fadeInUp 0.3s ease-out forwards',
                              opacity: 0
                            }}
                          >
                            <Icon size={22} className={active ? 'text-white' : isDarkMode ? 'text-gray-200' : 'text-gray-900'} />
                            <span className="font-display font-bold text-lg leading-none">
                              {item.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-[#d8c496]'}`}>
                      <button
                        onClick={() => {
                          setIsBookingModalOpen(true);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 font-display font-bold uppercase tracking-wider text-base transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl flex items-center justify-center gap-3"
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
                </div>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 bg-black/20 backdrop-blur-[1px]"
                  aria-label="Close menu overlay"
                />
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
