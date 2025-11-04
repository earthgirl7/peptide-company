// components/Compounds.tsx
// Simple list with gold accent borders - no cards

export default function Compounds() {
  const compounds = [
    {
      name: 'Semax',
      description: 'Studied for focus and neuroprotection.',
    },
    {
      name: 'Selank',
      description: 'Reduces stress and supports cognitive balance.',
    },
    {
      name: 'BPC-157',
      description: 'Promotes tissue repair and gut health.',
    },
    {
      name: 'TB-500',
      description: 'Supports recovery and inflammation response.',
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-whisper">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-ink mb-6 tracking-tight">
            Initial Research Compounds
          </h2>
        </div>

        {/* Simple stacked list */}
        <div className="space-y-10">
          {compounds.map((compound, index) => (
            <div
              key={index}
              className="
                border-l-2 border-accent pl-8 py-2
                hover:pl-10
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-light text-ink mb-3">
                {compound.name}
              </h3>
              <p className="text-stone leading-relaxed">
                {compound.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-16 pt-8 border-t border-stone/20 text-center">
          <p className="text-stone leading-relaxed">
            All sourced from FDA-registered pharmacies and administered under physician supervision.
          </p>
        </div>

      </div>
    </section>
  )
}
