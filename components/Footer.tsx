'use client';
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import Image from 'next/image';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tours", href: "/treks" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/Ngimalaya", label: "Facebook" },
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
    { icon: <MessageCircle size={20} />, url: "#", label: "WhatsApp" },
  ];

  return (
    <footer className={`transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-900 text-gray-300'
    }`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Recognized By Section */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Recognized By
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-center items-center">
                <Image src="/assets/images/logos/NMA-Logo-removebg-preview.png" alt="NMA" width={80} height={80} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/assets/images/logos/nepalgov.svg" alt="Nepal Government" width={80} height={80} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/assets/images/logos/ntb-removebg-preview.png" alt="NTB" width={80} height={80} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/assets/images/logos/taan-removebg-preview.png" alt="TAAN" width={80} height={80} className="object-contain" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  Kathmandu, Nepal
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="tel:+977" className="text-gray-400 hover:text-primary-500 transition-colors">
                  +977 98XXXXXXXX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:info@ngimalaya.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                  info@ngimalaya.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} Ngimalaya Adventure Nepal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
