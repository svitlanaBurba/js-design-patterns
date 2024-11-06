const Product = require('./Product');

class Shoe extends Product {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    clone(){
        const clone = super.clone();
        clone.size = this.size;

        return clone;
    }
}

module.exports = Shoe;