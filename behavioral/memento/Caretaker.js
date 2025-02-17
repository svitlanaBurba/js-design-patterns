class Caretaker {
    constructor() {
        this.history = [];
    }

    backup(cart) {
        console.log("Saving cart state...");
        this.history.push(cart.save());
    }

    undo(cart) {
        if (!this.history.length) {
            console.log("No previous states to restore.");
            return;
        }

        const memento = this.history.pop();
        console.log(`Restoring cart to:`, memento.getState());
        cart.restore(memento);
    }

    showHistory() {
        console.log("Cart history snapshots:");
        this.history.forEach((memento, index) => {
            console.log(`${index + 1}: ${memento.getDate()} -> ${memento.getState()}`);
        });
    }
}

module.exports = Caretaker;

