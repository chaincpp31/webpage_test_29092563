import React from "react";
import "./main.css";

function Button(props) {
  return (
    <React.Fragment>
      <button className="Button-container">{props.children}</button>
    </React.Fragment>
  );
}
export default Button;
