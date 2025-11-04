export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-whisper border-t border-border py-8"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-stone">
          &copy; {currentYear} Peptide Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
