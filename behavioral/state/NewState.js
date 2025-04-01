const OrderState = require('./OrderState');
const ProcessingState = require('./ProcessingState');
const CancelledState = require('./CancelledState');

class NewState extends OrderState {
    processOrder() {
        console.log("Order is now processing.");
        this.order.setState(new ProcessingState(this.order));
    }

    shipOrder() {
        console.log("Cannot ship the order. It is still new.");
    }

    deliverOrder() {
        console.log("Cannot deliver the order. It is still new.");
    }

    cancelOrder() {
        console.log("Order is cancelled.");
        this.order.setState(new CancelledState(this.order));
    }
}

module.exports = NewState;

