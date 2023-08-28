import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type ButtonType = {
  variant: "orange" | "white";
  text: string;
  route?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const Button: React.FC<ButtonType> = ({ text, route, variant, icon: Icon }) => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    if (route) {
      navigate(route);
    }
  }, [navigate, route]);

  const buttonClass =
    variant === "orange"
      ? "w-[full] text-body px-5 [border:none] bg-orange rounded-3xl h-full flex items-center justify-center"
      : "w-[full] text-display px-5 [border:none] bg-body rounded-3xl h-full flex items-center justify-center";

  return (
    <button className={buttonClass} autoFocus onClick={onFrameClick}>
      {Icon && <Icon style={{ marginRight: "10px" }} />}
      <b className="text-base tracking-[0.3px] leading-[20px] text-center">
        {text}
      </b>
    </button>
  );
};

export default Button;
