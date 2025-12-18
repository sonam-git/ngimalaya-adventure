'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import GalleryImageCard from './GalleryImageCard';
import SectionHeader from './SectionHeader';

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

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

  const galleryImages = [
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
      className="relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-blue-600 dark:border-blue-400/60 py-12 md:py-16"
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
          title="Our Gallery"
        />

        {/* Featured Gallery Section */}
        <div className="mt-4 mb-4">
          <div className="relative z-20 w-full my-6 sm:my-10 rounded-3xl shadow-2xl border-4  bg-white dark:bg-black/60 backdrop-blur-xl px-0.5 sm:px-3 md:px-6 lg:px-8 py-1.5 sm:py-3 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-blue-200/10 before:via-green-200/10 before:to-blue-200/10 before:blur-2xl before:z-0 overflow-hidden">
            <div className="relative z-10">
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
                  className="rounded-full p-2 md:p-3 bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-blue-100 dark:hover:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 transition w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group"
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
                  <span className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-semibold">
                    Scroll to explore more
                  </span>
                </div>

                <button
                  className="rounded-full p-2 md:p-3 bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-blue-100 dark:hover:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 transition w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group"
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
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Close"
              onClick={e => { e.stopPropagation(); closeModal(); }}
              className="bg-gradient-to-r from-red-500 via-blue-400 to-blue-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={e => { e.stopPropagation(); nextItem(); }}
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
