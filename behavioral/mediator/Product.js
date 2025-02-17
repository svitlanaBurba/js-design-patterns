const Component = require("./Component");

class Product extends Component {
    constructor(name, price) {
        super("Product");
        this.name = name;
        this.price = price;
    }

    addToCart() {
        console.log(`Adding ${this.name} to cart.`);
        this.notifyMediator("addToCart", { name: this.name, price: this.price });
    }
}

module.exports = Product;

