'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js', { updateViaCache: 'none' })
          .then((registration) => {
            console.log('SW registered: ', registration);
            
            // Check for updates every 30 minutes
            setInterval(() => {
              registration.update();
            }, 1800000); // 30 minutes
            
            // Check for updates on page visibility change
            document.addEventListener('visibilitychange', () => {
              if (!document.hidden) {
                registration.update();
              }
            });
            
            // Handle updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New service worker available
                    console.log('New version available!');
                    
                    // Show a subtle notification
                    const shouldReload = confirm(
                      '🎉 A new version of Ngimalaya Adventure is available! Click OK to refresh and see the latest updates.'
                    );
                    
                    if (shouldReload) {
                      // Tell the new service worker to skip waiting
                      newWorker.postMessage({ type: 'SKIP_WAITING' });
                      window.location.reload();
                    }
                  }
                });
              }
            });
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });

        // Listen for the controlling service worker changing and reload
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!refreshing) {
            refreshing = true;
            window.location.reload();
          }
        });
      });
    }
  }, []);

  return null;
}
