import React from "react";
import "./layout.scss";

const BlankLayout = (props) => {
  return <div className="layout-container">{props.children}</div>;
};

export default BlankLayout;
