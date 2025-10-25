export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {currentYear} Peptide Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
