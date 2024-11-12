const PaymentProcessorFactory = require('./PaymentProcessorFactory.js');
const PayPalPayment = require('./PayPalPayment.js');

class PayPalProcessorFactory extends PaymentProcessorFactory {
    createPaymentProcessor() {
        return new PayPalPayment();
    }
}

module.exports = PayPalProcessorFactory;