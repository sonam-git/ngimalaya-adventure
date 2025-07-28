// Utility to handle common browser extension errors
export const suppressExtensionErrors = () => {
  // Store original console methods
  const originalError = console.error
  const originalWarn = console.warn

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
  }
}

// Clear console and show welcome message
export const clearConsoleAndWelcome = () => {
  console.clear()
  console.log(
    '%c🚀 Sonam J Sherpa Portfolio',
    'color: #4F46E5; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);'
  )
  console.log(
    '%cWelcome to my portfolio! Built with React, TypeScript, and Tailwind CSS.',
    'color: #6B7280; font-size: 14px; margin-top: 8px;'
  )
  console.log(
    '%cIf you see any extension-related errors, they are automatically suppressed.',
    'color: #10B981; font-size: 12px; font-style: italic;'
  )
}
