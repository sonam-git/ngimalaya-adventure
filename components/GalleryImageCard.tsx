'use client';

import React from 'react';
import Image from 'next/image';

interface GalleryImageCardProps {
  title: string;
  description: string;
  image: string;
  region?: string;
  trek?: string;
  index?: number;
  onClick?: () => void;
}

const GalleryImageCard: React.FC<GalleryImageCardProps> = ({
  title,
  description,
  image,
  region,
  trek,
  index = 0,
  onClick,
}) => {
  // Keyboard handler for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  // If interactive, use button or accessible div
  const isButton = Boolean(onClick);
  const Wrapper: React.ElementType = isButton ? 'button' : 'div';
  const wrapperProps = isButton
    ? {
        type: 'button' as const,
        tabIndex: 0,
        onClick,
        onKeyDown: handleKeyDown,
        'aria-label': `View details for ${title}`,
        className:
          'group bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-2 flex flex-col h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/70',
      }
    : {
        className:
          'group bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-2 flex flex-col h-full',
      };

  return (
    <Wrapper {...wrapperProps}>
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-52 lg:h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden shrink-0 rounded-2xl">
        <Image 
          src={image} 
          alt={`Photo of ${title}`} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badges Container - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {/* Region Badge */}
          {region && (
            <div className="bg-white/95 dark:bg-gray-800/95 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full shadow-lg border border-blue-200 dark:border-blue-700 backdrop-blur-sm" title={`Region: ${region}`} aria-label={`Region: ${region}`}>
              <span className="text-xs font-bold uppercase tracking-wide">{region}</span>
            </div>
          )}
          
          {/* Trek Badge */}
          {trek && (
            <div className="bg-white/95 dark:bg-gray-800/95 text-green-600 dark:text-green-400 px-3 py-1.5 rounded-full shadow-lg border border-green-200 dark:border-green-700 backdrop-blur-sm" title={`Trek: ${trek}`} aria-label={`Trek: ${trek}`}>
              <span className="text-xs font-bold uppercase tracking-wide">{trek}</span>
            </div>
          )}
        </div>
        
        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-tl-full"></div>
      </div>

      {/* Details */}
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col">
        {/* Title */}
        <div className="mb-3">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight times">
            {title}
          </h4>
        </div>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 grow mb-4">
          {description}
        </p>
        
        {/* Decorative bottom accent */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
              Ngimalaya Adventure
            </span>
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default GalleryImageCard;
