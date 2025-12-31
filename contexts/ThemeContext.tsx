'use client';

import React, { useEffect, useState } from 'react';
import { ThemeContext } from './theme-context';

// Re-export useTheme for backward compatibility with existing imports
export { useTheme } from './use-theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Check for saved theme on mount, default to dark if not set
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme ? savedTheme === 'dark' : true; // Default to dark mode
    setIsDarkMode(isDark);
    
    // Apply theme immediately
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme when state changes
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (isDarkMode) {
      htmlElement.classList.add('dark');
      bodyElement.classList.add('dark');
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      bodyElement.classList.remove('dark');
      htmlElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
