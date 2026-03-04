"use client";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Trek } from "@/lib/types";
import ContactModal from "./ContactModal";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const TrekReel: React.FC = () => {
  const router = useRouter();
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [allTreks, setAllTreks] = useState<Trek[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fetch treks from Storyblok on mount
  useEffect(() => {
    async function fetchTreks() {
      try {
        const response = await fetch('/api/treks');
        if (response.ok) {
          const data = await response.json();
          setAllTreks(data);
        }
      } catch (error) {
        console.error('Error fetching treks in TrekReel:', error);
      }
    }
    fetchTreks();
    setMounted(true);
  }, []);

  // Featured trek IDs (same as TreksSection)
  const featuredTrekIds = [
    'everest-base-camp',
    'ebc-gokyo',
    'everest-three-passes',
    'abc-trek',
    'annapurna-circuit',
    'langtang-valley',
    'manaslu-circuit',
    'kanchenjunga-circuit',
    'dolpo-trek',
  ];

  // Get featured treks from allTreks
  const displayTreks = featuredTrekIds
    .map(id => allTreks.find(trek => trek.id === id))
    .filter((trek): trek is Trek => trek !== undefined);

  // Duplicate treks for seamless infinite scroll
  const duplicatedTreks = [...displayTreks, ...displayTreks, ...displayTreks];

  // Auto-scroll animation
  useEffect(() => {
    if (!scrollContainerRef.current || displayTreks.length === 0) return;

    const container = scrollContainerRef.current;
    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;
        
        // Get the width of one set of treks
        const singleSetWidth = container.scrollWidth / 3;
        
        // Reset position when we've scrolled through one set
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [displayTreks.length, isPaused]);

  if (displayTreks.length === 0) {
    return null;
  }

  return (
    <>
      <div 
        className="relative w-full overflow-hidden py-2 bg-gradient-to-r from-blue-50/50 via-white to-green-50/50 dark:from-gray-900/50 dark:via-gray-800 dark:to-gray-900/50"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        
        {/* Film reel decoration - top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700 flex items-center justify-around overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="w-3 h-1 bg-gray-400/50 rounded-full" />
          ))}
        </div>
        
        {/* Film reel decoration - bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700 flex items-center justify-around overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="w-3 h-1 bg-gray-400/50 rounded-full" />
          ))}
        </div>

        {/* Scrolling Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 md:gap-4 overflow-x-hidden py-3 px-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedTreks.map((trek, index) => (
            <div
              key={`${trek.id}-${index}`}
              className="trek-card-wrapper flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]"
            >
              {/* Thumbnail Card */}
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                {/* Image */}
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img 
                    src={typeof trek.image === 'string' ? trek.image : ''}
                    alt={trek.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Duration Badge */}
                  <div className="absolute top-2 left-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-md">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-500" />
                      <span className="text-xs font-bold text-gray-800 dark:text-white">{trek.duration}</span>
                    </div>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-3">
                  {/* Trek Name */}
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 line-clamp-1 group-hover:text-blue-500 transition-colors">
                    {trek.name}
                  </h3>
                  
                  {/* Region */}
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mb-2">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">{trek.region || 'Nepal'}</span>
                  </div>
                  
                  {/* Explore Button */}
                  <button
                    onClick={() => {
                      setSelectedTrek(trek);
                      setShowDetail(true);
                    }}
                    className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-300"
                  >
                    <span>Explore Trek</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pause Indicator */}
        {isPaused && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold z-20 pointer-events-none opacity-75">
            ⏸ Paused
          </div>
        )}
      </div>

      {/* Trek Detail Modal - Portal to document body */}
      {mounted &&
        showDetail &&
        selectedTrek &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setShowDetail(false)}
                className="absolute top-4 right-4 z-10 bg-gray-200 dark:bg-gray-800 rounded-full p-2 hover:bg-primary-500 hover:text-white transition"
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-primary-500 times">
                  {selectedTrek.name}
                </h2>
                <img
                  src={
                    typeof selectedTrek.image === "string"
                      ? selectedTrek.image
                      : ""
                  }
                  alt={selectedTrek.name}
                  className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg"
                />
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-primary-500 text-white px-4 py-2 rounded-full font-display font-bold text-sm shadow-lg">
                    {selectedTrek.duration}
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-display font-semibold text-sm">
                    {selectedTrek.difficulty}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-display font-semibold text-sm">
                    {selectedTrek.region}
                  </span>
                  {selectedTrek.altitude && (
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-display font-semibold text-sm">
                      {selectedTrek.altitude}
                    </span>
                  )}
                </div>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedTrek.description}
                </p>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      setShowDetail(false);
                      router.push(`/treks/${selectedTrek.id}`);
                    }}
                    className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 rounded-lg font-display font-semibold uppercase tracking-wider text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => {
                      setShowDetail(false);
                      setIsContactModalOpen(true);
                    }}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Contact Modal - Outside section for portal behavior */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default TrekReel;
