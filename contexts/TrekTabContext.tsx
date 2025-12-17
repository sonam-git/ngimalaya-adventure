/* eslint-disable react-refresh/only-export-components */
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TrekTabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TrekTabContext = createContext<TrekTabContextType | undefined>(undefined);

export const TrekTabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <TrekTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TrekTabContext.Provider>
  );
};

export const useTrekTab = () => {
  const context = useContext(TrekTabContext);
  if (context === undefined) {
    return { activeTab: 'overview', setActiveTab: () => {} };
  }
  return context;
};
