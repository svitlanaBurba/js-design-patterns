const Handler = require('./Handler');

class StockCheckHandler extends Handler {
    handle(request) {
        if (!request.items.every(item => item.inStock)) {
            console.log('Stock check failed. Some items are out of stock.');
            return false;
        }
        console.log('Stock check successful.');
        return super.handle(request);
    }
}

module.exports = StockCheckHandler;

