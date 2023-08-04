import React from "react";
import "../styles/Footer.scss";

const Footer: React.FC = () => {
  const services = [
    { name: "Strony Internetowe", route: "/web" },
    { name: "Opieka Marketplace", route: "/marketplace" },
    { name: "Grafika 2D lub 3D", route: "/graphics" },
    { name: "Zdjęcia produktowe", route: "/product-photos" },
    { name: "Aplikacje Internetowe", route: "/web-apps" },
    { name: "Kampanie Mailingowe", route: "/email-campaigns" },
    { name: "Sklepy Internetowe", route: "/online-shops" },
    { name: "Automatyzacja", route: "/automation" },
    { name: "Produkcja Video", route: "/video" },
    { name: "Sztuczna Inteligencja", route: "/ai" },
    { name: "Pozyskiwanie Leadów", route: "/lead-generation" },
    { name: "Social Media", route: "/social-media" },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      route: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      route: "https://www.twitter.com",
    },
    {
      name: "LinkedIn",
      route: "https://www.linkedin.com",
    },
  ];
  const company = [
    {
      name: "Strona główna",
      route: "/",
    },
    {
      name: "Portfolio",
      route: "/portfolio",
    },
    {
      name: "Blog",
      route: "/blog",
    },
    {
      name: "O nas",
      route: "/about",
    },
    {
      name: "Kontakt",
      route: "/contact",
    },
  ];

  return (
    <footer className="footer-container py-10">
      <div className="logo">
        <img
          src="/logo6.svg"
          alt="RaccoonLogo"
          className="w-full max-w-[700px]"
        />
      </div>
      <div className="w-full max-w-[500px] text-center">
        <p>
          Rozwój produktu od podstaw, zebranie dedykowanego zespołu lub
          zwiększenie personelu - możemy rozpocząć od miejsca, w którym
          przerwałeś.
        </p>
      </div>
      <div className="flex justify-center gap-10">
        <div className="services-section">
          <h2>Usługi</h2>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <a href={service.route} className="service-link">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="social-media-section">
          <h2>Znajdź nas na:</h2>
          <ul>
            {socialMedia.map((media, index) => (
              <li key={index}>
                <a href={media.route} className="social-media-link">
                  {media.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="company-section">
          <h2>Firma</h2>
          <ul>
            {company.map((page, index) => (
              <li key={index}>
                <a href={page.route} className="company-link">
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>Raccoon Digital Agency 2023 ©</p>
    </footer>
  );
};

export default Footer;
