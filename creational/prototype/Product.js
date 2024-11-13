class Product {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }

    clone() {
        return new this.constructor(this.name, this.price);
    }

    static registry = {};

    static addPrototype (key, prototype) {
        Product.registry[key] = prototype;
    }

    static getPrototype (key) {
        const prototype = Product.registry[key];

        return prototype ? prototype.clone() : null;
    }
}

module.exports = Product;
