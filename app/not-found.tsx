'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <div className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            The trek you're looking for seems to have wandered off the trail.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              Go Home
            </Link>
            <Link
              href="/regions"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              Browse Regions
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
