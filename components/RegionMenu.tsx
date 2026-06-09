'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface RegionMenuProps {
  regions: string[];
  selectedRegion: string;
  onSelect: (region: string) => void;
}

const RegionMenu: React.FC<RegionMenuProps> = ({ regions, selectedRegion, onSelect }) => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el?.removeEventListener('scroll', checkScroll);
  }, [regions, checkScroll]);

  // Scroll active item to center when selection changes
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeEl = container.querySelector('[data-active="true"]') as HTMLElement | null;
    if (!activeEl) return;
    container.scrollTo({
      left: activeEl.offsetLeft - container.clientWidth / 2 + activeEl.offsetWidth / 2,
      behavior: 'smooth',
    });
  }, [selectedRegion]);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });

  return (
    <div
      className="sticky top-[104px] xl:top-[120px] z-[35] bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 shadow-lg border-b border-green-300 dark:border-blue-700 -mx-4 xl:-mx-6 2xl:-mx-8 3xl:-mx-12 4xl:-mx-16"
      aria-label="Region menu"
    >
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="xl:hidden absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center w-10 bg-gradient-to-r from-green-100 dark:from-green-900 to-transparent"
          aria-label="Scroll left"
        >
          <MdChevronLeft className="w-6 h-6 text-green-700 dark:text-green-300 drop-shadow" />
        </button>
      )}
      <ul ref={scrollRef} className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 py-3 px-4 xl:px-6 2xl:px-8 3xl:px-12 4xl:px-16 justify-start xl:justify-center 2xl:justify-center 3xl:justify-center 4xl:justify-center">
        {regions.map(region => (
          <li key={region} className="flex-shrink-0 w-max">
            <button
              type="button"
              onClick={() => onSelect(region)}
              data-active={selectedRegion === region ? 'true' : undefined}
              className={`transition-all duration-200 px-4 py-2 rounded-md font-semibold whitespace-nowrap
                ${selectedRegion === region
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400 hover:text-white hover:scale-105'}
                focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-blue-400`
              }
            >
              {region.replace(/ Region$/i, '')}
            </button>
          </li>
        ))}
      </ul>
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="xl:hidden absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center w-10 bg-gradient-to-l from-green-100 dark:from-green-900 to-transparent"
          aria-label="Scroll right"
        >
          <MdChevronRight className="w-6 h-6 text-green-700 dark:text-green-300 drop-shadow" />
        </button>
      )}
    </div>
  );
};

export default RegionMenu;
