import React from "react";
import "./style.css";
import NIKE_LOGO from "../../assets/icons/logo.png";

const Header = () => {
  return (
    <>
      {/*  Nav bar starts */}
      <header>
        <nav>
          <div className="nav-sides nav-left pointer">
            <img src={NIKE_LOGO} alt="nike logo" width=" 70px" height=" 30px" />
            <p className="brand-title">
              <span>Nike</span> <span>React</span>
            </p>
          </div>
          <div className="nav-sides nav-right">
            <ul>
              <li className="menus pointer home">Home</li>
              <li className="menus pointer product">Product</li>
              <li className="menus pointer about-us">About us</li>
              <li className="menus pointer contact-us">Contact us</li>
            </ul>
          </div>
          <div className="mobile-menus">
            <i className="fa-solid fa-bars hamburger"></i>
          </div>
        </nav>
      </header>
      {/* <!-- Nav bar ends--> */}
    </>
  );
};

export default Header;
