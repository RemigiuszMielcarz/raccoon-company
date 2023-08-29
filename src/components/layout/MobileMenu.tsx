import React from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../../utils/motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    name: string;
    route: string;
    subRoutes?: { name: string; route: string; icon: string }[];
  }[];
  setIsBlur: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  data,
  setIsBlur,
}) => {
  return (
    <motion.div
      variants={fadeInOut(0, 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={`fixed top-[80px] left-0 w-full h-fit transform transition-transform duration-300 z-10
                ${isOpen ? "scale-y-100" : "scale-y-0 origin-top"}`}
    >
      <div className="container px-[16px] flex flex-col">
        <div className="flex flex-col gap-6">
          {data.map((item, index) => (
            <div key={index}>
              <a
                href={item.route}
                className="font-semibold text-title text-white"
                onClick={() => {
                  onClose();
                  setIsBlur(false);
                }}
              >
                {item.name}
              </a>

              {item.subRoutes && (
                <div className="flex flex-col gap-6 mt-8">
                  {item.subRoutes.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.route}
                      className={`transition-opacity duration-300 ease-in-out ${
                        isOpen ? "opacity-100" : "opacity-0"
                      } transition-delay-[${subIndex * 50}ms]`}
                      onClick={() => {
                        onClose();
                        setIsBlur(false);
                      }}
                    >
                      <div className="flex gap-4 items-center">
                        <img height="40px" src={subItem.icon} alt={item.name} />
                        <span className="text-menu">{subItem.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
