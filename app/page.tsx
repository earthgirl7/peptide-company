import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ResearchFramework from "@/components/ResearchFramework";
import Compounds from "@/components/Compounds";
import WhatYouGet from "@/components/WhatYouGet";
import ResearchProcess from "@/components/ResearchProcess";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Timeline from "@/components/Timeline";
import ApplicationForm from "@/components/ApplicationForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <ResearchFramework />
      <Compounds />
      <WhatYouGet />
      <ResearchProcess />
      <WhoThisIsFor />
      <Timeline />
      <ApplicationForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
