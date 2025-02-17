const Component = require("./Component");

class Cart extends Component {
    constructor() {
        super("Cart");
        this.items = [];
    }

    updateCart(product) {
        this.items.push(product);
        console.log("Cart updated:", this.items);
    }

    processCheckout() {
        if (this.items.length === 0) {
            console.log("Cart is empty. Cannot checkout.");
        } else {
            console.log("Processing checkout for items:", this.items);
        }
    }
}

module.exports = Cart;


