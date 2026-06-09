'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface SafariMenuProps {
  safaris: Array<{ id: string; name: string }>;
  selectedSafari: string;
  onSelect: (safariId: string) => void;
}

const SafariMenu: React.FC<SafariMenuProps> = ({ safaris, selectedSafari, onSelect }) => {
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
  }, [safaris, checkScroll]);

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
  }, [selectedSafari]);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });

  return (
    <div
      className="relative bg-white dark:bg-gray-900 shadow-md border-b border-green-300 -mx-4 xl:-mx-6 2xl:-mx-8 3xl:-mx-12 4xl:-mx-16"
      aria-label="Safari adventure menu"
    >
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="xl:hidden absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center w-10 bg-white dark:bg-gray-900"
          aria-label="Scroll left"
        >
          <MdChevronLeft className="w-6 h-6 text-green-700 dark:text-green-300 drop-shadow" />
        </button>
      )}
      <ul ref={scrollRef} className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 py-3 px-4 xl:px-6 2xl:px-8 3xl:px-12 4xl:px-16 justify-start xl:justify-center 2xl:justify-center 3xl:justify-center 4xl:justify-center">
        {safaris.map(safari => (
          <li key={safari.id} className="flex-shrink-0 w-max">
            <button
              type="button"
              onClick={() => onSelect(safari.id)}
              data-active={selectedSafari === safari.id ? 'true' : undefined}
              className={`transition-colors duration-200 px-4 py-2 rounded-md font-semibold text-green-900 dark:text-white whitespace-nowrap
                ${selectedSafari === safari.id
                  ? 'bg-green-100 dark:bg-green-900 shadow-md scale-105'
                  : 'bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-800 hover:scale-105'}
                focus:outline-none focus:ring-2 focus:ring-green-300`
              }
            >
              {safari.name}
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
          <MdChevronRight className="w-6 h-6 text-green-700 dark:text-green-300 drop-shadow" />
        </button>
      )}
    </div>
  );
};

export default SafariMenu;
