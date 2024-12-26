class PaymentGateway {
    processPayment(amount) {
        console.log(`Processing payment of $${amount}`);
        return true;
    }
}

module.exports = PaymentGateway;

