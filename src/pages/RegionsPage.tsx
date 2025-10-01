import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegionsExplorer from '../components/RegionsExplorer';
import type { Region } from '../data/treks';

const RegionsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegionSelect = (region: Region) => {
    navigate(`/treks/regions/${region.id}`);
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <RegionsExplorer onRegionSelect={handleRegionSelect} />
    </div>
  );
};

export default RegionsPage;
