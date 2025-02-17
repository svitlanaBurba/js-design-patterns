const Command = require('./Command');

class AddToCartCommand extends Command {
    constructor(cart, item) {
        super();
        this.cart = cart;
        this.item = item;
    }

    execute() {
        this.cart.addItem(this.item);
    }
}

module.exports = AddToCartCommand;

