import React from "react";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="bg-black w-[802px] h-[52px] flex items-center justify-between">
      <p className="text-white pl-[43.77px] text-base leading-4 font-normal not-italic">
        Amis du Festival
      </p>
      <div className="pr-[29.31px] w-[214.87px] h-[38.9px]">
        <img src={Logo} className="object-cover" />
      </div>
    </div>
  );
};

export default Header;
