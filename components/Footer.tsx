'use client';
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { useTheme } from "../contexts/ThemeContext";
import { trekRegions } from "../data/treks";
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-900 text-gray-300'
      }`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/sketch-trek.png')",
        }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gray-900/90 pointer-events-none" />
      
      <div className="container relative z-[1] mx-auto px-4 py-12 max-w-7xl">
        {/* LARGE SCREEN LAYOUT */}
        <div className="hidden lg:block">
          {/* First Row: 3 Columns */}
          <div className="grid grid-cols-3 gap-12 mb-12">
            {/* Column 1: Ngimalaya Adventure */}
            <div className="flex flex-col">
              <h3 className="text-3xl jaini-purva-regular font-bold text-white mb-4">Ngimalaya Adventure</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">
                Authentic Himalayan adventures, trekking, and expeditions with expert local guides. Experience Nepal with a trusted, recognized company.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-primary-400 font-semibold text-sm">Phone:</span>
                    <a href="tel:+9779803499156" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">+977 9803499156</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-primary-400 font-semibold text-sm">Email:</span>
                    <a href="mailto:ngiman81@gmail.com" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">ngiman81@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-primary-400 font-semibold text-sm">WhatsApp:</span>
                    <a href="https://wa.me/9779803499156" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">+977 9803499156</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-primary-400 font-semibold text-sm">Address:</span>
                    <span className="text-gray-300 text-sm">Sarswatinagar, Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col">
              <h3 className="text-2xl jaini-purva-regular font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                <li><Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">About Us</Link></li>
                <li><Link href="/treks" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">Trekking</Link></li>
                <li><Link href="/peak-expedition" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">Peak Expedition</Link></li>
                <li><Link href="/safari" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">Safari</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Popular Treks (All Regions) */}
            <div className="flex flex-col">
              <h3 className="text-2xl jaini-purva-regular font-bold text-white mb-4">Popular Regions</h3>
              <ul className="space-y-2.5">
                {trekRegions.map((region) => (
                  <li key={region.id}>
                    <Link 
                      href={`/treks/regions/${region.id}`} 
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block"
                    >
                      {region.name.replace(/ Region$/i, '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Second Row: 3 Columns */}
          <div className="grid grid-cols-3 gap-12 pt-8 border-t border-gray-700">
            {/* Social Icons */}
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/Ngimalaya" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-primary-500/50">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.35c0-.734-.593-1.326-1.326-1.326z"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-primary-500/50">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="https://wa.me/9779803499156" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-primary-500/50">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48a12.07 12.07 0 0 0-17.04 0c-4.7 4.7-4.7 12.32 0 17.02a12.07 12.07 0 0 0 17.04 0c4.7-4.7 4.7-12.32 0-17.02zm-8.52 18.02c-1.7 0-3.36-.33-4.92-.98l-5.18 1.36 1.36-5.18c-.65-1.56-.98-3.22-.98-4.92 0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.14-.07-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.79-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.17-.17.36-.45.54-.68.18-.23.24-.39.36-.65.12-.26.06-.48-.03-.67-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.45-.33.36-1.27 1.24-1.27 3.02 0 1.78 1.3 3.5 1.48 3.74.18.24 2.56 3.91 6.2 5.34.87.36 1.55.57 2.08.73.87.28 1.66.24 2.29.15.7-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.68-.41z"/></svg>
                </a>
              </div>
            </div>

            {/* Recognized By */}
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-white mb-4">Recognized By</h4>
              <div className="flex flex-row items-center gap-3 flex-wrap">
                <div className="w-14 h-14 bg-white/10 rounded p-2 flex items-center justify-center">
                  <Image src="/assets/images/logos/NMA-Logo-removebg-preview.png" alt="NMA" width={48} height={48} className="object-contain w-full h-full" />
                </div>
                <div className="w-14 h-14 bg-white/10 rounded p-2 flex items-center justify-center">
                  <Image src="/assets/images/logos/nepalgov.svg" alt="Nepal Government" width={48} height={48} className="object-contain w-full h-full" />
                </div>
                <div className="w-14 h-14 bg-white/10 rounded p-2 flex items-center justify-center">
                  <Image src="/assets/images/logos/ntb-removebg-preview.png" alt="NTB" width={48} height={48} className="object-contain w-full h-full" />
                </div>
                <div className="w-14 h-14 bg-white/10 rounded p-2 flex items-center justify-center">
                  <Image src="/assets/images/logos/taan-removebg-preview.png" alt="TAAN" width={48} height={48} className="object-contain w-full h-full" />
                </div>
              </div>
            </div>

            {/* We Accept */}
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-white mb-4">We Accept</h4>
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/images/payment.png" alt="Payment Methods" width={120} height={60} className="object-contain rounded bg-white p-2" />
              </div>
            </div>
          </div>
        </div>

        {/* SMALL SCREEN LAYOUT */}
        <div className="lg:hidden">
          {/* First Row: 2 Columns - Quick Links and Popular Regions */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="text-xl jaini-purva-regular font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">About Us</Link></li>
                <li><Link href="/treks" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">Trekking</Link></li>
                <li><Link href="/peak-expedition" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">Peak Expedition</Link></li>
                <li><Link href="/safari" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">Safari</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block">Contact</Link></li>
              </ul>
            </div>

            {/* Popular Regions */}
            <div className="flex flex-col">
              <h3 className="text-xl jaini-purva-regular font-bold text-white mb-4">Regions</h3>
              <ul className="space-y-2">
                {trekRegions.map((region) => (
                  <li key={region.id}>
                    <Link 
                      href={`/treks/regions/${region.id}`} 
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm block"
                    >
                      {region.name.replace(/ Region$/i, '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ngimalaya Adventure with Contact Info */}
          <div className="flex flex-col mb-8 pb-8 border-b border-gray-700">
            <h3 className="text-2xl jaini-purva-regular font-bold text-white mb-3">Ngimalaya Adventure</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Authentic Himalayan adventures, trekking, and expeditions with expert local guides.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-primary-400 font-semibold">Phone:</span>
                  <a href="tel:+9779803499156" className="text-gray-300 hover:text-primary-400 transition-colors">+977 9803499156</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-primary-400 font-semibold">Email:</span>
                  <a href="mailto:ngiman81@gmail.com" className="text-gray-300 hover:text-primary-400 transition-colors">ngiman81@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-primary-400 font-semibold">WhatsApp:</span>
                  <a href="https://wa.me/9779803499156" className="text-gray-300 hover:text-primary-400 transition-colors">+977 9803499156</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-primary-400 font-semibold">Address:</span>
                  <span className="text-gray-300">Sarswatinagar, Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social, Recognized By, We Accept */}
          <div className="space-y-6">
            {/* Social Icons */}
            <div>
              <h4 className="text-base font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/Ngimalaya" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.35c0-.734-.593-1.326-1.326-1.326z"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="https://wa.me/9779803499156" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48a12.07 12.07 0 0 0-17.04 0c-4.7 4.7-4.7 12.32 0 17.02a12.07 12.07 0 0 0 17.04 0c4.7-4.7 4.7-12.32 0-17.02zm-8.52 18.02c-1.7 0-3.36-.33-4.92-.98l-5.18 1.36 1.36-5.18c-.65-1.56-.98-3.22-.98-4.92 0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.14-.07-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.79-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.17-.17.36-.45.54-.68.18-.23.24-.39.36-.65.12-.26.06-.48-.03-.67-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.45-.33.36-1.27 1.24-1.27 3.02 0 1.78 1.3 3.5 1.48 3.74.18.24 2.56 3.91 6.2 5.34.87.36 1.55.57 2.08.73.87.28 1.66.24 2.29.15.7-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.68-.41z"/></svg>
                </a>
              </div>
            </div>

            {/* Recognized By */}
            <div>
              <h4 className="text-base font-semibold text-white mb-3">Recognized By</h4>
              <div className="flex flex-row items-center gap-3 flex-wrap">
                <div className="w-12 h-12 bg-white/10 rounded p-1.5 flex items-center justify-center">
                  <Image src="/assets/images/logos/NMA-Logo-removebg-preview.png" alt="NMA" width={40} height={40} className="object-contain w-full h-full" />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded p-1.5 flex items-center justify-center">
                  <Image src="/assets/images/logos/nepalgov.svg" alt="Nepal Government" width={40} height={40} className="object-contain w-full h-full" />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded p-1.5 flex items-center justify-center">
                  <Image src="/assets/images/logos/ntb-removebg-preview.png" alt="NTB" width={40} height={40} className="object-contain w-full h-full" />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded p-1.5 flex items-center justify-center">
                  <Image src="/assets/images/logos/taan-removebg-preview.png" alt="TAAN" width={40} height={40} className="object-contain w-full h-full" />
                </div>
              </div>
            </div>

            {/* We Accept */}
            <div>
              <h4 className="text-base font-semibold text-white mb-3">We Accept</h4>
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/images/payment.png" alt="Payment Methods" width={100} height={50} className="object-contain rounded bg-white p-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Common for all screen sizes */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center pb-24 md:pb-8">
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} Ngimalaya Adventure Nepal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
