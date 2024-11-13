const PaymentProcessor = require('./PaymentProcessor.js');

class CreditCardPayment extends PaymentProcessor {
    processPayment(amount) {
        return `Processing credit card payment of $${amount}.`;
    }
}

module.exports = CreditCardPayment;
