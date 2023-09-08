import React, { useEffect } from "react";
import Arrow from "./icons/Arrow";
import { motion, useAnimation } from "framer-motion";
import { fadeInOut } from "../utils/motion";

const ScrollToTopButton: React.FC = () => {
  const controls = useAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={fadeInOut(0, 0.5)}
      className="fixed bottom-10 right-10 w-11 h-11 bg-secondary rounded-full z-50 flex items-center justify-center transition-all duration-400 rotate-180"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <Arrow className="rotate-90" />
    </motion.div>
  );
};

export default ScrollToTopButton;
