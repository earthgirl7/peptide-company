// components/Navigation.tsx
// Floating, minimal navigation that doesn't compete with content

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Research Cohort' },
    { href: '/consult', label: 'Consult' },
    { href: '/#waitlist', label: 'Waitlist' },
  ]

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
        <Link
          href="/"
          className="text-xs tracking-[0.3em] uppercase text-ink hover:opacity-70 transition-opacity"
        >
          The Peptide Company
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase text-stone hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-5 justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-0.5 bg-ink transition-all ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-full h-0.5 bg-ink transition-all ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-full h-0.5 bg-ink transition-all ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-whisper/95 backdrop-blur-sm mx-4 mt-2 rounded-lg py-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-xs tracking-[0.2em] uppercase text-stone hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
