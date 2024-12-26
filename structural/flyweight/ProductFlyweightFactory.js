const ProductFlyweight = require('./ProductFlyweight');

class ProductFlyweightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(category, brand, description) {
        const key = `${category}_${brand}_${description}`;
        if (!this.flyweights[key]) {
            console.log(`Creating new flyweight for: ${key}`);
            this.flyweights[key] = new ProductFlyweight(category, brand, description);
        } else {
            console.log(`Reusing existing flyweight for: ${key}`);
        }
        return this.flyweights[key];
    }

    listFlyweights() {
        console.log(`Flyweights:`);
        for (const key in this.flyweights) {
            console.log(`- ${key}`);
        }
    }
}

module.exports = ProductFlyweightFactory;

