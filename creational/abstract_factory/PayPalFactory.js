const PaymentFactory = require('./PaymentFactory');
const PayPalPaymentProcessor = require('./PayPalPaymentProcessor');
const PayPalTransactionLogger = require('./PayPalTransactionLogger');

class PayPalFactory extends PaymentFactory {
    createPaymentProcessor() {
        return new PayPalPaymentProcessor();
    }

    createTransactionLogger() {
        return new PayPalTransactionLogger();
    }
}

module.exports = PayPalFactory;