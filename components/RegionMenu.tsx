import React from 'react';

interface RegionMenuProps {
  regions: string[];
  selectedRegion: string;
  onSelect: (region: string) => void;
}

const RegionMenu: React.FC<RegionMenuProps> = ({ regions, selectedRegion, onSelect }) => {
  return (
    <nav
      className="sticky top-[calc(6rem+0.5rem)] md:top-[calc(7rem+0.5rem)] z-30 bg-white dark:bg-gray-900 shadow-lg border-b border-blue-300"
      aria-label="Region menu"
    >
      <ul className="flex flex-nowrap overflow-x-auto scrollbar-hide justify-center gap-2 py-2 px-4">
        {regions.map(region => (
          <li key={region} className="flex-shrink-0">
            <button
              type="button"
              onClick={() => onSelect(region)}
              className={`transition-colors duration-200 px-4 py-2 rounded-md font-semibold text-blue-900 dark:text-white whitespace-nowrap
                ${selectedRegion === region
                  ? 'bg-blue-100 dark:bg-blue-900 shadow-md scale-105'
                  : 'bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-800 hover:scale-105'}
                focus:outline-none focus:ring-2 focus:ring-blue-300`
              }
            >
              {region.replace(/ Region$/i, '')}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RegionMenu;
