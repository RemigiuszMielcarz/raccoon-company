import { FunctionComponent } from "react";

const Contact: FunctionComponent = () => {
  return (
    <div className="relative bg-gray w-full overflow-hidden flex flex-col items-center justify-start">
      <div className="self-stretch relative h-[62px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray" />
        <img
          className="absolute h-[25.81%] w-[45.83%] top-[37.1%] right-[49.72%] bottom-[37.1%] left-[4.44%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/logo3.svg"
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[48.39%] w-[19.17%] top-[25.81%] right-[21.67%] bottom-[25.81%] left-[59.17%] overflow-hidden"
          autoFocus
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-red" />
          <b className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_34.5px)] text-xs tracking-[0.3px] leading-[20px] inline-block font-syne text-white text-center w-[69px]">
            Kontakt
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[32.26%] w-[8.33%] top-[33.87%] right-[4.44%] bottom-[33.87%] left-[87.22%]"
          autoFocus
        >
          <img className="relative w-[30px] h-5" alt="" src="/menu.svg" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
