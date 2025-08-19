import React from 'react'

interface LoadingStateProps {
  message?: string
  showSkeleton?: boolean
  className?: string
}

const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading market data...',
  showSkeleton = true,
  className = ''
}) => {
  if (showSkeleton) {
    return (
      <div className={`bg-white border-b border-gray-200 shadow-sm overflow-hidden ${className}`}>
        <div className="flex items-center space-x-4 px-6 py-3">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center space-x-4 min-w-fit">
              <div className="flex flex-col space-y-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                <div className="h-3 bg-gray-100 rounded animate-pulse w-24"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                <div className="h-6 bg-gray-100 rounded-md animate-pulse w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white border-b border-gray-200 shadow-sm overflow-hidden ${className}`}>
      <div className="flex items-center justify-center py-3">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <div className="text-gray-500 text-sm animate-pulse">{message}</div>
        </div>
      </div>
    </div>
  )
}

export default LoadingState