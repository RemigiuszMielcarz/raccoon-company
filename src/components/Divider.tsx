import React from "react";

type DividerType = {
  variant: "orange" | "grey";
  rotated?: boolean;
};

const Divider: React.FC<DividerType> = ({ variant, rotated }) => {
  return (
    <div
      className={`w-full border border-solid h-[10px] border-b-0 
      ${variant === "orange" ? "border-secondary" : "border-grey"}
      ${rotated ? "rotate-180" : ""}
      `}
    ></div>
  );
};

export default Divider;
