import React, { useState } from "react";
import { headerButtonTitle } from "../assets/data";
import Header from "../components/Header";
import Tab from "../components/Tab";

const Home = () => {
  const [selectElement, setSelectElement] = useState(0);
  const handleClick = (idx) => {
    setSelectElement(idx);
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <Header />
      <div className="font-bold text-black text-sm leading-[14px] mt-[24.15px] mb-[18.96px] capitalize">
        <p>choose your donation frequency</p>
      </div>
      <div className="flex items-center justify-center flex-row">
        {headerButtonTitle.map((data, idx) => {
          return (
            <div key={idx} onClick={() => handleClick(idx)}>
              <Tab
                selectElement={`${selectElement === idx ? "selected" : null}`}
                title={data?.title}
                buttonHeightandWidth
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
