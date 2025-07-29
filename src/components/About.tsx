import React from 'react';
import { Award, Globe, Heart, Mountain } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import aboutMeImage from '../assets/images/about-me.jpeg';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  const achievements = [
    {
      icon: <Mountain className="text-blue-600" size={32} />,
      title: "20+ Years",
      description: "Trekking Experience"
    },
    {
      icon: <Globe className="text-green-600" size={32} />,
      title: "6 Languages",
      description: "English, German, Japanese, Hindi, Nepali, Sherpa"
    },
    {
      icon: <Award className="text-yellow-600" size={32} />,
      title: "500+",
      description: "Successful Trekkings & Tours"
    },
    {
      icon: <Heart className="text-red-600" size={32} />,
      title: "Founded 2016",
      description: "Ngimalaya Adventure Nepal"
    }
  ];

  return (
    <section id="about" className={`scroll-offset-mobile py-6 md:py-10 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              About <span className="text-blue-600">Ngimalaya Adventure</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Where every trek tells a story and culture meets the clouds
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={aboutMeImage}
                  alt="Ngima Nuru Sherpa"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Ngima Nuru Sherpa</h3>
                  <p className="text-blue-200">Founder & Expert Guide</p>
                </div>
              </div>
              
              {/* Floating card */}
              <div className={`absolute -bottom-6 -right-6 p-6 rounded-xl shadow-xl border transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
              }`}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2016</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Founded</div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                A Journey Born from Passion
              </h3>
              
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Welcome to Ngimalaya Adventure Nepal, where the journey begins with a name rooted 
                in the rich cultural heritage of the Sherpa community. I am <strong>Ngima Nuru Sherpa</strong>, 
                born into the heart of the Himalayas and having spent two decades as a seasoned 
                trekking guide.
              </p>
              
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                My passion for exploration has connected me with diverse cultures and people 
                across the globe. Proficient in languages such as English, German, Japanese, 
                Hindi, Nepali, and Sherpa, my extensive career has allowed me to traverse not 
                only the stunning landscapes of Nepal but also venture into the vibrant tapestries 
                of Japan and Germany.
              </p>
              
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Fueled by the desire to share the mesmerizing views of the Himalayas and the 
                diverse cultures within Nepal, I founded Ngimalaya Adventure Nepal in 2016. 
                Our commitment goes beyond conventional trekking experiences, as we strive to 
                provide <strong>personalized plans, warm Nepali welcomes</strong>, and a team of experts 
                dedicated to making every trekking adventure unforgettable.
              </p>

              <div className={`p-6 rounded-xl border-l-4 border-blue-600 transition-colors duration-300 ${
                isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'
              }`}>
                <p className={`italic text-lg font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-800'
                }`}>
                  "Ngimalaya Adventure Nepal – Where Culture Meets the Clouds, and Every Trek Tells a Story!"
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h4 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </h4>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
