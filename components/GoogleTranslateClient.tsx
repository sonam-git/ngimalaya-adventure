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
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = function() {
        if (window.google && window.google.translate) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          new (window.google as any).translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: LANGUAGES.map(l => l.code).join(','),
            autoDisplay: false,
          }, 'google_translate_element');
        }
      };
      const gtScript = document.createElement('script');
      gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(gtScript);
    }
    // Hide Google Translate banner iframe after it loads
    const hideGoogleBar = () => {
      const frame = document.querySelector('iframe.goog-te-banner-frame');
      if (frame) {
        (frame as HTMLIFrameElement).style.display = 'none';
        document.body.style.top = '0px';
      }
    };
    window.addEventListener('load', hideGoogleBar);
    const interval = setInterval(hideGoogleBar, 1000);
    setTimeout(() => clearInterval(interval), 5000);
    return () => {
      window.removeEventListener('load', hideGoogleBar);
      clearInterval(interval);
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
