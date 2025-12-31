/**
 * Clear Cache Utility
 * 
 * This script can be run from the browser console to manually clear all caches
 * Usage: Paste this in browser console: clearAllCaches()
 */

window.clearAllCaches = async function() {
  try {
    // Clear all caches
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
      console.log('✅ All caches cleared:', cacheNames);
    }

    // Unregister service workers
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map(reg => reg.unregister()));
      console.log('✅ Service workers unregistered:', registrations.length);
    }

    // Clear local storage (be careful with this)
    // localStorage.clear();
    // sessionStorage.clear();

    console.log('✅ Cache clearing complete! Reloading page...');
    
    // Reload the page
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  } catch (error) {
    console.error('❌ Error clearing caches:', error);
  }
}

// Auto-execute if loaded as a script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { clearAllCaches: window.clearAllCaches };
}

console.log('🧹 Cache clearing utility loaded. Run clearAllCaches() to clear all caches.');
