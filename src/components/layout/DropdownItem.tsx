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
      className="relative flex h-full items-center px-[20px]"
    >
      <div className="flex gap-[10px] cursor-pointer text-white hover:text-whitesmoke font-bold text-sm">
        <span>{title}</span>
      </div>
      <div
        onMouseLeave={() => {
          setIsBlur(false);
          onClose();
        }}
        className={
          isOpen
            ? "absolute w-max left-[-190px] top-[99%] bg-white border-0 rounded-3xl z-10"
            : "hidden"
        }
      >
        <div className="grid grid-cols-4 whitespace-nowrap gap-[30px] p-[20px]">
          {data.map((item: Service, index: number) => (
            <Link
              to={item.route}
              key={index}
              className="text-black hover:text-whitesmoke"
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
