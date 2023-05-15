import React from "react";
import "./style.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdUnsubscribe } from "react-icons/md";
import { GoHome } from "react-icons/go";

const CustomButton = (props) => {
  const { buttonName = "Click", buttonClass, iconName } = props || {};

  return (
    <React.Fragment>
      <button className={`${buttonClass} pointer`}>
        {iconName === "cartIcon" && (
          <BsFillCartCheckFill className="icons cart-icon " />
        )}

        {iconName === "subscribeIcon" && (
          <MdUnsubscribe className="icons subscribe-icon" />
        )}
        {buttonName}

        {iconName === "home" && <GoHome className="icons home-icon" />}
      </button>
    </React.Fragment>
  );
};

// export CustomButton
export default CustomButton;
