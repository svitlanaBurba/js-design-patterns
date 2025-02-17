class Mediator {
    constructor() {
        this.components = [];
    }

    register(component) {
        this.components.push(component);
        component.setMediator(this);
    }

    notify(sender, event, data) {
        if (event === "addToCart") {
            console.log(`${sender.name} added a product to the cart.`);
            this.components.forEach(component => {
                if (component !== sender && typeof component.updateCart === "function") {
                    component.updateCart(data);
                }
            });
        } else if (event === "checkout") {
            console.log("Checkout initiated.");
            this.components.forEach(component => {
                if (component !== sender && typeof component.processCheckout === "function") {
                    component.processCheckout();
                }
            });
        }
    }
}

module.exports = Mediator;



