import React from "react";
import "./continueButton.scss";
import RightArrow from "../../assets/images/right-arrow.svg";

const ContinueButton = (props) => {
  const { ...rest } = props;
  return (
    <button className={`continue-button-container`} {...rest}>
      Continue
      <img src={RightArrow} alt="right arrow" />
    </button>
  );
};

ContinueButton.propTypes = {};

ContinueButton.defaultProps = {};

export default ContinueButton;
