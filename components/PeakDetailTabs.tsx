'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { 
  Calendar, 
  Mountain, 
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
  MapPin
} from 'lucide-react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useTheme } from '../contexts/ThemeContext';

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface PeakDetailTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const PeakDetailTabs: React.FC<PeakDetailTabsProps> = ({ activeTab, onTabChange }) => {
  const { isDarkMode } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const hideArrowsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [showArrows, setShowArrows] = useState(true);

  const revealArrows = useCallback(() => {
    setShowArrows(true);
    if (hideArrowsTimerRef.current) {
      clearTimeout(hideArrowsTimerRef.current);
    }
    hideArrowsTimerRef.current = setTimeout(() => {
      setShowArrows(false);
    }, 1500);
  }, []);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    revealArrows();
    const el = scrollRef.current;
    if (el) {
      const handleScroll = () => {
        checkScroll();
        revealArrows();
      };
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [checkScroll, revealArrows]);

  useEffect(() => {
    return () => {
      if (hideArrowsTimerRef.current) {
        clearTimeout(hideArrowsTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    if (activeTab === 'overview') {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
      return;
    }
    const activeEl = container.querySelector('[data-active="true"]') as HTMLElement | null;
    if (!activeEl) return;
    container.scrollTo({
      left: activeEl.offsetLeft - container.clientWidth / 2 + activeEl.offsetWidth / 2,
      behavior: 'smooth',
    });
  }, [activeTab]);

  const handleTabClick = (tabId: string) => {
    // Scroll to top when changing tabs
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    onTabChange(tabId);
  };

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: Mountain },
    { id: 'highlights', label: 'Highlights', icon: Star },
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'includes', label: 'Cost Includes', icon: CheckCircle },
    { id: 'excludes', label: 'Cost Excludes', icon: XCircle },
    { id: 'requirements', label: 'Prerequisites', icon: AlertTriangle },
    { id: 'technicalRequirements', label: 'Technical Requirements', icon: Mountain }
  ];

  return (
    <div
      className="relative bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 -mx-4 md:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16"
      aria-label="Peak detail tabs"
    >
      <button
        onClick={() => {
          revealArrows();
          scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
        }}
        disabled={!canScrollLeft}
        className={`xl:hidden absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center w-10 bg-white dark:bg-gray-900 transition-opacity ${
          showArrows ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${
          canScrollLeft ? 'opacity-100' : 'opacity-40 cursor-not-allowed'
        }`}
        aria-label="Scroll left"
      >
        <MdChevronLeft className="w-6 h-6 text-orange-700 dark:text-orange-300" />
      </button>
      <div
        ref={scrollRef}
        onTouchStart={revealArrows}
        onMouseMove={revealArrows}
        className="flex justify-center overflow-x-auto scrollbar-hide pl-12 pr-12 md:px-6 lg:px-8 xl:px-12 2xl:px-16"
      >
        {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                data-active={activeTab === tab.id ? 'true' : undefined}
                className={`flex-shrink-0 px-4 md:px-6 py-3 md:py-4 font-semibold text-xs md:text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 border-b-2 ${
                  activeTab === tab.id
                    ? `${isDarkMode ? 'text-orange-400 border-orange-400 bg-orange-900/20' : 'text-orange-600 border-orange-600 bg-orange-50'}`
                    : `${isDarkMode ? 'text-gray-400 hover:text-gray-200 border-transparent hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 border-transparent hover:bg-gray-100'}`
                }`}
              >
                <IconComponent size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
      </div>
      <button
        onClick={() => {
          revealArrows();
          scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
        }}
        disabled={!canScrollRight}
        className={`xl:hidden absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center w-10 bg-white dark:bg-gray-900 transition-opacity ${
          showArrows ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${
          canScrollRight ? 'opacity-100' : 'opacity-40 cursor-not-allowed'
        }`}
        aria-label="Scroll right"
      >
        <MdChevronRight className="w-6 h-6 text-orange-700 dark:text-orange-300" />
      </button>
    </div>
  );
};

export default PeakDetailTabs;
