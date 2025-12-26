'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, MapPin, Loader2 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import TrekMap from './TrekMap';
import { processTrekItinerary } from '@/lib/mapHelpers';
import { DayCoordinates } from '@/lib/types/map';
import type { PeakExpedition } from '@/lib/types';

interface PeakMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  peak: PeakExpedition;
}

const PeakMapModal: React.FC<PeakMapModalProps> = ({ isOpen, onClose, peak }) => {
  const { isDarkMode } = useTheme();
  const [dayCoordinates, setDayCoordinates] = useState<DayCoordinates[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted on client side
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const loadMapData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Transform peak itinerary to the format needed for geocoding
        // Use location field if available, otherwise try to extract from title
        const peakDays = peak.itinerary.map((day) => ({
          day: day.day,
          title: day.title,
          location: day.location || extractMainLocation(day.title) || `${peak.region || 'Nepal'}`,
        }));

        const coordinates = await processTrekItinerary(peakDays);
        setDayCoordinates(coordinates);
      } catch (err) {
        console.error('Error loading map data:', err);
        setError('Failed to load map data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadMapData();
  }, [isOpen, peak]);

  // Helper function to extract main location from peak day title
  const extractMainLocation = (title: string): string | null => {
    // Remove common prefixes
    const cleanTitle = title.replace(/^(Trek|Fly|Drive|Rest day at|Acclimatization at|Explore|Day off at|Summit|Climb to|Ascend to|Descend to)\s+/i, '');
    
    // Patterns to match place names
    const patterns = [
      // "from X to Y" or "X to Y" - use destination (Y)
      /(?:from\s+)?[^to]+?\s+to\s+([^,()]+?)(?:\s*[(,]|$)/i,
      // "X - Y" - use destination (Y)
      /[^-]+?\s*-\s*([^,()]+?)(?:\s*[(,]|$)/i,
      // "at X" or "in X"
      /(?:at|in)\s+([^,()]+?)(?:\s*[(,]|$)/i,
      // Just a place name
      /^([^,()]+?)(?:\s*[(,]|$)/i,
    ];

    for (const pattern of patterns) {
      const match = cleanTitle.match(pattern);
      if (match && match[1]) {
        const place = match[1].trim();
        return place ? `${place}, Nepal` : null;
      }
    }

    return null;
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between p-6 border-b ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-500" size={28} />
            <div>
              <h2
                className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
                style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 700 }}
              >
                {peak.name} - Expedition Route
              </h2>
              <p
                className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
                style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
              >
                Interactive map showing the complete expedition route
              </p>
              {/* Important Notice */}
              <div
                className={`mt-3 p-3 rounded-lg text-xs ${
                  isDarkMode
                    ? 'bg-amber-900/30 border border-amber-700/50 text-amber-300'
                    : 'bg-amber-50 border border-amber-200 text-amber-800'
                }`}
                style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
              >
                <strong>ℹ️ Note:</strong> Routes are indicative and auto-generated based on itinerary locations. Actual trekking paths may vary due to weather, permissions, or trail conditions.
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? 'hover:bg-gray-700 text-gray-400'
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2
                className="animate-spin text-blue-500 mb-4"
                size={48}
              />
              <p
                className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
              >
                Loading map data and geocoding locations...
              </p>
              <p
                className={`text-sm mt-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
                style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
              >
                This may take a moment for the first load
              </p>
            </div>
          )}

          {error && (
            <div
              className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-700'
              }`}
            >
              {error}
            </div>
          )}

          {!isLoading && !error && dayCoordinates.length > 0 && (
            <>
              <TrekMap
                key={`${peak.id}-${isDarkMode ? 'dark' : 'light'}`}
                trekName={peak.name}
                dayCoordinates={dayCoordinates}
                isDarkMode={isDarkMode}
              />

              {/* Legend */}
              <div
                className={`mt-6 p-4 rounded-xl ${
                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}
              >
                <h3
                  className={`font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                  style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 600 }}
                >
                  Map Legend
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full shadow-sm"></div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                      style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
                    >
                      Start Location
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full shadow-sm"></div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                      style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
                    >
                      End Location
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full shadow-sm"></div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                      style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
                    >
                      Expedition Locations
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-blue-400 rounded-full shadow-sm"></div>
                      <div className="w-3 h-3 bg-blue-600 rounded-full shadow-sm"></div>
                    </div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                      style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
                    >
                      Revisited Locations
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 lg:col-span-4">
                    <div className="w-8 h-0.5 bg-blue-500" style={{ borderTop: '2px dashed' }}></div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                      style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
                    >
                      Route Path (connects locations in order)
                    </span>
                  </div>
                </div>
                
                {/* Additional note about duplicates */}
                <div
                  className={`mt-3 pt-3 border-t text-xs ${
                    isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-200 text-gray-600'
                  }`}
                  style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
                >
                  🔄 <strong>Revisited Locations:</strong> When the expedition returns to the same location on different days 
                  (e.g., base camps), markers are spread in a circular pattern with different blue shades for easy identification. 
                  Check the marker popup for visit numbers.
                </div>
              </div>

              {/* Info */}
              <div
                className={`mt-4 p-3 rounded-lg text-sm ${
                  isDarkMode
                    ? 'bg-blue-900/20 text-blue-300'
                    : 'bg-blue-50 text-blue-700'
                }`}
              >
                <p style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}>
                  💡 <strong>Tip:</strong> Click on markers to see details about each location.
                  The route line connects all expedition locations in order. Zoom and pan to explore the full route.
                </p>
              </div>
            </>
          )}

          {!isLoading && !error && dayCoordinates.length === 0 && (
            <div className="text-center py-20">
              <MapPin
                className={`mx-auto mb-4 ${
                  isDarkMode ? 'text-gray-600' : 'text-gray-400'
                }`}
                size={48}
              />
              <p
                className={`text-lg ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
                style={{ fontFamily: 'Lato, "Open Sans", Roboto, sans-serif', fontWeight: 400 }}
              >
                No map data available for this expedition
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Render modal as a portal at the document body level
  return createPortal(modalContent, document.body);
};

export default PeakMapModal;
