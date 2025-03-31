const EventManager = require('./EventManager');

class Store {
    constructor(name) {
        this.name = name;
        this.events = new EventManager();
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`New product added: ${product}`);
        this.events.notify("newProduct", product);
    }
}

module.exports = Store;

