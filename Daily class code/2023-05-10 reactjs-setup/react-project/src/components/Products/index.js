import React, { useEffect, useState } from "react";
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

  return (
    <>
      {isLoading && <SimpleSpinner />}
      <section class="products-section">
        <div class="products">
          <h2>Products</h2>
          <div class="products-container">
            {data.map((product, index) => {
              console.log(index, "product", product);
              return (
                <div class="product-card" id="id" key={index}>
                  <div class="product-image-container">
                    <img
                      src={product.thumbnail}
                      alt="shoes 1"
                      width="100%"
                      class=" product-image"
                    />
                  </div>

                  <div class="product-captions">
                    <h5 class="product-title">{product.title}</h5>
                    <h6 class="product-brand">
                      Brand: <span>{product.brand}</span>
                    </h6>

                    <p class="product-details">{product.description}</p>
                  </div>

                  <div class="price-section">
                    <span class="price">${product.price}</span>
                    <span class="stock">
                      Stock: <span>{product.stock}</span>
                    </span>
                    <span class="discount">
                      <div>{product.discountPercentage}% off</div>
                    </span>
                  </div>
                  <div className="rating">Rating: {product.rating}</div>

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
