const Product = require('./Product');

class Shirt extends Product {
    constructor(name, price, color) {
        super(name, price);
        this.color = color;
    }

    clone() {
        const clone = super.clone();
        clone.color = this.color;

        return clone;
    }
}

module.exports = Shirt;
