const ExistingPaymentProcessor = require('./ExistingPaymentProcessor');
class PaymentAdapter extends ExistingPaymentProcessor {
    constructor(newPaymentGateway) {
        super();
        this.newPaymentGateway = newPaymentGateway;
    }

    processPayment(amount, currency) {
        const paymentDetails = {
            total: amount,
            currencyCode: currency,
        };
        this.newPaymentGateway.makePayment(paymentDetails);
    }
}

module.exports = PaymentAdapter;

