import React from "react";
import HeroSection from "./sections/hero.section";
import FeatureSection from "./sections/feature.section";
import FaqSection from "./sections/faq.section";

const MainLayout = () => {
  return (
    <main className="flex flex-col">
      {/* Hero Section: The top section that grabs the user's attention with a key message or call-to-action */}
      <HeroSection />
      
      {/* Feature Section: Highlights the key features or benefits of the platform */}
      <FeatureSection />
      
      {/* FAQ Section: Provides answers to common questions to assist users */}
      <FaqSection />
    </main>
  );
};

export default MainLayout;
