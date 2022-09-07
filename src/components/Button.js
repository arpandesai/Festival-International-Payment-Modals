import React from "react";
import Arrow from "../assets/images/arrow.svg";

const Button = ({ buttonTitle }) => {
  return (
    <div className="h-[27px] w-[109px] bg-black hover:bg-[#3E3E3E] rounded-[163px] cursor-pointer flex items-center justify-center">
      <p className="mt-px text-white text-[10px] leading-[10px]">
        {buttonTitle}&nbsp;&nbsp;
      </p>
      <img src={Arrow} alt="arrow" />
    </div>
  );
};

export default Button;
