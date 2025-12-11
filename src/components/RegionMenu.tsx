import React from 'react';

interface RegionMenuProps {
  regions: string[];
  selectedRegion: string;
  onSelect: (region: string) => void;
}

const RegionMenu: React.FC<RegionMenuProps> = ({ regions, selectedRegion, onSelect }) => {
  return (
    <nav
      className="sticky top-20 md:top-32 z-40 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 shadow-lg border-b border-blue-300"
      aria-label="Region menu"
    >
      <ul className="flex flex-wrap justify-center gap-2 py-2 px-4">
        {regions.map(region => (
          <li key={region}>
            <button
              type="button"
              onClick={() => onSelect(region)}
              className={`transition-colors duration-200 px-4 py-2 rounded-full font-semibold text-white
                ${selectedRegion === region
                  ? 'bg-blue-900 shadow-md scale-105'
                  : 'bg-blue-500 hover:bg-blue-600 hover:scale-105'}
                focus:outline-none focus:ring-2 focus:ring-blue-300`
              }
            >
              {region}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RegionMenu;
