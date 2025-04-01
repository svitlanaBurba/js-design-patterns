const OrderState = require('./OrderState');
const ShippedState = require('./ShippedState');
const CancelledState = require('./CancelledState');

class ProcessingState extends OrderState {
    processOrder() {
        console.log("Order is already processing.");
    }

    shipOrder() {
        console.log("Order has been shipped.");
        this.order.setState(new ShippedState(this.order));
    }

    deliverOrder() {
        console.log("Order cannot be delivered directly. It needs to be shipped first.");
    }

    cancelOrder() {
        console.log("Order is cancelled during processing.");
        this.order.setState(new CancelledState(this.order));
    }
}

module.exports = ProcessingState;

