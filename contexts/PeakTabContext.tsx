/* eslint-disable react-refresh/only-export-components */
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PeakTabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PeakTabContext = createContext<PeakTabContextType | undefined>(undefined);

export const PeakTabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PeakTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </PeakTabContext.Provider>
  );
};

export const usePeakTab = () => {
  const context = useContext(PeakTabContext);
  if (context === undefined) {
    return { activeTab: 'overview', setActiveTab: () => {} };
  }
  return context;
};
