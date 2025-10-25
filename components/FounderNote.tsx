export default function FounderNote() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
              Photo
            </div>
          </div>
          <div className="flex-1">
            <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
              &quot;I&apos;m building this because the peptide space needs structure.
              Millions are experimenting. Almost no one is collecting data.
              This platform bridges responsible research with real-world use.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Jesse Schmidt
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Founder, Neuroscience Background
                </p>
              </div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                aria-label="Connect with Jesse Schmidt on LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
