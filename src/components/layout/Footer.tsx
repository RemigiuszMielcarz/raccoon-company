import React from "react";
import { navRoutes, resources, services, socialMedia } from "./data";

interface FooterSectionProps {
  title: string;
  items: { name: string; route: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <h2>{title}</h2>
      <ul className="list-none flex flex-col gap-[8px]">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.route}
              className="text-whitesmoke whitespace-nowrap opacity-50"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="container flex flex-col text-whitesmoke font-syne py-16">
      <div className="flex flex-col lg:flex-row lg:mb-[60px] lg:gap-[20px] lg:justify-center">
        <div className="flex flex-col lg:max-w-xs gap-[16px] mb-[50px] lg:mb-0">
          <img src="/icons/logo6.svg" alt="RaccoonLogo" />
          <p>
            Rozwój produktu od podstaw, zebranie dedykowanego zespołu lub
            zwiększenie personelu - możemy rozpocząć od miejsca, w którym
            przerwałeś.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] gap-y-[48px] mb-[60px] lg:mb-0 w-max">
          <FooterSection title="Usługi" items={services} />
          <FooterSection title="Firma" items={navRoutes} />
          <FooterSection title="Zasoby" items={resources} />
          <FooterSection title="Social Media" items={socialMedia} />
        </div>
      </div>
      <p>Raccoon Digital Agency 2023 ©</p>
    </footer>
  );
};

export default Footer;
