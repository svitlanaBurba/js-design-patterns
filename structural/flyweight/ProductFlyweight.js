class ProductFlyweight {
    constructor(category, brand, description) {
        this.category = category;
        this.brand = brand;
        this.description = description;
    }

    displayProduct(uniqueState) {
        console.log(`Product Details:
        Category: ${this.category}
        Brand: ${this.brand}
        Description: ${this.description}
        SKU: ${uniqueState.sku}
        Price: $${uniqueState.price}
        Stock: ${uniqueState.stock}`);
    }
}

module.exports = ProductFlyweight;

