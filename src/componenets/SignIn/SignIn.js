import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

const SignIn = () => {
  const handleChange = (e) => {
    setSign({ ...sign, [e.target.name]: e.target.value });
    console.log(sign.email + " , " + sign.password);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = sign;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSign({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
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
          label="Email"
          name="email"
          type="email"
          value={sign.email}
          handleChange={handleChange}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={sign.password}
          handleChange={handleChange}
        />

        <CustomButton type="submit" value="Submit Form">
          Sign In
        </CustomButton>
        <CustomButton
          style={{ background: "#4285F4" }}
          value="Submit Form"
          onClick={signInWithGoogle}
        >
          Sign With Google
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
