class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    accept(visitor) {
        throw new Error('accept() must be implemented');
    }
}

module.exports = Product;



