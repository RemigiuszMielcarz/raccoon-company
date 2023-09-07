import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion, AnimatePresence } from "framer-motion";
import ScrollDown from "../ScrollDown";
import { fadeInOut } from "../../utils/motion";
import Divider from "../Divider";
import { ReactComponent as Stars } from "../../images/icons/stars.svg";

const IntroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const typeTarget = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let typed: Typed | null = null;

    const options = {
      strings: ["HIGH-TECH INNOWACJE", "NIEZWYKŁE RZECZY"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    if (typeTarget.current) {
      typed = new Typed(typeTarget.current, options);
    }

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="container lg:px-0">
      <div
        className="container relative flex items-center bg-cover lg:bg-contain rounded-[8px] lg:rounded-none"
        style={{
          height: "860px",
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/home.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-[60px] lg:gap-[80px] w-full">
          <p className="text-xxxl 2xl:text-[100px] 2xl:leading-[100px] text-white">
            Stwórzmy razem
            <br />
            <span
              className="font-bold lg:whitespace-nowrap"
              ref={typeTarget}
            ></span>
          </p>
          <Divider variant={"grey"} />
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-[10px] p-[10px] rounded-[20px] bg-white">
              <div className="w-[100px]">
                <Stars />
              </div>
              <p className="font-bold text-title text-display">5.0</p>
            </div>
            <p className="text-md lg:text-lg text-white">
              Nasi Klienci kochają współpracę z nami
            </p>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="exitAnimation"
              variants={{
                ...fadeInOut(0, 0.5),
                exitAnimation: {
                  opacity: 0,
                  transition: {
                    type: "tween",
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <ScrollDown />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IntroSection;
