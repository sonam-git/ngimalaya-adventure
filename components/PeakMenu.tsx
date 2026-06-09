'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface PeakMenuProps {
  peaks: Array<{ id: string; name: string }>;
  selectedPeak: string;
  onSelect: (peakId: string) => void;
}

const PeakMenu: React.FC<PeakMenuProps> = ({ peaks, selectedPeak, onSelect }) => {
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
  }, [peaks, checkScroll]);

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
  }, [selectedPeak]);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });

  return (
    <div
      className="relative bg-white dark:bg-gray-900 shadow-md border-b border-blue-300 -mx-4 xl:-mx-6 2xl:-mx-8 3xl:-mx-12 4xl:-mx-16"
      aria-label="Peak expedition menu"
    >
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="xl:hidden absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center w-10 bg-white dark:bg-gray-900"
          aria-label="Scroll left"
        >
          <MdChevronLeft className="w-6 h-6 text-blue-700 dark:text-blue-300 drop-shadow" />
        </button>
      )}
      <ul ref={scrollRef} className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 py-3 px-4 xl:px-6 2xl:px-8 3xl:px-12 4xl:px-16 justify-start xl:justify-center 2xl:justify-center 3xl:justify-center 4xl:justify-center">
        {peaks.map(peak => (
          <li key={peak.id} className="flex-shrink-0 w-max">
            <button
              type="button"
              onClick={() => onSelect(peak.id)}
              data-active={selectedPeak === peak.id ? 'true' : undefined}
              className={`transition-colors duration-200 px-4 py-2 rounded-md font-semibold text-blue-900 dark:text-white whitespace-nowrap
                ${selectedPeak === peak.id
                  ? 'bg-blue-100 dark:bg-blue-900 shadow-md scale-105'
                  : 'bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-800 hover:scale-105'}
                focus:outline-none focus:ring-2 focus:ring-blue-300`
              }
            >
              {peak.name}
            </button>
          </li>
        ))}
      </ul>
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="xl:hidden absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center w-10 bg-white dark:bg-gray-900"
          aria-label="Scroll right"
        >
          <MdChevronRight className="w-6 h-6 text-blue-700 dark:text-blue-300 drop-shadow" />
        </button>
      )}
    </div>
  );
};

export default PeakMenu;
