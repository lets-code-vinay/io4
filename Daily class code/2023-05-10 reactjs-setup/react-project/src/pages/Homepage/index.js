import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import BenefitsSection from "../../components/BenefitsSection";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";

function Homepage() {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <BenefitsSection />
      <Subscribe />
      <Footer />
    </>
  );
}
export default Homepage;
