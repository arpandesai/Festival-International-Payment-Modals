import React from "react";
import "./header.scss";
import logo from "../../assets/images/logo_white.png";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Amis du Festival</h1>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
