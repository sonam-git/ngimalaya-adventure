'use client';
import { useTheme } from '../contexts/ThemeContext';

const BackgroundImage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div 
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: -10 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/images/threepasses.jpeg)',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Theme-aware Overlay */}
      <div 
        className={`absolute inset-0 w-full h-full transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-900/70' 
            : 'bg-white/60'
        }`}
      />
    </div>
  );
};

export default BackgroundImage;
