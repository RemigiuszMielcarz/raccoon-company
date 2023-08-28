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

export const services = [
  { name: "Strony Internetowe", route: "/web", icon: web },
  { name: "Opieka Marketplace", route: "/marketplace", icon: marketplace },
  { name: "Sklepy Internetowe", route: "/online-shops", icon: shop },
  { name: "Strony Webflow", route: "/product-photos", icon: webFlow },
  { name: "Aplikacje Internetowe", route: "/web-apps", icon: webApp },
  { name: "Kampanie Mailingowe", route: "/email-campaigns", icon: mail },
  { name: "Wdrożenia Baselinker", route: "/baselinker", icon: baselinker },
  { name: "Automatyzacja (RPA)", route: "/rpa", icon: rpa },
  { name: "Montaż Video", route: "/video", icon: video },
  { name: "Automatyzacja (AI)", route: "/ai", icon: ai },
  { name: "UI / UX Design", route: "/design", icon: ui },
  { name: "Social Media", route: "/social-media", icon: socialMediaIcon },
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
