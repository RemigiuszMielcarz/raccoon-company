import React from "react";
import { Link } from "react-router-dom";

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
      className="fixed bottom-10 right-10 w-11 h-11 bg-red rounded-full z-50 flex items-center justify-center transition-all duration-400 hover:bg-white"
    >
      UP
    </Link>
  );
};

export default ScrollToTopButton;
