class Product {
    constructor(sku, price, stock, flyweight) {
        this.sku = sku;
        this.price = price;
        this.stock = stock;
        this.flyweight = flyweight;
    }

    display() {
        this.flyweight.displayProduct({
            sku: this.sku,
            price: this.price,
            stock: this.stock,
        });
    }
}

module.exports = Product;

