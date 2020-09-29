import React from "react";
import "./main.css";

function Navbar(props) {
  return (
    <React.Fragment>
      <div className="background-container">
        {/* {props.children}Logo */}
        <div className="logo">logo</div>
        <button className="button-sign-in">Sign in</button>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
