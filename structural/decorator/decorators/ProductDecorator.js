const Product = require('../Product');

class ProductDecorator extends Product {
  constructor(product) {
    super();
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice();
  }

  getDescription() {
    return this.product.getDescription();
  }
}

module.exports = ProductDecorator;



