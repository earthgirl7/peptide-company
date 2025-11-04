export default function Timeline() {
  const steps = [
    { number: 1, text: "Join waitlist (1 min)" },
    { number: 2, text: "We'll notify you when applications open (Q1 2025)" },
    { number: 3, text: "Complete medical screening" },
    { number: 4, text: "First cohort launches Q2 2025" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-ink mb-12">
          What Happens Next
        </h2>
        <ol className="space-y-6 mb-10" role="list">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex items-start text-lg md:text-xl text-stone"
            >
              <span
                className="flex items-center justify-center w-8 h-8 bg-accent text-ink font-medium rounded-full mr-4 flex-shrink-0"
                aria-label={`Step ${step.number}`}
              >
                {step.number}
              </span>
              <span className="pt-1">{step.text}</span>
            </li>
          ))}
        </ol>
        <p className="text-lg md:text-xl font-medium text-center text-ink">
          Limited to 25-50 participants per cohort.
        </p>
      </div>
    </section>
  );
}
