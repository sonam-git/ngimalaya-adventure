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

interface PeakDetailTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const PeakDetailTabs: React.FC<PeakDetailTabsProps> = ({ activeTab, onTabChange }) => {
  const { isDarkMode } = useTheme();

  const handleTabClick = (tabId: string) => {
    // Scroll to top when changing tabs
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    onTabChange(tabId);
  };

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: Mountain },
    { id: 'highlights', label: 'Highlights', icon: Star },
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'includes', label: 'Cost Includes', icon: CheckCircle },
    { id: 'excludes', label: 'Cost Excludes', icon: XCircle },
    { id: 'requirements', label: 'Prerequisites', icon: AlertTriangle },
    { id: ' technicalRequirements', label: 'Technical Requirements', icon: Mountain }
  ];

  return (
    <div
      className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 -mx-4 md:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16"
      aria-label="Peak detail tabs"
    >
      <div className="flex overflow-x-auto scrollbar-hide px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex-shrink-0 px-4 md:px-6 py-3 md:py-4 font-semibold text-xs md:text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 border-b-2 ${
                  activeTab === tab.id
                    ? `${isDarkMode ? 'text-orange-400 border-orange-400 bg-orange-900/20' : 'text-orange-600 border-orange-600 bg-orange-50'}`
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
  );
};

export default PeakDetailTabs;
