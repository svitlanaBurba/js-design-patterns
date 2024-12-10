const ProductDecorator = require('./ProductDecorator');

class SeasonalDiscountDecorator extends ProductDecorator {
  constructor(product, discountPercentage) {
    super(product);
    this.discountPercentage = discountPercentage;
  }

  getPrice() {
    const originalPrice = super.getPrice();
    return originalPrice - (originalPrice * this.discountPercentage) / 100;
  }

  getDescription() {
    return `${super.getDescription()} (Seasonal Discount Applied: ${this.discountPercentage}%)`;
  }
}

module.exports = SeasonalDiscountDecorator;



