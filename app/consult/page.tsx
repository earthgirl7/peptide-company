import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ConsultPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-ink mb-6 leading-[1.1] tracking-tight">
            Peptide Optimization Consult
          </h1>

          <p className="text-xl md:text-2xl text-stone mb-8 leading-relaxed">
            Personalized, science-based peptide strategy for your biology, goals, and physiology.
          </p>

          <a
            href="https://tally.so/r/xXXx7v"
            className="
              inline-block px-10 py-4
              bg-ink text-whisper
              text-xs tracking-[0.2em] uppercase
              hover:bg-stone
              transition-colors duration-300
            "
          >
            → Book Consult
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-whisper">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-6">
            A research-informed approach to personalized peptide use
          </h2>

          <p className="text-lg md:text-xl text-stone mb-6 leading-relaxed">
            This consult is for individuals seeking a <strong className="text-ink">responsible, mechanism-based, data-informed peptide plan</strong> — without joining a full research cohort.
          </p>

          <p className="text-lg md:text-xl text-stone mb-6 leading-relaxed">
            If you&apos;re exploring compounds like <strong className="text-ink">BPC-157, TB-500, Semax, Selank, CJC-1295, Ipamorelin</strong>, or other nootropic or regenerative peptides, this session provides clarity grounded in physiology, biomarkers, and safety, not speculation.
          </p>

          <p className="text-lg md:text-xl text-ink font-medium">
            This is not medical care or prescribing.<br />
            It&apos;s strategic, educational guidance to support your conversations with your licensed clinician.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-12">
            What&apos;s Included
          </h2>

          {/* Pre-Consult Intake */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-medium text-ink mb-4">
              1. Pre-consult intake & review
            </h3>
            <p className="text-lg text-stone mb-4">
              A structured intake covering:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Health status + symptoms</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Current protocols</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>DEXA / labs / HRV (optional)</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Goals: healing, cognition, metabolism, performance, mood</span>
              </li>
            </ul>
            <p className="text-lg text-stone mt-4">
              Your data is reviewed in advance so the session is fully personalized.
            </p>
          </div>

          {/* Session */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-medium text-ink mb-4">
              2. 75-minute 1:1 session (Zoom)
            </h3>
            <p className="text-lg text-stone mb-4">
              We cover:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Your goals & biological constraints</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Relevant peptide candidates + mechanisms</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Evidence, safety, risks, and interactions</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Biomarker guidance (pre/post)</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Lifestyle foundations that potentiate peptide effects</span>
              </li>
            </ul>
            <p className="text-lg text-stone mt-4">
              A collaborative, research-informed synthesis of physiology, science, and your lived experience.
            </p>
          </div>

          {/* Strategy Summary */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-medium text-ink mb-4">
              3. Personalized strategy summary (3–5 days)
            </h3>
            <p className="text-lg text-stone mb-4">
              Your written synthesis includes:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Prioritized goals</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Tiered peptide candidates (not prescriptions)</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Mechanistic rationale</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Suggested labs & tracking metrics</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>A structured framework to review with your clinician</span>
              </li>
            </ul>
          </div>

          {/* Follow-Up */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-medium text-ink mb-4">
              4. Follow-up session (founding clients)
            </h3>
            <p className="text-lg text-stone">
              A <strong className="text-ink">15-minute check-in</strong> within 4–6 weeks for adjustments based on response, symptoms, or biomarker changes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-whisper">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8">
            Pricing
          </h2>

          <div className="mb-6">
            <p className="text-2xl font-medium text-ink mb-2">
              Founding client rate:
            </p>
            <p className="text-4xl md:text-5xl font-light text-ink mb-6">
              $350
            </p>
          </div>

          <p className="text-lg text-stone mb-4">
            Includes:
          </p>
          <ul className="space-y-3 ml-6 mb-8">
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>Intake review</span>
            </li>
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>75-minute consult</span>
            </li>
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>Strategy summary</span>
            </li>
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>15-minute follow-up</span>
            </li>
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>Ability to apply the fee toward the <strong className="text-ink">$3,000 Research Cohort</strong> if you join later</span>
            </li>
          </ul>

          <a
            href="https://tally.so/r/xXXx7v"
            className="
              inline-block px-10 py-4
              bg-ink text-whisper
              text-xs tracking-[0.2em] uppercase
              hover:bg-stone
              transition-colors duration-300
            "
          >
            → Book Consult
          </a>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8">
            Who This Is For
          </h2>
          <ul className="space-y-3 ml-6 mb-12">
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>Individuals already exploring peptides</span>
            </li>
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>Founders, athletes, researchers, bio-optimizers</span>
            </li>
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>People who value <strong className="text-ink">data, safety, and long-term physiology</strong></span>
            </li>
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>Anyone wanting to understand peptides through a scientific lens, not Reddit protocols</span>
            </li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8">
            Who This Is Not For
          </h2>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>Anyone seeking prescriptions</span>
            </li>
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>Individuals requiring urgent medical or psychiatric care</span>
            </li>
            <li className="flex items-start text-lg text-stone">
              <span className="text-accent mr-3 flex-shrink-0">→</span>
              <span>People unwilling to involve a licensed physician in decisions about peptide use</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-whisper">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-6">
            Disclaimer
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            This consult is educational and strategic only.<br />
            I do not diagnose, treat, prescribe, or provide medical care.<br />
            Always consult your licensed healthcare provider before initiating any peptide or intervention.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-12">
            FAQs
          </h2>

          {/* FAQ 1 */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-medium text-ink mb-3">
              Are you a doctor?
            </h3>
            <p className="text-lg text-stone leading-relaxed mb-3">
              No. I&apos;m not a physician and I don&apos;t diagnose, treat, or cure disease.
            </p>
            <p className="text-lg text-stone leading-relaxed">
              My background is in neuroscience, research, and applied physiology.<br />
              This consult is educational and strategic — it helps you translate peptide science into something usable with your licensed clinician.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-medium text-ink mb-3">
              Do you prescribe or sell peptides?
            </h3>
            <p className="text-lg text-stone leading-relaxed mb-3">
              No. I don&apos;t prescribe medications or supply peptide products.
            </p>
            <p className="text-lg text-stone leading-relaxed">
              I help you understand which categories of peptides may be relevant, the mechanisms, risks, and evidence, and what to discuss with your clinician.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-medium text-ink mb-3">
              Is this safe?
            </h3>
            <p className="text-lg text-stone leading-relaxed mb-3">
              Any intervention that affects your biology carries risk.
            </p>
            <p className="text-lg text-stone leading-relaxed mb-3">
              Part of the consult is reviewing:
            </p>
            <ul className="space-y-2 ml-6 mb-3">
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Evidence</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Mechanisms</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Contraindications</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Interactions</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Unknowns in the literature</span>
              </li>
            </ul>
            <p className="text-lg text-stone leading-relaxed">
              You&apos;ll be guided toward appropriate labs and physician oversight for anything you choose to explore.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-medium text-ink mb-3">
              What if I don&apos;t have labs or a DEXA yet?
            </h3>
            <p className="text-lg text-stone leading-relaxed">
              That&apos;s completely fine.<br />
              We can still build a structured plan based on your goals and history, and I&apos;ll suggest which assessments would be most valuable long-term.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-medium text-ink mb-3">
              Can you coordinate with my doctor or practitioner?
            </h3>
            <p className="text-lg text-stone leading-relaxed">
              Yes.<br />
              Your strategy summary is designed to be clinician-friendly — questions, options, mechanisms, and safety considerations, not instructions.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-medium text-ink mb-3">
              Who is this not appropriate for?
            </h3>
            <ul className="space-y-2 ml-6 mb-3">
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Acute medical or psychiatric crises</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Unstable eating disorders</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Individuals seeking prescriptions or underground sourcing</span>
              </li>
              <li className="flex items-start text-lg text-stone">
                <span className="text-accent mr-3 flex-shrink-0">→</span>
                <span>Anyone unwilling to involve a licensed physician</span>
              </li>
            </ul>
            <p className="text-lg text-stone leading-relaxed">
              My best work is with individuals who value long-term integrity, safety, and scientific rigor.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
