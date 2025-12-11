"use client";
import { useEffect } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    }
  };

  return (
    <>
      {/* Small screens: top left below PrayerFlagBorder */}
      <div className="fixed left-2 top-[calc(6rem+0.5rem)] z-50 md:hidden" style={{ minWidth: '120px' }}>
        <div id="google_translate_element" style={{ display: 'none' }} />
        <select
          className="px-3 py-2 rounded-md border border-gray-300 bg-white dark:bg-gray-800 text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          onChange={handleChange}
          defaultValue="en"
        >
          {LANGUAGES.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.label}
            </option>
          ))}
        </select>
      </div>
      {/* Large screens: top right below PrayerFlagBorder */}
      <div className="fixed right-6 top-[calc(8rem+0.5rem)] z-50 hidden md:flex flex-col items-end" style={{ minWidth: '120px' }}>
        <div id="google_translate_element" style={{ display: 'none' }} />
        <select
          className="px-3 py-2 rounded-md border border-gray-300 bg-white dark:bg-gray-800 text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          onChange={handleChange}
          defaultValue="en"
        >
          {LANGUAGES.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default GoogleTranslateClient;
