'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface PeakTabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PeakTabContext = createContext<PeakTabContextType | undefined>(undefined);

export function PeakTabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PeakTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </PeakTabContext.Provider>
  );
}

export function usePeakTab() {
  const context = useContext(PeakTabContext);
  if (!context) {
    throw new Error('usePeakTab must be used within a PeakTabProvider');
  }
  return context;
}
