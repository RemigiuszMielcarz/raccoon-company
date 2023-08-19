import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const IntroSection: React.FC = () => {
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
  return (
    <section
      style={{ height: "calc(100vh - 90px)" }}
      className="container flex items-center"
    >
      <div className="">
        <p className="text-2xl sm:text-3xl lg:text-6xl">
          Stwórzmy razem
          <br />
          <span
            className="font-bold lg:whitespace-nowrap"
            ref={typeTarget}
          ></span>
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
