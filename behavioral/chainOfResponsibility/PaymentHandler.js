const Handler = require('./Handler');

class PaymentHandler extends Handler {
    handle(request) {
        if (!request.isPaymentSuccessful) {
            console.log('Payment failed.');
            return false;
        }
        console.log('Payment successful.');
        return super.handle(request);
    }
}

module.exports = PaymentHandler;

