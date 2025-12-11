'use client';
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { useTheme } from "../contexts/ThemeContext";

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-900 text-gray-300'
      }`}
      style={{
        backgroundImage: "url('/assets/images/logo.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 40%',
        backgroundSize: '60%',
        minHeight: '400px',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gray-900/90 pointer-events-none" />
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto h-full">
          {/* Column 1: Company Info, Recognized By */}
          <div className="flex flex-col gap-3 h-full">
            {/* Logo removed from here */}
            <span className="text-2xl font-display font-bold text-white mb-1">Ngimalaya Adventure</span>
            <p className="text-gray-400 leading-relaxed text-sm mb-2">Authentic Himalayan adventures, trekking, and expeditions with expert local guides. Experience Nepal with a trusted, recognized company.</p>
            <h3 className="text-xl font-display font-bold text-white mt-2 mb-2">Recognized By</h3>
            <div className="flex flex-row items-center gap-3 mb-2">
              <Image src="/assets/images/logos/NMA-Logo-removebg-preview.png" alt="NMA" width={50} height={50} className="object-contain" />
              <Image src="/assets/images/logos/nepalgov.svg" alt="Nepal Government" width={50} height={50} className="object-contain" />
              <Image src="/assets/images/logos/ntb-removebg-preview.png" alt="NTB" width={50} height={50} className="object-contain" />
              <Image src="/assets/images/logos/taan-removebg-preview.png" alt="TAAN" width={50} height={50} className="object-contain" />
            </div>
          </div>

          {/* Column 2: Main Links */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/treks" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Trekking</Link></li>
              <li><Link href="/peak-expedition" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Peak Expedition</Link></li>
              <li><Link href="/safari" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Safari</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Popular Treks */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Popular Treks</h3>
            <ul className="space-y-2">
              <li><Link href="/treks/everest-base-camp" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Everest Base Camp</Link></li>
              <li><Link href="/treks/annapurna-base-camp" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Annapurna Base Camp</Link></li>
              <li><Link href="/treks/manaslu-circuit" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Manaslu Circuit</Link></li>
              <li><Link href="/treks/langtang-valley" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Langtang Valley</Link></li>
              <li><Link href="/treks/kanchenjunga" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Kanchenjunga</Link></li>
              <li><Link href="/treks/ghorepani-poonhill" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Ghorepani Poonhill</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-primary-500 font-bold">Phone:</span>
                <a href="tel:+9779800000000" className="text-gray-400 hover:text-primary-500 transition-colors">+977 9800000000</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-500 font-bold">Email:</span>
                <a href="mailto:info@ngimalaya.com" className="text-gray-400 hover:text-primary-500 transition-colors">info@ngimalaya.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-500 font-bold">WhatsApp:</span>
                <a href="https://wa.me/9779800000000" className="text-gray-400 hover:text-primary-500 transition-colors">+977 9800000000</a>
              </div>
            </div>
            <div className="flex gap-3 mt-2 mb-4">
              <a href="https://www.facebook.com/Ngimalaya" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.35c0-.734-.593-1.326-1.326-1.326z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48a12.07 12.07 0 0 0-17.04 0c-4.7 4.7-4.7 12.32 0 17.02a12.07 12.07 0 0 0 17.04 0c4.7-4.7 4.7-12.32 0-17.02zm-8.52 18.02c-1.7 0-3.36-.33-4.92-.98l-5.18 1.36 1.36-5.18c-.65-1.56-.98-3.22-.98-4.92 0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.14-.07-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.79-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.17-.17.36-.45.54-.68.18-.23.24-.39.36-.65.12-.26.06-.48-.03-.67-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.45-.33.36-1.27 1.24-1.27 3.02 0 1.78 1.3 3.5 1.48 3.74.18.24 2.56 3.91 6.2 5.34.87.36 1.55.57 2.08.73.87.28 1.66.24 2.29.15.7-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.68-.41z"/></svg>
              </a>
            </div>
            {/* We accept section moved here */}
            <span className="text-sm font-display font-semibold text-white mb-1 block">We accept</span>
            <div className="flex flex-row items-center gap-2">
              <Image src="/assets/images/payment.png" alt="Visa" width={80} height={48} className="object-contain rounded bg-white p-1" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center pb-24 md:pb-8">
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} Ngimalaya Adventure Nepal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
