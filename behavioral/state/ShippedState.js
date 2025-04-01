const OrderState = require('./OrderState');
const DeliveredState = require('./DeliveredState');

class ShippedState extends OrderState {
    processOrder() {
        console.log("Order is already shipped. Cannot process again.");
    }

    shipOrder() {
        console.log("Order is already shipped.");
    }

    deliverOrder() {
        console.log("Order delivered.");
        this.order.setState(new DeliveredState(this.order));
    }

    cancelOrder() {
        console.log("Order cancellation is not allowed after shipping.");
    }
}

module.exports = ShippedState;

