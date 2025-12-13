'use client '
import React, { useState} from 'react';
import { allTreks, Trek } from '../data/treks';
import { FaHiking, FaMountain, FaBinoculars, FaMapMarkerAlt, FaChartLine, FaClock, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import CustomTrekModal from './CustomTrekModal';
import { useTheme } from '../contexts/ThemeContext';


const TREK_TYPES = [
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

// Helper to get unique regions from treks data
const getRegions = () => {
  const regions = allTreks
    .filter((t: Trek) => t.region && t.region.length > 0)
    .map((t: Trek) => t.region)
    .filter(Boolean);
  return Array.from(new Set(regions)) as string[];
};

const SearchTrekking = () => {
  const { isDarkMode } = useTheme();
  const [adventureType, setAdventureType] = useState('trekking');
  const [region, setRegion] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState('');
  const [results, setResults] = useState<Trek[]>(allTreks);
  const [searched, setSearched] = useState(false);
  const [showCustomTrekModal, setShowCustomTrekModal] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showHeading, setShowHeading] = useState(false);

  // Show heading after 2 seconds, then hide after 3 more seconds (only on large screens)
  React.useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowHeading(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setShowHeading(false);
    }, 7000); // 2s + 5s = 7s total

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searched) {
      const filtered = allTreks.filter((t: Trek) => {
        if (adventureType && t.adventureType && t.adventureType.toLowerCase() !== adventureType) return false;
        // Region filter for all adventure types
        if (region && t.region !== region) return false;
        // Difficulty filter for all adventure types
        if (difficulty && t.difficulty && difficulty !== '') {
          if (t.difficulty !== difficulty) return false;
        }
        // Duration filter for all adventure types
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
      setResults(filtered);
      setSearched(true);
    } else {
      setSearched(false);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto mt-0 mb-12 relative z-50">
      {/* Heading section - always visible on mobile, timed on large screens */}
      <div className={`flex flex-col items-center justify-center mb-6 px-4 transition-all duration-500 ${
        showHeading ? 'lg:opacity-100 lg:translate-y-0' : 'lg:opacity-0 lg:-translate-y-4 lg:pointer-events-none'
      } opacity-100 translate-y-0 md:opacity-100 md:translate-y-0`}>
        <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 rounded-2xl px-6 py-4 md:px-8 md:py-6 shadow-lg border border-white/20 dark:border-gray-700/30">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl jaini-purva-regular text-center mb-2 text-gray-900 dark:text-gray-100">
            Find Your Perfect Trek
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-body text-center text-gray-700 dark:text-gray-300 max-w-2xl">
            Search by trek type, region, difficulty, and duration to discover your ideal Himalayan adventure
          </p>
        </div>
      </div>
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
            <span className="flex items-center gap-1"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 8h16M4 16h16' /></svg> Search</span>
          )}
        </button>
      </div>
      {/* Search Form - hidden on mobile unless toggled */}
      <form
        onSubmit={handleSearch}
        className={`relative z-20 rounded-3xl border-2 border-primary-700 dark:border-primary-100 bg-white/95 dark:bg-gray-900/95 px-4 py-4 md:py-6 md:px-10 flex flex-col gap-4 md:gap-8 shadow-2xl md:shadow-3xl backdrop-blur-xl transition-transform duration-300 ${showMobileSearch ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 md:scale-100 md:translate-y-0 md:opacity-100'} ${showMobileSearch ? '' : 'hidden'} md:flex`}
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
                  {getRegions().map((r: string) => <option key={r} value={r}>{r}</option>)}
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
        {/* Results Dropdown Overlay (positioned below form) */}
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
                  {results.map((trek: Trek) => (
                    <div key={trek.id} className="bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                      <img src={typeof trek.image === 'string' ? `/assets/images/${trek.image.replace(/^.*\//, '')}` : '/assets/images/hero.png'} alt={trek.name} className="w-full h-40 object-cover rounded-lg mb-3" />
                      <h3 className="font-bold text-lg mb-1 text-primary-700 dark:text-primary-300">{trek.name}</h3>
                      <div className="text-xs text-gray-500 mb-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1"><FaMapMarkerAlt /> {trek.region}</span>
                        {adventureType === 'trekking' && <span className="inline-flex items-center gap-1"><FaChartLine /> {trek.difficulty}</span>}
                        <span className="inline-flex items-center gap-1"><FaClock /> {trek.duration}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 flex-1 mb-2 text-sm">{trek.description?.slice(0, 80)}...</p>
                      <a href={`/treks/${trek.id}`} className="mt-auto inline-block px-4 py-2 rounded bg-primary-600 text-white font-semibold hover:bg-primary-700 transition">View Details</a>
                    </div>
                  ))}
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
