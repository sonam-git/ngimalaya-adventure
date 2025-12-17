'use client';

import { useParams } from 'next/navigation';
import TrekDetail from '@/components/TrekDetail';
import { TrekTabProvider } from '@/contexts/TrekTabContext';
import { allTreks } from '@/data/treks';

export default function TrekDetailPage() {
  const params = useParams();
  const trekId = params.trekId as string;
  
  const trek = allTreks.find(t => t.id === trekId);

  if (!trek) {
    return (
      <main className="min-h-screen">
        <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trek Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The trek you're looking for doesn't exist.
            </p>
            <a
              href="/treks"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Back to Treks
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <TrekTabProvider>
      <main className="min-h-screen">
        <TrekDetail trek={trek} />
      </main>
    </TrekTabProvider>
  );
}
