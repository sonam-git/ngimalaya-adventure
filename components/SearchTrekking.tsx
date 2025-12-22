'use client '
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Trek, PeakExpedition, SafariPackage } from '@/lib/types';
import { FaHiking, FaMountain, FaBinoculars, FaMapMarkerAlt, FaChartLine, FaClock, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import CustomTrekModal from './CustomTrekModal';
import { useTheme } from '../contexts/ThemeContext';


const TREK_TYPES = [
  { value: 'all', label: 'All Adventures' },
  { value: 'trekking', label: 'Trekking' },
  { value: 'peak', label: 'Peak Expedition' },
  { value: 'safari', label: 'Safari' },
];

const DIFFICULTIES = [
  'Easy',
  'Moderate',
  'Hard',
  'Moderate to Hard',
  'Extreme',
  'Challenging',
  'Strenuous',
];

const DURATIONS = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25];

// Helper to get unique regions from treks, peaks, and safari locations
const getRegions = (treks: Trek[] | undefined, peaks: PeakExpedition[] | undefined, safaris: SafariPackage[] | undefined) => {
  const regions: string[] = [];
  
  // Get regions from treks
  if (treks && treks.length > 0) {
    const trekRegions = treks
      .filter((t: Trek) => t.region && t.region.length > 0)
      .map((t: Trek) => t.region)
      .filter(Boolean);
    regions.push(...trekRegions);
  }
  
  // Get regions from peaks
  if (peaks && peaks.length > 0) {
    const peakRegions = peaks
      .filter((p: PeakExpedition) => p.region && p.region.length > 0)
      .map((p: PeakExpedition) => p.region!)
      .filter(Boolean);
    regions.push(...peakRegions);
  }
  
  // Get locations from safaris (treated as regions)
  if (safaris && safaris.length > 0) {
    const safariLocations = safaris
      .filter((s: SafariPackage) => s.location && s.location.length > 0)
      .map((s: SafariPackage) => s.location)
      .filter(Boolean);
    regions.push(...safariLocations);
  }
  
  // Return unique sorted regions/locations
  return Array.from(new Set(regions)).sort() as string[];
};

interface SearchTrekkingProps {
  treks?: Trek[];
  peaks?: PeakExpedition[];
  safaris?: SafariPackage[];
}

// Type for combined search results
type SearchResult = (Trek | PeakExpedition | SafariPackage) & { type: 'trek' | 'peak' | 'safari' };

