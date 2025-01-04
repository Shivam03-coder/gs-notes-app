import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex  center text-primary min-h-screen
     flex-col space-y-5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold uppercase dark:text-gray-100 md:text-4xl">
            GS Notes: AI-Composed Notes App
          </h2>
          <p className="mt-4 text-lg">
            Revolutionizing academic learning for SGSITS students by simplifying
            the curriculum with advanced AI-driven solutions.
          </p>
        </header>
        <article className="mx-auto flex w-full max-w-4xl flex-col items-center">
          <p className="text-center text-xl leading-relaxed">
            GS Notes empowers students with an intelligent platform to create,
            organize, and access notes effortlessly. Designed with a focus on
            productivity, this app is tailored for academic excellence and
            collaboration.
          </p>
        </article>
      </div>
      <div className="mt-4 flex justify-center">
        <Button className="flex items-center gap-2 rounded text-secondary">
          GO TO DASHBOARD <MoveRight size={30} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
