"use client";
import { useEffect, useState, useRef } from 'react';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi', flag: '🇮🇳' },
  { code: 'ja', label: 'Japanese', flag: '🇯🇵' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
  { code: 'de', label: 'German', flag: '🇩🇪' },
  { code: 'it', label: 'Italian', flag: '🇮🇹' },
  { code: 'es', label: 'Spanish', flag: '🇪🇸' },
  { code: 'zh-CN', label: 'Chinese', flag: '🇨🇳' },
  { code: 'ko', label: 'Korean', flag: '🇰🇷' },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: Record<string, unknown>;
  }
}

const GoogleTranslateClient = () => {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Aggressive function to hide ALL Google Translate UI elements
    const hideAllGoogleUI = () => {
      // Hide banner iframe
      const banner = document.querySelector('iframe.goog-te-banner-frame');
      if (banner) {
        (banner as HTMLElement).style.display = 'none';
        (banner as HTMLElement).style.visibility = 'hidden';
        (banner as HTMLElement).style.opacity = '0';
        (banner as HTMLElement).style.position = 'absolute';
        (banner as HTMLElement).style.pointerEvents = 'none';
      }

      // Hide menu frame
      const menuFrame = document.querySelector('iframe.goog-te-menu-frame');
      if (menuFrame) {
        (menuFrame as HTMLElement).style.display = 'none';
        (menuFrame as HTMLElement).style.visibility = 'hidden';
      }

      // Remove body modifications
      if (document.body) {
        document.body.style.top = '0px';
        document.body.style.position = '';
      }

      // Hide skiptranslate elements
      const skipTranslate = document.querySelectorAll('.skiptranslate');
      skipTranslate.forEach(el => {
        if (!(el as HTMLElement).classList.contains('goog-te-combo')) {
          (el as HTMLElement).style.display = 'none';
          (el as HTMLElement).style.visibility = 'hidden';
        }
      });

      // Hide all iframes from translate.googleapis.com
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        if (iframe.src.includes('translate.googleapis.com')) {
          iframe.style.display = 'none';
          iframe.style.visibility = 'hidden';
          iframe.style.position = 'absolute';
          iframe.style.pointerEvents = 'none';
        }
      });

      // Hide the gadget container
      const gadget = document.querySelector('.goog-te-gadget');
      if (gadget) {
        (gadget as HTMLElement).style.display = 'none';
      }
    };

    // Initialize Google Translate
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = function() {
        if (window.google && window.google.translate) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          new (window.google as any).translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: LANGUAGES.map(l => l.code).join(','),
            autoDisplay: false,
            layout: 0, // Simple layout
          }, 'google_translate_element');
          
          // Hide UI immediately after initialization
          setTimeout(hideAllGoogleUI, 100);
        }
      };
      const gtScript = document.createElement('script');
      gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(gtScript);
    }

    // Aggressive hiding with multiple strategies
    // 1. Immediate hide on load
    window.addEventListener('load', hideAllGoogleUI);

    // 2. Periodic checks (every 500ms for first 10 seconds)
    const interval = setInterval(hideAllGoogleUI, 500);
    setTimeout(() => clearInterval(interval), 10000);

    // 3. MutationObserver to catch dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            const element = node as HTMLElement;
            
            // Check if it's a Google Translate iframe
            if (element.tagName === 'IFRAME' && 
                (element.classList.contains('goog-te-banner-frame') ||
                 element.classList.contains('goog-te-menu-frame') ||
                 (element as HTMLIFrameElement).src.includes('translate.googleapis.com'))) {
              element.style.display = 'none';
              element.style.visibility = 'hidden';
              element.style.position = 'absolute';
              element.style.pointerEvents = 'none';
            }

            // Check for skiptranslate divs
            if (element.classList && element.classList.contains('skiptranslate')) {
              if (!element.classList.contains('goog-te-combo')) {
                element.style.display = 'none';
                element.style.visibility = 'hidden';
              }
            }
          }
        });
      });
      
      // Also fix body modifications on any mutation
      if (document.body.style.top && document.body.style.top !== '0px') {
        document.body.style.top = '0px';
        document.body.style.position = '';
      }
    });

    // Start observing the document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style']
    });

    // Cleanup
    return () => {
      window.removeEventListener('load', hideAllGoogleUI);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const handleChange = (lang: string) => {
    setCurrentLang(lang);
    setOpen(false);
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const currentFlag = LANGUAGES.find(l => l.code === currentLang)?.flag || '🌐';

  return (
    <div className="relative flex items-center ml-2">
      <button
        className="px-2 py-2 rounded-md focus:outline-none text-xl transition-all duration-200 shadow-lg bg-white dark:bg-gray-700"
        style={{
          border: 'none',
          boxShadow: '0 4px 16px rgba(34,139,34,0.18), 0 1.5px 6px rgba(0,0,0,0.10)',
        }}
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        onMouseEnter={e => {
          if (document.body.classList.contains('dark')) {
            e.currentTarget.style.boxShadow = '0 0 12px 2px #fff, 0 4px 16px rgba(255,255,255,0.10)';
            e.currentTarget.style.backgroundColor = '#374151'; // Tailwind gray-700
          } else {
            e.currentTarget.style.boxShadow = '0 0 12px 2px #eab308, 0 4px 16px rgba(234,179,8,0.18)'; // yellow-500
            e.currentTarget.style.backgroundColor = '';
          }
        }}
        onMouseLeave={e => {
          if (document.body.classList.contains('dark')) {
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(34,139,34,0.18), 0 1.5px 6px rgba(0,0,0,0.10)';
            e.currentTarget.style.backgroundColor = '#374151'; // Tailwind gray-700
          } else {
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(34,139,34,0.18), 0 1.5px 6px rgba(0,0,0,0.10)';
            e.currentTarget.style.backgroundColor = '';
          }
        }}
      >
        {currentFlag}
      </button>
      {open && (
        <div ref={dropdownRef} className="absolute right-0 w-36 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50" style={{ marginTop: '25rem' }}>
          <ul className="py-1">
            {LANGUAGES.map(lang => (
              <li key={lang.code}>
                <button
                  className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md ${currentLang === lang.code ? 'bg-blue-100 dark:bg-gray-800 font-bold' : ''}`}
                  onClick={() => handleChange(lang.code)}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm">{lang.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div id="google_translate_element" style={{ display: 'none' }} />
    </div>
  );
};

export default GoogleTranslateClient;
