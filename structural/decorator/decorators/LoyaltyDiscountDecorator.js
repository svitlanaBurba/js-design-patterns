const ProductDecorator = require('./ProductDecorator');

class LoyaltyDiscountDecorator extends ProductDecorator {
  constructor(product, loyaltyDiscount) {
    super(product);
    this.loyaltyDiscount = loyaltyDiscount;
  }

  getPrice() {
    const originalPrice = super.getPrice();
    return originalPrice - this.loyaltyDiscount;
  }

  getDescription() {
    return `${super.getDescription()} (Loyalty Discount Applied: $${this.loyaltyDiscount})`;
  }
}

module.exports = LoyaltyDiscountDecorator;



