const PaymentProcessor = require('./PaymentProcessor');

class PayPalPaymentProcessor extends PaymentProcessor {
    process(amount) {
        return `Processing $${amount} payment with PayPal.`;
    }
}

module.exports = PayPalPaymentProcessor;