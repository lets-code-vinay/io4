import React from "react";

const Benefit = (props) => {
  console.log("props benefit", props);

  const { benefitClass, img, alt, title, description, uniqueKey } = props || {};
  return (
    <>
      <div className={`steps ${benefitClass}-step`} key={uniqueKey}>
        <img src={img} alt={alt} width="100" />
        <div>
          <h3 className="step-title first-step-type">{title}</h3>
          <p className="step-text first-step-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Benefit;
