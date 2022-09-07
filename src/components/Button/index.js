import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = (props) => {
  const { isDisabled, width, height, isActive, ...rest } = props;
  return (
    <button
      className={`button-container ${isActive ? "button-active" : ""}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      {...rest}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isActive: PropTypes.bool,
};

Button.defaultProps = {
  width: 266,
  height: 50,
  isActive: false,
};

export default Button;
