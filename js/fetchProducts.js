import { Product } from "./Product.js";

export function fetchProducts() {
  var products = [];
  var new_product1 = new Product(
    1,
    "Dress",
    23.2,
    "Blue",
    2022,
    "Good",
    "Available"
  );
  var new_product2 = new Product(
    2,
    "Cardigan",
    88.5,
    "Red",
    2021,
    "Good",
    "Available"
  );
  var new_product3 = new Product(
    3,
    "Jumper",
    11.5,
    "Green",
    2020,
    "Good",
    "Sold out"
  );
  products.push(new_product1, new_product2, new_product3);
  return products;
}
