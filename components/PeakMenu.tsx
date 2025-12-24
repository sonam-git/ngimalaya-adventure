import React from 'react';

interface PeakMenuProps {
  peaks: Array<{ id: string; name: string }>;
  selectedPeak: string;
  onSelect: (peakId: string) => void;
}

const PeakMenu: React.FC<PeakMenuProps> = ({ peaks, selectedPeak, onSelect }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 shadow-md border-b border-blue-300 -mx-4 xl:-mx-6 2xl:-mx-8 3xl:-mx-12 4xl:-mx-16"
      aria-label="Peak expedition menu"
    >
      <ul className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 py-3 px-4 xl:px-6 2xl:px-8 3xl:px-12 4xl:px-16 justify-start xl:justify-center 2xl:justify-center 3xl:justify-center 4xl:justify-center">
        {peaks.map(peak => (
          <li key={peak.id} className="flex-shrink-0 w-max">
            <button
              type="button"
              onClick={() => onSelect(peak.id)}
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
    </div>
  );
};

export default PeakMenu;
