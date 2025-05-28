const Product = require('./Product');

class PhysicalProduct extends Product {
    accept(visitor) {
        visitor.visitPhysicalProduct(this);
    }
}

module.exports = PhysicalProduct;



