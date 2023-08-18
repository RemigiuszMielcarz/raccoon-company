export const services = [
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

export const navRoutes = [
  {
    name: "Strona główna",
    route: "/",
  },
  {
    name: "Usługi",
    route: "/services",
    subRoutes: services,
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
];

export const socialMedia = [
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

export const resources = [
  {
    name: "Polityka Prywatności",
    route: "/copyrights",
  },
  {
    name: "Regulamin",
    route: "/regulations",
  },
];
