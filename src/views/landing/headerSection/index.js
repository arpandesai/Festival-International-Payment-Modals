import React from "react";
import "./headerSection.scss";
import Button from "../../../components/Button";
import DateSelect from "../../../components/DatePicker";

const Frequencies = ["One-Time", "Monthly", "Annually"];

const HeaderSection = (props) => {
  const { currentFrequency, setCurrentFrequency, setLevel } = props;
  return (
    <div className="header-section-container">
      <h1>Choose Your Donation Frequency</h1>
      <div className="frequency-buttons">
        {Frequencies.map((item) => (
          <Button
            key={item}
            width={217}
            height={31}
            isActive={item === currentFrequency}
            onClick={() => {
              setCurrentFrequency(item);
              setLevel("");
            }}
          >
            {item}
          </Button>
        ))}
      </div>
      {currentFrequency !== "One-Time" && (
        <div className="start-date-wrapper">
          <div>
            <h2>Select a Start Date</h2>
            <h6>Your donation will be ongoing and can be cancelled anytime.</h6>
          </div>
          <DateSelect />
        </div>
      )}
    </div>
  );
};

export default HeaderSection;
