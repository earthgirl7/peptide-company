export default function WhatYouGet() {
  const features = [
    "Physician consultation & monitoring",
    "Pharmaceutical-grade compounds (503B certified)",
    "Comprehensive biomarker testing (pre/post)",
    "12-week structured protocol",
    "Contribute to published research",
    "Private cohort community",
  ];

  return (
    <section className="py-16 md:py-20 bg-whisper">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-ink mb-12">
          What&apos;s Included
        </h2>
        <ul className="space-y-4 mb-10" role="list">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-lg md:text-xl text-stone"
            >
              <span className="text-accent mr-3 mt-1 flex-shrink-0" aria-hidden="true">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl md:text-2xl font-medium text-center text-ink">
          Starting at $3,000 for 12 weeks
        </p>
      </div>
    </section>
  );
}
