import React, { useState, forwardRef } from "react";
import calenderImg from "../assets/images/date.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = () => {
  const [startDate, setStartDate] = useState("");
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="w-[187px] h-[30px] flex items-center justify-center bg-[#F3F3F3] rounded-[3px]"
      onClick={onClick}
      ref={ref}
    >
      <div className="text-[9px] mr-[5.82px] mt-px leading-[9px] font-normal text-[#848484] flex items-center justify-center">
        {startDate ? <p className="text-black font-bold">{value}</p> : "Select Date"}
      </div>
      <div className="">
        <img src={calenderImg} alt="date-icon" />
      </div>
    </button>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

const DateSelect2 = () => {
  const [selectElement, setSelectElement] = useState(false);
  const [startDate, setStartDate] = useState();
  const handleonClick = () => {
    setSelectElement(!selectElement);
    console.log("hi");
  };

  return (
    <>
      <div
        className="w-[187px] h-[30px] flex items-center justify-center bg-[#F3F3F3] rounded-[3px]"
        // onClick={handleonClick}
      >
        <div className="mr-[5.82px]">
          <p
            className={`text-[9px] mt-px leading-[9px] 
             
                 font-normal text-[#848484]
            flex items-center justify-center`}
          >
            Select Date
          </p>
        </div>
        <div className="">
          <img src={calenderImg} alt="date-icon" />
        </div>
      </div>
    </>
  );
};

export default DateSelect;
