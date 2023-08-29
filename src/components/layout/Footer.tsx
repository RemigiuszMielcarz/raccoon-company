import React from "react";
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
import { projects } from "../../contstants";

interface FooterSectionProps {
  title?: string;
  items: { name: string; route?: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-[16px] text-m lg:text-lg text-menu">
      <p className="text-grey">{title}</p>
      <ul className="list-none flex flex-col gap-[8px]">
        {items.map((item, index) => (
          <li key={index}>
            {item.route ? (
              <a
                href={item.route}
                className="text-m text-menu whitespace-nowrap"
              >
                {item.name}
              </a>
            ) : (
              <span className="text-m text-menu whitespace-nowrap">
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
  return (
    <footer className="container flex flex-col bg-black text-white py-16">
      <div className="container lg:px-0">
        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between mb-[32px] lg:mb-[137px]">
          <div className="flex gap-[42px] lg:gap-[90px]">
            <FlipicoLogo />
            <FlipicoAiLabsLogo />
          </div>
          <div className="flex gap-[16px] lg:gap-[30px]">
            {socialMedia.map((media, index) => (
              <a key={index} href={media.route}>
                <img src={media.icon} alt={media.name} />
              </a>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-5 gap-[12px] xl:gap-6 gap-y-[48px] mb-[60px]">
          <div className="flex flex-col gap-[10px]">
            {Object.keys(companyItems[0]).map((key) => (
              <p
                className={
                  key === "tel" || key === "email"
                    ? "text-secondary text-m"
                    : "text-menu"
                }
              >
                {companyItems[0][key as keyof (typeof companyItems)[0]]}
              </p>
            ))}
          </div>
          <FooterSection title="Oferta" items={services} />
          <FooterSection
            title="Portfolio"
            items={projects.map((project) => ({ name: project.name }))}
          />
          <FooterSection
            title="Technologie"
            items={tech.map((name) => ({ name }))}
          />
          <FooterSection title="Firma" items={navRoutes} />
        </div>
        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between text-m lg:text-lg text-grey">
          <p>Nasze lokalizacje</p>
          <div className="grid grid-cols-2 md:grid-cols-5 xl:gap-10 2xl:gap-16 mb-8 lg:mb-[60px]">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-[8px] lg:gap-[10px]"
              >
                <Location />
                <p>{location}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row lg:justify-between text-menu text-sm">
          <p>© Flipico & Flipico AI Labs 2023. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            {resources.map((resource, index) => (
              <a key={index} href={resource.route} className="">
                {resource.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
