'use client';

/**
 * Tailwind CSS Test Component
 * This component tests various Tailwind utilities to ensure they're working correctly
 */
export default function TailwindTest() {
  return (
    <div className="p-8 space-y-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind CSS Test</h1>
      
      {/* Typography */}
      <div className="space-y-2">
        <h2 className="text-2xl font-heading">Typography Test</h2>
        <p className="text-gray-600 dark:text-gray-300 font-body">This text should be styled with Lato font</p>
        <p className="text-lg font-semibold">This is semibold text</p>
      </div>

      {/* Colors */}
      <div className="space-y-2">
        <h2 className="text-2xl font-heading">Colors Test</h2>
        <div className="flex gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded"></div>
          <div className="w-16 h-16 bg-green-500 rounded"></div>
          <div className="w-16 h-16 bg-red-500 rounded"></div>
          <div className="w-16 h-16 bg-yellow-500 rounded"></div>
        </div>
      </div>

      {/* Spacing */}
      <div className="space-y-2">
        <h2 className="text-2xl font-heading">Spacing Test</h2>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          Padding and shadows working
        </div>
      </div>

      {/* Responsive */}
      <div className="space-y-2">
        <h2 className="text-2xl font-heading">Responsive Test</h2>
        <div className="bg-blue-200 md:bg-green-200 lg:bg-red-200 p-4 rounded">
          Blue on mobile, green on tablet, red on desktop
        </div>
      </div>

      {/* Animations */}
      <div className="space-y-2">
        <h2 className="text-2xl font-heading">Animation Test</h2>
        <div className="animate-fade-in-up bg-purple-200 p-4 rounded">
          This should fade in and up
        </div>
      </div>

      {/* Hover Effects */}
      <div className="space-y-2">
        <h2 className="text-2xl font-heading">Hover Effects Test</h2>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
          Hover me
        </button>
      </div>

      {/* Grid */}
      <div className="space-y-2">
        <h2 className="text-2xl font-heading">Grid Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded">Grid 1</div>
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded">Grid 2</div>
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded">Grid 3</div>
        </div>
      </div>
    </div>
  );
}
