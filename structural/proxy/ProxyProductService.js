const ProductService = require('./ProductService');
const RealProductService = require('./RealProductService');

class ProxyProductService extends ProductService {
  constructor() {
    super();
    this.realService = new RealProductService();
    this.cache = {};
  }

  async getProduct(productId) {
    if (this.cache[productId]) {
      console.log(`Returning cached product ${productId}.`);
      return this.cache[productId];
    } else {
      console.log(`Cache miss for product ${productId}.`);
      const product = await this.realService.getProduct(productId);
      this.cache[productId] = product;
      return product;
    }
  }
}

module.exports = ProxyProductService;

