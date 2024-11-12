const PaymentProcessorFactory = require('./PaymentProcessorFactory.js');
const CreditCardPayment = require('./CreditCardPayment.js');

class CreditCardProcessorFactory extends PaymentProcessorFactory {
    createPaymentProcessor() {
        return new CreditCardPayment();
    }
}

module.exports = CreditCardProcessorFactory;