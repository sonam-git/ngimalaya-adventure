'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import GalleryImageCard from './GalleryImageCard';
import SectionHeader from './SectionHeader';

// Hardcoded fallback images - moved outside component to avoid dependencies
const fallbackImages = [
  {
    title: 'Everest Base Camp',
    description: 'A breathtaking journey to the base of the world\'s highest mountain, offering stunning Himalayan views.',
    image: '/assets/images/ebc.jpeg',
    region: 'Everest',
    trek: 'EBC Trek',
  },
    {
      title: 'Annapurna Base Camp',
      description: 'Experience diverse landscapes, from lush valleys to high mountain passes, on this iconic trek.',
      image: '/assets/images/abc.jpeg',
      region: 'Annapurna',
      trek: 'ABC Trek',
    },
    {
      title: 'Gokyo Lakes',
      description: 'Marvel at the turquoise glacial lakes and panoramic views from Gokyo Ri.',
      image: '/assets/images/gokyo.jpeg',
      region: 'Everest',
      trek: 'Gokyo Trek',
    },
    {
      title: 'Gokyo Ri Summit',
      description: 'Experience breathtaking sunrise views from the summit of Gokyo Ri overlooking the Himalayas.',
      image: '/assets/images/gokyo-ri.jpg',
      region: 'Everest',
      trek: 'Gokyo Trek',
    },
    {
      title: 'Kanchenjunga Base Camp',
      description: 'Trek to the base of the third highest mountain, through pristine forests and remote villages.',
      image: '/assets/images/kanchanjungabc.jpg',
      region: 'Kanchenjunga',
      trek: 'KBC Trek',
    },
    {
      title: 'Manaslu Circuit',
      description: 'A remote and challenging trek around the eighth highest mountain in the world.',
      image: '/assets/images/bhimthang.jpeg',
      region: 'Manaslu',
      trek: 'Manaslu Circuit',
    },
    {
      title: 'Mardi Himal',
      description: 'A hidden gem offering spectacular views of Annapurna and Machhapuchhre in pristine wilderness.',
      image: '/assets/images/mardi-himal.jpg',
      region: 'Annapurna',
      trek: 'Mardi Himal Trek',
    },
    {
      title: 'Gosaikunda Lake',
      description: 'Sacred alpine lakes surrounded by stunning Himalayan peaks, a spiritual and scenic journey.',
      image: '/assets/images/gosaikunda.jpg',
      region: 'Langtang',
      trek: 'Gosaikunda Trek',
    },
    {
      title: 'Kyanjin Gompa',
      description: 'Discover the serene beauty of Langtang, with its rich Tamang culture and spectacular mountain scenery.',
      image: '/assets/images/kyangjin.jpg',
      region: 'Langtang',
      trek: 'Langtang Trek',
    },
    {
      title: 'Kyanjin Ri Summit',
      description: 'Panoramic mountain vistas from one of the best viewpoints in the Langtang region.',
      image: '/assets/images/kyangjin-ri.jpg',
      region: 'Langtang',
      trek: 'Langtang Trek',
    },
    {
      title: 'Khopra Ridge',
      description: 'Off-the-beaten-path trek with incredible views of Dhaulagiri and Annapurna ranges.',
      image: '/assets/images/khopra-ridge.jpg',
      region: 'Annapurna',
      trek: 'Khopra Ridge Trek',
    },
    {
      title: 'Poon Hill Sunrise',
      description: 'Witness the magical sunrise over the Annapurna and Dhaulagiri mountain ranges.',
      image: '/assets/images/poonhill.webp',
      region: 'Annapurna',
      trek: 'Poon Hill Trek',
    },
    {
      title: 'Upper Mustang',
      description: 'Explore the ancient forbidden kingdom with its unique Tibetan culture and dramatic landscapes.',
      image: '/assets/images/mustang.jpg',
      region: 'Mustang',
      trek: 'Upper Mustang Trek',
    },
    {
      title: 'Upper Dolpo',
      description: 'Remote and pristine, experience the raw beauty of one of Nepal\'s most isolated regions.',
      image: '/assets/images/dolpa.jpg',
      region: 'Dolpo',
      trek: 'Upper Dolpo Trek',
    },
    {
      title: 'Thorang La Pass',
      description: 'Conquer the highest point of the Annapurna Circuit at 5,416 meters with stunning panoramic views.',
      image: '/assets/images/thorangla-pass.jpeg',
      region: 'Annapurna',
      trek: 'Annapurna Circuit',
    },
    {
      title: 'Three Passes Trek',
      description: 'Challenge yourself on this ultimate Everest trek crossing three high mountain passes.',
      image: '/assets/images/threepasses.jpeg',
      region: 'Everest',
      trek: 'Three Passes Trek',
    },
    {
      title: 'Bhimthang Valley',
      description: 'Beautiful alpine meadows surrounded by towering peaks in the Manaslu region.',
      image: '/assets/images/bhimthang.jpeg',
      region: 'Manaslu',
      trek: 'Manaslu Circuit',
    },
    {
      title: 'Island Peak',
      description: 'A popular trekking peak offering an excellent introduction to Himalayan mountaineering.',
      image: '/assets/images/islandpeak.png',
      region: 'Everest',
      trek: 'Island Peak Climbing',
    },
    {
      title: 'Mera Peak',
      description: 'Nepal\'s highest trekking peak at 6,476m, offering spectacular summit views.',
      image: '/assets/images/mera.jpg',
      region: 'Everest',
      trek: 'Mera Peak Climbing',
    },
    {
      title: 'Chitwan National Park',
      description: 'Experience incredible wildlife safari adventures in Nepal\'s most famous jungle.',
      image: '/assets/images/chitawan.jpg',
      region: 'Chitwan',
      trek: 'Jungle Safari',
    },
    {
      title: 'Bardia National Park',
      description: 'Discover pristine wilderness and rare wildlife in Nepal\'s largest national park.',
      image: '/assets/images/bardia.jpg',
      region: 'Bardia',
      trek: 'Wildlife Safari',
    },
    {
      title: 'Koshi Tappu Reserve',
      description: 'A paradise for bird watchers with over 500 species of birds and diverse wetland ecosystems.',
      image: '/assets/images/koshi.webp',
      region: 'Koshi',
      trek: 'Bird Watching Safari',
    },
    {
      title: 'Mountain Village',
      description: 'Experience authentic Himalayan village life and warm hospitality in remote mountain communities.',
      image: '/assets/images/village.jpg',
      region: 'Various',
      trek: 'Cultural Trek',
    },
    {
      title: 'Suspension Bridge',
      description: 'Cross dramatic suspension bridges over roaring rivers, an iconic part of trekking in Nepal.',
      image: '/assets/images/suspension-bridge.jpg',
      region: 'Various',
      trek: 'Trekking Adventure',
    },
    {
      title: 'Enjoying the View',
      description: 'Taking in the majestic Himalayan panoramas, moments that take your breath away.',
      image: '/assets/images/enjoying-view.jpg',
      region: 'Various',
      trek: 'Mountain Trek',
    },
  ];

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [galleryImages, setGalleryImages] = useState<Array<{
    title: string;
    description: string;
    image: string;
    region: string;
    trek: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch gallery images from Storyblok API
  useEffect(() => {
    const fetchGallery = async () => {
      setIsLoading(true);
      setError(null);
      try {
        console.log('🔄 Fetching gallery from API...');
        const response = await fetch('/api/gallery');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        console.log('📦 Gallery API response:', data);
        console.log('📊 Number of items:', data.items?.length);
        
        // Use Storyblok images if available, otherwise use fallback
        if (data.items && data.items.length > 0) {
          console.log('✅ Using Storyblok images:', data.items);
          setGalleryImages(data.items);
        } else {
          console.log('⚠️ No Storyblok items found - using fallback images');
          setError('No gallery items found in Storyblok, showing fallback images');
          setGalleryImages(fallbackImages);
        }
      } catch (error) {
        console.error('❌ Error fetching gallery:', error);
        console.log('⚠️ Using fallback images due to error');
        setError(error instanceof Error ? error.message : 'Failed to fetch gallery');
        // Use fallback images when there's an error
        setGalleryImages(fallbackImages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Image modal text overlay state (delayed show, auto-hide)
  const [showModalText, setShowModalText] = useState(false);
  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    if (modalOpen && selectedIndex !== null) {
      // Show text after 2 seconds
      showTimer = setTimeout(() => setShowModalText(true), 2000);
      // Hide text after 25 seconds total (2s delay + 23s visible)
      hideTimer = setTimeout(() => setShowModalText(false), 25000);
    }
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [modalOpen, selectedIndex]);

  const openModal = (idx: number) => {
    setSelectedIndex(idx);
    setModalOpen(true);
    setShowModalText(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
    setShowModalText(false);
  };

  const prevItem = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
      setShowModalText(false);
    }
  };

  const nextItem = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
      setShowModalText(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animation trigger if needed
        }
      },
      { threshold: 0.1 }
    );
    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <>
    <section 
      ref={sectionRef}
      id="gallery" 
      aria-labelledby="gallery-heading"
      className="relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-blue-600 dark:border-blue-400/60 py-12 xl:py-16"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Heading */}
        <SectionHeader
          subtitle="Explore the stunning landscapes and adventures that await you in the Himalayas"
          title="Moments from the Trail"
        />
    <p className={`text-center text-lg max-w-3xl mx-auto mb-8 `}>
            A visual journey through unforgettable moments we experience during our treks, safaris, and mountain adventures—captured along the way.
          </p>
        {/* Featured Gallery Section */}
        <div className="mt-4 mb-4">
          <div className="relative z-20 w-full my-6 sm:my-10 rounded-3xl shadow-2xl border-4  bg-white dark:bg-black/60 backdrop-blur-xl px-0.5 sm:px-3 xl:px-6 2xl:px-8 py-1.5 sm:py-3 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-blue-200/10 before:via-green-200/10 before:to-blue-200/10 before:blur-2xl before:z-0 overflow-hidden">
          
            <div className="relative z-10">
              {/* Loading State */}
              {isLoading && (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading gallery from Storyblok...</p>
                  </div>
                </div>
              )}

              {/* Error State - Only show if there's an error AND no fallback images */}
              {!isLoading && error && galleryImages.length === 0 && (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-lg p-6 max-w-md">
                    <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">Gallery Not Available</h3>
                    <p className="text-red-600 dark:text-red-400 text-sm mb-2">{error}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">Check the browser console for details</p>
                  </div>
                </div>
              )}

              {/* Info Banner - Show when using fallback images */}
              {!isLoading && error && galleryImages.length > 0 && (
                <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200 font-semibold">Using Fallback Images</p>
                      <p className="text-xs text-yellow-700 dark:text-yellow-300">Storyblok gallery unavailable. Showing default images.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Content */}
              {!isLoading && galleryImages.length > 0 && (
                <>
              <div 
                ref={galleryScrollRef} 
                className="flex gap-6 overflow-x-auto pb-2 px-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent gallery-scroll focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/70" 
                tabIndex={0} 
                role="region" 
                aria-label="Gallery images carousel"
              >
                {galleryImages.map((item, idx) => (
                  <div key={item.title} className="min-w-[320px] max-w-sm w-full shrink-0">
                    <div onClick={() => openModal(idx)} className="cursor-zoom-in h-full">
                      <GalleryImageCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        region={item.region}
                        trek={item.trek}
                        index={idx}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex flex-row items-center justify-center mt-2 mb-6 gap-2 w-full">
                <button
                  className="rounded-full p-2 xl:p-3 bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-blue-100 dark:hover:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 transition w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center group"
                  onClick={() => {
                    if (galleryScrollRef.current) {
                      const container = galleryScrollRef.current;
                      const firstItem = container.querySelector('div[class*="min-w-"]') as HTMLElement;
                      
                      if (firstItem) {
                        const cardWidth = firstItem.offsetWidth;
                        const gap = 24;
                        const scrollAmount = cardWidth + gap;
                        const currentScroll = container.scrollLeft;
                        const newScroll = Math.max(currentScroll - scrollAmount, 0);
                        
                        if (newScroll !== currentScroll) {
                          container.scrollTo({
                            left: newScroll,
                            behavior: 'smooth',
                          });
                        }
                      }
                    }
                  }}
                  aria-label="Show previous image"
                  type="button"
                >
                  <svg className="w-7 h-7 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 19l-7-7 7-7" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="text-center px-4">
                  <span className="text-sm xl:text-base text-gray-600 dark:text-gray-300 font-semibold">
                    Scroll to explore more
                  </span>
                </div>

                <button
                  className="rounded-full p-2 xl:p-3 bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-blue-100 dark:hover:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 transition w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center group"
                  onClick={() => {
                    if (galleryScrollRef.current) {
                      const container = galleryScrollRef.current;
                      const firstItem = container.querySelector('div[class*="min-w-"]') as HTMLElement;
                      
                      if (firstItem) {
                        const cardWidth = firstItem.offsetWidth;
                        const gap = 24;
                        const scrollAmount = cardWidth + gap;
                        const currentScroll = container.scrollLeft;
                        const maxScroll = container.scrollWidth - container.clientWidth;
                        const newScroll = Math.min(currentScroll + scrollAmount, maxScroll);
                        
                        if (newScroll !== currentScroll) {
                          container.scrollTo({
                            left: newScroll,
                            behavior: 'smooth',
                          });
                        }
                      }
                    }
                  }}
                  aria-label="Show next image"
                  type="button"
                >
                  <svg className="w-7 h-7 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 5l7 7-7 7" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
                </>
              )}

              {/* Empty State */}
              {!isLoading && !error && galleryImages.length === 0 && (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-400">No gallery images found</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Modal for zoomed image - Portal to document body */}
    {mounted && modalOpen && selectedIndex !== null && createPortal(
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-modal-title"
        tabIndex={-1}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/70 backdrop-blur-lg focus:outline-none"
        onClick={closeModal}
      >
          <h2 id="gallery-modal-title" className="sr-only">Gallery Image Details</h2>
          <div 
            className="relative max-w-4xl w-full mx-4 rounded-3xl overflow-visible shadow-2xl flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Decorative Frame */}
            <div className="absolute inset-0 z-20 rounded-2xl sm:rounded-3xl border-4 border-blue-400/80 dark:border-blue-400/80 shadow-[0_0_40px_10px_rgba(59,130,246,0.15)] pointer-events-none" />
            
            {/* Zoomed image */}
            <Image
              src={galleryImages[selectedIndex].image}
              alt={galleryImages[selectedIndex].title}
              width={1200}
              height={800}
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-contain z-10"
              style={{ maxHeight: '80vh' }}
              loading="eager"
            />
            
            {/* Title & description overlay at bottom, delayed show and auto-hide */}
            {showModalText && (
              <div className="absolute bottom-0 left-0 right-0 mb-0 w-full px-4 py-4 bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-b-2xl text-white text-center drop-shadow-lg flex flex-col items-center border-t border-blue-300/40 z-30 animate-slide-up">
                <h3 id="modal-image-title" className="text-lg sm:text-2xl font-bold text-white mb-1 drop-shadow-lg times">
                  {galleryImages[selectedIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-100 mb-2">
                  {galleryImages[selectedIndex].description}
                </p>
                <div className="flex gap-3 text-xs">
                  {galleryImages[selectedIndex].region && (
                    <span className="bg-blue-500/80 px-3 py-1 rounded-full font-semibold">
                      {galleryImages[selectedIndex].region}
                    </span>
                  )}
                  {galleryImages[selectedIndex].trek && (
                    <span className="bg-green-500/80 px-3 py-1 rounded-full font-semibold">
                      {galleryImages[selectedIndex].trek}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Modal controls */}
          <div 
            className="flex justify-center items-center gap-8 mt-10 z-50 relative"
            style={{ marginTop: '2.5rem' }}
            aria-label="Gallery modal controls"
          >
            <button
              aria-label="Previous"
              onClick={e => { e.stopPropagation(); prevItem(); }}
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 text-white dark:text-gray-100 rounded-full p-3 xl:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-6 h-6 xl:w-7 xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Close"
              onClick={e => { e.stopPropagation(); closeModal(); }}
              className="bg-gradient-to-r from-red-500 via-blue-400 to-blue-400 text-white dark:text-gray-100 rounded-full p-3 xl:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-7 h-7 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={e => { e.stopPropagation(); nextItem(); }}
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 text-white dark:text-gray-100 rounded-full p-3 xl:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-6 h-6 xl:w-7 xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default GallerySection;
