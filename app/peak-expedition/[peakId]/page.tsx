'use client';

import { useParams } from 'next/navigation';
import PeakDetail from '@/components/PeakDetail';
import { peakExpeditions } from '@/data/peakExpeditions';

export default function PeakDetailPage() {
  const params = useParams();
  const peakId = params.peakId as string;
  
  const peak = peakExpeditions.find(p => p.id === peakId);

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
