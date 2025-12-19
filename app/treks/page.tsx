'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// LEGACY ROUTE - Redirects to /regions
// This page maintained for backward compatibility
export default function TreksPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new regions route
    router.replace('/regions');
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-300">
          Redirecting to regions...
        </p>
      </div>
    </main>
  );
}
