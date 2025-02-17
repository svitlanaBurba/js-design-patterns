class Customer {
    constructor(name) {
        this.name = name;
    }

    update(product) {
        console.log(`${this.name} received notification: New product available - ${product}`);
    }
}

module.exports = Customer;
