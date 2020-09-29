import React from "react";
import "./main.css";
import Button from "../Button";

function Text({ inputText, setInputText }) {
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="text-box">
        <input type="text" value={inputText} onChange={handleInputChange} />
        <Button>Submit</Button>
        <div>
          <h1>{inputText}</h1>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Text;
