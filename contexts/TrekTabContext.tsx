'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface TrekTabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TrekTabContext = createContext<TrekTabContextType | undefined>(undefined);

export function TrekTabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <TrekTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TrekTabContext.Provider>
  );
}

export function useTrekTab() {
  const context = useContext(TrekTabContext);
  if (!context) {
    throw new Error('useTrekTab must be used within a TrekTabProvider');
  }
  return context;
}
