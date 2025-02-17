const Component = require("./Component");

class Checkout extends Component {
    constructor() {
        super("Checkout");
    }

    startCheckout() {
        console.log("User clicked checkout.");
        this.notifyMediator("checkout");
    }
}

module.exports = Checkout;


