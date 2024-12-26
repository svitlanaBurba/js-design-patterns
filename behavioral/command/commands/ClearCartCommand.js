const Command = require('./Command');

class ClearCartCommand extends Command {
    constructor(cart) {
        super();
        this.cart = cart;
    }

    execute() {
        this.cart.clear();
    }
}

module.exports = ClearCartCommand;