const SearchTrekking: React.FC<SearchTrekkingProps> = ({ treks, peaks, safaris }) => {
  const { isDarkMode } = useTheme();
  const [adventureType, setAdventureType] = useState('all');
  const [region, setRegion] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState('');
  const [results, setResults] = useState<SearchResult[]>([
    ...(treks || []).map(t => ({ ...t, type: 'trek' as const })),
    ...(peaks || []).map(p => ({ ...p, type: 'peak' as const })),
    ...(safaris || []).map(s => ({ ...s, type: 'safari' as const }))
  ]);
  const [searched, setSearched] = useState(false);
  const [showCustomTrekModal, setShowCustomTrekModal] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // Update results when props change
  useEffect(() => {
    if (!searched) {
      setResults([
        ...(treks || []).map(t => ({ ...t, type: 'trek' as const })),
        ...(peaks || []).map(p => ({ ...p, type: 'peak' as const })),
        ...(safaris || []).map(s => ({ ...s, type: 'safari' as const }))
      ]);
    }
  }, [treks, peaks, safaris, searched]);

  // Prevent body scroll when mobile modal is open
  useEffect(() => {
    if (showMobileSearch) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searched) {
      if (!treks && !peaks && !safaris) {
        setResults([]);
        setSearched(true);
        return;
      }
      
      // Filter treks
      const trekResults = (treks || []).filter((t: Trek) => {
        // Only filter by adventure type if not 'all' and trek has adventureType
        if (adventureType !== 'all' && t.adventureType && t.adventureType.toLowerCase() !== adventureType) return false;
        if (region && t.region !== region) return false;
        if (difficulty && t.difficulty && difficulty !== '' && t.difficulty !== difficulty) return false;
        if (duration && t.duration) {
          let trekDays: number[] = [];
          if (Array.isArray(t.duration)) {
            trekDays = t.duration.map(Number);
          } else if (typeof t.duration === 'string') {
            const matches = t.duration.match(/\d+/g);
            if (matches) trekDays = matches.map(Number);
          } else if (typeof t.duration === 'number') {
            trekDays = [t.duration];
          }
          const selectedDay = Number(duration);
          if (!trekDays.some(day => Math.abs(day - selectedDay) <= 1)) return false;
        }
        return true;
      });

      // Filter peaks - all filters apply
      const peakResults = (peaks || []).filter((p: PeakExpedition) => {
        // Only include if adventure type is 'all' or 'peak'
        if (adventureType !== 'all' && adventureType !== 'peak') return false;
        if (region && p.region && !p.region.toLowerCase().includes(region.toLowerCase())) return false;
        if (difficulty && p.difficulty && difficulty !== '' && p.difficulty !== difficulty) return false;
        if (duration && p.duration) {
          const matches = p.duration.match(/\d+/g);
          if (matches) {
            const peakDays = matches.map(Number);
            const selectedDay = Number(duration);
            if (!peakDays.some(day => Math.abs(day - selectedDay) <= 1)) return false;
          }
        }
        return true;
      });

      // Filter safaris - filter by location (not region) and duration, ignore difficulty
      const safariResults = (safaris || []).filter((s: SafariPackage) => {
        // Only include if adventure type is 'all' or 'safari'
        if (adventureType !== 'all' && adventureType !== 'safari') return false;
        // Filter by location if region filter is set (safari uses 'location' field)
        if (region && s.location && !s.location.toLowerCase().includes(region.toLowerCase())) return false;
        // Safaris ignore difficulty filter
        if (duration && s.duration) {
          const matches = s.duration.match(/\d+/g);
          if (matches) {
            const safariDays = matches.map(Number);
            const selectedDay = Number(duration);
            if (!safariDays.some(day => Math.abs(day - selectedDay) <= 1)) return false;
          }
        }
        return true;
      });

      // Combine all results
      const combinedResults = [
        ...trekResults.map(t => ({ ...t, type: 'trek' as const })),
        ...peakResults.map(p => ({ ...p, type: 'peak' as const })),
        ...safariResults.map(s => ({ ...s, type: 'safari' as const }))
      ];

      setResults(combinedResults);
      setSearched(true);
    } else {
      setSearched(false);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto mt-0 mb-12 relative z-50">
      {/* Mobile Search Toggle Button */}
      <div className="flex justify-center mb-4 md:hidden">
        <button
          type="button"
          aria-label={showMobileSearch ? 'Close search' : 'Open search'}
          onClick={() => setShowMobileSearch(v => !v)}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary-600 text-white font-bold shadow hover:bg-primary-700 transition focus:outline-none focus:ring-2 focus:ring-primary-400"
        >
          {showMobileSearch ? (
            <span className="flex items-center gap-1"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /></svg> Close</span>
          ) : (
            <span className="flex items-center gap-1"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 8h16M4 16h16' /></svg> Search Trek</span>
          )}
        </button>
      </div>

      {/* Mobile Full-Screen Modal Overlay with Portal and Blur */}
      {showMobileSearch && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm md:hidden">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-white dark:bg-gray-800">
            {/* Header */}
            <div className={`sticky top-0 z-10 flex items-center justify-between p-6 border-b ${
              isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
            }`}>
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Search Treks
                </h2>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Find your perfect adventure
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowMobileSearch(false);
                  setSearched(false);
                }}
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="space-y-4">
              {/* Trek Type */}
              <div>
                <label className={`flex text-sm font-semibold mb-2 items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  <FaHiking className={isDarkMode ? 'text-primary-400' : 'text-primary-600'} />
                  Trek Type
                </label>
                <select 
                  className={`w-full rounded-lg border py-3 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  value={adventureType} 
                  onChange={e => { setAdventureType(e.target.value); setRegion(''); setDifficulty(''); setSearched(false); }}
                >
                  {TREK_TYPES.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
              </div>

              {/* Region */}
              <div>
                <label className={`flex text-sm font-semibold mb-2 items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  <FaMapMarkerAlt className={isDarkMode ? 'text-primary-400' : 'text-primary-600'} />
                  Region
                </label>
                <select 
                  className={`w-full rounded-lg border py-3 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  value={region} 
                  onChange={e => { setRegion(e.target.value); setSearched(false); }}
                >
                  <option value="">All Regions</option>
                  {getRegions(treks, peaks, safaris).map((r: string) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              {/* Difficulty */}
              <div>
                <label className={`flex text-sm font-semibold mb-2 items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  <FaChartLine className={isDarkMode ? 'text-primary-400' : 'text-primary-600'} />
                  Difficulty
                </label>
                <select 
                  className={`w-full rounded-lg border py-3 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  value={difficulty} 
                  onChange={e => { setDifficulty(e.target.value); setSearched(false); }}
                >
                  <option value="">Any</option>
                  {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className={`flex text-sm font-semibold mb-2 items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  <FaClock className={isDarkMode ? 'text-primary-400' : 'text-primary-600'} />
                  Duration
                </label>
                <select 
                  className={`w-full rounded-lg border py-3 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  value={duration} 
                  onChange={e => { setDuration(e.target.value); setSearched(false); }}
                >
                  <option value="">Any</option>
                  {DURATIONS.map(d => <option key={d} value={String(d)}>{d}</option>)}
                </select>
              </div>

              {/* Search Button */}
              <button 
                type="submit" 
                className="w-full py-4 rounded-lg bg-primary-600 text-white font-bold shadow-lg hover:bg-primary-700 transition text-lg"
              >
                {searched ? 'Reset Search' : 'Search'}
              </button>
            </form>

            {/* Results Section */}
            {searched && (
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {results.length} {results.length === 1 ? 'Result' : 'Results'} Found
                </h3>
                {results.length === 0 ? (
                  <div className={`rounded-2xl p-6 border ${isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                    <p className="text-lg font-semibold text-red-500 mb-2">
                      {adventureType === 'safari'
                        ? 'No available safari found.'
                        : adventureType === 'peak'
                        ? 'No available peak expedition found.'
                        : 'No available trek found.'}
                    </p>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>It seems we can't find what you are looking for. We are here to help you. Please contact us or fill out the custom trek form below.</p>
                    <a 
                      href="#" 
                      onClick={e => { 
                        e.preventDefault(); 
                        setShowCustomTrekModal(true); 
                      }} 
                      className="block w-full text-center px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-bold shadow hover:bg-yellow-500 transition mb-4"
                    >
                      Custom Trek Form
                    </a>
                    <div className="mt-4 space-y-3">
                      <div className={`flex items-center gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <FaEnvelope className="text-xl" />
                        <span className="text-sm">ngiman81@gmail.com</span>
                      </div>
                      <div className={`flex items-center gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <FaPhoneAlt className="text-xl" />
                        <span className="text-sm">9803499156</span>
                      </div>
                      <div className={`flex items-center gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <FaWhatsapp className="text-xl" />
                        <span className="text-sm">9803499156</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {results.map((result: SearchResult) => {
                      const detailUrl = result.type === 'safari' 
                        ? `/safari/${result.id}`
                        : result.type === 'peak'
                        ? `/peak-expedition/${result.id}`
                        : `/treks/${result.id}`;
                      
                      // Type guard to safely access properties
                      const region = 'region' in result ? result.region : ('location' in result ? result.location : 'N/A');
                      const difficulty = 'difficulty' in result ? result.difficulty : undefined;
                      
                      return (
                        <div key={result.id} className={`rounded-2xl shadow-lg p-4 border ${isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                          <img 
                            src={typeof result.image === 'string' ? `/assets/images/${result.image.replace(/^.*\//, '')}` : '/assets/images/hero.png'} 
                            alt={result.name} 
                            className="w-full h-48 object-cover rounded-lg mb-3" 
                          />
                          <h3 className="font-bold text-lg mb-2 text-primary-700 dark:text-primary-300">{result.name}</h3>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt /> <span>{region}</span>
                            </div>
                            {difficulty && (
                              <div className="flex items-center gap-2">
                                <FaChartLine /> <span>{difficulty}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <FaClock /> <span>{result.duration}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                            {result.description?.slice(0, 100)}...
                          </p>
                          <a 
                            href={detailUrl} 
                            className="block w-full text-center px-4 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition"
                          >
                            View Details
                          </a>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Desktop Search Form - hidden on mobile */}
      <form
        onSubmit={handleSearch}
        className="hidden md:flex relative z-20 rounded-3xl border-2 border-primary-700 dark:border-primary-100 bg-white/95 dark:bg-gray-900/95 px-4 py-4 md:py-6 md:px-10 flex-col gap-4 md:gap-8 shadow-2xl md:shadow-3xl backdrop-blur-xl"
        style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)' }}
      >
        {/* Inputs Row + Search Button Row for desktop */}
        <div className="flex flex-col md:flex-row md:gap-8 lg:flex-row lg:items-end lg:gap-8">
          {/* Inputs */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 flex-1">
            {/* Trek Type */}
            <div className="flex-1 min-w-[150px]">
              <label className="flex text-sm font-bold mb-1 text-gray-700 dark:text-gray-200 items-center gap-1">
                <span className="inline-block mr-1">
                  <FaHiking className={isDarkMode ? 'text-white' : 'text-primary-600'} />
                </span>
                Trek Type
              </label>
              <div className="relative">
                <select className="w-full rounded-lg border-gray-300 dark:border-gray-700 py-2 pl-9 pr-3 focus:ring-2 focus:ring-primary-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm" value={adventureType} onChange={e => { setAdventureType(e.target.value); setRegion(''); setDifficulty(''); setSearched(false); }}>
                  {TREK_TYPES.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
                <span className={`absolute left-2 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-white' : 'text-primary-600'}`}>{adventureType === 'trekking' && <FaHiking />} {adventureType === 'peak' && <FaMountain />} {adventureType === 'safari' && <FaBinoculars />}</span>
              </div>
            </div>
            {/* Region - now shown for all adventure types */}
            <div className="flex-1 min-w-[150px]">
              <label className="flex text-sm font-bold mb-1 text-gray-700 dark:text-gray-200 items-center gap-1">
                <span className="inline-block mr-1">
                  <FaMapMarkerAlt className={isDarkMode ? 'text-white' : 'text-primary-600'} />
                </span>
                Region
              </label>
              <div className="relative">
                <select className="w-full rounded-lg border-gray-300 dark:border-gray-700 py-2 pl-9 pr-3 focus:ring-2 focus:ring-primary-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm" value={region} onChange={e => { setRegion(e.target.value); setSearched(false); }}>
                  <option value="">All Regions</option>
                  {getRegions(treks, peaks, safaris).map((r: string) => <option key={r} value={r}>{r}</option>)}
                </select>
                <span className={`absolute left-2 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-white' : 'text-primary-600'}`}><FaMapMarkerAlt /></span>
              </div>
            </div>
            {/* Difficulty - now shown for all adventure types */}
            <div className="flex-1 min-w-[150px]">
              <label className="flex text-sm font-bold mb-1 text-gray-700 dark:text-gray-200 items-center gap-1">
                <span className="inline-block mr-1">
                  <FaChartLine className={isDarkMode ? 'text-white' : 'text-primary-600'} />
                </span>
                Difficulty
              </label>
              <div className="relative">
                <select className="w-full rounded-lg border-gray-300 dark:border-gray-700 py-2 pl-9 pr-3 focus:ring-2 focus:ring-primary-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm" value={difficulty} onChange={e => { setDifficulty(e.target.value); setSearched(false); }}>
                  <option value="">Any</option>
                  {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <span className={`absolute left-2 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-white' : 'text-primary-600'}`}><FaChartLine /></span>
              </div>
            </div>
            {/* Duration */}
            <div className="flex-1 min-w-[150px]">
              <label className="flex text-sm font-bold mb-1 text-gray-700 dark:text-gray-200 items-center gap-1">
                <span className="inline-block mr-1">
                  <FaClock className={isDarkMode ? 'text-white' : 'text-primary-600'} />
                </span>
                Duration
              </label>
              <div className="relative">
                <select className="w-full rounded-lg border-gray-300 dark:border-gray-700 py-2 pl-9 pr-3 focus:ring-2 focus:ring-primary-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm" value={duration} onChange={e => { setDuration(e.target.value); setSearched(false); }}>
                  <option value="">Any</option>
                  {DURATIONS.map(d => <option key={d} value={String(d)}>{d}</option>)}
                </select>
                <span className={`absolute left-2 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-white' : 'text-primary-600'}`}><FaClock /></span>
              </div>
            </div>
          </div>
          {/* Search/Close Button - inline for lg+, below for md */}
          <div className="md:w-full lg:w-auto md:flex md:justify-end mt-4 md:mt-0">
            <button type="submit" className="flex-shrink-0 px-6 py-3 rounded-lg bg-primary-600 text-white font-bold shadow hover:bg-primary-700 transition h-12 w-full md:w-auto">
              {searched ? 'Close' : 'Search'}
            </button>
          </div>
        </div>
        {/* Desktop Results Dropdown Overlay (positioned below form) */}
        {searched && (
          <div className="absolute left-0 right-0 top-full mt-4 z-[9999] flex items-start justify-center px-2 md:px-0">
            <div className="w-full max-w-5xl bg-gray-200 dark:bg-gray-800 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-10 overflow-y-auto max-h-[80vh]">
              {results.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-lg font-semibold text-red-500 mb-2">
                    {adventureType === 'safari'
                      ? 'No available safari found.'
                      : adventureType === 'peak'
                      ? 'No available peak expedition found.'
                      : 'No available trek found.'}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">It seems we can't find what you are looking for. We are here to help you. Please contact us or fill out the custom trek form below.</p>
                  <div className="mt-6">
                    <a href="#" onClick={e => { e.preventDefault(); setShowCustomTrekModal(true); }} className="inline-block px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-bold shadow hover:bg-yellow-500 transition mb-4">Custom Trek Form</a>
                    <div className="mt-2 grid grid-cols-3 gap-4 items-center justify-center text-gray-600 dark:text-gray-300">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl mb-1"><FaEnvelope /></span>
                        <span className="jaini-purva-light text-sm md:text-base">ngiman81@gmail.com</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-2xl mb-1"><FaPhoneAlt /></span>
                        <span className="jaini-purva-light text-sm md:text-base">9803499156</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-2xl mb-1"><FaWhatsapp /></span>
                        <span className="jaini-purva-light text-sm md:text-base">9803499156</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {results.map((result: SearchResult) => {
                    const detailUrl = result.type === 'safari' 
                      ? `/safari/${result.id}`
                      : result.type === 'peak'
                      ? `/peak-expedition/${result.id}`
                      : `/treks/${result.id}`;
                    
                    // Type guard to safely access properties
                    const region = 'region' in result ? result.region : ('location' in result ? result.location : 'N/A');
                    const difficulty = 'difficulty' in result ? result.difficulty : undefined;
                    
                    return (
                      <div key={result.id} className="bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <img src={typeof result.image === 'string' ? `/assets/images/${result.image.replace(/^.*\//, '')}` : '/assets/images/hero.png'} alt={result.name} className="w-full h-40 object-cover rounded-lg mb-3" />
                        <h3 className="font-bold text-lg mb-1 text-primary-700 dark:text-primary-300">{result.name}</h3>
                        <div className="text-xs text-gray-500 mb-2 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1"><FaMapMarkerAlt /> {region}</span>
                          {difficulty && <span className="inline-flex items-center gap-1"><FaChartLine /> {difficulty}</span>}
                          <span className="inline-flex items-center gap-1"><FaClock /> {result.duration}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 flex-1 mb-2 text-sm">{result.description?.slice(0, 80)}...</p>
                        <a href={detailUrl} className="mt-auto inline-block px-4 py-2 rounded bg-primary-600 text-white font-semibold hover:bg-primary-700 transition">View Details</a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </form>
      
      {/* Custom Trek Modal */}
      {showCustomTrekModal && (
        <CustomTrekModal isOpen={showCustomTrekModal} onClose={() => setShowCustomTrekModal(false)} />
      )}
    </section>
  );
};

export default SearchTrekking;
