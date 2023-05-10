import React from "react";
import "./style.css";

const Button = (props) => {
  console.log("props", props);
  const { buttonName = "Click" } = props || {};

  return (
    <React.Fragment>
      <input type="button" value={buttonName} className="basic-button"></input>
    </React.Fragment>
  );
};

// export Button
export default Button;
