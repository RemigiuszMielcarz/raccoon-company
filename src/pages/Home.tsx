import React from "react";
import IntroSection from "../components/home/IntroSection";
import ProjectsSection from "../components/home/ProjectsSection";

const Home: React.FC = () => {
  return (
    <main className="mt-2 lg:mt-5">
      <IntroSection />
      <ProjectsSection />
    </main>
  );
};

export default Home;
