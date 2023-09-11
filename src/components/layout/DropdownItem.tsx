import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  name: string;
  route: string;
  icon: string;
}

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: "-10%" },
  visible: { opacity: 1, scale: 1, y: "0%" },
  exit: { opacity: 0, scale: 0.95, y: "-10%" },
};

interface DropdownItemProps {
  title: string;
  data: Service[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setIsBlur: (value: boolean) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  data,
  isOpen,
  onOpen,
  onClose,
  setIsBlur,
}) => {
  return (
    <div
      onMouseEnter={() => {
        setIsBlur(true);
        onOpen();
      }}
      onMouseLeave={() => {
        setIsBlur(false);
        onClose();
      }}
      className="relative flex h-full items-center"
    >
      <div className="flex gap-[10px] cursor-pointer text-display font-bold text-sm">
        <span>{title}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="absolute lg:w-max -left-[445px] top-[60px] bg-white border-0 rounded-3xl z-10"
          >
            <div className="w-max grid grid-cols-6 whitespace-nowrap gap-5 p-[20px]">
              {data.map((item: Service, index: number) => (
                <Link
                  to={item.route}
                  key={index}
                  className="text-display flex flex-col gap-1 bg-grey justify-center items-center py-5 px-4 rounded-[10px]"
                >
                  <img height="40px" src={item.icon} alt={item.name} />
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownItem;
