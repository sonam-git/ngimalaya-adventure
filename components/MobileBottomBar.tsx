'use client';
import React from 'react';
import { Facebook, MessageCircle, Mail, Calendar, Phone } from 'lucide-react';

interface MobileBottomBarProps {
  onBookNow?: () => void;
}

const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onBookNow }) => {
  return (
    <nav
      aria-label="Mobile navigation"
      role="navigation"
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50 md:hidden mobile-bottom-shadow transition-colors duration-300"
    >
      {/* Horizontally scrollable container - shows 3 items, rest are scrollable */}
      <div className="flex overflow-x-auto px-2 py-2 gap-2 scrollbar-hide snap-x snap-mandatory">
        {/* Phone */}
        <a
          href="tel:+9779803499156"
          className="flex-shrink-0 w-[calc(33.333%-0.5rem)] flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group snap-start"
          aria-label="Call Ngimalaya Adventure"
        >
          <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
            <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors whitespace-nowrap">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/9779803499156"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-[calc(33.333%-0.5rem)] flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group snap-start"
          aria-label="Contact via WhatsApp"
        >
          <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
            <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors whitespace-nowrap">WhatsApp</span>
        </a>

        {/* Book Now - Featured */}
        <button
          onClick={onBookNow}
          className="flex-shrink-0 w-[calc(33.333%-0.5rem)] flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group relative snap-start"
          aria-label="Book your adventure now"
        >
          <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900 group-hover:scale-110 transition-transform duration-200 relative" aria-hidden="true">
            {/* Pulsing ring animation */}
            <div className="absolute inset-0 rounded-lg bg-primary-500 opacity-20 animate-ping"></div>
            <Calendar className="w-4 h-4 text-primary-600 dark:text-primary-400 relative z-10" />
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors whitespace-nowrap">Book Now</span>
        </button>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/Ngimalaya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-[calc(33.333%-0.5rem)] flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group snap-start"
          aria-label="Visit Ngimalaya Adventure on Facebook"
        >
          <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
            <Facebook className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">Facebook</span>
        </a>

        {/* Email */}
        <a
          href="mailto:ngiman81@gmail.com"
          className="flex-shrink-0 w-[calc(33.333%-0.5rem)] flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group snap-start"
          aria-label="Send email to Ngimalaya Adventure"
        >
          <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
            <Mail className="w-4 h-4 text-red-600 dark:text-red-400" />
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors whitespace-nowrap">Email</span>
        </a>
      </div>
      
      {/* Subtle indicator line at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-b-full" aria-hidden="true"></div>
    </nav>
  );
};

export default MobileBottomBar;
