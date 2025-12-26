'use client';

import React, { useEffect, useRef } from 'react';
import { DayCoordinates } from '@/lib/types/map';

// Fix for default marker icons in Next.js
const loadLeaflet = async () => {
  if (typeof window === 'undefined') return null;
  
  const L = await import('leaflet');
  
  // Import CSS dynamically
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
  }
  
  // Fix default marker icon paths
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
  
  return L;
};

interface TrekMapProps {
  trekName: string;
  dayCoordinates: DayCoordinates[];
  isDarkMode?: boolean;
}

const TrekMap: React.FC<TrekMapProps> = ({ trekName, dayCoordinates, isDarkMode = false }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any = null;
    const container = mapContainerRef.current; // Capture ref value for cleanup

    const initMap = async () => {
      // Check if map already exists or container is not ready
      if (!container || mapRef.current) return;

      const L = await loadLeaflet();
      if (!L) return;

      // Filter out days with missing coordinates
      const validDays = dayCoordinates.filter((day) => day.coordinates);

      if (validDays.length === 0) {
        console.warn('No valid coordinates found for trek map');
        return;
      }

      // Check again if map was initialized while loading Leaflet
      if (mapRef.current) return;

      // Clear any existing map instance on the container
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((container as any)._leaflet_id) {
        return;
      }

      // Initialize map
      try {
        map = L.map(container, {
          zoomControl: true,
          scrollWheelZoom: true,
        });

        mapRef.current = map;
      } catch (error) {
        console.error('Error initializing map:', error);
        return;
      }

      // Add OpenStreetMap tiles
      const tileLayer = isDarkMode
        ? L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19,
          })
        : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
          });

      tileLayer.addTo(map);

      // Custom marker icon for locations
      const locationIcon = L.divIcon({
        className: 'custom-location-marker',
        html: `<div class="marker-pin location-pin"></div>`,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
      });

      // Create custom icons for first and last day
      const startIcon = L.divIcon({
        className: 'custom-start-marker',
        html: '<div class="marker-pin start-pin"></div>',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
      });

      const endIcon = L.divIcon({
        className: 'custom-end-marker',
        html: '<div class="marker-pin end-pin"></div>',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
      });

      const bounds = L.latLngBounds([]);
      const routePoints: [number, number][] = [];
      
      // Track location occurrences for offset calculation
      const locationCount = new Map<string, number>();
      const locationOccurrences = new Map<string, number>();
      
      // Count how many times each location appears
      validDays.forEach((day) => {
        if (!day.location) return;
        const count = locationCount.get(day.location) || 0;
        locationCount.set(day.location, count + 1);
      });
      
      // Enhanced blue color palette for duplicate locations (up to 8 visits)
      const blueShades = [
        '#3B82F6', // Blue-500 (default - visit 1)
        '#60A5FA', // Blue-400 (lighter - visit 2)
        '#2563EB', // Blue-600 (darker - visit 3)
        '#93C5FD', // Blue-300 (very light - visit 4)
        '#1D4ED8', // Blue-700 (very dark - visit 5)
        '#7DD3FC', // Sky-300 (bright - visit 6)
        '#1E40AF', // Blue-800 (deep - visit 7)
        '#BFDBFE', // Blue-200 (pale - visit 8)
      ];

      // Add markers for each location
      validDays.forEach((day, index) => {
        if (!day.coordinates) return;

        let lat = day.coordinates.lat;
        let lng = day.coordinates.lng;
        
        // Get location visit count
        const locCount = locationCount.get(day.location) || 1;
        
        // Handle duplicate locations with enhanced offset for better visibility
        if (locCount > 1) {
          const occurrence = locationOccurrences.get(day.location) || 0;
          locationOccurrences.set(day.location, occurrence + 1);
          
          // Increased offset for better visual separation
          // Scale offset based on number of visits (more visits = larger spread)
          const baseOffset = 0.003; // About 300 meters at equator
          const offsetDistance = baseOffset * Math.sqrt(locCount); // Scale with square root
          
          // Distribute markers in a circular pattern around the location
          const angle = (occurrence * (360 / locCount)) * (Math.PI / 180);
          lat += offsetDistance * Math.cos(angle);
          lng += offsetDistance * Math.sin(angle);
        } else {
          locationOccurrences.set(day.location, 0);
        }

        const latLng = L.latLng(lat, lng);
        routePoints.push([lat, lng]);

        // Determine icon and color based on position and duplicates
        let icon = locationIcon;
        let markerLabel = `Day ${day.day}`;
        let pinColor = blueShades[0]; // Default blue
        
        if (index === 0) {
          icon = startIcon;
          markerLabel = `Start - Day ${day.day}`;
        } else if (index === validDays.length - 1) {
          icon = endIcon;
          markerLabel = `End - Day ${day.day}`;
        } else if (locCount > 1) {
          // Use different blue shades for duplicate locations
          const occurrence = locationOccurrences.get(day.location) || 0;
          pinColor = blueShades[occurrence % blueShades.length];
          
          // Create custom colored icon for duplicates with enhanced styling
          icon = L.divIcon({
            className: 'custom-location-marker',
            html: `<div class="marker-pin location-pin duplicate-marker" style="background: ${pinColor}; box-shadow: 0 3px 10px ${pinColor}90; border: 2px solid white;"></div>`,
            iconSize: [32, 44],
            iconAnchor: [16, 44],
          });
        }

        // Add location marker with enhanced popup for duplicates
        const visitInfo = locCount > 1 
          ? `<br/><small style="color: #6B7280; font-weight: 500;">🔄 Visit ${(locationOccurrences.get(day.location) || 0) + 1} of ${locCount}</small>` 
          : '';
        
        L.marker(latLng, { icon })
          .bindPopup(
            `<div class="trek-popup">
              <strong>${markerLabel}</strong><br/>
              ${day.location}${visitInfo}<br/>
              <em>${day.title}</em>
            </div>`
          )
          .addTo(map);

        // Extend bounds
        bounds.extend(latLng);
      });

      // Draw polyline connecting all locations
      if (routePoints.length > 1) {
        L.polyline(routePoints, {
          color: '#3B82F6',
          weight: 3,
          opacity: 0.7,
          dashArray: '10, 5',
          lineJoin: 'round',
          lineCap: 'round',
        }).addTo(map);
      }

      // Fit map to bounds with padding
      map.fitBounds(bounds, { padding: [50, 50] });
    };

    initMap();

    // Cleanup function
    return () => {
      if (mapRef.current) {
        try {
          mapRef.current.remove();
        } catch (error) {
          console.error('Error removing map:', error);
        } finally {
          mapRef.current = null;
        }
      }
      
      // Also clear the container's leaflet ID if it exists
      if (container) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (container as any)._leaflet_id;
      }
    };
  }, [dayCoordinates, isDarkMode, trekName]);

  return (
    <div className="trek-map-container">
      <div ref={mapContainerRef} className="trek-map" style={{ height: '600px', width: '100%' }} />
      <style jsx global>{`
        .trek-map-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .trek-map {
          z-index: 1;
        }

        .marker-pin {
          width: 30px;
          height: 42px;
          border-radius: 50% 50% 50% 0;
          position: relative;
          transform: rotate(-45deg);
          left: 50%;
          top: 50%;
          margin: -21px 0 0 -15px;
          transition: all 0.2s ease;
        }

        .marker-pin::after {
          content: '';
          width: 16px;
          height: 16px;
          margin: 7px 0 0 7px;
          background: #fff;
          position: absolute;
          border-radius: 50%;
        }

        /* Enhanced duplicate marker styling */
        .duplicate-marker {
          width: 32px;
          height: 44px;
          margin: -22px 0 0 -16px;
          animation: pulse-marker 2s ease-in-out infinite;
        }

        .duplicate-marker::after {
          width: 18px;
          height: 18px;
          margin: 7px 0 0 7px;
        }

        @keyframes pulse-marker {
          0%, 100% {
            transform: rotate(-45deg) scale(1);
          }
          50% {
            transform: rotate(-45deg) scale(1.05);
          }
        }

        .start-pin {
          background: #10b981;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.5);
        }

        .end-pin {
          background: #ef4444;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);
        }

        .location-pin {
          background: #3b82f6;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
        }

        .trek-popup {
          font-family: 'Lato', 'Open Sans', 'Roboto', sans-serif;
          padding: 4px;
          min-width: 200px;
        }

        .trek-popup strong {
          color: #1f2937;
          font-size: 14px;
          font-weight: 600;
        }

        .trek-popup em {
          color: #6b7280;
          font-size: 12px;
        }

        .trek-popup small {
          display: inline-block;
          margin-top: 4px;
          padding: 2px 6px;
          background: #f3f4f6;
          border-radius: 4px;
          font-size: 11px;
        }

        .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .leaflet-popup-tip {
          background: white;
        }

        /* Hover effects */
        .leaflet-marker-icon:hover .marker-pin {
          transform: rotate(-45deg) scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default TrekMap;