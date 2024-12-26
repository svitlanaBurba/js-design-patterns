const Inventory = require('./Inventory');
const PaymentGateway = require('./PaymentGateway');
const ShippingService = require('./ShippingService');

class OrderFacade {
    constructor() {
        this.inventory = new Inventory();
        this.paymentGateway = new PaymentGateway();
        this.shippingService = new ShippingService();
    }

    placeOrder(productId, amount, address) {
        console.log('Starting order process...');

        // Check stock
        if (!this.inventory.checkStock(productId)) {
            console.log('Product is out of stock.');
            return false;
        }

        // Reserve product
        this.inventory.reserveProduct(productId);

        // Process payment
        if (!this.paymentGateway.processPayment(amount)) {
            console.log('Payment failed.');
            return false;
        }

        // Ship product
        this.shippingService.shipProduct(productId, address);

        console.log('Order placed successfully!');
        return true;
    }
}

module.exports = OrderFacade;



