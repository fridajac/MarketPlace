import { fetchProducts } from "./fetchProducts.js";
import { addNewProductToCart } from "./Cart.js";
const select = document.getElementById("product-types-selected");
select.addEventListener("click", searchByProductType, false);

displayAllProducts(fetchProducts());

function displayAllProducts(products) {
  products.forEach((element) => {
    displayProduct(element);
  });
}

function displayProduct(product) {
  const productLink = document.createElement("a");
  productLink.setAttribute("href", "../html/single-product-page.html");
  const productDiv = document.createElement("div");
  productDiv.classList.add("pro");
  productLink.appendChild(productDiv);

  const img = document.createElement("img");
  img.classList.add("product-photo");
  img.alt = "item";
  img.src = "../img/t-shirt.jpeg";
  productDiv.appendChild(img);

  const divDes = document.createElement("div");
  productDiv.classList.add("des");
  const name = document.createElement("h2");
  const type = document.createElement("h2");
  const price = document.createElement("h2");
  const status = document.createElement("h2");
  name.innerHTML = product.name;
  type.innerHTML = product.type;
  price.innerHTML = "$" + product.price;
  status.innerHTML = product.status;
  divDes.appendChild(name);
  divDes.appendChild(type);
  divDes.appendChild(price);
  divDes.appendChild(status);
  productDiv.appendChild(divDes);

  const cartLink = document.createElement("a");
  cartLink.addEventListener("click", addNewProductToCart, false);
  const cartImg = document.createElement("img");
  cartImg.classList.add("cart");
  cartImg.src = "../img/shopping-cart.png";
  cartLink.appendChild(cartImg);
  divDes.appendChild(cartLink);
  document.getElementById("pro-container").appendChild(productLink);
}

function searchByProductType(e) {
  var text = select.options[select.selectedIndex].text;
}
