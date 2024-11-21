class PaymentAdapter {
    constructor(newPaymentGateway) {
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