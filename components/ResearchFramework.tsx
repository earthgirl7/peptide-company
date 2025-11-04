// components/ResearchFramework.tsx
// Four-card layout with minimal styling, maximum clarity

export default function ResearchFramework() {
  const features = [
    {
      title: 'Medical Supervision',
      description: 'Board-certified physicians oversee every cohort.',
    },
    {
      title: 'Verified Compounds',
      description: 'All peptides sourced from FDA-registered 503B facilities.',
    },
    {
      title: 'Comprehensive Data',
      description: 'Pre/post biomarkers, HRV, and cognitive metrics.',
    },
    {
      title: 'Ethics Oversight',
      description: 'IRB-approved protocols, informed consent, and safety monitoring.',
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header - centered, minimal */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-ink mb-6 tracking-tight">
            A Responsible Framework for Human Peptide Research
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            Where self-experimentation becomes science through physician oversight, verified compounds, and data transparency.
          </p>
        </div>

        {/* Four cards - minimal borders, text-focused */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                border-l-2 border-stone/20 pl-6
                hover:border-accent
                transition-colors duration-300
              "
            >
              <h3 className="text-xl font-medium text-ink mb-3">
                {feature.title}
              </h3>
              <p className="text-stone leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
