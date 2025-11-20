// components/ApplicationForm.tsx
// Multi-step wizard - elegant, minimal, less intimidating

'use client'

import { useState } from 'react'

type FormData = {
  // Step 1
  name: string
  email: string
  location: string

  // Step 2
  compounds: string[]
  goals: string

  // Step 3
  experience: string
  background: string
  referral: string
  consent: boolean
  budget: boolean
}

export default function ApplicationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    location: '',
    compounds: [],
    goals: '',
    experience: '',
    background: '',
    referral: '',
    consent: false,
    budget: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleCompound = (compound: string) => {
    setFormData(prev => ({
      ...prev,
      compounds: prev.compounds.includes(compound)
        ? prev.compounds.filter(c => c !== compound)
        : [...prev.compounds, compound]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setIsSuccess(true)
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-light text-ink mb-6">
            Application Submitted
          </h3>
          <p className="text-lg text-stone leading-relaxed mb-8">
            Thank you for your interest. Our medical team will review your
            application and contact you within 5-7 business days.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false)
              setStep(1)
              setFormData({
                name: '', email: '', location: '', compounds: [], goals: '',
                experience: '', background: '', referral: '', consent: false, budget: false
              })
            }}
            className="text-stone hover:text-ink transition-colors"
          >
            Submit another application
          </button>
        </div>
      </div>
    )
  }

  return (
    <section id="apply" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-ink mb-6">
            Apply for Research Cohort
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            Limited spots available. Cohort fees range from $2,000-$5,000
            and include biomarker testing, physician supervision, compounds,
            and data analysis.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center items-center mb-12 gap-2">
          {[1, 2, 3].map(num => (
            <div key={num} className="flex items-center">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  text-xs transition-colors duration-300
                  ${step === num
                    ? 'bg-ink text-whisper'
                    : step > num
                      ? 'bg-accent text-whisper'
                      : 'bg-stone/20 text-stone'
                  }
                `}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`
                    w-12 h-0.5 transition-colors duration-300
                    ${step > num ? 'bg-accent' : 'bg-stone/20'}
                  `}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <label className="block text-sm text-stone mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="
                    w-full px-0 py-4
                    border-0 border-b-2 border-stone/20
                    focus:border-ink focus:outline-none
                    bg-transparent text-lg
                    placeholder:text-stone/40
                  "
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-stone mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="
                    w-full px-0 py-4
                    border-0 border-b-2 border-stone/20
                    focus:border-ink focus:outline-none
                    bg-transparent text-lg
                    placeholder:text-stone/40
                  "
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-stone mb-2">
                  Location (City, State) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => updateField('location', e.target.value)}
                  className="
                    w-full px-0 py-4
                    border-0 border-b-2 border-stone/20
                    focus:border-ink focus:outline-none
                    bg-transparent text-lg
                    placeholder:text-stone/40
                  "
                  placeholder="San Francisco, CA"
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="
                  w-full py-4 mt-8
                  bg-ink text-whisper
                  text-xs tracking-[0.2em] uppercase
                  hover:opacity-90 transition-opacity
                "
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Research Interest */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <label className="block text-sm text-stone mb-4">
                  Compounds of Interest (select all that apply) *
                </label>
                <div className="space-y-3">
                  {['Semax', 'Selank', 'BPC-157', 'TB-500'].map(compound => (
                    <label
                      key={compound}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={formData.compounds.includes(compound)}
                        onChange={() => toggleCompound(compound)}
                        className="
                          w-5 h-5 rounded
                          border-2 border-stone/30
                          checked:bg-ink checked:border-ink
                          cursor-pointer
                        "
                      />
                      <span className="text-lg group-hover:text-ink transition-colors">
                        {compound}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-stone mb-2">
                  Research Goals & Health Objectives *
                </label>
                <textarea
                  required
                  value={formData.goals}
                  onChange={(e) => updateField('goals', e.target.value)}
                  rows={4}
                  className="
                    w-full px-0 py-4
                    border-0 border-b-2 border-stone/20
                    focus:border-ink focus:outline-none
                    bg-transparent text-lg
                    placeholder:text-stone/40
                    resize-none
                  "
                  placeholder="What are you hoping to learn or achieve through this research?"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="
                    flex-1 py-4
                    border border-stone/30 text-stone
                    text-xs tracking-[0.2em] uppercase
                    hover:border-ink hover:text-ink
                    transition-colors
                  "
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={formData.compounds.length === 0 || !formData.goals}
                  className="
                    flex-1 py-4
                    bg-ink text-whisper
                    text-xs tracking-[0.2em] uppercase
                    hover:opacity-90 transition-opacity
                    disabled:opacity-40 disabled:cursor-not-allowed
                  "
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Background & Consent */}
          {step === 3 && (
            <div className="space-y-8">
              <div>
                <label className="block text-sm text-stone mb-2">
                  Previous Peptide Experience
                </label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => updateField('experience', e.target.value)}
                  rows={3}
                  className="
                    w-full px-0 py-4
                    border-0 border-b-2 border-stone/20
                    focus:border-ink focus:outline-none
                    bg-transparent text-lg
                    placeholder:text-stone/40
                    resize-none
                  "
                  placeholder="Have you used peptides before? If so, which ones?"
                />
              </div>

              <div>
                <label className="block text-sm text-stone mb-2">
                  Professional/Educational Background
                </label>
                <input
                  type="text"
                  value={formData.background}
                  onChange={(e) => updateField('background', e.target.value)}
                  className="
                    w-full px-0 py-4
                    border-0 border-b-2 border-stone/20
                    focus:border-ink focus:outline-none
                    bg-transparent text-lg
                    placeholder:text-stone/40
                  "
                  placeholder="e.g., Bioinformatics researcher, MD, entrepreneur"
                />
              </div>

              <div>
                <label className="block text-sm text-stone mb-2">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  value={formData.referral}
                  onChange={(e) => updateField('referral', e.target.value)}
                  className="
                    w-full px-0 py-4
                    border-0 border-b-2 border-stone/20
                    focus:border-ink focus:outline-none
                    bg-transparent text-lg
                    placeholder:text-stone/40
                  "
                  placeholder="Twitter, Reddit, friend referral, etc."
                />
              </div>

              <div className="space-y-4 pt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => updateField('consent', e.target.checked)}
                    className="
                      w-5 h-5 mt-1 rounded
                      border-2 border-stone/30
                      checked:bg-ink checked:border-ink
                      cursor-pointer
                    "
                  />
                  <span className="text-sm text-stone leading-relaxed group-hover:text-ink transition-colors">
                    I understand this is a research program requiring medical
                    supervision, informed consent, and active participation in
                    data collection. I am interested in contributing to open science.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    checked={formData.budget}
                    onChange={(e) => updateField('budget', e.target.checked)}
                    className="
                      w-5 h-5 mt-1 rounded
                      border-2 border-stone/30
                      checked:bg-ink checked:border-ink
                      cursor-pointer
                    "
                  />
                  <span className="text-sm text-stone leading-relaxed group-hover:text-ink transition-colors">
                    I understand cohort fees range from $2,000-$5,000 and am
                    prepared to invest in physician-supervised research.
                  </span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="
                    flex-1 py-4
                    border border-stone/30 text-stone
                    text-xs tracking-[0.2em] uppercase
                    hover:border-ink hover:text-ink
                    transition-colors
                  "
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.consent || !formData.budget}
                  className="
                    flex-1 py-4
                    bg-ink text-whisper
                    text-xs tracking-[0.2em] uppercase
                    hover:opacity-90 transition-opacity
                    disabled:opacity-40 disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </div>
          )}

        </form>

      </div>
    </section>
  )
}
