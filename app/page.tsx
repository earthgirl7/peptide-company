import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatYouGet from "@/components/WhatYouGet";
import Peptides from "@/components/Peptides";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Timeline from "@/components/Timeline";
import FounderNote from "@/components/FounderNote";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <WhatYouGet />
      <Peptides />
      <WhoThisIsFor />
      <Timeline />
      <FounderNote />
      <FinalCTA />
      <Footer />
    </main>
  );
}
