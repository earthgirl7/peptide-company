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
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What&apos;s Included
        </h2>
        <ul className="space-y-4 mb-10" role="list">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-lg md:text-xl text-gray-700 dark:text-gray-300"
            >
              <span className="text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" aria-hidden="true">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl md:text-2xl font-semibold text-center text-gray-900 dark:text-white">
          Starting at $3,000 for 12 weeks
        </p>
      </div>
    </section>
  );
}
