import React from "react";

import Footer from "./Footer";
import Nav from "./Nav";
import ScrollToTopButton from "../ScrollToTopButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isBlur, setIsBlur] = React.useState(false);

  return (
    <>
      <Nav setIsBlur={setIsBlur} />
      <div className={`w-full h-full ${isBlur ? "blur-[5px]" : ""}`}>
        {children}
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
