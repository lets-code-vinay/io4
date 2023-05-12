import React from "react";
import "./style.css";
import store_icon from "../../assets/icons/store.svg";
import delivery_icon from "../../assets/icons/delivery.svg";
import support_icon from "../../assets/icons/support.svg";
import shoes_shopping from "../../assets/images/shoes-shopping.png";
import Benefit from "../Benefit";
import { BENEFITS } from "../../Configs/benfits";

const BenefitsSection = () => {
  return (
    // <!--  Third Section starts here-->
    <section className="third-section">
      <div className="third-div">
        <div className="sides left-side">
          {/**
           * @method First Method
           */}

          {/* <Benefit
            benefitClass={"first"}
            img={store_icon}
            alt={"Exchange"}
            title={"Find the perfect Fit"}
            description={`Everybody is different, Which is why we offer styles for
                everybody.`}
          />
          <Benefit
            benefitClass={"second"}
            img={delivery_icon}
            alt={"Delivery icon"}
            title={"Free Exchanges"}
            description={`One of the many reasons you can shop with peace of mind`}
          />
          <Benefit
            benefitClass={"third"}
            img={support_icon}
            alt={"customer support icon"}
            title={"Contact Our Seller"}
            description={` They are here to help you. That's quite literally what we pay
            for them.`}
          /> */}

          {/**
           * @method Second Method
           */}
          {BENEFITS.map((benefit, index) => (
            <Benefit
              benefitClass={benefit?.benefitClass}
              img={benefit.img}
              alt={benefit.alt}
              title={benefit.title}
              description={benefit.description}
              uniqueKey={index}
              key={index}
            />
          ))}
        </div>
        <div className="sides right-side">
          <img src={shoes_shopping} alt="people doing shoes shopping" />
        </div>
      </div>
    </section>
    // <!--  Third Section ends here-->
  );
};

export default BenefitsSection;
