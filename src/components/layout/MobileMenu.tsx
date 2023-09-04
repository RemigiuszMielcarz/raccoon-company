import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../../utils/motion";
import { ReactComponent as Hook } from "../../images/icons/hook.svg";
import styles from "../../scss/dropdown.module.scss";

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
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleServiceExpansion = (serviceName: string) => {
    if (expandedService === serviceName) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceName);
    }
  };

  return (
    <motion.div
      id="mobileMenu"
      variants={fadeInOut(0, 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={`absolute top-[80px] left-0 w-full h-fit transform transition-transform duration-300 z-10 font-semibold pb-10
                ${isOpen ? "scale-y-100" : "scale-y-0 origin-top"}`}
    >
      <div className="container px-[16px] flex flex-col">
        <div className="flex flex-col gap-8">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <a
                  href={item.route}
                  className="text-title text-white"
                  onClick={() => {
                    onClose();
                    setIsBlur(false);
                  }}
                >
                  {item.name}
                </a>
                {item.name === "Usługi" && (
                  <Hook
                    onClick={() => toggleServiceExpansion(item.name)}
                    className={`cursor-pointer transform transition-transform duration-300 ${
                      expandedService === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.subRoutes && (
                <div
                  className={`flex flex-col gap-6 ${
                    item.name === "Usługi"
                      ? expandedService === "Usługi"
                        ? `${styles.expanded}`
                        : styles.collapsed
                      : ""
                  }`}
                >
                  {item.subRoutes.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.route}
                      onClick={() => {
                        onClose();
                        setIsBlur(false);
                      }}
                      className={`${subIndex === 0 ? "mt-8" : ""}`}
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
