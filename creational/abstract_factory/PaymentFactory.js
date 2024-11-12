class PaymentFactory {
    createPaymentProcessor() {
        throw new Error("Method 'createPaymentProcessor()' must be implemented.");
    }

    createTransactionLogger() {
        throw new Error("Method 'createTransactionLogger()' must be implemented.");
    }
}

module.exports = PaymentFactory;