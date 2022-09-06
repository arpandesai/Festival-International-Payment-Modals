import React from "react";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="bg-black w-[802px] h-[52px] flex items-center justify-between">
      <p className="text-white pl-[43.77px]">Amis du Festival</p>
      <div className="pr-[29.31px]">
        <img src={Logo} />
      </div>
    </div>
  );
};

export default Header;
