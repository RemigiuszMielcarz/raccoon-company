import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Divider from "../Divider";
import { SectionWrapper } from "../../hoc";

const AboutSection = () => {
  const stats = [
    { number: "+7", description: "Lat doświadczenia w branży." },
    {
      number: "3 mln €",
      description:
        "Obrotu u partnerów w 2022 na marketplace, kampaniach mailowych i sklepach online.",
    },
    {
      number: "+50",
      description:
        "Z sukcesem ukończyliśmy ponad 50 projektów dla klientów z Polski i zagranicy.",
    },
    { number: "∞", description: "Pomysłów i dawki humoru." },
  ];

  return (
    <section className="container pb-32 xl:pb-50">
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1)}
      >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-md lg:text-title text-section font-semibold"
        >
          02 - O Nas
        </motion.p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 mb-4 lg:my-5 text-display text-xl lg:text-xxxl font-medium"
      >
        Dążymy do innowacji
      </motion.p>

      <Divider variant={"grey"} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="my-8 lg:mb-15 lg:mt-10 text-md lg:text-lg text-section lg:w-1/2"
      >
        <span className="text-display">Silna strategia</span>, która spełnia
        wymagania biznesowe i dokładna analiza danych są niezbędnymi elementami
        do uzyskania cennych spostrzeżeń i wprowadzenia skutecznych rozwiązań.
      </motion.p>

      <motion.p className="text-section text-md lg:text-title font-semibold mb-4 lg:mb-5">
        Trochę Liczb o Nas
      </motion.p>

      <div className="grid grid-cols-2 gap-4 lg:gap-5 lg:w-1/2">
        {stats.map((stat, index) => (
          <div key={index} className="rounded-[10px] bg-grey p-5">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="text-secondary lg:text-xxxl lg:leading-[50px] font-bold mb-[10px]"
            >
              {stat.number}
            </motion.p>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="text-display text-m font-medium"
            >
              {stat.description}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(AboutSection, "about");
