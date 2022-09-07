import React, { useState } from "react";
import { headerButtonTitle, oneTime, annually, monthly } from "../assets/data";
import right from "../assets/images/right.svg";
import Header from "../components/Header";
import Tab from "../components/Tab";
import DateSelect from "../components/DateSelect";

const Home = () => {
  const [selectElement, setSelectElement] = useState(0);
  const [selectedDonationButton, setSelectedDonationButton] = useState("");
  const [show, setShow] = useState(true);
  const handleClick = (idx) => {
    setSelectElement(idx);
  };
  const handleDonatinClick = (idx) => {
    setSelectedDonationButton(idx);
    setShow(false);
  };

  const bodyData =
    selectElement === 0
      ? oneTime
      : selectElement === 1
      ? monthly
      : selectElement === 2
      ? annually
      : null;
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        {/* header section */}
        <Header />

        {/* select button section */}
        <div className="font-bold h-[19.94px] flex items-center text-black text-sm leading-[14px] mt-[24.15px] mb-[18.96px] capitalize">
          <p>choose your donation frequency</p>
        </div>
        <div className="flex items-center justify-center flex-row">
          {headerButtonTitle.map((data, idx) => {
            return (
              <div
                className="mr-[14px]"
                key={idx}
                onClick={() => handleClick(idx)}
              >
                <Tab
                  selectElement={`${selectElement === idx ? "selected" : null}`}
                  title={data?.title}
                  buttonHeightandWidth
                />
              </div>
            );
          })}
        </div>

        {selectElement !== 0 && (
          <div className="flex items-center justify-between w-[543.22px] mt-[25.95px] cursor-pointer">
            <div className="">
              <p className="font-bold mb-[2.38px] h-[10.94px] flex items-center text-black text-[10px] leading-[10px]">
                Select a Start Date
              </p>
              <p className="font-light italic h-[13.85px] flex items-center text-black text-[8px] leading-[8px]">
                Your donation will be ongoing and can be cancelled anytime.
              </p>
            </div>
            <div>
              <DateSelect />
            </div>
          </div>
        )}

        {/* border */}
        <div
          style={{ borderBottom: "1px solid black" }}
          className={`w-[802px] ${
            selectElement !== 0 ? "mt-[24.87px]" : "mt-[29.84px]"
          } mb-[25.67px]`}
        ></div>

        {/* body section left part */}
        <div className="flex items-start justify-start w-[690px]">
          <div className="w-[307.34px]">
            <p className="font-bold h-[19.94px] flex items-center pl-[8.59px] text-black text-sm leading-[14px] mb-[19.72px] capitalize">
              choose a donation level
            </p>
            <div className="flex flex-wrap">
              {bodyData.map((data, idx) => {
                return (
                  <div
                    className="mr-[8.13px] mb-[6px]"
                    key={idx}
                    onClick={() => handleDonatinClick(idx)}
                  >
                    <Tab
                      selectElement={`${
                        selectedDonationButton === idx ? "selected" : null
                      }`}
                      title={data?.donation}
                      longButton={selectElement !== 0 ? "longButton" : null}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* body section right part */}
          <div className="ml-[132.34px]">
            <div className={`${!show ? "hidden" : "block"}`}>
              <p className="font-bold h-[19.94px] flex items-center text-black text-xs leading-[12px] capitalize">
                perks
              </p>
              <p className="font-light h-[19.94px] flex items-center italic text-black text-[10px] leading-[10px]">
                Choose amount to view perks
              </p>
            </div>
            {bodyData.map((data, idx) => {
              return (
                <div
                  className={`${
                    selectedDonationButton === idx ? "block" : "hidden"
                  }`}
                  key={idx}
                >
                  <p className="font-bold h-[19.94px] flex items-center text-black text-xs leading-[12px] capitalize">
                    {data?.title}
                  </p>
                  <p className="font-normal h-[19.94px] flex items-center capitalize text-black text-xs leading-[12px]">
                    {data?.subTitle}
                  </p>
                  <div className="mt-[11.75px] flex items-start justify-start flex-col">
                    {data?.sideText.map((text, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-center mb-[4.25px]"
                        >
                          <div>
                            <img src={right} alt="checkmark" />
                          </div>
                          <div className="text-[10px] ml-[7.08px] leading-[10px] text-black h-[12.05px] flex items-center">
                            <p>{text?.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
