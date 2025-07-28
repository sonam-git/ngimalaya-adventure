import { useEffect } from 'react'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { suppressExtensionErrors, clearConsoleAndWelcome } from './utils/consoleUtils'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TreksSection from './components/TreksSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function AppContent() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <Header />
      <Hero />
      <About />
      <TreksSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
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
