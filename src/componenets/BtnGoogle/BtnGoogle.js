import React from "react";
import "./BtnGoogle.scss";
const BtnGoogle = (props) => {
  return (
    <div className="google-btn">
      <div className="google-icon-wrapper">
        <img
          alt=""
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p className="btn-text">
        <b>{props.children}</b>
      </p>
    </div>
  );
};
export default BtnGoogle;
