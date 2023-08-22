import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    name: string;
    route: string;
    subRoutes?: { name: string; route: string }[];
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
    <div
      className={`fixed top-[70px] left-0 w-full h-full transform transition-transform duration-300 z-10 font-syne
                ${isOpen ? "scale-y-100" : "scale-y-0 origin-top"}`}
    >
      <div className="container flex flex-col">
        <div className="flex flex-col gap-6">
          {data.map((item, index) => (
            <div key={index}>
              <a
                href={item.route}
                className="font-bold text-base tracking-tight leading-6 text-white"
                onClick={() => {
                  onClose();
                  setIsBlur(false);
                }}
              >
                {item.name}
              </a>

              {item.subRoutes && (
                <div className="grid grid-cols-2 gap-6 mt-4">
                  {item.subRoutes.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.route}
                      className={`text-xxs tracking-tight text-white transition-opacity duration-300 ease-in-out ${
                        isOpen ? "opacity-100" : "opacity-0"
                      } transition-delay-[${subIndex * 50}ms]`}
                      onClick={() => {
                        onClose();
                        setIsBlur(false);
                      }}
                    >
                      <span className="text-red font-lato">
                        {String(subIndex + 1).padStart(2, "0")} /
                      </span>{" "}
                      <span className="text-white">{subItem.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
