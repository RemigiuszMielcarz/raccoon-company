import React, { useEffect, useState } from "react";
import Button from "../Button";
import MobileMenu from "./MobileMenu";
import DropdownItem from "./DropdownItem";
import { Link } from "react-router-dom";
import { navRoutes } from "./data";

const Nav = () => {
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

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <div>
      <nav className="bg-secondary h-[60px] lg:h-[90px] flex">
        <div className="container font-semibold flex justify-center gap-5 text-sm">
          <img
            src="/icons/logo5.svg"
            alt="Logo"
            className="max-w-[170px] lg:max-w-[300px]"
          />

          <div className="hidden xl:flex gap-[30px] items-center font-syne">
            {navRoutes.map((route, index) =>
              route.subRoutes ? (
                <DropdownItem
                  key={index}
                  title={route.name}
                  data={route.subRoutes}
                  isOpen={openDropdown === route.name}
                  onOpen={() => handleOpenDropdown(route.name)}
                  onClose={handleCloseDropdown}
                />
              ) : (
                <Link
                  key={index}
                  to={route.route}
                  className="text-white hover:text-whitesmoke px-[20px]"
                >
                  {route.name}
                </Link>
              ),
            )}
          </div>

          <div className="flex items-center">
            <Button variant="red" route="/contact" text="Kontakt" />
          </div>

          <div className="xl:hidden flex items-center">
            {isMobileOpen ? (
              <img
                src="/icons/close.svg"
                alt="Zamknij menu"
                onClick={toggleMobileMenu}
                className="cursor-pointer"
              />
            ) : (
              <img
                src="/icons/menu.svg"
                alt="Zamknij menu"
                onClick={toggleMobileMenu}
                className="cursor-pointer"
              />
            )}
          </div>

          {isMobileOpen && (
            <MobileMenu
              isOpen={isMobileOpen}
              onClose={toggleMobileMenu}
              data={navRoutes}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
