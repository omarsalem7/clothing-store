import React from "react";
import "./CustomButton.scss";
const CustomButton = ({ inverted, children, ...buttonProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
