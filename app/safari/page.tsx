'use client';
import React, { useState } from 'react';
import { Binoculars, Footprints, Camera, Bird, Trees, Sun, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import BookingModal from '../../components/BookingModal';

const SafariPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const safariPackages = [
    {
      id: 1,
      name: 'Chitwan National Park',
      location: 'Chitwan, Nepal',
      duration: '2-4 Days',
      type: 'UNESCO Site',
      image: 'https://ngimalaya-adventure.vercel.app/assets/chitawan-6c447e1d.jpg',
      description: 'Home to the rare one-horned rhinoceros and Bengal tigers. Experience jungle safaris, canoe rides, and cultural programs.',
      highlights: ['Jungle Safari', 'Canoe Ride', 'Elephant Ride', 'Cultural Programs', 'Bird Watching'],
      badge: 'Family Friendly',
    },
    {
      id: 2,
      name: 'Bardia National Park',
      location: 'Bardia, Nepal',
      duration: '3-5 Days',
      type: 'Wild Tiger',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Nepal\'s largest and most pristine wilderness area. Best chances to spot wild tigers, elephants, and dolphins.',
      highlights: ['Tiger Tracking', 'Jungle Safari', 'Dolphin Watching', 'Nature Walks', 'Wildlife Photography'],
      badge: 'Adventure',
    },
    {
      id: 3,
      name: 'Koshi Tappu Reserve',
      location: 'Koshi, Nepal',
      duration: '2-3 Days',
      type: 'Bird Paradise',
      image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premier bird watching destination with over 500 species. Perfect for wildlife photography and nature enthusiasts.',
      highlights: ['Bird Watching', 'Wildlife Photography', 'Wetland Safari', 'Nature Walks', 'Buffalo Herds'],
      badge: 'Bird Watching',
    },
  ];

  const features = [
    {
      icon: Binoculars,
      title: 'Wildlife Spotting',
      description: 'Expert guides help you spot rare and exotic wildlife',
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Capture stunning moments with our photo-focused safaris',
    },
    {
      icon: Bird,
      title: 'Bird Watching',
      description: 'Observe hundreds of bird species in their natural habitat',
    },
    {
      icon: Trees,
      title: 'Nature Walks',
      description: 'Guided walks through pristine forests and grasslands',
    },
  ];

  const activities = [
    'Jeep Safari',
    'Elephant Safari',
    'Canoe Rides',
    'Jungle Walks',
    'Bird Watching',
    'Nature Photography',
    'Cultural Village Tours',
    'Sunset Views',
  ];

  return (
    <>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Binoculars className="text-primary-500" size={40} />
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-wider">
                Safari Adventures
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 font-body mb-6">
              Discover Nepal's incredible wildlife in pristine national parks
            </p>
            <p className="text-lg text-gray-300 font-body max-w-2xl">
              Experience rare animals in their natural habitat with expert naturalist guides. Our safari adventures 
              offer the perfect blend of wildlife encounters, cultural experiences, and conservation support.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-white">
                <Binoculars className="text-primary-500" size={20} />
                <span>Expert Naturalist Guides</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Trees className="text-primary-500" size={20} />
                <span>Conservation Support</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Camera className="text-primary-500" size={20} />
                <span>Wildlife Photography</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    isDarkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-primary-500'
                      : 'bg-white border-gray-200 hover:border-primary-500'
                  }`}
                >
                  <Icon className="text-primary-500 mb-4" size={32} />
                  <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Safari Packages */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold uppercase tracking-wider mb-4">
              Our Safari Packages
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Choose from our exciting safari packages designed to give you the best wildlife experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariPackages.map((safari) => (
              <div
                key={safari.id}
                className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={safari.image}
                    alt={safari.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-display font-semibold ${
                      isDarkMode ? 'bg-gray-900/80 text-white' : 'bg-white/90 text-gray-900'
                    }`}>
                      {safari.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full font-display font-semibold text-xs shadow-lg">
                      {safari.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-3">{safari.name}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {safari.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="text-primary-500" size={18} />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {safari.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-primary-500" size={18} />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {safari.duration}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-display font-semibold mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {safari.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-display ${
                            isDarkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={handleBookNow}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Footprints className="mx-auto text-primary-500 mb-4" size={48} />
            <h2 className="text-4xl font-display font-bold uppercase tracking-wider mb-4">
              Safari Activities
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Experience a variety of thrilling activities during your safari adventure
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 hover:border-primary-500'
                    : 'bg-gray-50 border-gray-200 hover:border-primary-500'
                }`}
              >
                <p className="font-display font-semibold text-sm">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-primary-50'}`}>
        <div className="container mx-auto px-4 text-center">
          <Sun className="mx-auto text-primary-500 mb-6" size={48} />
          <h2 className="text-4xl font-display font-bold uppercase tracking-wider mb-4">
            Ready for a Wild Adventure?
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Book your safari today and experience the incredible wildlife and natural beauty of Nepal's national parks.
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
    <BookingModal
      isOpen={isBookingModalOpen}
      onClose={() => setIsBookingModalOpen(false)}
    />
    </>
  );
};

export default SafariPage;
