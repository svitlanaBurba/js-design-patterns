const Product = require('./Product');

class DigitalProduct extends Product {
    accept(visitor) {
        visitor.visitDigitalProduct(this);
    }
}

module.exports = DigitalProduct;

