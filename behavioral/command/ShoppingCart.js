class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`Item added: ${item}`);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            console.log(`Item removed: ${item}`);
        } else {
            console.log(`Item not found: ${item}`);
        }
    }

    clear() {
        this.items = [];
        console.log('Cart cleared.');
    }
}

module.exports = ShoppingCart;

