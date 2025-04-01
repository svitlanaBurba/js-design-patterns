class OrderState {
    constructor(order) {
        this.order = order;
    }

    processOrder() {
        throw new Error('processOrder() method must be implemented.');
    }

    shipOrder() {
        throw new Error('shipOrder() method must be implemented.');
    }

    deliverOrder() {
        throw new Error('deliverOrder() method must be implemented.');
    }

    cancelOrder() {
        throw new Error('cancelOrder() method must be implemented.');
    }
}

module.exports = OrderState;



