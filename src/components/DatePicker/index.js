import React, { useState, forwardRef } from "react";
import calenderImg from "../../assets/images/calander.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.scss";

const DateSelect = () => {
  const [startDate, setStartDate] = useState("");
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="date-selection" onClick={onClick} ref={ref}>
      {startDate ? (
        <p style={{ color: startDate ? "#000" : "inherit" }}>{value}</p>
      ) : (
        "Select Date"
      )}{" "}
      <img src={calenderImg} alt="calander" />
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

export default DateSelect;
