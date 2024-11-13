class PaymentProcessorFactory {
    createPaymentProcessor() {
        throw new Error("Method 'createPaymentProcessor()' must be implemented.");
    }

    makePayment(amount) {
        const processor = this.createPaymentProcessor();

        return processor.processPayment(amount);
    }
}

module.exports = PaymentProcessorFactory;
