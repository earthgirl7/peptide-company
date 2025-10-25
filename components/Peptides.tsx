export default function Peptides() {
  const peptides = [
    { name: "BPC-157", description: "Tissue repair & gut health" },
    { name: "TB-500", description: "Recovery & inflammation" },
    { name: "Semax", description: "Cognitive function & neuroprotection" },
    { name: "Selank", description: "Stress resilience & focus" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          First Cohorts Focus On
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {peptides.map((peptide, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {peptide.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {peptide.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center space-y-2">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            All sourced from FDA-registered compounding pharmacies.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            All administered under physician supervision.
          </p>
        </div>
      </div>
    </section>
  );
}
