const data = [
  {
    image: "./assets/images/products/shoes9.png",
    alt: "shoes 9",
    title: "Nike Sport Shoes",
    description: "Mens Gts 97 NSW Other Sports",
    price: "456",
    inStock: true,
    stock: 5,
  },
  {
    image: "./assets/images/products/shoes3.png",
    alt: "shoes 3",
    title: "Nike Running Shoes",
    description: "Women Running",
    price: "336",
    inStock: false,
    stock: 0,
  },
  {
    image: "./assets/images/products/shoes8.png",
    alt: "shoes 8",
    title: "Nike Marathon Shoes",
    description: "Mens Gts Marathon shoes",
    price: "586",
    inStock: false,
    stock: 0,
  },
  {
    image: "./assets/images/products/shoe10.png",
    alt: "shoes 10",
    title: "Nike Soccer Shoes",
    description: "Mens Gts Soccer Shoes- Special Edition",
    price: "856",
    inStock: true,
    stock: 6,
  },
];

console.log(data);

const [, , thirdProductContainer] = document.querySelectorAll(
  ".products-container"
);
console.log("2--thirdProductContainer", thirdProductContainer);

data.map((shoesDetails, index) => {
  console.log("shoesDetails", shoesDetails);
  const productContainer = document.createElement("div");

  productContainer.classList.add("product-card");

  productContainer.innerHTML = `
    <div class="product-image-container">
      <img
        src=${shoesDetails.image}
        alt=${shoesDetails.alt}
        width="100%"
        class="shoes-red"
      />
    </div>

    <div class="product-captions">
      <h5 class="product-title">${shoesDetails.title}</h5>
      <p class="product-details">${shoesDetails.description}</p>
    </div>

    <div class="price-section">
      <span class="price">$${shoesDetails.price}</span>
      ${
        shoesDetails.inStock || shoesDetails.stock > 0
          ? `<span class="in-stock">Stock: ${shoesDetails.stock}</span>`
          : `<span class="in-stock">Out of Stock</span>`
      }

      <button class="add-to-cart-button pointer" onclick="handleAddToCart(${index})">
      <i class="fa-solid fa-cart-shopping"></i>Add To Cart
    </button>
      <button class="buy-button pointer">
        <i class="fa-solid fa-cart-shopping"></i>Buy Now
      </button>
    </div>
  `;

  thirdProductContainer.append(productContainer);
});

let cart = [];

function handleAddToCart(index) {
  console.log("cart button clicked", index);
  console.log("----> data[index]--", data[index]); // data[1]
  cart.push(data[index]);

  console.log("cart--->", cart);

  const cartCount = document.querySelector(".cart-count");
  cartCount.innerText = cart.length;
  console.log("cartCount", cartCount);
}

let isCartClicked = false;
const cartClick = () => {
  isCartClicked = !isCartClicked;

  console.log("cart Click", cart);
  const cartShow = document.querySelector(".cart-aside");
  if (isCartClicked == true) {
    cartShow.classList.remove("d-none");
    cartShow.classList.add("d-block");
  } else {
    cartShow.classList.remove("d-block");
    cartShow.classList.add("d-none");
  }
};
{
  /* <div class="product-card">
              <div class="product-image-container">
                <img
                  src="./assets/images/products/shoes1.png"
                  alt="shoes 1"
                  width="100%"
                  class="shoes-red"
                />
              </div>

              <div class="product-captions">
                <h5 class="product-title">Nike Sport Shoes</h5>
                <p class="product-details">Mens Gts 97 NSW Other Sports</p>
              </div>

              <div class="price-section">
                <span class="price">$534</span>
                <button class="buy-button pointer">
                  <i class="fa-solid fa-cart-shopping"></i>Buy Now
                </button>
              </div>
            </div> */
}
