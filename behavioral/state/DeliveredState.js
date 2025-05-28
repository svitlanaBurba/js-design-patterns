const OrderState = require('./OrderState');

class DeliveredState extends OrderState {
    processOrder() {
        console.log("Order is delivered. No further processing allowed.");
    }

    shipOrder() {
        console.log("Order is delivered. Cannot ship again.");
    }

    deliverOrder() {
        console.log("Order is already delivered.");
    }

    cancelOrder() {
        console.log("Order cannot be cancelled after delivery.");
    }
}

module.exports = DeliveredState;

