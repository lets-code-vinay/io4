import React from "react";
import "./style.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdUnsubscribe } from "react-icons/md";

const CustomButton = (props) => {
  console.log("props", props);
  const { buttonName = "Click", buttonClass, iconName } = props || {};

  return (
    <React.Fragment>
      <button className={`${buttonClass} pointer`}>
        {iconName === "cartIcon" && (
          <BsFillCartCheckFill className="icons cart-icon" />
        )}

        {iconName === "subscribeIcon" && (
          <MdUnsubscribe className="icons subscribe-icon" />
        )}
        {buttonName}
      </button>
    </React.Fragment>
  );
};

// export CustomButton
export default CustomButton;
