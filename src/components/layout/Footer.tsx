import React, { useEffect, useState } from "react";
import {
  companyItems,
  locations,
  navRoutes,
  resources,
  services,
  socialMedia,
  tech,
} from "./data";
import { ReactComponent as FlipicoLogo } from "../../images/icons/flipico.svg";
import { ReactComponent as FlipicoAiLabsLogo } from "../../images/icons/flipicoailabs.svg";
import { ReactComponent as Location } from "../../images/icons/location.svg";
import { ReactComponent as Hook } from "../../images/icons/hook.svg";
import { ReactComponent as Stars } from "../../images/icons/stars.svg";
import WojciechSignature from "../../images/icons/wojciech-smola-sig.webp";
import { projects } from "../../contstants";
import styles from "../../scss/dropdown.module.scss";
import Divider from "../Divider";
import { Link } from "react-router-dom";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

interface FooterSectionProps {
  title?: string;
  items: { name: string; route?: string }[];
  onToggle?: (title: string) => void;
  openItem?: string | null;
  extraPadding?: boolean;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  items,
  onToggle,
  openItem,
  extraPadding,
}) => {
  const windowWidth = useWindowWidth();

  const handleToggle = () => {
    if (windowWidth < 1280 && title) {
      if (onToggle) {
        onToggle(title);
      }
    }
  };

  const shouldShowHook = windowWidth < 1280;
  const isOpen = openItem === title;

  return (
    <div
      className={`flex flex-col xl:pt-5 ${extraPadding ? "xl:pt-[50px]" : ""}`}
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleToggle}
      >
        <p className="text-grey cursor-pointer font-semibold text-m xl:text-lg">
          {title}
        </p>
        {shouldShowHook && (
          <Hook style={{ transform: isOpen ? "rotate(180deg)" : "none" }} />
        )}
      </div>
      <ul
        className={`list-none flex flex-col gap-6 xl:gap-[10px] ${
          !shouldShowHook || isOpen
            ? `${styles.expanded}`
            : `${styles.collapsed}`
        }`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={`${index === 0 ? "mt-8 xl:mt-[10px]" : ""}`}
          >
            {item.route ? (
              <a
                href={item.route}
                className="text-md xl:text-sm text-menu whitespace-nowrap"
              >
                {item.name}
              </a>
            ) : (
              <span className="text-md xl:text-sm text-menu whitespace-nowrap">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const windowWidth = useWindowWidth();
  const isXL = windowWidth >= 1280;

  const halfLength = Math.ceil(services.length / 2);
  const firstHalfServices = services.slice(0, halfLength);
  const secondHalfServices = services.slice(halfLength);

  const onToggle = (title: string) => {
    if (openItem === title) {
      setOpenItem(null);
    } else {
      setOpenItem(title);
    }
  };

  return (
    <footer className="bg-black">
      <div className="container flex flex-col text-white py-16">
        <div className="container xl:px-0 flex flex-col gap-8 xl:gap-12">
          <div className="flex flex-col gap-6 xl:gap-0 xl:flex-row xl:justify-between">
            <div className="flex gap-[42px] xl:gap-[90px]">
              <FlipicoLogo />
              <FlipicoAiLabsLogo />
            </div>
            <div className="flex justify-between xl:gap-[30px]">
              {socialMedia.map((media, index) => (
                <a key={index} href={media.route}>
                  <img src={media.icon} alt={media.name} />
                </a>
              ))}
            </div>
          </div>
          <Divider variant={"orange"} />
          <div className="grid xl:grid-cols-6 gap-8 xl:gap-5">
            <div className="flex flex-col gap-[10px]">
              <img
                src={WojciechSignature}
                height={50}
                width={160}
                alt="Wojciech's Signature"
              />
              {Object.keys(companyItems[0]).map((key) => (
                <p
                  key={key}
                  className={
                    key === "tel" || key === "email"
                      ? "text-secondary text-md xl:text-sm"
                      : "text-menu text-md xl:text-sm"
                  }
                >
                  {companyItems[0][key as keyof (typeof companyItems)[0]]}
                </p>
              ))}
            </div>
            {isXL ? (
              <>
                <FooterSection
                  title="Oferta"
                  items={firstHalfServices}
                  onToggle={onToggle}
                  openItem={openItem}
                />
                <FooterSection items={secondHalfServices} extraPadding={true} />
              </>
            ) : (
              <FooterSection
                title="Oferta"
                items={services}
                onToggle={onToggle}
                openItem={openItem}
              />
            )}
            <FooterSection
              title="Portfolio"
              items={projects.map((project) => ({ name: project.name }))}
              onToggle={onToggle}
              openItem={openItem}
            />
            <FooterSection
              title="Technologie"
              items={tech.map((name) => ({ name }))}
              onToggle={onToggle}
              openItem={openItem}
            />
            <FooterSection
              title="Firma"
              items={navRoutes}
              onToggle={onToggle}
              openItem={openItem}
            />
          </div>
          <Divider variant={"orange"} rotated={true} />
          <div className="grid grid-cols-2 xl:grid-cols-6 gap-10 xl:gap-5 gap-y-6 text-grey font-semibold">
            <p className="flex items-center text-m lg:text-lg whitespace-nowrap">
              Nasze lokalizacje
            </p>
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-[8px] lg:gap-[10px]"
              >
                <Location className="h-[20px] lg:h-[30px]" />
                <p className="text-md xl:text-lg">{location}</p>
              </div>
            ))}
          </div>
          <Divider variant={"orange"} />
          <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row lg:justify-between text-menu text-md lg:text-sm">
            <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 xl:gap-16">
              <div className="flex flex-col lg:flex-row">
                <p>© Flipico & Flipico AI Labs 2023. &nbsp;</p>
                <p>Wszystkie prawa zastrzeżone.</p>
              </div>
              <div className="flex items-center">
                <div className="w-[100px] lg:w-[125px]">
                  <Stars />
                </div>
                <p className="font-bold ml-2 lg:ml-[10px]">5.0</p>
                <p className="ml-5 whitespace-nowrap">
                  Na podstawie 12 recenzji
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              {resources.map((resource, index) => (
                <Link key={index} to={resource.route}>
                  {resource.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
