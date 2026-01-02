'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import { getImageSrc } from '../utils/imageHelpers';
import type { Region, Trek } from '@/lib/types';
import TrekCard from './TrekCard';
import CustomTrekModal from './CustomTrekModal';
import ContactModal from './ContactModal';
import { Mountain, Clock, TrendingUp, Compass, Users, Eye, Map } from 'lucide-react';
import BookingModal from './BookingModal';

interface RegionTreksProps {
  region: Region;
  treks: Trek[];
  onTrekSelect: (trek: Trek) => void;
}

// Region-specific special features
const regionSpecial: Record<string, {
  uniqueLandscapes: string;
  richCulture: string;
  stunningViews: string;
  areaCoverage: string;
}> = {
  'everest': {
    uniqueLandscapes: 'Experience the dramatic Khumbu Valley with its glacial moraines, suspension bridges, and high-altitude terrain leading to the base of Mount Everest',
    richCulture: 'Discover authentic Sherpa culture in villages like Namche Bazaar, Khumjung, Khunde, Pangboche, Phortse, and Tengboche, home to ancient monasteries and warm mountain hospitality',
    stunningViews: 'Witness the world\'s highest peaks including Everest, Lhotse, Nuptse, and Ama Dablam from iconic viewpoints like Kala Patthar',
    areaCoverage: 'Covers the Sagarmatha National Park (1,148 km²), UNESCO World Heritage Site, with elevations ranging from 2,845m at Lukla to 8,848m at Mount Everest summit'
  },
  'annapurna': {
    uniqueLandscapes: 'Traverse diverse ecosystems from subtropical rhododendron forests to high alpine deserts, including the world\'s deepest gorge - Kali Gandaki',
    richCulture: 'Immerse in Gurung, Manangi, and Thakali cultures, exploring traditional villages and ancient Bon-Po and Buddhist traditions',
    stunningViews: 'Behold panoramic views of the Annapurna massif, Dhaulagiri, Machapuchare (Fishtail), and stunning sunrise from Poon Hill',
    areaCoverage: 'Encompasses Annapurna Conservation Area (7,629 km²), Nepal\'s largest protected area, spanning elevations from 790m to 8,091m at Annapurna I summit'
  },
  'manaslu': {
    uniqueLandscapes: 'Trek through pristine valleys with terraced fields, dense forests, and high passes offering an off-the-beaten-path wilderness experience',
    richCulture: 'Experience Tibetan Buddhist culture in remote villages with prayer flags, mani walls, and ancient gompas influenced by Tibetan traditions',
    stunningViews: 'Marvel at the eighth highest mountain Manaslu (8,163m) along with spectacular views of Ganesh Himal, Himalchuli, and Ngadi Chuli',
    areaCoverage: 'Located in Manaslu Conservation Area (1,663 km²), bordering Tibet, with elevations ranging from 600m in Budi Gandaki valley to 8,163m at Manaslu peak'
  },
  'kanchenjunga': {
    uniqueLandscapes: 'Explore Nepal\'s most remote and pristine wilderness with alpine meadows, glacial valleys, and diverse flora and fauna in untouched nature',
    richCulture: 'Encounter Limbu, Rai, and Sherpa communities preserving ancient traditions in isolated villages rarely visited by outsiders',
    stunningViews: 'Stand before the world\'s third highest peak Kanchenjunga (8,586m) with its five treasures of snow, surrounded by dramatic Himalayan scenery',
    areaCoverage: 'Spans Kanchenjunga Conservation Area (2,035 km²) in far eastern Nepal, extending from 1,200m subtropical forests to 8,586m at Kanchenjunga summit'
  },
  'langtang': {
    uniqueLandscapes: 'Journey through the "Valley of Glaciers" with lush forests, alpine meadows, and terminal moraines below the Langtang Lirung glacier',
    richCulture: 'Experience Tamang heritage in traditional stone houses, learn about yak herding traditions, and visit sacred Kyanjin Gompa monastery',
    stunningViews: 'Enjoy close-up views of Langtang Lirung, Ganesh Himal, and Dorje Lakpa from Kyanjin Ri and Tserko Ri viewpoints',
    areaCoverage: 'Part of Langtang National Park (1,710 km²), located 51km north of Kathmandu, with altitudes from 1,500m to 7,227m at Langtang Lirung peak'
  },
  'dolpo': {
    uniqueLandscapes: 'Discover Nepal\'s most remote trans-Himalayan region with high desert plateaus, turquoise Phoksundo Lake, and ancient trade routes',
    richCulture: 'Step into a living museum of Bon-Po religion and Tibetan Buddhism with centuries-old traditions preserved in extreme isolation',
    stunningViews: 'Experience otherworldly landscapes with dramatic cliff formations, vast plateaus, and distant snow-capped peaks in all directions',
    areaCoverage: 'Covers Shey Phoksundo National Park (3,555 km²), Nepal\'s largest national park, with elevations from 2,000m to 6,883m at Kanjiroba Himal'
  },
  'dhaulagiri': {
    uniqueLandscapes: 'Challenge yourself through rugged terrain including the French Pass and Italian Base Camp with dramatic glacial landscapes',
    richCulture: 'Visit remote Magar and Gurung villages maintaining traditional lifestyles in the shadow of the seventh highest mountain',
    stunningViews: 'Witness the massive south face of Dhaulagiri (8,167m), Tukuche Peak, and the entire Annapurna range from elevated passes',
    areaCoverage: 'Located in western Nepal spanning approximately 1,400 km², with elevations from 1,400m in Myagdi valley to 8,167m at Dhaulagiri I summit'
  },
  'makalu': {
    uniqueLandscapes: 'Trek through the pristine Makalu-Barun National Park with diverse ecosystems ranging from tropical to alpine, home to rare wildlife',
    richCulture: 'Experience the unique Rai and Sherpa cultures in remote settlements where ancient traditions thrive in mountain isolation',
    stunningViews: 'Behold the majestic pyramid of Makalu (8,485m), the world\'s fifth highest peak, along with Everest, Lhotse, and Baruntse',
    areaCoverage: 'Encompasses Makalu-Barun National Park (1,500 km²) in eastern Nepal, featuring extreme elevation changes from 435m to 8,485m at Makalu summit'
  },
  'rolwaling': {
    uniqueLandscapes: 'Discover the hidden valley between Everest and Langtang featuring challenging high passes, glacial lakes, and pristine wilderness',
    richCulture: 'Explore Sherpa villages like Beding and Na where yeti legends originated and traditional high-altitude lifestyles continue',
    stunningViews: 'Cross the dramatic Tashi Lapcha Pass (5,755m) with stunning views of Gauri Shankar, Melungtse, and the Rolwaling Himal range',
    areaCoverage: 'Located in Gaurishankar Conservation Area (2,179 km²), northeast of Kathmandu, with elevations from 1,400m to 7,181m at Gauri Shankar peak'
  },
  'default': {
    uniqueLandscapes: 'Experience diverse terrain from lush valleys to high alpine environments with unique geographical features',
    richCulture: 'Immerse yourself in local traditions and authentic mountain communities preserving ancient Himalayan heritage',
    stunningViews: 'Witness breathtaking mountain panoramas and pristine natural beauty throughout your trekking journey',
    areaCoverage: 'Explore varied geographical terrain spanning multiple elevation zones with diverse ecosystems and protected conservation areas'
  }
};

