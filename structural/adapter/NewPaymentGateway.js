class NewPaymentGateway {
    makePayment(paymentDetails) {
        console.log(`Processing payment of ${paymentDetails.total} ${paymentDetails.currencyCode} via the new payment gateway.`);
    }
}

module.exports = NewPaymentGateway;