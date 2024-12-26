const Iterator = require('./Iterator');

class ProductIterator extends Iterator {
    constructor(products) {
        super();
        this.products = products;
        this.position = 0;
    }

    hasNext() {
        return this.position < this.products.length;
    }

    next() {
        if (!this.hasNext()) {
            throw new Error('No more elements');
        }
        return this.products[this.position++];
    }
}

module.exports = ProductIterator;

