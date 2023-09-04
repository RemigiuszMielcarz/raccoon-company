import ai from "../../images/icons/menu/ai.svg";
import baselinker from "../../images/icons/menu/baselinker.svg";
import mail from "../../images/icons/menu/mail.svg";
import marketplace from "../../images/icons/menu/marketplace.svg";
import rpa from "../../images/icons/menu/rpa.svg";
import shop from "../../images/icons/menu/shop.svg";
import socialMediaIcon from "../../images/icons/menu/social-media.svg";
import ui from "../../images/icons/menu/ui-ux.svg";
import video from "../../images/icons/menu/video.svg";
import web from "../../images/icons/menu/web.svg";
import webApp from "../../images/icons/menu/web-app.svg";
import webFlow from "../../images/icons/menu/webflow.svg";
import linkedin from "../../images/icons/socials/linkedin.svg";
import twitter from "../../images/icons/socials/twitter.svg";
import facebook from "../../images/icons/socials/facebook.svg";
import instagram from "../../images/icons/socials/instagram.svg";
import github from "../../images/icons/socials/github.svg";
import behance from "../../images/icons/socials/behance.svg";
import dribble from "../../images/icons/socials/dribble.svg";
import webflow from "../../images/icons/socials/webflow.svg";

export const services = [
  { name: "Strony Internetowe", route: "/web", icon: web },
  { name: "Strony Webflow", route: "/product-photos", icon: webFlow },
  { name: "Sklepy Internetowe", route: "/online-shops", icon: shop },
  { name: "Wdrożenia Baselinker", route: "/baselinker", icon: baselinker },
  { name: "Opieka Marketplace", route: "/marketplace", icon: marketplace },
  { name: "Aplikacje Internetowe", route: "/web-apps", icon: webApp },
  { name: "Automatyzacja (AI)", route: "/ai", icon: ai },
  { name: "Automatyzacja (RPA)", route: "/rpa", icon: rpa },
  { name: "Kampanie Mailingowe", route: "/email-campaigns", icon: mail },
  { name: "UI / UX Design", route: "/design", icon: ui },
  { name: "Social Media", route: "/social-media", icon: socialMediaIcon },
  { name: "Montaż Video", route: "/video", icon: video },
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
    name: "LinkedIn",
    route: "https://www.linkedin.com",
    icon: linkedin,
  },
  {
    name: "Twitter",
    route: "https://www.twitter.com",
    icon: twitter,
  },
  {
    name: "Facebook",
    route: "https://www.facebook.com",
    icon: facebook,
  },
  {
    name: "Instagram",
    route: "https://www.instagram.com",
    icon: instagram,
  },
  {
    name: "Behance",
    route: "https://www.behance.com",
    icon: behance,
  },
  {
    name: "Dribble",
    route: "https://www.dribble.com",
    icon: dribble,
  },
  {
    name: "Github",
    route: "https://www.github.com",
    icon: github,
  },
  {
    name: "Webflow",
    route: "https://www.webflow.com",
    icon: webflow,
  },
];

export const locations = [
  "Warszawa",
  "Wrocław",
  "Gdańsk",
  "Świdnica",
  "Dzierżoniów",
];

export const tech = [
  "Gatsby",
  "React.js",
  "Next.js",
  "Tailwind",
  "Three.js",
  "Webflow",
];

export const companyItems = [
  {
    name: "P.P.H.U. Wojciech Smoła",
    tel: "+48 571 799 926",
    email: "hello@flipico.agency",
    nip: "NIP: PL 882 214 17 88",
  },
];

export const resources = [
  {
    name: "Regulamin",
    route: "/regulations",
  },
  {
    name: "Polityka Prywatności",
    route: "/copyrights",
  },
];
