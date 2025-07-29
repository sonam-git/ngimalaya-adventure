import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logoImage from '../assets/images/logo.png';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treks', href: '#treks' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const popularDestinations = [
    'Everest Base Camp',
    'Annapurna Circuit',
    'Manaslu Circuit',
    'Gokyo Lakes',
    'Kanchenjunga Base Camp',
    'Upper Mustang'
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      name: "Facebook",
      url: "https://www.facebook.com/Ngimalaya",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram size={20} />,
      name: "Instagram", 
      url: "#",
      color: "hover:text-pink-400"
    },
    {
      icon: <MessageCircle size={20} />,
      name: "WhatsApp",
      url: "#",
      color: "hover:text-green-400"
    }
  ];

  return (
    <footer className={`${
      isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-900 text-white'
    } transition-colors duration-300`}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
            src={logoImage} 
            alt="Ngimalaya Adventure Logo" 
            className="h-24 w-24 md:h-32 md:w-32 object-contain mx-auto  drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
                <div>
                  <h3 className="text-xl font-bold">Ngimalaya Adventure</h3>
                  <p className="text-sm text-gray-400">Nepal</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Where Culture Meets the Clouds, and Every Trek Tells a Story! 
                Experience the Himalayas with over 20 years of expertise and passion.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Popular Treks</h4>
              <ul className="space-y-3">
                {popularDestinations.map((destination, index) => (
                  <li key={index}>
                    <a
                      href="#treks"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={16} />
                  <div className="text-gray-300 text-sm">
                    <p>Sarswatinagar Marg, Kathmandu</p>
                    <p>Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400 flex-shrink-0" size={16} />
                  <a 
                    href="tel:+977980-3499156"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    +977 980-3499156
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400 flex-shrink-0" size={16} />
                  <a 
                    href="mailto:ngiman81@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    ngiman81@gmail.com
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <h5 className="font-medium mb-3 text-sm">Stay Updated</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-blue-400"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                <p>
                  © 2025 Ngimalaya Adventure Nepal. All rights reserved.
                </p>
              </div>
              
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Developed by</span>
                <Code className="text-red-500 fill-current" size={14} />
                <span>Sonam J Sherpa</span>
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
