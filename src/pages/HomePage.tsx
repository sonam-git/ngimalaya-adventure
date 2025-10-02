import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import TreksSection from '../components/TreksSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleWatchStory = () => {
    // Scroll to the about section
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleExploreTreks = () => {
    navigate('/treks');
  }

  return (
    <div className="homepage">
      {/* Section 1: Hero - Default background (no override needed) */}
      <Hero onWatchStory={handleWatchStory} onExploreTreks={handleExploreTreks} />
      
      {/* Section 2: About - Clean white/dark background */}
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <About />
      </div>
      
      {/* Section 3: Treks - Light blue gradient background */}
      <div className="bg-gradient-to-br from-blue-50 via-cyan-50/60 to-sky-50/80 dark:bg-gradient-to-br dark:from-gray-800 dark:via-blue-900/30 dark:to-cyan-900/20 transition-colors duration-300">
        <TreksSection />
      </div>
      
      {/* Section 4: Services - Light green gradient background */}
      <div className="bg-gradient-to-br from-green-50 via-emerald-50/60 to-teal-50/80 dark:bg-gradient-to-br dark:from-gray-900 dark:via-green-900/30 dark:to-emerald-900/20 transition-colors duration-300">
        <ServicesSection />
      </div>
      
      {/* Section 5: Contact - Blue-green gradient background */}
      <div className="bg-gradient-to-br from-blue-50/80 via-teal-50/60 to-green-50/80 dark:bg-gradient-to-br dark:from-gray-800 dark:via-teal-900/30 dark:to-blue-900/20 transition-colors duration-300">
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;
