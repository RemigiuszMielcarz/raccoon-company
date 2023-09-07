import React from "react";
import IntroSection from "../components/home/IntroSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

const Home: React.FC = () => {
  return (
    <main className="mt-2 lg:mt-5">
      <IntroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
