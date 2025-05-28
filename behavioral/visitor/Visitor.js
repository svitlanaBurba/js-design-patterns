class Visitor {
    visitPhysicalProduct(product) {
        throw new Error('visitPhysicalProduct() must be implemented');
    }

    visitDigitalProduct(product) {
        throw new Error('visitDigitalProduct() must be implemented');
    }
}

module.exports = Visitor;

