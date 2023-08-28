import React from "react";
import IntroSection from "../components/home/IntroSection";
import ProjectsSection from "../components/home/ProjectsSection";

const Home: React.FC = () => {
  return (
    <main className="text-whitesmoke">
      <IntroSection />
      <ProjectsSection />
    </main>
  );
};

export default Home;
