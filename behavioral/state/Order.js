const NewState = require('./NewState');

class Order {
    constructor() {
        // When an order is created, it starts in the New state.
        this.state = new NewState(this);
    }

    setState(newState) {
        this.state = newState;
    }

    processOrder() {
        this.state.processOrder();
    }

    shipOrder() {
        this.state.shipOrder();
    }

    deliverOrder() {
        this.state.deliverOrder();
    }

    cancelOrder() {
        this.state.cancelOrder();
    }
}

module.exports = Order;

