class PayPal {
    processPayment(amount) {
        return `PayPal: Processing payment of $${amount}.`;
    }
}

module.exports = PayPal;

