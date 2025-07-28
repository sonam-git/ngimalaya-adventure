import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sonam J Sherpa
            </h3>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and delivering exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors duration-300 group"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-600 transition-colors duration-300 group"
                aria-label="Portfolio"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Certifications', href: '#certifications' },
                { name: 'Skills', href: '#technical-skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-300 dark:text-gray-400 text-sm">
                Ready to work together?
              </p>
              <p className="text-gray-300 dark:text-gray-400 text-sm">
                Let's build something amazing!
              </p>
              <button 
                onClick={() => {
                  // Email obfuscation - decode at runtime
                  const user = 'sherpa.sjs';
                  const domain = 'gmail.com';
                  const subject = encodeURIComponent('Hello Sonam - Let\'s Work Together');
                  const body = encodeURIComponent('Hi Sonam,\n\nI found your portfolio and I\'m interested in working with you.\n\nPlease let me know your availability.\n\nBest regards,');
                  window.location.href = `mailto:${user}@${domain}?subject=${subject}&body=${body}`;
                }}
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 mt-4 cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 dark:border-gray-800 pt-8">
          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                © {currentYear} Sonam J Sherpa. All rights reserved.
              </p>
               <div className="mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <div className="text-xs sm:text-sm text-gray-400 font-medium tracking-wider uppercase">Built with</div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {['React', 'TypeScript', 'Tailwind', 'Vite'].map((tech, index) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-200 text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            </div>
            
            {/* Back to Top */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center space-x-2 text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Back to top"
            >
              <span className="text-sm">Back to Top</span>
              <svg 
                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Footer Elements */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-2 text-xs text-gray-500 dark:text-gray-600">
            <span>•</span>
            <span>Crafted with passion</span>
            <span>•</span>
            <span>Always learning</span>
            <span>•</span>
            <span>Building the future</span>
            <span>•</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
