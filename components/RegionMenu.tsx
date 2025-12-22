import React from 'react';

interface RegionMenuProps {
  regions: string[];
  selectedRegion: string;
  onSelect: (region: string) => void;
}

const RegionMenu: React.FC<RegionMenuProps> = ({ regions, selectedRegion, onSelect }) => {
  return (
    <div
      className="sticky top-[104px] md:top-[120px] z-[35] bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 shadow-lg border-b border-green-300 dark:border-blue-700"
      aria-label="Region menu"
    >
      <ul className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 py-3 justify-start md:justify-center lg:justify-center xl:justify-center 2xl:justify-center">
        {regions.map(region => (
          <li key={region} className="flex-shrink-0 w-max">
            <button
              type="button"
              onClick={() => onSelect(region)}
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
    </div>
  );
};

export default RegionMenu;
