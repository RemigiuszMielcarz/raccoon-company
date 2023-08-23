import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import MobileMenu from "./MobileMenu";
import DropdownItem from "./DropdownItem";
import { Link } from "react-router-dom";
import { navRoutes } from "./data";
import { fadeInOut } from "../../utils/motion";

const Nav: React.FC<{ setIsBlur: (value: boolean) => void }> = ({
  setIsBlur,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleOpenDropdown = (name: string) => {
    setOpenDropdown(name);
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const isXlScreen = window.matchMedia("(min-width: 1280px)").matches;
      if (isXlScreen) {
        setIsMobileOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileOpen) {
        setIsMobileOpen(false);
        setIsBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileOpen, setIsBlur]);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    setIsBlur(!isMobileOpen);
  };
  return (
    <motion.nav
      className="container bg-secondary h-[60px] lg:h-[90px] flex justify-between font-syne"
      initial="hidden"
      animate="show"
      variants={fadeInOut(0, 0.5)}
    >
      <Link to="/" className="flex items-center">
        <img
          src="/icons/logo5.svg"
          alt="Logo"
          className="min-w-[200px] sm:w-[300px] 2xl:w-[400px]"
        />
      </Link>
      <div className="hidden xl:flex gap-[30px] items-center">
        {navRoutes.map((route, index) =>
          route.subRoutes ? (
            <DropdownItem
              key={index}
              title={route.name}
              data={route.subRoutes}
              isOpen={openDropdown === route.name}
              onOpen={() => handleOpenDropdown(route.name)}
              onClose={handleCloseDropdown}
              setIsBlur={setIsBlur}
            />
          ) : (
            <Link
              key={index}
              to={route.route}
              className="text-white hover:text-whitesmoke px-[20px] text-sm font-bold"
            >
              {route.name}
            </Link>
          ),
        )}
      </div>
      <div className="flex gap-5">
        <div className="flex items-center ">
          <Button variant="red" route="/contact" text="Kontakt" />
        </div>

        <div className="xl:hidden flex items-center">
          {isMobileOpen ? (
            <img
              src="/icons/close.svg"
              alt="Zamknij menu"
              onClick={toggleMobileMenu}
              className="cursor-pointer"
              width={30}
              height={30}
            />
          ) : (
            <img
              src="/icons/menu.svg"
              alt="Zamknij menu"
              onClick={toggleMobileMenu}
              className="cursor-pointer"
              width={30}
              height={30}
            />
          )}
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <MobileMenu
              isOpen={isMobileOpen}
              onClose={toggleMobileMenu}
              data={navRoutes}
              setIsBlur={setIsBlur}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Nav;
