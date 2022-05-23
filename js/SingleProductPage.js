import { Product } from "./Product.js";
import { addNewProductToCart } from "./Cart.js";

const button = document.getElementById("to-cart-button");
var product = new Product(
  1,
  "Dress",
  "Furniture",
  23.2,
  "Blue",
  "Available",
  "Good",
  2022
);
displayProduct(product);

button.addEventListener(
  "click",
  addNewProductToCart.bind(event, product),
  false
);

export function displayProduct(product) {
  document.getElementById("product-name").innerHTML = product.name;
  document.getElementById("price").innerHTML = "€" + product.price;
  document.getElementById("color").innerHTML = product.color;
  document.getElementById("status").innerHTML = product.status;
  document.getElementById("condition").innerHTML = product.condition;
  document.getElementById("year-of-making").innerHTML =
    "Year of making: " + product.yearOfMaking;
}
