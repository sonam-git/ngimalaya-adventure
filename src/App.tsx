import { useEffect, useState } from 'react'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { suppressExtensionErrors, clearConsoleAndWelcome } from './utils/consoleUtils'
import type { Region, Trek } from './data/treks'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TreksSection from './components/TreksSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import RegionsExplorer from './components/RegionsExplorer'
import RegionTreks from './components/RegionTreks'
import TrekDetail from './components/TrekDetail'

type ViewState = 'home' | 'regions' | 'region-treks' | 'trek-detail'

function AppContent() {
  const { isDarkMode } = useTheme()
  const [currentView, setCurrentView] = useState<ViewState>('home')
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null)
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null)

  const handleExploreTreks = () => {
    setCurrentView('regions')
  }

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

  const handleRegionSelect = (region: Region) => {
    setSelectedRegion(region)
    setCurrentView('region-treks')
  }

  const handleTrekSelect = (trek: Trek) => {
    setSelectedTrek(trek)
    setCurrentView('trek-detail')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedRegion(null)
    setSelectedTrek(null)
  }

  const handleBackToRegions = () => {
    setCurrentView('regions')
    setSelectedRegion(null)
  }

  const handleBackToRegionTreks = () => {
    setCurrentView('region-treks')
    setSelectedTrek(null)
  }

  // Render different views based on current state
  const renderCurrentView = () => {
    switch (currentView) {
      case 'regions':
        return (
          <RegionsExplorer 
            onBack={handleBackToHome}
            onRegionSelect={handleRegionSelect}
          />
        )
      
      case 'region-treks':
        return selectedRegion ? (
          <RegionTreks 
            region={selectedRegion}
            onBack={handleBackToRegions}
            onTrekSelect={handleTrekSelect}
          />
        ) : null
      
      case 'trek-detail':
        return selectedTrek ? (
          <TrekDetail 
            trek={selectedTrek}
            onBack={handleBackToRegionTreks}
          />
        ) : null
      
      default: // 'home'
        return (
          <>
            <Hero onExploreTreks={handleExploreTreks} onWatchStory={handleWatchStory} />
            <About />
            <TreksSection />
            <ServicesSection />
            <ContactSection />
            <Footer />
          </>
        )
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <Header 
        currentView={currentView}
        onBackToHome={handleBackToHome}
        onBackToRegions={handleBackToRegions}
        onBackToTreks={handleBackToRegionTreks}
      />
      {renderCurrentView()}
    </div>
  )
}

function App() {
  useEffect(() => {
    // Clear console and show welcome message
    clearConsoleAndWelcome()
    
    // Suppress extension-related errors
    const cleanup = suppressExtensionErrors()
    
    return cleanup
  }, [])

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
