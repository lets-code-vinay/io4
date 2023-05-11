import React from "react";
import FooterCopyRight from "../FooterCopyRight";
import "./style.css";

const Footer = () => {
  return (
    <>
      {/* <!-- Fifth section - Sitemap starts here--> */}
      <section className="Sitemap-section">
        <div className="sitemap">
          <div className="sitemap-items featured">
            <h3>Featured</h3>
            <ul>
              <li className="list pointer">Holiday Gift Card</li>
              <li className="list pointer">Air force 1</li>
              <li className="list pointer">Jordan 1</li>
              <li className="list pointer">Air Max 2090</li>
            </ul>
          </div>

          <div className="sitemap-items Shoes">
            <h3>Shoes</h3>
            <ul>
              <li className="list pointer">All Shoes</li>
              <li className="list pointer">Jordan Shoes</li>
              <li className="list pointer">Running shoes</li>
              <li className="list pointer">Basketball Shoes</li>
            </ul>
          </div>

          <div className="sitemap-items Clothing">
            <h3>Clothing</h3>
            <ul>
              <li className="list pointer">All Clothing</li>
              <li className="list pointer">Tops & T-shirts</li>
              <li className="list pointer">Shorts</li>
              <li className="list pointer">Hoodies & Pullovers</li>
            </ul>
          </div>

          <div className="sitemap-items Soccer">
            <h3>Soccer</h3>
            <ul>
              <li className="list pointer">Infant & Toddlers shoes</li>
              <li className="list pointer">Kid's shoes</li>
              <li className="list pointer">Kid's basket ball shoes</li>
              <li className="list pointer">Kid's running Shoes</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Fifth section - Sitemap ends here--> */}
      <FooterCopyRight />
    </>
  );
};

export default Footer;
