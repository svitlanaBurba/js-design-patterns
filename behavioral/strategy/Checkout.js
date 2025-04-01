// The context class that uses a discount strategy to calculate the final total.
class Checkout {
    constructor(total, discountStrategy) {
        this.total = total;
        this.discountStrategy = discountStrategy;
    }

    setDiscountStrategy(discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    calculateTotal() {
        const discount = this.discountStrategy.calculateDiscount(this.total);
        return this.total - discount;
    }
}

module.exports = Checkout;

