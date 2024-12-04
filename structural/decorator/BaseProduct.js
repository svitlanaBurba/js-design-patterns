const Product = require('./Product');

class BaseProduct extends Product {
  constructor(price, description) {
    super();
    this.price = price;
    this.description = description;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.description;
  }
}

module.exports = BaseProduct;



