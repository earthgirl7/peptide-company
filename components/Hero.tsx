// components/Hero.tsx
// Minimal, elegant hero section with single focus

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8">
      <div className="max-w-4xl text-center">
        {/* Main headline - large, light weight, generous spacing */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-ink mb-8 leading-[1.1] tracking-tight">
          Physician-Supervised Peptide Research
        </h1>

        {/* Supporting text - single paragraph, clear value prop */}
        <p className="text-lg md:text-xl text-stone mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the first compliant framework for responsible human research on BPC-157, TB-500, Semax & Selank.
        </p>

        {/* Single CTA - minimal, confident */}
        <a
          href="#apply"
          className="
            inline-block px-10 py-4
            bg-ink text-whisper
            text-xs tracking-[0.2em] uppercase
            hover:bg-stone
            transition-colors duration-300
          "
        >
          → Apply for Cohort
        </a>
      </div>
    </section>
  )
}
