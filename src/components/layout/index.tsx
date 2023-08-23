import React from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../../utils/motion";
import Nav from "./Nav";
import ScrollToTopButton from "../ScrollToTopButton";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const blurAnimation = {
  unblurred: { filter: "blur(0px)", transition: { duration: 0.5 } },
  blurred: { filter: "blur(5px)", transition: { duration: 0.5 } },
};

const Layout = ({ children }: LayoutProps) => {
  const [isBlur, setIsBlur] = React.useState(false);

  const combinedVariants = {
    ...fadeInOut(0, 0.5),
    ...blurAnimation,
  };

  return (
    <>
      <Nav setIsBlur={setIsBlur} />
      <motion.div
        variants={combinedVariants}
        animate={isBlur ? "blurred" : "unblurred"}
        className="w-full h-full"
      >
        {children}
      </motion.div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
