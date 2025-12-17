'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Trek } from '../data/treks';

interface TrekMenuProps {
  treks: Trek[];
  selectedTrekId: string;
  regionName: string;
}

const TrekMenu: React.FC<TrekMenuProps> = ({ treks, selectedTrekId, regionName }) => {
  const router = useRouter();

  const handleTrekSelect = (trekId: string) => {
    router.push(`/treks/${trekId}`);
  };

  return (
    <div
      className="sticky top-[156px] md:top-[172px] z-[34] bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 shadow-md border-b border-blue-200 dark:border-gray-700 w-full"
      aria-label="Trek menu"
    >
      <div className="px-4 py-2">
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 text-center ">
          {regionName} Treks
        </p>
        <ul className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 pb-2 w-full justify-start">
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
    </div>
  );
};

export default TrekMenu;
