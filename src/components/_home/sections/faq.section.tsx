import LottieComponent from "@/lib/lottie";
import React from "react";
import Notes from "@/assets/lottie/notes.json";
import SectionHeader from "./section-header";
import { Bookmark, HelpCircle } from "lucide-react";
import FaqAccordion from "./accordion";

const FaqSection = () => {
  return (
    <section className="mt-10 p-10">
      <SectionHeader
        title="Frequently Asked Questions"
        icons={<HelpCircle size={32} />}
        subtitle="Have questions about GS Notes?"
      />

      <FaqAccordion />
    </section>
  );
};

export default FaqSection;
