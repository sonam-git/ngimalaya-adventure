// Utility to handle common browser extension errors
export const suppressExtensionErrors = () => {
  // Store original console methods
  const originalError = console.error
  const originalWarn = console.warn

  // Add global error handler for uncaught extension errors
  const handleGlobalError = (event: ErrorEvent) => {
    const message = event.message || event.error?.message || ''
    
    const extensionErrorPatterns = [
      'runtime.lastError',
      'message channel closed before a response was received',
      'listener indicated an asynchronous response',
      'A listener indicated an asynchronous response by returning true',
      'chrome-extension://',
      'moz-extension://',
      'safari-extension://',
    ]

    const isExtensionError = extensionErrorPatterns.some(pattern => 
      message.includes(pattern)
    )

    if (isExtensionError) {
      event.preventDefault()
      return true
    }
  }

  // Add global unhandled promise rejection handler
  const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    const reason = event.reason?.toString() || ''
    
    const extensionErrorPatterns = [
      'runtime.lastError',
      'message channel closed before a response was received',
      'listener indicated an asynchronous response',
      'chrome-extension://',
      'moz-extension://',
      'safari-extension://',
    ]

    const isExtensionError = extensionErrorPatterns.some(pattern => 
      reason.includes(pattern)
    )

    if (isExtensionError) {
      event.preventDefault()
      return true
    }
  }

  // Add event listeners
  window.addEventListener('error', handleGlobalError)
  window.addEventListener('unhandledrejection', handleUnhandledRejection)

  // Override console.error to filter out extension-related messages
  console.error = (...args: unknown[]) => {
    const message = args[0]?.toString() || ''
    
    // List of extension-related error patterns to suppress
    const extensionErrorPatterns = [
      'runtime.lastError',
      'message port closed',
      'Extension context invalidated',
      'Could not establish connection',
      'Receiving end does not exist',
      'message channel closed before a response was received',
      'listener indicated an asynchronous response',
      'A listener indicated an asynchronous response by returning true',
      'The message port closed before a response was received',
      'chrome-extension://',
      'moz-extension://',
      'safari-extension://',
    ]

    // Check if this is an extension-related error
    const isExtensionError = extensionErrorPatterns.some(pattern => 
      message.includes(pattern)
    )

    if (!isExtensionError) {
      originalError.apply(console, args)
    }
  }

  // Override console.warn for similar patterns
  console.warn = (...args: unknown[]) => {
    const message = args[0]?.toString() || ''
    
    const extensionWarningPatterns = [
      'runtime.lastError',
      'message port closed',
      'message channel closed before a response was received',
      'listener indicated an asynchronous response',
      'A listener indicated an asynchronous response by returning true',
      'The message port closed before a response was received',
      'chrome-extension://',
      'moz-extension://',
      'safari-extension://',
    ]

    const isExtensionWarning = extensionWarningPatterns.some(pattern => 
      message.includes(pattern)
    )

    if (!isExtensionWarning) {
      originalWarn.apply(console, args)
    }
  }

  // Return cleanup function
  return () => {
    console.error = originalError
    console.warn = originalWarn
    window.removeEventListener('error', handleGlobalError)
    window.removeEventListener('unhandledrejection', handleUnhandledRejection)
  }
}

// Clear console and show welcome message
export const clearConsoleAndWelcome = () => {
  console.clear()
  console.log(
    '%c🏔️ Ngimalaya Adventure',
    'color: #4F46E5; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);'
  )
  console.log(
    '%cWelcome to Ngimalaya Adventure! Your gateway to the Himalayas. Built with React, TypeScript, and Tailwind CSS.',
    'color: #6B7280; font-size: 14px; margin-top: 8px;'
  )
  console.log(
    '%cExtension-related errors are automatically suppressed for a cleaner development experience.',
    'color: #10B981; font-size: 12px; font-style: italic;'
  )
}
