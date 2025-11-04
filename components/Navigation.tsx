// components/Navigation.tsx
// Floating, minimal navigation that doesn't compete with content

'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'py-4' : 'py-8'}
      `}
    >
      <div
        className={`
          max-w-7xl mx-auto px-6 md:px-8
          flex justify-between items-center
          transition-all duration-300
          ${isScrolled
            ? 'bg-whisper/95 backdrop-blur-sm py-4 rounded-full mx-4'
            : ''
          }
        `}
      >
        {/* Logo/Wordmark - minimal, tracked */}
        <a
          href="/"
          className="text-xs tracking-[0.3em] uppercase text-ink hover:opacity-70 transition-opacity"
        >
          The Peptide Company
        </a>
      </div>
    </nav>
  )
}
