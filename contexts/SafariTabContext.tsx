'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SafariTabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SafariTabContext = createContext<SafariTabContextType | undefined>(undefined);

export function SafariTabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <SafariTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </SafariTabContext.Provider>
  );
}

export function useSafariTab() {
  const context = useContext(SafariTabContext);
  if (!context) {
    throw new Error('useSafariTab must be used within a SafariTabProvider');
  }
  return context;
}
