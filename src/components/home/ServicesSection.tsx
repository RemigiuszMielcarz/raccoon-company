import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { services } from "../layout/data";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { Link } from "react-router-dom";

interface Service {
  name: string;
  route: string;
  icon: string;
}

const ServicesSection = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [clipPathRadius, setClipPathRadius] = useState("8px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setBackgroundImage(
          `${process.env.PUBLIC_URL}/images/backgrounds/services-desktop.webp`,
        );
        setClipPathRadius("30px");
      } else {
        setBackgroundImage(
          `${process.env.PUBLIC_URL}/images/backgrounds/services-mobile.webp`,
        );
        setClipPathRadius("8px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-32 xl:py-50">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1)}
        >
          <p className="text-md lg:text-title text-section font-semibold">
            01 - Nasze Usługi
          </p>
        </motion.div>
        <div className="w-full">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-5 mb-8 lg:mb-10 text-display text-xl lg:text-xxxl font-medium"
          >
            Jako zgrany zespół ekspertów tworzymy zapadające w pamięć i
            emocjonalne strony internetowe, wyjątkowe doświadczenia cyfrowe i
            dochodowy e-commerce.
          </motion.p>
        </div>
      </div>
      <div
        className="container py-8 xl:py-12 grid grid-cols-2 xl:grid-cols-6 whitespace-nowrap gap-4 lg:gap-5 bg-cover xl:bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          clipPath: `inset(0% 0% 0% 0% round ${clipPathRadius})`,
        }}
      >
        {services.map((item: Service, index: number) => (
          <Link
            to={item.route}
            key={index}
            className="text-display flex flex-col gap-1 service-gradient justify-center items-center py-5 px-4 rounded-[4px] lg:rounded-[10px]"
          >
            <img height="40px" src={item.icon} alt={item.name} />
            <p className="text-xss xl:text-m font-semibold">{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(ServicesSection, "services");
