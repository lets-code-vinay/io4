import React from "react";
import CustomButton from "../CustomButton";
import "./style.css";

class Subscribe extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Fourth section - subscribe starts here--> */}
        <section className="subscribe-section">
          <div className="fouth-div subscribe">
            <h2>Subscribe to our New Letter</h2>
            <div className="subscribe-input">
              <input type="text" placeholder="Enter your Email" />
              {/* <button className="subscribe-button pointer">Subscribe</button> */}
              <CustomButton
                buttonName={"Subscribe"}
                buttonClass={"subscribe-button"}
                iconName=""
              />
            </div>
          </div>
        </section>
        {/* <!-- Fourth section - subscribe ends here--> */}
      </>
    );
  }
}

export default Subscribe;
