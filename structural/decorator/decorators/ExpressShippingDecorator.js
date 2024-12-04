const ProductDecorator = require('./ProductDecorator');

class ExpressShippingDecorator extends ProductDecorator {
  constructor(product, shippingFee) {
    super(product);
    this.shippingFee = shippingFee;
  }

  getPrice() {
    return super.getPrice() + this.shippingFee;
  }

  getDescription() {
    return `${super.getDescription()} (Express Shipping Fee: $${this.shippingFee})`;
  }
}

module.exports = ExpressShippingDecorator;



