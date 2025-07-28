import React, { createContext, useContext, useState } from 'react';

interface SidebarContextType {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ 
      isExpanded, 
      setIsExpanded, 
      isMobileMenuOpen, 
      setIsMobileMenuOpen 
    }}>
      {children}
    </SidebarContext.Provider>
  );
};
