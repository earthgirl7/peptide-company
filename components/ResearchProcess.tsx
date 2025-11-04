export default function ResearchProcess() {
  const steps = [
    {
      number: 1,
      title: "Screening & Onboarding",
      description:
        "Medical history review, baseline biomarker testing, and physician consultation to determine eligibility and protocol fit.",
    },
    {
      number: 2,
      title: "12-Week Protocol",
      description:
        "Standardized treatment framework with individualized dosing within physician-determined safety ranges. Regular check-ins and monitoring.",
    },
    {
      number: 3,
      title: "Data & Publication",
      description:
        "Post-program comprehensive testing, data analysis, and contribution to open research publications. You receive your full biomarker results.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-ink mb-6">
          The Research Process
        </h2>
        <p className="text-lg md:text-xl text-center text-stone mb-12 max-w-3xl mx-auto">
          Every participant joins as a co-researcher in physician-guided studies
          with full medical oversight and comprehensive data collection.
        </p>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-4 p-6 bg-whisper rounded-lg border border-border"
            >
              <div
                className="flex items-center justify-center w-12 h-12 bg-accent text-ink font-medium text-xl rounded-full flex-shrink-0"
                aria-label={`Step ${step.number}`}
              >
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-medium text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-stone">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
