/* eslint-disable react-refresh/only-export-components */
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SafariTabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SafariTabContext = createContext<SafariTabContextType | undefined>(undefined);

export const SafariTabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <SafariTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </SafariTabContext.Provider>
  );
};

export const useSafariTab = () => {
  const context = useContext(SafariTabContext);
  if (context === undefined) {
    return { activeTab: 'overview', setActiveTab: () => {} };
  }
  return context;
};
