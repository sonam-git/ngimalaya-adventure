import Link from 'next/link'
import { WifiOff } from 'lucide-react'

export const metadata = {
  title: 'Offline',
  description: 'You are currently offline',
}

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <WifiOff className="w-24 h-24 text-gray-400 dark:text-gray-600" />
        </div>
        <h1 className="text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
          You're Offline
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          It looks like you've lost your internet connection. Please check your network and try again.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Return Home
        </Link>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Some content may be available offline if you've visited it before.
        </p>
      </div>
    </div>
  )
}
