import React from "react";
import SignIn from "../../componenets/SignIn/SignIn";
import SignUp from "../../componenets/SignUp/SignUp";
import "./SignIn_SignUp_Page.scss";
const SignIn_SignUp_Page = () => {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignIn_SignUp_Page;
