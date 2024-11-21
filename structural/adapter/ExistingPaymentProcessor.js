class ExistingPaymentProcessor {
    processPayment(amount, currency) {
        console.log(`Processing payment of ${amount} ${currency} via the existing processor.`);
    }
}

module.exports = ExistingPaymentProcessor;