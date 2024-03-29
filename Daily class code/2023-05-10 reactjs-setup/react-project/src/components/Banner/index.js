import React from "react";
import Banner_shoes from "../../assets/images/shoe10.png";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import CustomButton from "../../components/CustomButton";

import "./style.css";

class Banner extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Main banner starts--> */}
        <section className="banner-section">
          <div className="banner">
            <div className="banner-left">
              <div className="shoe-background"></div>
              <img
                src={Banner_shoes}
                alt="shoes 9"
                width="65%"
                className="product-rotation-30deg"
              />
            </div>
            <div className="banner-right">
              <h2 className="banner-text">Nike React</h2>
              <h2 className="banner-text">Infinity Run 2</h2>
              <p>
                Nike shoes offer great comfort and maintain your feet posture
                every time you walk. Nike is one of the most popular brands of
                footwear
              </p>
              {/* <button className="buy-button pointer">
                <BsFillCartCheckFill className="icons cart-icon" />
                Buy Now
              </button> */}
              <CustomButton
                buttonClass={"buy-button"}
                buttonName={"Buy Now"}
                iconName={"cartIcon"}
              />
            </div>
          </div>
        </section>
        {/* <!-- Main banner ends--> */}
      </>
    );
  }
}

export default Banner;
