import React from "react";
import Button from "../../../components/Button";
import "./bodySection.scss";
import checkMark from "../../../assets/images/checkmark.svg";
import { oneTime, monthly, annually } from "./data";

const BodySection = (props) => {
  const { currentFrequency, level, setLevel } = props;

  const buttonsToShow =
    currentFrequency === "One-Time"
      ? oneTime
      : currentFrequency === "Monthly"
      ? monthly
      : annually;

  const levelData = buttonsToShow.find((item) => item.amount === level);

  return (
    <div className="body-section-container">
      <div className="body-section-left">
        <h1>Choose a Donation Level</h1>
        {buttonsToShow.map((obj, i) => (
          <Button
            key={`${obj.amount}${i + 1}`}
            width={currentFrequency === "One-Time" ? 135 : 266}
            height={currentFrequency === "One-Time" ? 50 : 46}
            onClick={() => setLevel(obj.amount)}
            isActive={obj.amount === level}
          >
            ${obj.amount}
          </Button>
        ))}
      </div>
      <div className="body-section-right">
        {level === "" ? (
          <>
            <h1>Perks</h1>
            <h6>Choose amount to view perks</h6>
          </>
        ) : (
          <>
            <h1>{levelData?.perk}</h1>
            <h5>{levelData?.subPerk}</h5>
          </>
        )}
        {level !== "" && (
          <div className="benifits-list">
            {levelData?.benifits.map((obj) => (
              <p key={obj}>
                <img src={checkMark} alt="checkMark" />
                {obj}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BodySection;
