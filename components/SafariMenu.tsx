import React from 'react';

interface SafariMenuProps {
  safaris: Array<{ id: string; name: string }>;
  selectedSafari: string;
  onSelect: (safariId: string) => void;
}

const SafariMenu: React.FC<SafariMenuProps> = ({ safaris, selectedSafari, onSelect }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 shadow-md border-b border-green-300 -mx-4 xl:-mx-6 2xl:-mx-8 3xl:-mx-12 4xl:-mx-16"
      aria-label="Safari adventure menu"
    >
      <ul className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 py-3 px-4 xl:px-6 2xl:px-8 3xl:px-12 4xl:px-16 justify-start xl:justify-center 2xl:justify-center 3xl:justify-center 4xl:justify-center">
        {safaris.map(safari => (
          <li key={safari.id} className="flex-shrink-0 w-max">
            <button
              type="button"
              onClick={() => onSelect(safari.id)}
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
    </div>
  );
};

export default SafariMenu;
