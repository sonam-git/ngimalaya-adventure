import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TrekDetail from '../components/TrekDetail';
import { allTreks } from '../data/treks';

const TrekDetailPage: React.FC = () => {
  const { trekId } = useParams<{ trekId: string }>();
  const navigate = useNavigate();
  
  const trek = allTreks.find(t => t.id === trekId);

  const handleBackToTreks = () => {
    navigate(-1); // Go back to previous page
  };

  if (!trek) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trek Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The trek you're looking for doesn't exist.
          </p>
          <button
            onClick={handleBackToTreks}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Treks
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <TrekDetail trek={trek} />
    </div>
  );
};

export default TrekDetailPage;
