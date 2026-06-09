'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Trek } from '@/lib/types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface TrekMenuProps {
  treks: Trek[];
  selectedTrekId: string;
  regionName: string;
}

const TrekMenu: React.FC<TrekMenuProps> = ({ treks, selectedTrekId }) => {
  const router = useRouter();
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
  }, [treks, checkScroll]);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });

  const handleTrekSelect = (trekId: string) => {
    router.push(`/treks/${trekId}`);
  };

  return (
    <div
      className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 shadow-md border-b border-blue-200 dark:border-gray-700 -mx-4 xl:-mx-6 2xl:-mx-8 3xl:-mx-12 4xl:-mx-16"
      aria-label="Trek menu"
    >
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="xl:hidden absolute left-0 top-0 bottom-0 z-10 flex items-center px-1 bg-gradient-to-r from-blue-50 dark:from-gray-800 to-transparent"
          aria-label="Scroll left"
        >
          <MdChevronLeft className="w-6 h-6 text-blue-700 dark:text-blue-300 drop-shadow" />
        </button>
      )}
      <ul ref={scrollRef} className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 py-2 px-4 xl:px-6 2xl:px-8 3xl:px-12 4xl:px-16 justify-start xl:justify-center 2xl:justify-center 3xl:justify-center 4xl:justify-center">
        {treks.map(trek => (
          <li key={trek.id} className="flex-shrink-0 w-max">
            <button
              type="button"
              onClick={() => handleTrekSelect(trek.id)}
              className={`transition-all duration-200 px-3 py-1.5 rounded-md text-sm font-medium text-blue-900 dark:text-white whitespace-nowrap
                ${selectedTrekId === trek.id
                  ? 'bg-blue-200 dark:bg-blue-800 shadow-md scale-105'
                  : 'bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-700 hover:scale-105'}
                focus:outline-none focus:ring-2 focus:ring-blue-300`
              }
              title={trek.name}
            >
              {trek.name.length > 25 ? `${trek.name.substring(0, 25)}...` : trek.name}
            </button>
          </li>
        ))}
      </ul>
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="xl:hidden absolute right-0 top-0 bottom-0 z-10 flex items-center px-1 bg-gradient-to-l from-blue-50 dark:from-gray-800 to-transparent"
          aria-label="Scroll right"
        >
          <MdChevronRight className="w-6 h-6 text-blue-700 dark:text-blue-300 drop-shadow" />
        </button>
      )}
    </div>
  );
};

export default TrekMenu;
