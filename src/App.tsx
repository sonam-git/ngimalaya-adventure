import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { suppressExtensionErrors, clearConsoleAndWelcome } from './utils/consoleUtils'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import RegionsPage from './pages/RegionsPage'
import RegionTreksPage from './pages/RegionTreksPage'
import TrekDetailPage from './pages/TrekDetailPage'

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/treks" element={<RegionsPage />} />
        <Route path="/treks/regions/:regionId" element={<RegionTreksPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/regions" element={<RegionsPage />} />
        <Route path="/regions/:regionId" element={<RegionTreksPage />} />
        <Route path="/treks/:trekId" element={<TrekDetailPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

function App() {
  useEffect(() => {
    // Suppress browser extension console errors
    const cleanup = suppressExtensionErrors()
    
    // Clear console and show welcome message
    clearConsoleAndWelcome()
    
    return cleanup
  }, [])

  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  )
}

export default App
