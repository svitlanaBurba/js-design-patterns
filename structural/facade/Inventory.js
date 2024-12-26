class Inventory {
    checkStock(productId) {
        console.log(`Checking stock for product: ${productId}`);
        return true;
    }

    reserveProduct(productId) {
        console.log(`Reserving product: ${productId}`);
    }
}

module.exports = Inventory;

