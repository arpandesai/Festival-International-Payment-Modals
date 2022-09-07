import React, { useState } from "react";
import "./landing.scss";
import Header from "../../components/Header";
import HeaderSection from "./headerSection";
import BodySection from "./bodySection";
import ContinueButton from "../../components/continueButton";

const Landing = () => {
  const [currentFrequency, setCurrentFrequency] = useState("One-Time");
  const [level, setLevel] = useState("");
  return (
    <div className="landing-container">
      <Header />
      <HeaderSection
        currentFrequency={currentFrequency}
        setCurrentFrequency={setCurrentFrequency}
        setLevel={setLevel}
      />
      <BodySection
        currentFrequency={currentFrequency}
        level={level}
        setLevel={setLevel}
      />
      {level !== "" && (
        <div className="continue-section">
          <ContinueButton />
        </div>
      )}
    </div>
  );
};

export default Landing;
