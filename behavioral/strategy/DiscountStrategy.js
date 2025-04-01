// The abstract strategy interface that declares the discount calculation method.
class DiscountStrategy {
    calculateDiscount(total) {
        throw new Error('calculateDiscount() must be implemented.');
    }
}

module.exports = DiscountStrategy;

