const Command = require('./Command');

class RemoveFromCartCommand extends Command {
    constructor(cart, item) {
        super();
        this.cart = cart;
        this.item = item;
    }

    execute() {
        this.cart.removeItem(this.item);
    }
}

module.exports = RemoveFromCartCommand;

