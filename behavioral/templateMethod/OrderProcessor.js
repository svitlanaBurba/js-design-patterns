class OrderProcessor {
    // Template method
    processOrder() {
        this.validateOrder();
        this.processPayment();
        this.packItems();
        this.shipOrder();
        this.sendConfirmation();
    }

    // Common step
    validateOrder() {
        console.log('Validating order...');
    }

    // Steps to be implemented by subclasses
    processPayment() {
        throw new Error('processPayment() must be implemented');
    }

    packItems() {
        throw new Error('packItems() must be implemented');
    }

    shipOrder() {
        throw new Error('shipOrder() must be implemented');
    }

    // Hook method (optional override)
    sendConfirmation() {
        console.log('Sending confirmation email to customer.');
    }
}

module.exports = OrderProcessor;

