import { motion } from "framer-motion";
import React from "react";
import Button from "./components/Button";
import { fadeIn } from "./utils/motion";

const NotFound: React.FC = () => {
  return (
    <main className="mt-2 lg:mt-5 pb-32 lg:pb-50">
      <div className="container lg:px-0">
        <div
          className="container relative flex items-center bg-cover lg:bg-contain rounded-[8px] lg:rounded-none lg:h-[860px] h-[calc(100vh-16px)]"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/home.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="flex-1 flex flex-col items-center justify-center lg:items-start gap-[30px] mb-4 lg:mb-0">
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="text-xxxl lg:text-[80px] lg:leading-[80px] text-white"
              >
                Wygląda na to, że się zgubiłeś...
              </motion.p>

              {/* Button for bigger screens */}
              <div className="hidden lg:flex lg:w-[200px]">
                <Button variant={"orange"} text={"Strona Główna"} route={"/"} />
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
              <img
                src={`${process.env.PUBLIC_URL}/images/backgrounds/404.webp`}
                alt="Not Found"
                className="max-w-full h-auto"
              />
            </div>

            {/* Button for smaller screens */}
            <div className="lg:hidden w-full">
              <Button variant={"orange"} text={"Strona Główna"} route={"/"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
