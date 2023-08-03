import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type ButtonType = {
  text?: string;
};

const Button: FunctionComponent<ButtonType> = ({ text }) => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-red flex-1 rounded h-10 overflow-hidden flex flex-col items-center justify-center"
      autoFocus
      onClick={onFrameClick}
    >
      <b className="relative text-base tracking-[0.3px] leading-[20px] font-syne text-white text-center">
        {text}
      </b>
    </button>
  );
};

export default Button;
