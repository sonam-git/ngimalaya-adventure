'use client';
import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, X, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Review {
  id: number;
  name: string;
  country: string;
  rating: number;
  text: string;
  language: string;
  date: string;
}

const ReviewsSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: '佐藤健太',
      country: 'Japan 🇯🇵',
      rating: 5,
      text: 'ンギマラヤアドベンチャーとのエベレストベースキャンプトレッキングは素晴らしい経験でした！ガイドは非常に知識が豊富で、私たちの安全を常に最優先してくれました。ネパールの文化と自然の美しさに深く感動しました。このチームは本当にプロフェッショナルで、すべてが完璧に計画されていました。',
      language: 'Japanese',
      date: 'November 2024',
    },
    {
      id: 2,
      name: 'Hans Müller',
      country: 'Germany 🇩🇪',
      rating: 5,
      text: 'Eine außergewöhnliche Erfahrung! Die Organisation war perfekt und unser Guide war fantastisch. Die Aussicht auf den Himalaya war atemberaubend. Ngimalaya Adventure hat alles möglich gemacht - von der Unterkunft bis zur Verpflegung. Ich kann dieses Unternehmen jedem empfehlen, der ein authentisches Nepal-Erlebnis sucht.',
      language: 'German',
      date: 'October 2024',
    },
    {
      id: 3,
      name: 'Marie Dubois',
      country: 'France 🇫🇷',
      rating: 5,
      text: 'Mon trek dans la région de l\'Annapurna avec Ngimalaya Adventure était absolument incroyable! L\'équipe était professionnelle, attentionnée et très compétente. Les paysages étaient à couper le souffle et l\'hospitalité népalaise était extraordinaire. Je recommande vivement cette agence pour tous ceux qui veulent découvrir l\'Himalaya de manière authentique.',
      language: 'French',
      date: 'September 2024',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      country: 'United States 🇺🇸',
      rating: 5,
      text: 'Absolutely incredible experience! The Everest Base Camp trek exceeded all my expectations. Our guide was knowledgeable, patient, and made sure we were safe throughout the journey. The cultural insights and breathtaking mountain views made this a once-in-a-lifetime adventure. Ngimalaya Adventure truly delivers an authentic Himalayan experience!',
      language: 'English',
      date: 'December 2024',
    },
    {
      id: 5,
      name: 'Carlos García',
      country: 'Spain 🇪🇸',
      rating: 5,
      text: '¡Una experiencia inolvidable! El equipo de Ngimalaya Adventure fue excepcional. Desde el primer momento, nos sentimos en buenas manos. El trekking al Campo Base del Everest fue desafiante pero gratificante. Los guías conocían perfectamente la ruta y nos ayudaron a disfrutar cada momento. La combinación de cultura y naturaleza fue perfecta.',
      language: 'Spanish',
      date: 'November 2024',
    },
    {
      id: 6,
      name: 'Emma Wilson',
      country: 'Australia 🇦🇺',
      rating: 5,
      text: 'What an amazing journey! The Three Passes trek was challenging but incredibly rewarding. The team at Ngimalaya Adventure made everything seamless - from permits to accommodation. Our guide\'s knowledge of the local culture and mountains was impressive. The hospitality and professionalism were outstanding. Highly recommend for anyone seeking an authentic Himalayan adventure!',
      language: 'English',
      date: 'October 2024',
    },
    {
      id: 7,
      name: 'Marco Rossi',
      country: 'Italy 🇮🇹',
      rating: 5,
      text: 'Un\'esperienza straordinaria! Il trekking verso il Campo Base dell\'Annapurna è stato incredibile. La squadra di Ngimalaya Adventure è stata professionale, amichevole e molto preparata. Le montagne dell\'Himalaya sono spettacolari e la cultura nepalese è affascinante. Consiglio vivamente questa agenzia per un\'avventura autentica in Nepal!',
      language: 'Italian',
      date: 'September 2024',
    },
    {
      id: 8,
      name: 'Kim Min-Jun',
      country: 'South Korea 🇰🇷',
      rating: 5,
      text: '환상적인 경험이었습니다! 에베레스트 베이스캠프 트레킹은 제 인생 최고의 모험이었어요. 가이드는 매우 전문적이고 친절했으며, 항상 우리의 안전을 최우선으로 생각했습니다. 히말라야의 웅장한 경치와 네팔의 따뜻한 환대에 깊은 감동을 받았습니다. 강력히 추천합니다!',
      language: 'Korean',
      date: 'December 2024',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (selectedReview) {
      const currentIndex = reviews.findIndex((r) => r.id === selectedReview.id);
      const nextIndex = (currentIndex + 1) % reviews.length;
      setSelectedReview(reviews[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (selectedReview) {
      const currentIndex = reviews.findIndex((r) => r.id === selectedReview.id);
      const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      setSelectedReview(reviews[prevIndex]);
    }
  };

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            What Our Adventurers Say
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Real stories from travelers who experienced the magic of the Himalayas with us
          </p>
        </div>

        {/* Horizontal Scrolling Reviews Container */}
        <div className="relative">
          {/* Reviews Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 md:px-12 py-2 md:py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                onClick={() => setSelectedReview(review)}
                className={`flex-shrink-0 w-72 sm:w-80 md:w-96 p-4 md:p-6 rounded-xl cursor-pointer transition-all duration-300 snap-start transform hover:scale-105 ${
                  isDarkMode
                    ? 'bg-gray-800 hover:bg-gray-750 shadow-xl'
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* User Info */}
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-primary-600' : 'bg-primary-100'
                  }`}>
                    <User className={`w-5 h-5 md:w-6 md:h-6 ${
                      isDarkMode ? 'text-white' : 'text-primary-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-base md:text-lg ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {review.name}
                    </h3>
                    <p className={`text-xs md:text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {review.country}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-2 md:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text (Truncated) */}
                <p className={`line-clamp-4 mb-2 md:mb-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } text-sm md:text-base`}>
                  {review.text}
                </p>

                {/* Date & Language */}
                <div className="flex justify-between items-center pt-2 md:pt-3 border-t border-gray-600 dark:border-gray-700">
                  <span className={`text-xs md:text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {review.date}
                  </span>
                  <span className={`text-[10px] md:text-xs px-2 py-1 rounded ${
                    isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {review.language}
                  </span>
                </div>

                {/* Click to Read More */}
                <div className="mt-3 md:mt-4 text-center">
                  <span className="text-primary-500 hover:text-primary-600 text-xs md:text-sm font-semibold">
                    Click to read full review →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons at Bottom */}
          <div className="flex flex-row justify-between items-center mt-6 md:mt-8 px-2 md:px-4 gap-2">
            {/* Previous Button - Left */}
            <button
              onClick={() => scroll('left')}
              className={`w-auto py-2 md:py-3 px-6 md:px-8 rounded-lg font-display font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl text-sm md:text-base ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                  : 'bg-white hover:bg-gray-100 text-gray-800'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {/* Scroll Indicators in Center (hide on small screens) */}
            <div className="hidden sm:flex gap-1 md:gap-2 mx-2 flex-1 justify-center">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                  }`}
                  style={{ width: '18px' }}
                />
              ))}
            </div>

            {/* Next Button - Right */}
            <button
              onClick={() => scroll('right')}
              className="w-auto py-2 md:py-3 px-6 md:px-8 rounded-lg font-display font-bold uppercase tracking-wider transition-all duration-300 bg-primary-600 hover:bg-primary-700 text-white flex items-center gap-2 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedReview(null)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-primary-600' : 'bg-primary-100'
                }`}>
                  <User className={`w-8 h-8 ${
                    isDarkMode ? 'text-white' : 'text-primary-600'
                  }`} />
                </div>
                <div>
                  <h3 className={`font-display font-bold text-2xl ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {selectedReview.name}
                  </h3>
                  <p className={`text-base ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {selectedReview.country}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Full Review Text */}
              <p className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {selectedReview.text}
              </p>

              {/* Date & Language */}
              <div className="flex gap-4 mb-6 pb-6 border-b border-gray-600 dark:border-gray-700">
                <span className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {selectedReview.date}
                </span>
                <span className={`text-sm px-3 py-1 rounded ${
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                }`}>
                  {selectedReview.language}
                </span>
              </div>

              {/* Navigation Buttons in Modal */}
              <div className="flex justify-between gap-4">
                <button
                  onClick={handlePrev}
                  className={`flex-1 py-3 px-6 rounded-lg font-display font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 py-3 px-6 rounded-lg font-display font-bold uppercase tracking-wider transition-all duration-300 bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center gap-2"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
