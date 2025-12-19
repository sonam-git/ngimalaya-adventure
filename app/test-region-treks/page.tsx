import { fetchRegionsWithFallback, fetchTreksByRegionWithFallback, fetchTreksWithFallback } from '@/lib/storyblok-fetch-with-fallback';
import { validateEverything, formatValidationResults } from '@/lib/validation';

export const dynamic = 'force-dynamic';

export default async function TestRegionTreksPage() {
  const regions = await fetchRegionsWithFallback();
  const allTreks = await fetchTreksWithFallback();
  
  // Run validation
  const validation = validateEverything(allTreks, regions);
  const validationOutput = formatValidationResults(validation);
  
  // Test each region to see what treks are returned
  const regionTrekMap: Array<{ region: { id: string; name: string }; treks: Array<{ id: string; name: string; region: string }> }> = [];
  
  for (const region of regions) {
    const treks = await fetchTreksByRegionWithFallback(region.id);
    regionTrekMap.push({
      region: { id: region.id, name: region.name },
      treks: treks.map(t => ({ id: t.id, name: t.name, region: t.region }))
    });
  }

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          🗺️ Region-Trek Connection Test
        </h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded mb-8">
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            📊 Summary
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-300">Total Regions:</span>
              <span className="ml-2 text-gray-900 dark:text-white">{regions.length}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-300">Total Treks Mapped:</span>
              <span className="ml-2 text-gray-900 dark:text-white">
                {regionTrekMap.reduce((sum, r) => sum + r.treks.length, 0)}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-300">Validation Status:</span>
              <span className={`ml-2 font-bold ${validation.isValid ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {validation.isValid ? '✅ All Valid' : '❌ Issues Found'}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-300">Issues:</span>
              <span className="ml-2 text-gray-900 dark:text-white">
                {validation.errors.length} errors, {validation.warnings.length} warnings
              </span>
            </div>
          </div>
          
          {(validation.errors.length > 0 || validation.warnings.length > 0) && (
            <details className="mt-4">
              <summary className="cursor-pointer font-semibold text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100">
                View Validation Details
              </summary>
              <pre className="mt-3 p-4 bg-gray-800 text-gray-100 rounded text-xs overflow-x-auto">
                {validationOutput}
              </pre>
            </details>
          )}
        </div>

        <div className="space-y-6">
          {regionTrekMap.map(({ region, treks }) => (
            <div key={region.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {region.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Region ID: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{region.id}</code>
                  </p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-4 py-2 rounded-full font-bold text-lg ${
                    treks.length > 0 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {treks.length} Trek{treks.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {treks.length > 0 ? (
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
                    ✅ Connected Treks:
                  </h3>
                  {treks.map((trek) => (
                    <div key={trek.id} className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {trek.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Trek ID: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">{trek.id}</code>
                          </p>
                        </div>
                        <div className="ml-4">
                          <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full">
                            Region Field: {trek.region}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-700">
                  <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">
                    ⚠️ No treks found for this region
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Make sure trek stories in Storyblok have their "region" field set to: <code className="bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">{region.id}</code>
                  </p>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
                <a 
                  href={`/regions/${region.id}`}
                  className="inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  → View this region page
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-purple-50 dark:bg-purple-900/20 p-6 rounded">
          <h3 className="text-xl font-bold mb-3 text-purple-900 dark:text-purple-200">
            🔧 How to Fix Missing Connections
          </h3>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
            <div>
              <strong className="block mb-1">For Storyblok Data:</strong>
              <ol className="list-decimal ml-5 space-y-1">
                <li>Open the trek story in Storyblok</li>
                <li>Find the "region" field</li>
                <li>Enter the region slug (e.g., "everest", "annapurna") - must match region ID exactly</li>
                <li>Save and publish</li>
              </ol>
            </div>
            <div>
              <strong className="block mb-1">For Static Data:</strong>
              <ol className="list-decimal ml-5 space-y-1">
                <li>Open the trek file (e.g., <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/data/regions/everest.ts</code>)</li>
                <li>Ensure the trek's "region" field contains the region name (e.g., "Everest Region")</li>
                <li>The filtering will match if the region field contains the region ID</li>
              </ol>
            </div>
            <div className="pt-2 border-t border-purple-200 dark:border-purple-700">
              <strong>💡 Pro Tip:</strong> The system will only show Storyblok data when available. 
              Static data is only shown as fallback when Storyblok is not configured or returns no data.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
