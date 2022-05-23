import { Product } from "./Product.js";
import { Order } from "./Order.js";

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

const productsInCart = [];

//const button = document.getElementById("submit-button");

//button.addEventListener("click", submitButtomPressed, false);

export function addNewProductToCart(product) {
  if (product.status === "Available") {
    let table = document.getElementById("cart-table");
    console.log("hej" + product);
    productsInCart.push = product;
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    const tr = document.createElement("tr");
    a.appendChild(tr);
    table.appendChild(a);

    const tdName = document.createElement("td");
    const tdType = document.createElement("td");
    const tdPrice = document.createElement("td");
    const tdColor = document.createElement("td");
    const tdCondition = document.createElement("td");
    const tdYear = document.createElement("td");
    tdName.innerHTML = product.name;
    tdType.innerHTML = product.type;
    tdPrice.innerHTML = product.price;
    tdColor.innerHTML = product.color;
    tdCondition.innerHTML = product.condition;
    tdYear.innerHTML = product.yearOfMaking;
    tr.appendChild(tdName);
    tr.appendChild(tdType);
    tr.appendChild(tdPrice);
    tr.appendChild(tdColor);
    tr.appendChild(tdCondition);
    tr.appendChild(tdYear);
  }
}

const new_order = new Order(1, "frida", "tiden", 2);
addNewOrder(new_order);

function addNewOrder(order) {
  let table = document.getElementById("order-table");
  const tr = document.createElement("tr");
  table.appendChild(tr);

  const tdOrderId = document.createElement("td");
  const tdBuyer = document.createElement("td");
  const tdSubmittedAt = document.createElement("td");
  const tdProductId = document.createElement("td");

  tdOrderId.innerHTML = order.orderId;
  tdBuyer.innerHTML = order.buyer;
  tdSubmittedAt.innerHTML = order.createdAt;
  tdProductId.innerHTML = order.productId;

  tr.appendChild(tdOrderId);
  tr.appendChild(tdBuyer);
  tr.appendChild(tdSubmittedAt);
  tr.appendChild(tdProductId);
}

function submitButtomPressed(e) {
  console.log(productsInCart);
}
