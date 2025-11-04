export default function Application() {
  const airtableUrl = process.env.NEXT_PUBLIC_AIRTABLE_FORM_URL || "#";

  return (
    <section className="py-16 md:py-20 bg-whisper" id="apply">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-ink mb-6">
          Apply for Research Cohort
        </h2>
        <p className="text-lg md:text-xl text-center text-stone mb-12">
          Limited spots available. Cohort fees range from $2,000-$5,000 and
          include biomarker testing, physician supervision, compounds, and data
          analysis.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-6 text-stone">
            <div>
              <h3 className="font-medium text-lg text-ink mb-2">
                Application includes:
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Full Name, Email, Phone, Age, Location</li>
                <li>
                  Compounds of Interest (Semax, Selank, BPC-157, TB-500)
                </li>
                <li>Previous Peptide Experience</li>
                <li>Research Goals & Health Objectives</li>
                <li>Professional/Educational Background</li>
                <li>How you heard about us</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-medium text-lg text-ink mb-4">
                Acknowledgements Required:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">
                    ✓
                  </span>
                  <span>
                    I understand this is a research program requiring medical
                    supervision, informed consent, and active participation in
                    data collection. I am interested in contributing to open
                    science.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">
                    ✓
                  </span>
                  <span>
                    I understand cohort fees range from $2,000-$5,000 and am
                    prepared to invest in physician-supervised research.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={airtableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-ink font-medium px-10 py-5 rounded-lg text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label="Open application form in new window"
          >
            → Start Application
          </a>
          <p className="text-sm text-stone mt-4">
            Opens in new window
          </p>
        </div>
      </div>
    </section>
  );
}
