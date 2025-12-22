'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SafariDetail from '@/components/SafariDetail';
import { SafariPackage } from '@/lib/types';

export default function SafariDetailPage() {
  const params = useParams();
  const safariId = params.safariId as string;
  const [safari, setSafari] = useState<SafariPackage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch safari from API
  useEffect(() => {
    async function fetchSafari() {
      try {
        const response = await fetch('/api/safaris');
        if (response.ok) {
          const data = await response.json();
          const foundSafari = data.find((s: SafariPackage) => s.id === safariId);
          setSafari(foundSafari || null);
        }
      } catch (error) {
        console.error('Error fetching safari:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSafari();
  }, [safariId]);

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">Loading safari...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!safari) {
    return (
      <main className="min-h-screen">
        <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Safari Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The safari package you're looking for doesn't exist.
            </p>
            <a
              href="/safari"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Back to Safari Adventures
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <SafariDetail safari={safari} />
    </main>
  );
}
