import { useEffect } from 'react'
import Header from './components/Header'
import SideNavBar from './components/SideNavBar'
import MainContent from './components/MainContent'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'
import { SidebarProvider } from './contexts/SidebarContext'
import { suppressExtensionErrors, clearConsoleAndWelcome } from './utils/consoleUtils'

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
      <SidebarProvider>
        <ErrorBoundary>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <SideNavBar />
            <MainContent />
          </div>
        </ErrorBoundary>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
