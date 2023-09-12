import React from "react";
import Button from "./components/Button";

const NotFound: React.FC = () => {
  return (
    <main className="my-2 lg:my-5">
      <div className="container lg:px-0">
        <div
          className="container relative flex items-center bg-cover lg:bg-contain rounded-[8px] lg:rounded-none"
          style={{
            height: "860px",
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/home.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center items-center">
            <div className="flex-1 flex flex-col items-center justify-center lg:items-start gap-[30px]">
              <p className="text-xxxl lg:text-[80px] lg:leading-[80px] text-white">
                Wygląda na to, że się zgubiłeś...
              </p>
              {/* Button for bigger screens */}
              <div className="hidden lg:flex lg:w-[200px]">
                <Button variant={"orange"} text={"Strona Główna"} route={"/"} />
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
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
