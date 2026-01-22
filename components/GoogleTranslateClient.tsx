"use client";
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

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
  const { isDarkMode } = useTheme();

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

    // 2. Periodic checks - run every 2 seconds (less aggressive to prevent flicker)
    const interval = setInterval(hideAllGoogleUI, 2000);

    // Function to aggressively remove font tags and preserve our fonts
    const removeFontTags = () => {
      // Find all <font> tags in the document
      const fontTags = document.querySelectorAll('font');
      fontTags.forEach(fontTag => {
        // Get the parent element
        const parent = fontTag.parentNode;
        if (parent) {
          // Move all children of the font tag to its parent
          while (fontTag.firstChild) {
            parent.insertBefore(fontTag.firstChild, fontTag);
          }
          // Remove the now-empty font tag
          parent.removeChild(fontTag);
        }
      });

      // Remove ALL inline font-family styles that Google Translate adds
      const elementsWithInlineFont = document.querySelectorAll('[style*="font-family"]');
      elementsWithInlineFont.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;
        const style = htmlElement.getAttribute('style');
        if (style) {
          // Remove font-family from inline style completely
          const newStyle = style.replace(/font-family:\s*[^;]+;?/gi, '');
          if (newStyle.trim()) {
            htmlElement.setAttribute('style', newStyle);
          } else {
            htmlElement.removeAttribute('style');
          }
        }
      });

      // CRITICAL: Force re-apply Jaini Purva to header title elements
      const jainiElements = document.querySelectorAll('.jaini-purva-regular, .jaini-purva');
      jainiElements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.setProperty('font-family', '"Jaini Purva", system-ui', 'important');
        htmlElement.style.fontWeight = '400';
      });

      // Force re-apply custom fonts to headings
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .font-heading, .font-display');
      headings.forEach((heading: Element) => {
        const htmlHeading = heading as HTMLElement;
        htmlHeading.style.setProperty('font-family', '"Jaini Purva", system-ui', 'important');
      });

      // Force re-apply body font
      const bodyElements = document.querySelectorAll('p, span, div, a, li, td, th');
      bodyElements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;
        // Skip if it has a specific font class
        if (!htmlElement.closest('h1, h2, h3, h4, h5, h6, .font-heading, .font-display, .times, .satisfy, .satisfy-regular, .lugrasimo, .lugrasimo-regular, .jaini-purva') &&
            !htmlElement.classList.contains('satisfy') &&
            !htmlElement.classList.contains('satisfy-regular') &&
            !htmlElement.classList.contains('lugrasimo') &&
            !htmlElement.classList.contains('lugrasimo-regular') &&
            !htmlElement.classList.contains('times') &&
            !htmlElement.classList.contains('times-new-roman')) {
          htmlElement.style.fontFamily = "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
        }
      });

      // Preserve special font classes
      const timesElements = document.querySelectorAll('.times, .times-new-roman');
      timesElements.forEach((element: Element) => {
        (element as HTMLElement).style.fontFamily = "'Times New Roman', Times, serif";
      });

      const satisfyElements = document.querySelectorAll('.satisfy, .satisfy-regular');
      satisfyElements.forEach((element: Element) => {
        (element as HTMLElement).style.fontFamily = "'Satisfy', cursive";
      });

      const lugrasimoElements = document.querySelectorAll('.lugrasimo, .lugrasimo-regular');
      lugrasimoElements.forEach((element: Element) => {
        (element as HTMLElement).style.fontFamily = "'Lugrasimo', cursive";
      });
    };

    // Run font tag removal periodically - but less frequently to prevent flicker
    const fontInterval = setInterval(removeFontTags, 3000); // Every 3 seconds instead of 1

    // 3. MutationObserver to catch dynamically added elements and INSTANTLY fix fonts
    const observer = new MutationObserver((mutations) => {
      let needsFontFix = false;
      
      mutations.forEach((mutation) => {
        // Check if font-family style was modified
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const element = mutation.target as HTMLElement;
          if (element.style.fontFamily && element.classList.contains('jaini-purva-regular')) {
            // Instantly re-apply correct font
            element.style.setProperty('font-family', '"Jaini Purva", system-ui', 'important');
            element.style.fontWeight = '400';
          }
        }
        
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

            // If a font tag was added, mark for fix
            if (element.tagName === 'FONT') {
              needsFontFix = true;
            }
          }
        });
      });
      
      // Apply font fix if needed (debounced)
      if (needsFontFix) {
        requestAnimationFrame(() => {
          const jainiElements = document.querySelectorAll('.jaini-purva-regular, .jaini-purva');
          jainiElements.forEach((element: Element) => {
            const htmlElement = element as HTMLElement;
            htmlElement.style.setProperty('font-family', '"Jaini Purva", system-ui', 'important');
            htmlElement.style.fontWeight = '400';
          });
        });
      }
      
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
      clearInterval(fontInterval);
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
      
      // After translation starts, aggressively remove font tags
      // Multiple delays to catch different stages of translation
      setTimeout(() => {
        removeFontTagsNow();
      }, 500);
      setTimeout(() => {
        removeFontTagsNow();
      }, 1000);
      setTimeout(() => {
        removeFontTagsNow();
      }, 2000);
      setTimeout(() => {
        removeFontTagsNow();
      }, 3000);
    }
  };

  // Helper function to remove font tags on demand
  const removeFontTagsNow = () => {
    // Find all <font> tags in the document
    const fontTags = document.querySelectorAll('font');
    fontTags.forEach(fontTag => {
      const parent = fontTag.parentNode;
      if (parent) {
        while (fontTag.firstChild) {
          parent.insertBefore(fontTag.firstChild, fontTag);
        }
        parent.removeChild(fontTag);
      }
    });

    // Remove ALL inline font-family styles
    const elementsWithInlineFont = document.querySelectorAll('[style*="font-family"]');
    elementsWithInlineFont.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      const style = htmlElement.getAttribute('style');
      if (style) {
        const newStyle = style.replace(/font-family:\s*[^;]+;?/gi, '');
        if (newStyle.trim()) {
          htmlElement.setAttribute('style', newStyle);
        } else {
          htmlElement.removeAttribute('style');
        }
      }
    });

    // CRITICAL: Force re-apply Jaini Purva to header title elements
    const jainiElements = document.querySelectorAll('.jaini-purva-regular, .jaini-purva');
    jainiElements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.setProperty('font-family', '"Jaini Purva", system-ui', 'important');
      htmlElement.style.fontWeight = '400';
    });

    // Force re-apply custom fonts to headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .font-heading, .font-display');
    headings.forEach((heading: Element) => {
      const htmlHeading = heading as HTMLElement;
      htmlHeading.style.fontFamily = "'Jaini Purva', system-ui";
    });

    // Force re-apply body font to common elements
    const bodyElements = document.querySelectorAll('p, span, div, a, li, td, th');
    bodyElements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      // Skip if it's inside a heading or has a special font class
      if (!htmlElement.closest('h1, h2, h3, h4, h5, h6, .font-heading, .font-display, .times, .satisfy, .satisfy-regular, .lugrasimo, .lugrasimo-regular, .jaini-purva') &&
          !htmlElement.classList.contains('satisfy') &&
          !htmlElement.classList.contains('satisfy-regular') &&
          !htmlElement.classList.contains('lugrasimo') &&
          !htmlElement.classList.contains('lugrasimo-regular') &&
          !htmlElement.classList.contains('times') &&
          !htmlElement.classList.contains('times-new-roman')) {
        htmlElement.style.fontFamily = "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
      }
    });

    // Preserve special font classes
    const timesElements = document.querySelectorAll('.times, .times-new-roman');
    timesElements.forEach((element: Element) => {
      (element as HTMLElement).style.fontFamily = "'Times New Roman', Times, serif";
    });

    const satisfyElements = document.querySelectorAll('.satisfy, .satisfy-regular');
    satisfyElements.forEach((element: Element) => {
      (element as HTMLElement).style.fontFamily = "'Satisfy', cursive";
    });

    const lugrasimoElements = document.querySelectorAll('.lugrasimo, .lugrasimo-regular');
    lugrasimoElements.forEach((element: Element) => {
      (element as HTMLElement).style.fontFamily = "'Lugrasimo', cursive";
    });
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

  return (
    <div className="relative flex items-center ml-2">
      <button
        className={`w-12 h-12 rounded-xl flex items-center justify-center focus:outline-none transition-all duration-300 hover:scale-105 ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-white/30 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20'
            : 'bg-gradient-to-r from-sky-50/80 via-blue-50/80 to-sky-50/80 hover:from-sky-100 hover:to-blue-100 shadow-md hover:shadow-lg border border-sky-100/50 backdrop-blur-sm'
        }`}
        onClick={() => setOpen(!open)}
        aria-label="Change language"
      >
        <img 
          src="/assets/images/logos/translation.png" 
          alt="Translate" 
          className={`w-6 h-6 object-contain transition-all duration-200 ${
            isDarkMode ? 'brightness-0 invert' : 'brightness-75'
          }`}
        />
      </button>
      {open && (
        <div ref={dropdownRef} className="absolute right-0 w-36 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl z-50" style={{ marginTop: '25rem' }}>
          <ul className="py-1">
            {LANGUAGES.map(lang => (
              <li key={lang.code}>
                <button
                  className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 ${currentLang === lang.code ? 'bg-blue-100 dark:bg-gray-700 font-bold' : ''}`}
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
