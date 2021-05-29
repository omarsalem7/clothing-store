import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";
import CustomButton from "../CustomButton/CustomButton";
const SignIn = () => {
  const handleChange = (e) => {
    setSign({ ...sign, [e.target.name]: e.target.value });
    console.log(sign.email + " , " + sign.password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSign({ email: "", password: "" });
    console.log(sign.email + " , " + sign.password);
  };
  const [sign, setSign] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="sign-in">
      <h2 className="font1">I already have an account</h2>
      <span className="font2">Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={sign.email}
          handleChange={handleChange}
        />

        <FormInput
          label="password"
          name="password"
          type="password"
          value={sign.password}
          handleChange={handleChange}
        />

        <CustomButton type="submit" value="Submit Form" onChange={handleSubmit}>
          Sign In
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
