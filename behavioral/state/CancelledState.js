const OrderState = require('./OrderState');

class CancelledState extends OrderState {
    processOrder() {
        console.log("Order is cancelled. Cannot process.");
    }

    shipOrder() {
        console.log("Order is cancelled. Cannot ship.");
    }

    deliverOrder() {
        console.log("Order is cancelled. Cannot deliver.");
    }

    cancelOrder() {
        console.log("Order is already cancelled.");
    }
}

module.exports = CancelledState;

