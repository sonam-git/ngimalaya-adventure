'use client';
import React from 'react';
import { Mountain, Globe, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SectionHeader from './SectionHeader';

const About: React.FC<{ showFull?: boolean }> = ({ showFull = true }) => {
  const { isDarkMode } = useTheme();
  
  const features = [
    {
      icon: <Mountain className="w-12 h-12" />,
      title: "Personalized Trekking Plans",
      description: "Custom itineraries tailored to your preferences, fitness level, and schedule."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Expert Local Knowledge",
      description: "Deep understanding of terrain, culture, and hidden gems of the Himalayas."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Authentic Cultural Experiences",
      description: "Immerse yourself in local Sherpa culture and traditions with genuine hospitality."
    },
  ];

  const achievements = [
    {
      number: "20+",
      label: "Years Trekking Experience"
    },
    {
      number: "6",
      label: "Languages",
      subtitle: "English, German, Japanese, Hindi, Nepali, Sherpa"
    },
    {
      number: "500+",
      label: "Successful Trekkings & Tours"
    },
    {
      number: "2016",
      label: "Founded Ngimalaya Adventure Nepal"
    },
  ];

  return (
    <section id="about" className="scroll-offset-mobile relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-blue-600 dark:border-blue-400/60 py-12 md:py-16">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <SectionHeader
          subtitle="About Ngimalaya Adventure"
          title="Where every trek tells a story and culture meets the clouds"
        />

        <div className={`grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${showFull ? 'mb-16' : 'mb-0'}`}>
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
              <img 
                src={'/assets/images/ngima-image.jpg'}
                alt="Ngima N Sherpa - Trekking Guide"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              {/* Stats Badge - overlayed on image */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-gray-500/60 text-white p-4 md:p-6 rounded-lg shadow-2xl z-10 flex flex-col items-center w-max">
                <div className="text-3xl md:text-4xl font-display font-bold">20+</div>
                <div className="text-xs md:text-sm  tracking-wider text-center italic">Years Experience</div>
              </div>
            </div>
            {/* Quote Section */}
            <div className={`border-l-4 border-primary-500 pl-6 py-4 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <p className={`satisfy-regular text-xl md:text-2xl mb-3 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "Ngimalaya Adventure Nepal – Where Culture Meets the Clouds, and Every Trek Tells a Story!"
              </p>
              <p className={`font-display font-semibold ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                - Ngima Nuru Sherpa, Founder & Chief Adventure Guide
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className={`text-2xl md:text-3xl lg:text-4xl jaini-purva-regular mb-6 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              A Journey Born From Passion
            </h3>
            
            <h4 className={`text-xl font-display font-semibold mb-3 text-primary-700 dark:text-blue-200`}>
              Born in the Himalayas
            </h4>
            <p className={`font-body text-lg leading-relaxed mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Welcome to Ngimalaya Adventure Nepal, where the journey begins with a name rooted in the rich cultural heritage of the Sherpa community. I am Ngima Nuru Sherpa, born into the heart of the Himalayas and having spent two decades as a seasoned trekking guide.
            </p>

            <h4 className={`text-xl font-display font-semibold mb-3 text-primary-700 dark:text-blue-200`}>
              Multilingual Guide
            </h4>
            <p className={`font-body text-lg leading-relaxed mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My passion for exploration has connected me with diverse cultures and people across the globe. Proficient in 6 languages including English, German, Japanese, Hindi, Nepali, and Sherpa, my extensive career has allowed me to traverse not only the stunning landscapes of Nepal but also venture into the vibrant tapestries of Japan and Germany.
            </p>

            <h4 className={`text-xl font-display font-semibold mb-3 text-primary-700 dark:text-blue-200`}>
              Founded on Passion
            </h4>
            <p className={`font-body text-lg leading-relaxed mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Fueled by the desire to share the mesmerizing views of the Himalayas and the diverse cultures within Nepal, I founded Ngimalaya Adventure Nepal in 2016. Our commitment goes beyond conventional trekking experiences, as we strive to provide personalized plans, warm Nepali welcomes, and a team of experts dedicated to making every trekking adventure unforgettable.
            </p>
          </div>
        </div>

        {showFull && (
          <>
            {/* Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group text-center p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 ${
                    isDarkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-50 hover:bg-white shadow-lg hover:shadow-2xl'
                  }`}
                >
                  <div className="inline-flex items-center justify-center mb-4 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className={`text-xl font-display font-bold mb-3 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h4>
                  <p className={`font-body ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Achievements Section */}
            <div className={`mt-20 py-16 rounded-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-primary-50'
            }`}>
              <div className="text-center mb-12">
                <h3 className={`text-2xl md:text-3xl lg:text-4xl jaini-purva-regular mb-4 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  Our Achievements
                </h3>
                <p className={`font-body text-lg ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Numbers that tell our story of excellence
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`text-center p-6 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-white'
                    } shadow-lg`}
                  >
                    <div className="text-5xl font-display font-bold text-primary-500 mb-2">
                      {achievement.number}
                    </div>
                    <div className={`font-display font-semibold text-lg mb-1 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      {achievement.label}
                    </div>
                    {achievement.subtitle && (
                      <div className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {achievement.subtitle}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <h3 className={`text-xl md:text-2xl lg:text-3xl jaini-purva-regular mb-4 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Ready for Your Adventure?
              </h3>
              <p className={`font-body text-lg mb-6 max-w-2xl mx-auto ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Join us for an unforgettable journey through the majestic Himalayas, where every step tells a story and every view takes your breath away.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className={`px-6 py-3 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <span className="font-display font-semibold">Expert Guides</span>
                </div>
                <div className={`px-6 py-3 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <span className="font-display font-semibold">Personalized Experience</span>
                </div>
                <div className={`px-6 py-3 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <span className="font-display font-semibold">Cultural Immersion</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
