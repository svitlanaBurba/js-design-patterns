const PaymentFactory = require('./PaymentFactory');
const CreditCardPaymentProcessor = require('./CreditCardPaymentProcessor');
const CreditCardTransactionLogger = require('./CreditCardTransactionLogger');

class CreditCardFactory extends PaymentFactory {
    createPaymentProcessor() {
        return new CreditCardPaymentProcessor();
    }

    createTransactionLogger() {
        return new CreditCardTransactionLogger();
    }
}

module.exports = CreditCardFactory;