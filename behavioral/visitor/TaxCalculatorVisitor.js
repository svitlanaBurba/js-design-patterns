const Visitor = require('./Visitor');

class TaxCalculatorVisitor extends Visitor {
    visitPhysicalProduct(product) {
        const tax = product.price * 0.2;
        console.log(`Tax for physical product "${product.name}": $${tax.toFixed(2)}`);
    }

    visitDigitalProduct(product) {
        const tax = product.price * 0.1;
        console.log(`Tax for digital product "${product.name}": $${tax.toFixed(2)}`);
    }
}

module.exports = TaxCalculatorVisitor;

