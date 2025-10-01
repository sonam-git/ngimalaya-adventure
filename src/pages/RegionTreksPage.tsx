import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RegionTreks from '../components/RegionTreks';
import { trekRegions, allTreks } from '../data/treks';
import type { Trek } from '../data/treks';

const RegionTreksPage: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const navigate = useNavigate();
  
  const region = trekRegions.find((r) => r.id === regionId);
  const regionTreks = allTreks.filter(trek => {
    // Match trek region with the region name from trekRegions
    return region && trek.region === region.name;
  });

  const handleTrekSelect = (trek: Trek) => {
    navigate(`/treks/${trek.id}`);
  };

  if (!region) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Region Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The region you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/treks')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Regions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <RegionTreks 
        region={region}
        treks={regionTreks}
        onTrekSelect={handleTrekSelect}
      />
    </div>
  );
};

export default RegionTreksPage;
