const Memento = require("./Memento");

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`Added ${item} to the cart.`);
    }

    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
        console.log(`Removed ${item} from the cart.`);
    }

    showCart() {
        console.log("Current cart items:", this.items);
    }

    save() {
        return new Memento([...this.items]); // Save a snapshot of the cart state
    }

    restore(memento) {
        this.items = [...memento.getState()]; // Restore the saved state
        console.log(`Cart restored to:`, this.items);
    }
}

module.exports = Cart;

