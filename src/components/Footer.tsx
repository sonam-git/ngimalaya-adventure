import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Code,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import logoImage from "../assets/images/logo-dark.png";
import nmaLogo from "../assets/images/logos/NMA-Logo-removebg-preview.png";
import nepalGovLogo from "../assets/images/logos/nepalgov.svg";
import ntbLogo from "../assets/images/logos/ntb-removebg-preview.png";
import taanLogo from "../assets/images/logos/taan-removebg-preview.png";
import paymentImage from "../assets/images/payment.png";

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "All Treks", href: "/treks" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const popularDestinations = [
    { name: "Everest Base Camp", href: "/treks/everest-base-camp" },
    { name: "Annapurna Circuit", href: "/treks/annapurna-circuit" },
    { name: "Manaslu Circuit", href: "/treks/manaslu-circuit" },
    { name: "Gokyo Lakes Trek", href: "/treks/ebc-gokyo" },
    { name: "Kanchenjunga Circuit", href: "/treks/kanchenjunga-circuit" },
    { name: "Annapurna Base Camp", href: "/treks/abc-trek" },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      name: "Facebook",
      url: "https://www.facebook.com/Ngimalaya",
      color: "hover:text-blue-400",
    },
    {
      icon: <Instagram size={20} />,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-400",
    },
    {
      icon: <MessageCircle size={20} />,
      name: "WhatsApp",
      url: "#",
      color: "hover:text-green-400",
    },
  ];

  const certificationLogos = [
    {
      name: "Nepal Government",
      logo: nepalGovLogo,
      alt: "Nepal Government Logo",
    },
    {
      name: "Nepal Mountaineering Association",
      logo: nmaLogo,
      alt: "NMA Logo",
    },

    {
      name: "Nepal Tourism Board",
      logo: ntbLogo,
      alt: "NTB Logo",
    },
    {
      name: "Trekking Agencies Association of Nepal",
      logo: taanLogo,
      alt: "TAAN Logo",
    },
  ];

  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-950 text-gray-100" : "bg-blue-900 text-white"
      } transition-colors duration-300`}
    >
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
                Experience the Himalayas with over 20 years of expertise and
                passion.
              </p>

              {/* Social Links */}
              
              <div className="flex space-x-4">
                <p>Follow us : </p>
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
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
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
                    <Link
                      to={destination.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {destination.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-blue-400 flex-shrink-0 mt-1"
                    size={16}
                  />
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

          {/* Single Row with Certifications/Payment and Facebook */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Certification Logos & Payment Methods */}
              <div>
                {/* Certification Logos */}
                <div className="mb-8">
                  <h5 className="text-sm font-medium mb-4 text-gray-300">
                    Certified & Recognized By
                  </h5>
                  <div className="grid grid-cols-4 gap-3 bg-white dark:bg-gray-400 rounded-lg">
                    {certificationLogos.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center p-3 bg-transparent rounded-lg hover:bg-white/10 transition-colors duration-300"
                        title={cert.name}
                      >
                        <img
                          src={cert.logo}
                          alt={cert.alt}
                          className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <h5 className="text-sm font-medium mb-3 text-gray-300">
                    We Accept
                  </h5>
                  <div className="flex justify-center bg-white dark:bg-gray-400 rounded-lg p-2 max-w-xs">
                    <img
                      src={paymentImage}
                      alt="Payment Methods"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Facebook Page Embed */}
              <div>
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">Follow Us on Facebook</h4>
                  <p className="text-gray-400 text-sm">Stay connected with our latest adventures</p>
                </div>
                
                <div className="flex justify-center">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNgimalaya&tabs=timeline&width=400&height=250&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="400"
                    height="130"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="rounded-lg shadow-lg w-full max-w-md"
                    title="Ngimalaya Adventure Facebook Page"
                  />
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
                <p>© 2025 Ngimalaya Adventure Nepal. All rights reserved.</p>
              </div>

              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Developed by</span>
                <Code className="text-red-500 fill-current" size={14} />
                <span>Sonam J Sherpa</span>
              </div>

              <div className="flex space-x-6 text-sm">
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
