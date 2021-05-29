import React from "react";
import "./CustomButton.scss";
const CustomButton = ({ children, ...buttonProps }) => {
  return (
    <button className="custom-button" {...buttonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
