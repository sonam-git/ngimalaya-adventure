import React from 'react';
import { Globe, Heart, Mountain, Star, MapPin, Users2, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import aboutMeImage from '../assets/images/ngima.png';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const achievements = [
    {
      icon: <Mountain className="text-blue-500" size={28} />,
      title: "20+",
      subtitle: "Years",
      description: "Trekking Experience",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <Globe className="text-emerald-500" size={28} />,
      title: "6",
      subtitle: "Languages",
      description: "English, German, Japanese, Hindi, Nepali, Sherpa",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: <Users2 className="text-orange-500" size={28} />,
      title: "500+",
      subtitle: "Happy",
      description: "Successful Trekkings & Tours",
      bgGradient: "from-orange-500/10 to-amber-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: <Calendar className="text-purple-500" size={28} />,
      title: "2016",
      subtitle: "Founded",
      description: "Ngimalaya Adventure Nepal",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  const features = [
    {
      icon: <Star className="text-yellow-500" size={20} />,
      text: "Personalized Trekking Plans"
    },
    {
      icon: <MapPin className="text-red-500" size={20} />,
      text: "Expert Local Knowledge"
    },
    {
      icon: <Heart className="text-pink-500" size={20} />,
      text: "Authentic Cultural Experiences"
    }
  ];

  return (
    <section id="about" className={`scroll-offset-mobile py-12 md:py-20 transition-colors duration-300 relative overflow-hidden ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50/30'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-10 ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Ngimalaya Adventure
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
            </div>
            
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Where every trek tells a story and{' '}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                culture meets the clouds
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Enhanced Left side - Image with Quote */}
            <div className="relative group order-1 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02] mb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/10 z-10"></div>
                <img 
                  src={aboutMeImage}
                  alt="Ngima Nuru Sherpa"
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>
                
                {/* Enhanced content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                      <Mountain className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Ngima Nuru Sherpa</h3>
                      <p className="text-blue-200 font-medium">Founder & Expert Guide</p>
                    </div>
                  </div>
                  
                  {/* Features list */}
                  <div className="flex flex-wrap gap-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        {feature.icon}
                        <span className="text-white text-sm font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Quote Section - Hidden on small screens, shown on large screens */}
              <div className={`hidden lg:block relative p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/20 border border-blue-800/50' 
                  : 'bg-gradient-to-br from-blue-50 via-white to-purple-50/50 border border-blue-200/50 backdrop-blur-sm'
              }`}>
                {/* Decorative quote marks */}
                <div className="absolute -top-4 -left-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'
                  }`}>
                    <span className={`text-4xl font-bold ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>"</span>
                  </div>
                </div>
                
                {/* Quote content */}
                <div className="relative z-10">
                  <blockquote className={`text-xl md:text-2xl font-semibold leading-relaxed mb-6 transition-colors duration-300 ${
                    isDarkMode ? 'text-blue-200' : 'text-blue-800'
                  }`}>
                    Ngimalaya Adventure Nepal – Where Culture Meets the Clouds, and Every Trek Tells a Story!
                  </blockquote>
                  
                  {/* Author section */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-px bg-gradient-to-r ${
                      isDarkMode ? 'from-purple-400 to-blue-400' : 'from-purple-600 to-blue-600'
                    }`}></div>
                    <footer className={`text-lg font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-purple-300' : 'text-purple-700'
                    }`}>
                      Ngima Nuru Sherpa
                    </footer>
                  </div>
                  <p className={`text-sm mt-1 ml-16 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Founder & Chief Adventure Guide
                  </p>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                    ))}
                  </div>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-20 ${
                    isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
                  }`}></div>
                  <div className={`absolute -top-4 -left-4 w-24 h-24 rounded-full blur-xl opacity-15 ${
                    isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
                  }`}></div>
                </div>
              </div>

              {/* Ready for Adventure Section - Hidden on small screens, shown on large screens */}
              <div className={`hidden lg:block relative p-8 rounded-3xl border-2 border-dashed transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 mt-8 ${
                isDarkMode 
                  ? 'border-blue-400/30 bg-gradient-to-br from-blue-900/20 to-purple-900/10 hover:border-blue-400/50' 
                  : 'border-blue-300/50 bg-gradient-to-br from-blue-50 to-purple-50 hover:border-blue-400/70'
              }`}>
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                    isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'
                  }`}>
                    <Heart className="text-blue-600" size={32} />
                  </div>
                  
                  <h4 className={`text-2xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Ready for Your Adventure?
                  </h4>
                  
                  <p className={`text-lg ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Join us for an unforgettable journey through the majestic Himalayas, 
                    where every step tells a story and every view takes your breath away.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'
                    }`}>
                      <Users2 size={16} />
                      <span className="text-sm font-medium">Expert Guides</span>
                    </div>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      isDarkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'
                    }`}>
                      <Star size={16} />
                      <span className="text-sm font-medium">Personalized Experience</span>
                    </div>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      isDarkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'
                    }`}>
                      <Heart size={16} />
                      <span className="text-sm font-medium">Cultural Immersion</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats card */}
              <div className={`absolute -top-6 -right-6 p-6 rounded-2xl shadow-xl border backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? 'bg-gray-800/90 border-gray-700' 
                  : 'bg-white/90 border-gray-200'
              }`}>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    2016
                  </div>
                  <div className={`text-sm font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Founded
                  </div>
                  <div className="flex justify-center mt-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            </div>

            {/* Enhanced Right side - Content */}
            <div className="space-y-8 order-2 lg:order-2">
              <div>
                <h3 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  A Journey Born from{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Passion
                  </span>
                </h3>
                
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' 
                    : 'bg-white/70 border-gray-200 hover:border-blue-300 backdrop-blur-sm'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'
                    }`}>
                      <Mountain className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold mb-2 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>
                        Born in the Himalayas
                      </h4>
                      <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Welcome to <strong className="text-blue-600">Ngimalaya Adventure Nepal</strong>, where the journey begins with a name rooted 
                        in the rich cultural heritage of the Sherpa community. I am <strong className="text-purple-600">Ngima Nuru Sherpa</strong>, 
                        born into the heart of the Himalayas and having spent two decades as a seasoned 
                        trekking guide.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-emerald-500/50' 
                    : 'bg-white/70 border-gray-200 hover:border-emerald-300 backdrop-blur-sm'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isDarkMode ? 'bg-emerald-600/20' : 'bg-emerald-100'
                    }`}>
                      <Globe className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold mb-2 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>
                        Multilingual Guide
                      </h4>
                      <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        My passion for exploration has connected me with diverse cultures and people 
                        across the globe. Proficient in <strong className="text-emerald-600">6 languages</strong> including English, German, Japanese, 
                        Hindi, Nepali, and Sherpa, my extensive career has allowed me to traverse not 
                        only the stunning landscapes of Nepal but also venture into the vibrant tapestries 
                        of Japan and Germany.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-orange-500/50' 
                    : 'bg-white/70 border-gray-200 hover:border-orange-300 backdrop-blur-sm'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isDarkMode ? 'bg-orange-600/20' : 'bg-orange-100'
                    }`}>
                      <Heart className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold mb-2 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>
                        Founded on Passion
                      </h4>
                      <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Fueled by the desire to share the mesmerizing views of the Himalayas and the 
                        diverse cultures within Nepal, I founded <strong className="text-orange-600">Ngimalaya Adventure Nepal in 2016</strong>. 
                        Our commitment goes beyond conventional trekking experiences, as we strive to 
                        provide <strong className="text-purple-600">personalized plans, warm Nepali welcomes</strong>, and a team of experts 
                        dedicated to making every trekking adventure unforgettable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only sections - Shown only on small screens */}
          <div className="lg:hidden space-y-8 mb-20">
            {/* Enhanced Quote Section - Mobile */}
            <div className={`relative p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/20 border border-blue-800/50' 
                : 'bg-gradient-to-br from-blue-50 via-white to-purple-50/50 border border-blue-200/50 backdrop-blur-sm'
            }`}>
              {/* Decorative quote marks */}
              <div className="absolute -top-4 -left-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <span className={`text-4xl font-bold ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>"</span>
                </div>
              </div>
              
              {/* Quote content */}
              <div className="relative z-10">
                <blockquote className={`text-xl md:text-2xl font-semibold leading-relaxed mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-200' : 'text-blue-800'
                }`}>
                  Ngimalaya Adventure Nepal – Where Culture Meets the Clouds, and Every Trek Tells a Story!
                </blockquote>
                
                {/* Author section */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-px bg-gradient-to-r ${
                    isDarkMode ? 'from-purple-400 to-blue-400' : 'from-purple-600 to-blue-600'
                  }`}></div>
                  <footer className={`text-lg font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-purple-300' : 'text-purple-700'
                  }`}>
                    Ngima Nuru Sherpa
                  </footer>
                </div>
                <p className={`text-sm mt-1 ml-16 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Founder & Chief Adventure Guide
                </p>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-4 right-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                  ))}
                </div>
              </div>

              {/* Background pattern */}
              <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-20 ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
                }`}></div>
                <div className={`absolute -top-4 -left-4 w-24 h-24 rounded-full blur-xl opacity-15 ${
                  isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
                }`}></div>
              </div>
            </div>

            {/* Ready for Adventure Section - Mobile */}
            <div className={`relative p-8 rounded-3xl border-2 border-dashed transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${
              isDarkMode 
                ? 'border-blue-400/30 bg-gradient-to-br from-blue-900/20 to-purple-900/10 hover:border-blue-400/50' 
                : 'border-blue-300/50 bg-gradient-to-br from-blue-50 to-purple-50 hover:border-blue-400/70'
            }`}>
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                  isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <Heart className="text-blue-600" size={32} />
                </div>
                
                <h4 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Ready for Your Adventure?
                </h4>
                
                <p className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Join us for an unforgettable journey through the majestic Himalayas, 
                  where every step tells a story and every view takes your breath away.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'
                  }`}>
                    <Users2 size={16} />
                    <span className="text-sm font-medium">Expert Guides</span>
                  </div>
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    isDarkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'
                  }`}>
                    <Star size={16} />
                    <span className="text-sm font-medium">Personalized Experience</span>
                  </div>
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    isDarkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'
                  }`}>
                    <Heart size={16} />
                    <span className="text-sm font-medium">Cultural Immersion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Achievements Grid */}
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h3>
              <p className={`text-lg transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Numbers that tell our story of excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    isDarkMode 
                      ? 'bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700' 
                      : 'bg-white/80 hover:bg-white border border-gray-200 backdrop-blur-sm'
                  } ${achievement.borderColor}`}
                  style={{
                    background: isDarkMode 
                      ? `linear-gradient(135deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))` 
                      : `linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.8))`
                  }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                      {achievement.icon}
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className={`text-4xl md:text-5xl font-bold transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>
                        {achievement.title}
                      </div>
                      <div className={`text-lg font-semibold transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {achievement.subtitle}
                      </div>
                    </div>
                    
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {achievement.description}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-blue-400 transition-colors duration-300"></div>
                  </div>

                  {/* Hover effect decoration */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
