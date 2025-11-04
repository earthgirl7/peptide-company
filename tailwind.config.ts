// tailwind.config.ts
// Minimal, elegant design system for The Peptide Company

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Minimal 5-color palette
        ink: '#0a0f1c',        // Primary text, dark backgrounds
        stone: '#6b7280',      // Secondary text, labels
        whisper: '#f8f9fa',    // Light background, light text
        accent: '#d4af37',     // Gold - use sparingly
        border: '#e5e7eb',     // Subtle borders
      },
      fontFamily: {
        // System fonts only - no web fonts needed
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        // Simplified scale - fewer sizes
        'xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.6' }],     // 14px
        'base': ['1rem', { lineHeight: '1.7' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.7' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.6' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3' }],    // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1.1' }],        // 48px
        '6xl': ['3.75rem', { lineHeight: '1.05' }],    // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],        // 72px
      },
      fontWeight: {
        // Only three weights
        light: '300',
        normal: '400',
        medium: '500',
      },
      letterSpacing: {
        // Custom tracking for small caps style
        tightest: '-0.05em',
        tighter: '-0.03em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.1em',
        'extra-wide': '0.2em',
        'ultra-wide': '0.3em',
      },
      spacing: {
        // 8px grid system
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
        '26': '6.5rem',  // 104px
        '30': '7.5rem',  // 120px
      },
      maxWidth: {
        // Custom content widths
        'reading': '65ch',    // Optimal reading width
        '8xl': '88rem',       // 1408px
        '9xl': '96rem',       // 1536px
      },
      transitionDuration: {
        // Consistent timing
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        // Smooth, natural easing
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
