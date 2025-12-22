'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PeakDetail from '@/components/PeakDetail';
import { PeakExpedition } from '@/lib/types';

export default function PeakDetailPage() {
  const params = useParams();
  const peakId = params.peakId as string;
  const [peak, setPeak] = useState<PeakExpedition | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch peak from API
  useEffect(() => {
    async function fetchPeak() {
      try {
        const response = await fetch('/api/peaks');
        if (response.ok) {
          const data = await response.json();
          const foundPeak = data.find((p: PeakExpedition) => p.id === peakId);
          setPeak(foundPeak || null);
        }
      } catch (error) {
        console.error('Error fetching peak:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPeak();
  }, [peakId]);

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">Loading peak expedition...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!peak) {
    return (
      <main className="min-h-screen">
        <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Peak Expedition Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The peak expedition you're looking for doesn't exist.
            </p>
            <a
              href="/peak-expedition"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Back to Peak Expeditions
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <PeakDetail peak={peak} />
    </main>
  );
}
