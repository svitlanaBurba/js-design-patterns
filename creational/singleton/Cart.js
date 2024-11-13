class Cart {
    constructor(){
        const instance = this.constructor.instance;

        if (instance) {
            return instance;
        }

        this.items = [];
        this.constructor.instance = this;

        return this;
    }

    addItem(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
  }

  module.exports = Cart;
  