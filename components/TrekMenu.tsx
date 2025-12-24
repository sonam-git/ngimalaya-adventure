'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Trek } from '@/lib/types';

interface TrekMenuProps {
  treks: Trek[];
  selectedTrekId: string;
  regionName: string;
}

const TrekMenu: React.FC<TrekMenuProps> = ({ treks, selectedTrekId }) => {
  const router = useRouter();

  const handleTrekSelect = (trekId: string) => {
    router.push(`/treks/${trekId}`);
  };

  return (
    <div
      className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 shadow-md border-b border-blue-200 dark:border-gray-700 -mx-4 xl:-mx-6 2xl:-mx-8 3xl:-mx-12 4xl:-mx-16"
      aria-label="Trek menu"
    >
      <ul className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 py-2 px-4 xl:px-6 2xl:px-8 3xl:px-12 4xl:px-16 justify-start xl:justify-center 2xl:justify-center 3xl:justify-center 4xl:justify-center">
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
    </div>
  );
};

export default TrekMenu;
