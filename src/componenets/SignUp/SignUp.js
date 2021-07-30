import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignUp.scss";
import CustomButton from "../CustomButton/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const handleChange = (e) => {
    setSign({ ...sign, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    const { name, email, password, confirmPassword } = sign;
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName: name });
    } catch (error) {
      console.error(error);
    }

    setSign({ name: "", email: "", password: "", confirmPassword: "" });
  };
  const [sign, setSign] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="sign-up">
      <h2 className="font1">I don't have an account</h2>
      <span className="font2">Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          name="name"
          type="text"
          value={sign.name}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={sign.email}
          handleChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={sign.password}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={sign.confirmPassword}
          handleChange={handleChange}
          required
        />

        <CustomButton type="submit" value="Submit Form" onChange={handleSubmit}>
          Sign up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
