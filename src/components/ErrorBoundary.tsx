import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Only log actual application errors, not extension-related ones
    if (!error.message.includes('runtime.lastError') && 
        !error.message.includes('message port closed')) {
      console.error('Application error:', error, errorInfo)
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
            <div className="text-6xl mb-4">🚧</div>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-slate-600 mb-6">
              Don't worry, this is likely just a temporary issue.
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
