import React from "react";
import IntroSection from "../components/home/IntroSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ServicesSection from "../components/home/ServicesSection";

const Home: React.FC = () => {
  return (
    <main className="mt-2 lg:mt-5">
      <IntroSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
};

export default Home;
