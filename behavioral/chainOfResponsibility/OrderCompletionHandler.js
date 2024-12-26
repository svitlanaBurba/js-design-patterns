const Handler = require('./Handler');

class OrderCompletionHandler extends Handler {
    handle(request) {
        console.log('Order completed successfully.');
        return true;
    }
}

module.exports = OrderCompletionHandler;

