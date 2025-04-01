// A concrete strategy that applies a percentage-based discount.
const DiscountStrategy = require('./DiscountStrategy');

class PercentageDiscountStrategy extends DiscountStrategy {
    constructor(percentage) {
        super();
        this.percentage = percentage;
    }

    calculateDiscount(total) {
        return total * (this.percentage / 100);
    }
}

module.exports = PercentageDiscountStrategy;

