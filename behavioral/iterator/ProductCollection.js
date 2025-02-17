const ProductIterator = require('./ProductIterator');

class ProductCollection {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getIterator() {
        return new ProductIterator(this.products);
    }
}

module.exports = ProductCollection;

