// A concrete strategy that applies no discount.
const DiscountStrategy = require('./DiscountStrategy');

class NoDiscountStrategy extends DiscountStrategy {
    calculateDiscount(total) {
        return 0;
    }
}

module.exports = NoDiscountStrategy;

