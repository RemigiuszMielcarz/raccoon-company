import React, { FunctionComponent } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Nav: FunctionComponent<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <nav className="container h-[62px] flex items-center justify-between">
        <Link to="/">
          <img className="h-[16px] cursor-pointer" alt="" src="/logo5.svg" />
        </Link>{" "}
        <div className="max-w-[240px]">
          <Button text="Kontakt" route="/contact" variant="red" />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent]"
          autoFocus
        >
          <img className="w-[30px] h-5" alt="" src="/menu.svg" />
        </button>
      </nav>
      {children}
    </div>
  );
};

export default Nav;
