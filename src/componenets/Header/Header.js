import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assests/4.3 crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>

        {currentUser ? (
          <span className="option" onClick={() => auth.signOut()}>
            sign out
          </span>
        ) : (
          <Link className="option" to="/sign-in">
            sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
