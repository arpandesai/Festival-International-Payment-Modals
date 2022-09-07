import React from "react";

const Tab = ({ title, buttonHeightandWidth, selectElement }) => {
  return (
    <div
      className={`cursor-pointer ${
        buttonHeightandWidth ? "w-[216px] h-[31px]" : "w-[135px] h-[50px]"
      }  rounded-[3px] 
        ${
          selectElement === "selected"
            ? "bg-[#D0D0D0] buttonBorder"
            : "bg-[#F3F3F3] hover:bg-[#E4E4E4]"
        }  flex items-center justify-center`}
    >
      <p
        className={`text-xs leading-3 text-black ${
          selectElement === "selected" ? "font-bold" : "font-normal"
        } capitalize`}
      >
        {title}
      </p>
    </div>
  );
};

export default Tab;
