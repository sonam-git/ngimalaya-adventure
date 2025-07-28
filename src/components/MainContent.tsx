import React from 'react';
import { useSidebar } from '../contexts/SidebarContext';
import Home from './Home';

const MainContent: React.FC = () => {
  const { isExpanded } = useSidebar();

  return (
    <div 
      className={`transition-all duration-300 ${
        isExpanded ? 'lg:ml-64' : 'lg:ml-16'
      }`}
    >
      <Home />
    </div>
  );
};

export default MainContent;
