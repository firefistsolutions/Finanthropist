'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function VersionSwitcher() {
  const pathname = usePathname()
  const isOldVersion = pathname === '/old-version'

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white shadow-lg rounded-lg p-2 border">
        {isOldVersion ? (
          <Link 
            href="/"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">New Course Version</span>
          </Link>
        ) : (
          <Link 
            href="/old-version"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            <span className="text-sm font-medium">Old Version</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  )
}