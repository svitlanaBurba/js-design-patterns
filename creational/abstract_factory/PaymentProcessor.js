class PaymentProcessor {
    process(amount) {
        throw new Error("Method 'process(amount)' must be implemented.");
    }
}

module.exports = PaymentProcessor;