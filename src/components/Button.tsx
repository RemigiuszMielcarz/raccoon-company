import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type ButtonType = {
  variant: "orange" | "white" | "gradient";
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

  const baseClasses =
    "w-full text-center p-2.5 lg:py-[15px] lg:px-5 border-none rounded-3xl h-full flex items-center justify-center";

  const variantClasses = {
    orange: "text-body bg-secondary",
    white: "text-display bg-white",
    gradient: "text-display button-gradient",
  };

  const buttonClass = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={buttonClass} autoFocus onClick={onFrameClick}>
      {Icon && <Icon className="mr-2.5" />}
      <span className="font-semibold text-md lg:text-sm">{text}</span>
    </button>
  );
};

export default Button;
