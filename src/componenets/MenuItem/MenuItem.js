import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imageUrl, history, match }) => {
  return (
    <div
      className="menu-item"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => {
        history.push(`${match.url}${title}`);
      }}
    >
      <div className="contet">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
