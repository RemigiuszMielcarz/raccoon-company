import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type ButtonType = {
  text?: string;
  route: string;
  variant: "red" | "outline";
};

const Button: FunctionComponent<ButtonType> = ({ text, route, variant }) => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate(route);
  }, [navigate, route]);

  const buttonClass =
    variant === "red"
      ? "flex-1 text-link p-2 [border:none] bg-red rounded h-10 overflow-hidden flex flex-col items-center justify-center"
      : "flex-1 text-link p-2 border-2 border-red bg-black rounded h-10 overflow-hidden flex flex-col items-center justify-center";

  return (
    <button className={buttonClass} autoFocus onClick={onFrameClick}>
      <b className="text-base tracking-[0.3px] leading-[20px] font-syne text-white text-center">
        {text}
      </b>
    </button>
  );
};

export default Button;
