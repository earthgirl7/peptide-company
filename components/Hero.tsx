export default function Hero() {
  return (
    <section
      className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          Physician-Supervised Peptide Research
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Join the first compliant human research platform for BPC-157, TB-500, Semax & Selank
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10">
          Small cohorts. Real data. Medical oversight.<br />
          Launching Q2 2025.
        </p>
        <a
          href="#waitlist"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Join the waitlist for peptide research cohorts"
        >
          → Join the Waitlist
        </a>
      </div>
    </section>
  );
}
