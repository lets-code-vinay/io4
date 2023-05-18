import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./style.css";
import axios from "axios";
import CustomButton from "../CustomButton";
import SimpleSpinner from "../SimpleLoader";

// React-- Hooks
// Hooks are used in --> Functional components
// 1. useState --> to update and use any state
// 2. useEffect --> To deal with API, aur handling rendering, It loads component

const Products = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0);
  const [isLoading, setLoader] = useState(false);

  const api = "https://dummyjson.com/products";

  //1. import useEffect from React
  // 2. Provide a call back function -->   () => {}
  // 3. provide Dependency-->   []

  // ---- 1st method---
  useEffect(() => {
    // try {
    //   axios.get(api).then((res) => {
    //     const { data, status } = res || {};
    //     const { products } = data || {};
    //     // storing data in State
    //     setStatus(status);
    //     setData(products);
    //   });
    // } catch (error) {
    //   console.error("--this is api error-=-", error);
    // }
  }, []);

  // 2nd Method
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const result = await axios.get(api);
    //   const { data, status } = result || {};
    //   const { products } = data || {};
    //   console.log("products", products);
    //   console.log("status", status);
    //   setData(products);
    //   setStatus(status);
    // };
    // fetchProducts();
  }, []);

  // 3rd method
  const fetchProducts = async () => {
    setLoader(true);
    try {
      const result = await axios.get(api);
      const { data, status } = result || {};
      const { products } = data || {};

      setData(products);
      setStatus(status);
      setLoader(false);
    } catch (err) {
      console.error("---> ", err);

      setLoader(false);
    }
  };

  /**
   * @description Fetching products
   */
  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(" status state", status);
  // console.log("data state", data);

  const starRating = (originalRating) => (rating) => {
    console.log("rating", rating);
    return originalRating;
  };

  return (
    <>
      {isLoading && <SimpleSpinner />}
      <section className="products-section">
        <div className="products">
          <h2>Products</h2>
          <div className="products-container">
            {data.map((product, index) => {
              return (
                <div className="product-card" id="id" key={index}>
                  <div className="product-image-container">
                    <img
                      src={product.thumbnail}
                      alt="shoes 1"
                      width="100%"
                      className=" product-image"
                    />
                  </div>

                  <div className="product-captions">
                    <h5 className="product-title">{product.title}</h5>
                    <h6 className="product-brand">
                      Brand: <span>{product.brand}</span>
                    </h6>

                    <p className="product-details">{product.description}</p>
                  </div>

                  <div className="price-section">
                    <span className="price">${product.price}</span>
                    <span className="stock">
                      Stock: <span>{product.stock}</span>
                    </span>
                    <span className="discount">
                      <div>{product.discountPercentage}% off</div>
                    </span>
                  </div>
                  <div className="rating">
                    Rating:
                    <ReactStars
                      count={6}
                      size={20}
                      isHalf={true}
                      activeColor="yellow"
                      value={product.rating}
                      onChange={starRating(product.rating)}
                    />
                  </div>

                  <div className="button-group">
                    <CustomButton
                      buttonName={"Buy Now"}
                      buttonClass={"buy-button"}
                      iconName={"cartIcon"}
                    />

                    <CustomButton
                      buttonClass={"add-to-cart"}
                      buttonName={"Add To Cart"}
                      iconName={"cartIcon"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
