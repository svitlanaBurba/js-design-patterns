class Stripe {
    processPayment(amount) {
        return `Stripe: Processing payment of $${amount}.`;
    }
}

module.exports = Stripe;

