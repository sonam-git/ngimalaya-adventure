'use client';
import React from 'react';
import { 
  Calendar, 
  Mountain, 
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
  MapPin
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface TrekDetailTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TrekDetailTabs: React.FC<TrekDetailTabsProps> = ({ activeTab, onTabChange }) => {
  const { isDarkMode } = useTheme();

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: Mountain },
    { id: 'highlights', label: 'Highlights', icon: Star },
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'includes', label: 'Cost Includes', icon: CheckCircle },
    { id: 'excludes', label: 'Cost Excludes', icon: XCircle },
    { id: 'requirements', label: 'Prerequisites', icon: AlertTriangle },
  ];

  return (
    <div
      className="sticky top-[156px] md:top-[172px] z-[33] bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 w-full"
      aria-label="Trek detail tabs"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex-shrink-0 px-4 md:px-6 py-3 md:py-4 font-semibold text-xs md:text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 border-b-2 ${
                  activeTab === tab.id
                    ? `${isDarkMode ? 'text-blue-400 border-blue-400 bg-blue-900/20' : 'text-blue-600 border-blue-600 bg-blue-50'}`
                    : `${isDarkMode ? 'text-gray-400 hover:text-gray-200 border-transparent hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 border-transparent hover:bg-gray-100'}`
                }`}
              >
                <IconComponent size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrekDetailTabs;
