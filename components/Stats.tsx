// components/Stats.tsx
// Dark background, monochrome, gold accent numbers

export default function Stats() {
  const stats = [
    { number: '100K+', label: 'Community Members Discussing Peptides' },
    { number: '12 Weeks', label: 'Cohort Duration with Full Testing' },
    { number: '25-50', label: 'Screened Participants per Cohort' },
    { number: '4', label: 'Compounds with Strong Safety Records' },
  ]

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Number - gold, light weight */}
              <div className="text-4xl md:text-5xl font-light text-accent mb-3">
                {stat.number}
              </div>

              {/* Label - off-white, small */}
              <div className="text-xs md:text-sm text-whisper/60 leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
