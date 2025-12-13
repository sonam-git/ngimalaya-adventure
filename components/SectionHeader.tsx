'use client';
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  isDark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  isDark = false
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <div className="mb-3 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-primary-500"></div>
          <p className={`text-sm font-display uppercase tracking-widest ${
            isDark ? 'text-white/80' : isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {subtitle}
          </p>
          <div className="h-px w-12 bg-primary-500"></div>
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl jaini-purva-regular tracking-wide ${
        isDark ? 'text-white' : isDarkMode ? 'text-gray-100' : 'text-gray-900'
      }`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