const RegionTreks: React.FC<RegionTreksProps> = ({ region, treks, onTrekSelect }) => {
  const { isDarkMode } = useTheme();
  const [isCustomTrekModalOpen, setIsCustomTrekModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Get region-specific features or use default
  const regionFeatures = regionSpecial[region.id] || regionSpecial['default'];

  // Helper function to convert trek name to URL slug
  const trekNameToSlug = (trekName: string): string => {
    return trekName
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  return (
    <div className="min-h-screen pt-[20px] xl:pt-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-8">
        {/* Region Hero */}
        <div className="relative h-80 rounded-2xl overflow-hidden mb-8">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(${
                isDarkMode 
                  ? 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)' 
                  : 'rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)'
              }), url("${getImageSrc(region.image)}")`
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
            <div className="text-center text-white w-full max-w-5xl">
              {/* Title with consistent sizing */}
              <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl jaini-purva-regular font-bold mb-3 xl:mb-4 drop-shadow-2xl leading-tight px-2">
                {region.name}
              </h1>
              
              {/* Description with line clamp to prevent overflow */}
              <p className="text-base sm:text-lg xl:text-xl 2xl:text-2xl max-w-3xl mx-auto leading-relaxed px-4 mb-4 xl:mb-6 drop-shadow-lg line-clamp-2">
                {region.description}
              </p>
              
              {/* Stats with better responsive behavior */}
              <div 
                className="mt-4 xl:mt-6 inline-flex items-center justify-center gap-3 sm:gap-4 xl:gap-6 bg-black/30 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20 shadow-2xl jaini-purva-regular"
                style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}
              >
                {/* Available Treks */}
                <div className="text-center min-w-[70px] sm:min-w-[80px]">
                  <div className="flex items-center justify-center mb-1">
                    <Mountain className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 mr-1 sm:mr-1.5 opacity-90" />
                    <div className="text-xl sm:text-2xl xl:text-3xl font-bold drop-shadow-lg" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>{treks.length}</div>
                  </div>
                  <div className="text-[10px] sm:text-xs xl:text-sm opacity-90 uppercase tracking-wider font-semibold" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>Treks</div>
                </div>
                
                {/* Divider */}
                <div className="w-px h-10 sm:h-12 bg-white/30"></div>
                
                {/* Duration Range */}
                <div className="text-center min-w-[90px] sm:min-w-[110px] xl:min-w-[130px]">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 mr-1 sm:mr-1.5 opacity-90" />
                    <div className="text-lg sm:text-xl xl:text-2xl font-bold drop-shadow-lg whitespace-nowrap" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>
                      {treks.length > 0 ? (() => {
                        const minDuration = Math.min(...treks.map(t => parseInt(t.duration)));
                        const maxDuration = Math.max(...treks.map(t => parseInt(t.duration)));
                        return minDuration === maxDuration 
                          ? `Up to ${maxDuration}` 
                          : `${minDuration}-${maxDuration}`;
                      })() : 'N/A'}
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs xl:text-sm opacity-90 uppercase tracking-wider font-semibold" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>
                    {treks.length > 0 && Math.min(...treks.map(t => parseInt(t.duration))) === Math.max(...treks.map(t => parseInt(t.duration))) ? 'Days' : 'Days'}
                  </div>
                </div>
                
                {/* Divider */}
                <div className="w-px h-10 sm:h-12 bg-white/30"></div>
                
                {/* Difficulty */}
                <div className="text-center min-w-[70px] sm:min-w-[90px]">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 mr-1 sm:mr-1.5 opacity-90" />
                    <div className="text-xl sm:text-2xl xl:text-3xl font-bold drop-shadow-lg" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>All</div>
                  </div>
                  <div className="text-[10px] sm:text-xs xl:text-sm opacity-90 uppercase tracking-wider font-semibold" style={{ fontFamily: "'Jaini Purva', system-ui, sans-serif" }}>Levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treks Section */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className={`text-3xl jaini-purva-regular font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Popular Treks
            </h2>
            <span className={`text-lg font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {treks.length} {treks.length === 1 ? 'Trek' : 'Treks'} Available
            </span>
          </div>

          {/* Trek Names List */}
          {treks.length > 0 && (
            <div className={`mb-6 p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
              <p className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Treks in this region:
              </p>
              <div className="flex flex-wrap gap-2">
                {treks.map((trek, index) => (
                  <Link
                    key={trek.id}
                    href={`/treks/${trekNameToSlug(trek.name)}`}
                    onClick={(e) => e.stopPropagation()} // Prevent any parent click handlers
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isDarkMode 
                        ? 'bg-blue-900/30 text-blue-300 border border-blue-700/50 hover:bg-blue-900/50 hover:border-blue-600 hover:text-blue-200' 
                        : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800'
                    }`}
                  >
                    {index + 1}. {trek.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {treks.length > 0 ? (
            <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-8">
              {treks.map((trek) => (
                <TrekCard 
                  key={trek.id} 
                  trek={trek} 
                  onExplore={() => onTrekSelect(trek)} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <div className="text-6xl mb-4">🏔️</div>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                More Treks Coming Soon
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                We're working on adding more amazing treks in this region. 
                Contact us for custom trek options.
              </p>
              <button 
                onClick={() => setIsCustomTrekModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-heading font-semibold transition-colors"
              >
                Request Custom Trek
              </button>
            </div>
          )}
        </div>

        {/* Region Features */}
        <div className={`rounded-2xl p-8 mb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-2xl jaini-purva-regular font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            What Makes {region.name} Special
          </h3>
          <div className="grid xl:grid-cols-2 2xl:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center mb-2">
                <Compass className={`mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                <h4 className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Unique Landscapes
                </h4>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {regionFeatures.uniqueLandscapes}
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <Users className={`mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                <h4 className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Rich Culture
                </h4>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {regionFeatures.richCulture}
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <Eye className={`mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                <h4 className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Stunning Views
                </h4>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {regionFeatures.stunningViews}
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <Map className={`mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                <h4 className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Area Coverage
                </h4>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {regionFeatures.areaCoverage}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-600 to-cyan-600'} text-white`}>
            <h3 className="text-2xl jaini-purva-regular font-bold mb-4">
              Ready to Explore {region.name}?
            </h3>
            <p className={`mb-6 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-blue-100'}`}>
              Choose from our carefully curated treks or let us create a custom itinerary 
              just for you. Every adventure is tailored to your experience and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className={`px-8 py-3 rounded-full font-heading font-semibold transition-colors ${
                  isDarkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Book Now
              </button>
              <button 
                onClick={() => setIsCustomTrekModalOpen(true)}
                className={`px-8 py-3 rounded-full font-heading font-semibold transition-colors ${
                  isDarkMode 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-white text-purple-600 hover:bg-purple-50'
                }`}
              >
                Plan My Trek
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className={`px-8 py-3 rounded-full font-heading font-semibold border-2 transition-colors ${
                  isDarkMode 
                    ? 'border-gray-400 text-gray-300 hover:bg-gray-700' 
                    : 'border-white text-white hover:bg-white hover:text-blue-600'
                }`}
              >
                Contact Specialist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <CustomTrekModal 
        isOpen={isCustomTrekModalOpen}
        onClose={() => setIsCustomTrekModalOpen(false)}
        title="Plan Your Custom Trek"
        subtitle={`Create a personalized itinerary for ${region.name} region`}
      />

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Contact Trek Specialist"
        subtitle={`Get expert advice for trekking in ${region.name}`}
      />
    </div>
  );
};

export default RegionTreks;
