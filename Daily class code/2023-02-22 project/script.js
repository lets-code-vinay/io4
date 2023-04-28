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

const [, , thirdProductContainer] = document.querySelectorAll(
  ".products-container"
);

data.map((shoesDetails, index) => {
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
  cart.push(data[index]);

  const cartCount = document.querySelector(".cart-count");
  cartCount.innerText = cart.length;
}

let isCartClicked = false;
const cartClick = () => {
  isCartClicked = !isCartClicked;

  const cartShow = document.querySelector(".cart-page");

  // if (isCartClicked == true) {
  //   cartShow.classList.remove("d-none");
  //   cartShow.classList.add("d-block");
  // } else {
  //   cartShow.classList.remove("d-block");
  //   cartShow.classList.add("d-none");
  // }

  if (isCartClicked) {
    cartShow.classList.remove("d-none");
    cartShow.classList.add("d-block");
    handleCartShow(cart);
  } else {
    cartShow.classList.remove("d-block");
    cartShow.classList.add("d-none");
  }
};

//--- add to cart page

const handleCartShow = (cart) => {
  const cartPage = document.querySelector(".cart-list-data");

  console.log("cart--->", cart);
  console.log("cartCount", cart?.length);

  let subTotalOfProd = 0;

  cart.map((cartData, index) => {
    subTotalOfProd = Number(subTotalOfProd) + Number(cartData?.price);

    const cartProduct = document.querySelector("div");
    cartProduct.classList.add("cart-product");
    cartProduct.classList.remove("nav-left");

    cartProduct.innerHTML = `
            <div class="cart-product-image">
              <img
                src=${cartData.image}
                alt=${cartData.alt}
              />
            </div>
            <div class="cart-product-details">
              <div class="cart-product-title">
                ${cartData.title}
              </div>
                <p class="cart-product-description">
                ${cartData.description}  
                </p>
            </div>
            <div class="cart-product-price">${cartData.price}</div>
            <div class="cart-product-quantity">
              <input class='quantity' type="number" value="1" min="1" onchange=handleQuantity(index) />
            </div>
            <div class="cart-product-removal">
              <button class="cart-remove-product">Remove</button>
            </div>
        <div class="cart-product-line-price">${cartData.price}</div>
    `;

    cartPage.append(cartProduct);
  });

  /**
   * @description Handling total of cart
   */
  const subTotal = document.querySelector(".cart-totals-value");
  const gstPrice = document.querySelector("#cart-tax");
  const grandTotalId = document.querySelector("#cart-total");

  const gst = (subTotalOfProd * 18) / 100;
  const total = subTotalOfProd + gst + 50;

  subTotal.innerText = subTotalOfProd;
  gstPrice.innerText = gst;
  grandTotalId.innerText = total;

  const handleQuantity = (index) => {
    console.log("----index", index);
  };
};

{
  /* <div class="cart-product">
<div class="cart-product-image">
  <img
    src="https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png"
  />
</div>
<div class="cart-product-details">
  <div class="cart-product-title">
    Nutro™ Adult Lamb and Rice Dog Food
  </div>
  <p class="cart-product-description">
    Who doesn't like lamb and rice? We've all hit the halal cart at
    3am while
  </p>
</div>
<div class="cart-product-price">45.99</div>
<div class="cart-product-quantity">
  <input type="number" value="1" min="1" />
</div>
<div class="cart-product-removal">
  <button class="cart-remove-product">Remove</button>
</div>
<div class="cart-product-line-price">45.99</div>
</div> */
}
