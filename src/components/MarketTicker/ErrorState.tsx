import React from 'react'

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
  showRetry?: boolean
  className?: string
}

const ErrorState: React.FC<ErrorStateProps> = ({
  message = 'Failed to load market data',
  onRetry,
  showRetry = true,
  className = ''
}) => {
  return (
    <div className={`bg-white border-b border-gray-200 shadow-sm overflow-hidden ${className}`}>
      <div className="flex items-center justify-center py-3 px-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <svg 
              className="w-4 h-4 text-red-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className="text-red-600 text-sm font-medium">{message}</span>
          </div>
          
          {showRetry && onRetry && (
            <button
              onClick={onRetry}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium underline transition-colors"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorState