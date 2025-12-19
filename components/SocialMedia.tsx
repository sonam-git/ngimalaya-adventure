'use client';
import React from 'react';
import SectionHeader from './SectionHeader';

const SocialMedia: React.FC = () => {
  return (
    <section 
      id="social-media" 
      className="scroll-offset-mobile relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-blue-600 dark:border-blue-400/60 py-12 md:py-16 mt-12"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <SectionHeader
          subtitle="Stay Connected"
          title="Follow Our Journey"
        />

        <p className="font-body text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
          Join our community on Facebook to see the latest adventures, trekking updates, and beautiful moments from the Himalayas.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ngima N Sherpa Profile Card (Personal Profile - Cannot Embed) */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-200 dark:border-blue-700 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-6 text-center text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
                </svg>
                Ngima N Sherpa
              </h3>
              
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <div>
                  <p className="text-lg font-display font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Founder & Lead Guide
                  </p>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Experienced mountain guide and trek leader sharing adventures from the Himalayas. Follow for personal updates, trek stories, and mountain experiences.
                  </p>
                </div>

                {/* Visit Profile Button */}
                <a
                  href="https://www.facebook.com/nima.sherpa.10236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full max-w-sm"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
                  </svg>
                  Visit Personal Profile
                </a>

                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  Note: Personal Facebook profiles cannot be embedded. Click above to visit the profile directly.
                </p>
              </div>
            </div>

            {/* Ngimalaya Adventure Facebook Feed */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-blue-200 dark:border-blue-700">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6 text-center text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
                </svg>
                Ngimalaya Adventure
              </h3>
              
              {/* Mobile: horizontal scroll */}
              <div className="w-full h-[500px] rounded-xl overflow-x-auto whitespace-nowrap sm:hidden scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNgimalaya&tabs=timeline&width=600&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="600"
                  height="500"
                  style={{ border: 'none', overflow: 'auto' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Ngimalaya Adventure Facebook Feed"
                  aria-label="Ngimalaya Adventure Facebook Feed"
                ></iframe>
              </div>
              
              {/* Desktop: normal display */}
              <div className="w-full h-[500px] rounded-xl overflow-hidden sm:block hidden">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNgimalaya&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="500"
                  style={{ border: 'none', overflow: 'auto' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Ngimalaya Adventure Facebook Feed"
                  aria-label="Ngimalaya Adventure Facebook Feed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
