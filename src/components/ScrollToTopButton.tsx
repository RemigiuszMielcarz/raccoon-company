import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./icons/Arrow";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to="#"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className="fixed bottom-10 right-10 w-11 h-11 bg-secondary rounded-full z-50 flex items-center justify-center transition-all duration-400 rotate-180"
    >
      <Arrow className="rotate-90" />
    </Link>
  );
};

export default ScrollToTopButton;
