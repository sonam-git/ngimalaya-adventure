import React, { useState, useEffect } from 'react';
import { useSidebar } from '../contexts/SidebarContext';

interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  href: string;
}

const SideNavBar: React.FC = () => {
  const { isExpanded, setIsExpanded, isMobileMenuOpen, setIsMobileMenuOpen } = useSidebar();
  const [activeSection, setActiveSection] = useState('home');
  const [isUserClicking, setIsUserClicking] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 'home',
      title: 'Home',
      href: '#home',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'about',
      title: 'About',
      href: '#about',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'certifications',
      title: 'Certifications',
      href: '#certifications',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 'technical-skills',
      title: 'Skills',
      href: '#technical-skills',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 'experience',
      title: 'Experience',
      href: '#experience',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2" />
        </svg>
      )
    },
    {
      id: 'education',
      title: 'Education',
      href: '#education',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'projects',
      title: 'Projects',
      href: '#projects',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 'contact',
      title: 'Contact',
      href: '#contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'resume',
      title: 'Resume',
      href: '#resume',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  // Scroll detection to set active section
  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section if user just clicked a menu item
      if (isUserClicking) return;
      
      const sections = ['home', 'about', 'certifications', 'technical-skills', 'experience', 'education', 'projects', 'contact', 'resume'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in viewport (with some offset for header)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isUserClicking]);

  const handleMenuClick = (href: string, id: string) => {
    // Set active section immediately
    setActiveSection(id);
    // Disable scroll detection temporarily
    setIsUserClicking(true);
    
    // Scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Re-enable scroll detection after scrolling is likely complete
    setTimeout(() => {
      setIsUserClicking(false);
    }, 1000); // 1 second delay to allow smooth scroll to complete
    
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`hidden lg:flex fixed left-0 top-25 h-[calc(100vh-5rem)] bg-gray-600 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black shadow-2xl transition-all duration-300 ease-in-out z-40 ${
        isExpanded ? 'w-64' : 'w-16'
      }`}>
        <div className="flex flex-col w-full">
          {/* Menu Items */}
          <nav className="flex-1 py-4">
            {/* Toggle Arrow - positioned above Home */}
            <div className="px-2 mb-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full flex items-center p-2 rounded-lg text-slate-300 dark:text-slate-400 hover:bg-gray-700 dark:hover:bg-slate-700 hover:text-white transition-all duration-200 group ${
                  isExpanded ? 'justify-start' : 'justify-center'
                }`}
                title={isExpanded ? 'Collapse menu' : 'Expand menu'}
              >
                <span className="flex-shrink-0">
                  {isExpanded ? (
                    // Left arrow (collapse)
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  ) : (
                    // Right arrow (expand)
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
                {isExpanded && (
                  <span className="ml-3 text-xs font-medium opacity-0 animate-fade-in-right">
                    Collapse
                  </span>
                )}
                {!isExpanded && (
                  <div className="absolute left-16 bg-gray-700 dark:bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Expand menu
                  </div>
                )}
              </button>
            </div>

            {/* Subtle divider */}
            <div className="mx-2 mb-2">
              <div className="h-px bg-gray-500 dark:bg-slate-700"></div>
            </div>

            <ul className="space-y-2 px-2">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuClick(item.href, item.id)}
                      className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 group ${
                        isExpanded ? 'justify-start' : 'justify-center'
                      } ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'text-slate-200 dark:text-slate-300 hover:bg-gray-700 dark:hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <span className="flex-shrink-0">
                        {item.icon}
                      </span>
                      {isExpanded && (
                        <span className="ml-3 text-sm font-medium opacity-0 animate-fade-in-right">
                          {item.title}
                        </span>
                      )}
                      {!isExpanded && (
                        <div className="absolute left-16 bg-gray-700 dark:bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {item.title}
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gray-600 dark:bg-slate-800 text-white rounded-lg shadow-lg hover:bg-gray-700 dark:hover:bg-slate-700 transition-colors duration-200"
      >
        <svg 
          className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed left-0 top-0 h-full w-64 bg-gray-600 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-500 dark:border-slate-700 mt-16">
            <h2 className="text-white font-semibold">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-gray-700 hover:bg-gray-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 py-4">
            <ul className="space-y-2 px-4">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuClick(item.href, item.id)}
                      className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'text-slate-200 dark:text-slate-300 hover:bg-gray-700 dark:hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <span className="flex-shrink-0">
                        {item.icon}
                      </span>
                      <span className="ml-3 text-sm font-medium">
                        {item.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
