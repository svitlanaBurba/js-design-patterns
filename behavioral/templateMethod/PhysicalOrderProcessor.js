const OrderProcessor = require('./OrderProcessor');

class PhysicalOrderProcessor extends OrderProcessor {
    processPayment() {
        console.log('Processing credit card payment for physical order...');
    }

    packItems() {
        console.log('Packing physical items...');
    }

    shipOrder() {
        console.log('Shipping physical items via courier.');
    }
}

module.exports = PhysicalOrderProcessor;

