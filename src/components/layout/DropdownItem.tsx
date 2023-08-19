import React from "react";
import { Link } from "react-router-dom";

interface Service {
  name: string;
  route: string;
}

interface DropdownItemProps {
  title: string;
  data: Service[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  data,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <div
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      className={`relative flex h-full items-center px-[20px] ${
        isOpen ? "bg-red" : ""
      }`}
    >
      <div className="flex gap-[10px] cursor-pointer text-white hover:text-whitesmoke font-bold text-sm">
        <span>{title}</span>
      </div>
      <div className={isOpen ? "absolute left-0 top-[99%] bg-red" : "hidden"}>
        <div className="grid grid-cols-4 w-max whitespace-nowrap gap-[10px] p-[20px]">
          {data.map((item: Service, index: number) => (
            <Link
              to={item.route}
              key={index}
              className="text-white hover:text-whitesmoke"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
