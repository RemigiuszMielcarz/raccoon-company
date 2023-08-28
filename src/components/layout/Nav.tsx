import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import MobileMenu from "./MobileMenu";
import DropdownItem from "./DropdownItem";
import { Link } from "react-router-dom";
import { navRoutes } from "./data";
import { fadeInOut } from "../../utils/motion";
import { ReactComponent as FlipicoLogo } from "../../images/icons/flipico.svg";
import { ReactComponent as AddIcon } from "../../images/icons/add.svg";

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
      className="absolute left-0 right-0 z-10 container my-[20px] h-[50px] flex justify-between"
      initial="hidden"
      animate="show"
      variants={fadeInOut(0, 0.5)}
    >
      <Link to="/" className="flex items-center">
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
      <div className="flex gap-5">
        <div className="flex items-center ">
          <Button variant="white" text="Wyceń projekt" icon={AddIcon} />
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
