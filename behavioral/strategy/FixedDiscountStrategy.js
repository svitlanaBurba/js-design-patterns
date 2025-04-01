// A concrete strategy that applies a fixed discount amount.
const DiscountStrategy = require('./DiscountStrategy');

class FixedDiscountStrategy extends DiscountStrategy {
    constructor(discountAmount) {
        super();
        this.discountAmount = discountAmount;
    }

    calculateDiscount(total) {
        // Ensure the discount does not exceed the total
        return Math.min(total, this.discountAmount);
    }
}

module.exports = FixedDiscountStrategy;


