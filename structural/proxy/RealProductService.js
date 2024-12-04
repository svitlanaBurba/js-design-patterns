const ProductService = require('./ProductService');

class RealProductService extends ProductService {
  constructor() {
    super();
  }

  getProduct(productId) {
    console.log(`Fetching product ${productId} from the database...`);
    // Simulate a database call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: productId,
          name: `Product ${productId}`,
          price: 100.00,
        });
      }, 2000); // 2-second delay to simulate database access
    });
  }
}

module.exports = RealProductService;

