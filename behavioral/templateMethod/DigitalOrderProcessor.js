const OrderProcessor = require('./OrderProcessor');

class DigitalOrderProcessor extends OrderProcessor {
    processPayment() {
        console.log('Processing PayPal payment for digital order...');
    }

    packItems() {
        console.log('No packing needed for digital products.');
    }

    shipOrder() {
        console.log('Sending download link to customer.');
    }

    // Optional override
    sendConfirmation() {
        console.log('Sending confirmation email with download instructions.');
    }
}

module.exports = DigitalOrderProcessor;

