const PaymentProcessor = require('./PaymentProcessor.js');

class PayPalPayment extends PaymentProcessor {
    processPayment(amount) {
        return `Processing PayPal payment of $${amount}.`;
    }
}

module.exports = PayPalPayment;