export default function WhoThisIsFor() {
  const criteria = [
    "Already interested in or using peptides",
    "Want medical oversight and real data",
    "Committed to 12-week protocols",
    "Age 25-65, generally healthy",
    "Value transparency and rigorous research",
  ];

  return (
    <section className="py-16 md:py-20 bg-whisper">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-ink mb-12">
          Ideal Participants
        </h2>
        <ul className="space-y-4 mb-10" role="list">
          {criteria.map((criterion, index) => (
            <li
              key={index}
              className="flex items-start text-lg md:text-xl text-stone"
            >
              <span className="text-accent mr-3 flex-shrink-0" aria-hidden="true">
                →
              </span>
              <span>{criterion}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl md:text-2xl font-medium text-center text-ink">
          This is not a telehealth clinic. This is a research cohort.
        </p>
      </div>
    </section>
  );
}
