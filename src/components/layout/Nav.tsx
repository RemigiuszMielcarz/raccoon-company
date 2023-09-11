import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import MobileMenu from "./MobileMenu";
import DropdownItem from "./DropdownItem";
import { Link } from "react-router-dom";
import { navRoutes } from "./data";
import { fadeInOut } from "../../utils/motion";
import { ReactComponent as FlipicoLogo } from "../../images/icons/flipico.svg";
import { ReactComponent as AddIcon } from "../../images/icons/addOrange.svg";

const Nav: React.FC<{ setIsBlur: (value: boolean) => void }> = ({
  setIsBlur,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [isXlScreen, setIsXlScreen] = useState(
    window.matchMedia("(min-width: 1280px)").matches,
  );

  const handleOpenDropdown = (name: string) => {
    setOpenDropdown(name);
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const isXl = window.matchMedia("(min-width: 1280px)").matches;
      setIsXlScreen(isXl);
      if (isXl) {
        setIsMobileOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const threshold = expandedService ? 500 : 200;

      if (isMobileOpen && st > threshold) {
        setIsMobileOpen(false);
        setIsBlur(false);
        setExpandedService(null);
      }

      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileOpen, setIsBlur, expandedService]);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    setIsBlur(!isMobileOpen);
    if (isMobileOpen) {
      setExpandedService(null);
    }
  };

  return (
    <motion.nav
      className="absolute left-0 right-0 z-10 container px-4 lg:px-[50px] lg:pr-[20px] mt-[8px] lg:mt-[20px] flex justify-between"
      initial="hidden"
      animate="show"
      variants={fadeInOut(0, 0.5)}
    >
      <Link to="/" className="flex items-center z-20">
        <FlipicoLogo />
      </Link>
      <div className="hidden xl:flex gap-[50px] items-center bg-white px-[36px] rounded-3xl">
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
              className="text-display text-sm font-bold"
            >
              {route.name}
            </Link>
          ),
        )}
      </div>
      <div className="flex gap-4">
        <div className="xl:flex items-center">
          <Button
            variant={isXlScreen ? "white" : "gradient"}
            text="Wyceń projekt"
            icon={AddIcon}
          />
        </div>

        <div className="xl:hidden flex items-center justify-center w-[40px] h-[40px] rounded-full mobile-icon-gradient z-20">
          {isMobileOpen ? (
            <img
              src="/icons/close.svg"
              alt="Zamknij menu"
              onClick={toggleMobileMenu}
              className="cursor-pointer"
              height={16}
            />
          ) : (
            <img
              src="/icons/menu.svg"
              alt="Zamknij menu"
              onClick={toggleMobileMenu}
              className="cursor-pointer"
              height={16}
            />
          )}
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <MobileMenu
              onClose={toggleMobileMenu}
              data={navRoutes}
              setIsBlur={setIsBlur}
              expandedService={expandedService}
              setExpandedService={setExpandedService}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Nav;
