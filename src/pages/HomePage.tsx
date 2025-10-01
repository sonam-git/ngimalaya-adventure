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
    <>
      <Hero onWatchStory={handleWatchStory} onExploreTreks={handleExploreTreks} />
      <About />
      <TreksSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
