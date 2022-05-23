export class Order {
  constructor(orderId, buyer, createdAt, productId) {
    this.orderId = orderId;
    this.buyer = buyer;
    this.createdAt = createdAt;
    this.productId = productId;
  }
}
