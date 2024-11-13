const PaymentProcessor = require('./PaymentProcessor');

class CreditCardPaymentProcessor extends PaymentProcessor {
    process(amount) {
        return `Processing $${amount} payment with Credit Card.`;
    }
}

module.exports = CreditCardPaymentProcessor;
