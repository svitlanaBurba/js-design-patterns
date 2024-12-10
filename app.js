// CREATIONAL PATTERNS

// Builder
// const HouseDirector = require('./creational/builder/HouseDirector');

// const director = new HouseDirector();

// const luxuryVilla = director.buildLuxuryVilla();
// const simpleCottage = director.buildSimpleCottage();

// luxuryVilla.showDetails();
// simpleCottage.showDetails();


// Singleton
// const Cart = require('./creational/singleton/Cart')

// const cart1 = new Cart();
// cart1.addItem({ id: 1, name: 'T-shirt', price: 20, quantity: 2 });

// const cart2 = new Cart();
// cart2.addItem({ id: 2, name: 'Jeans', price: 50, quantity: 1 });

// // Since cart1 and cart2 are the same instance, they share the same items
// console.log(cart1.getItems()); // [{ id: 1, name: 'T-shirt', price: 20, quantity: 2 }, { id: 2, name: 'Jeans', price: 50, quantity: 1 }]
// console.log(cart1 === cart2);


// // PROTOTYPE
// const Product = require ('./creational/prototype/Product')
// const Shoe = require('./creational/prototype/Shoe');
// const Shirt = require ('./creational/prototype/Shirt')

// // Create base prototypes
// const baseShoe = new Shoe("Sneakers", 100, 36);
// const baseShirt = new Shirt("T-Shirt", 10, "White");

// // Register prototypes in the Product registry
// Product.addPrototype("shoe", baseShoe);
// Product.addPrototype("shirt", baseShirt);

// // Clone a shoe/shirt product from the registry
// const clonedShoe = Product.getPrototype("shoe");
// clonedShoe.size = 42;
// const clonedShirt = Product.getPrototype("shirt");
// clonedShirt.color = "Black";

// console.log(clonedShoe); // Shoe { name: 'Sneakers', price: 100, size: 42 }
// console.log(clonedShirt); // Shirt { name: 'T-Shirt', price: 10, color: 'Black' }


// // FACTORY
// const CreditCardProcessorFactory = require('./creational/factory/CreditCardProcessorFactory');
// const PayPalProcessorFactory = require('./creational/factory/PayPalProcessorFactory');

// function processOrder(factory, amount) {
//     console.log(factory.makePayment(amount));
// }

// console.log("Processing order with credit card.");
// processOrder(new CreditCardProcessorFactory(), 100);

// console.log("Processing order with PayPal.");
// processOrder(new PayPalProcessorFactory(), 200);


// ABSTRACT FACTORY
// const CreditCardFactory = require('./creational/abstract_factory/CreditCardFactory');
// const PayPalFactory = require('./creational/abstract_factory/PayPalFactory');

// function processOrder(factory, amount) {
//     const processor = factory.createPaymentProcessor();
//     const logger = factory.createTransactionLogger();

//     console.log(processor.process(amount));
//     console.log(logger.logTransaction(`Payment of $${amount} completed.`));
// }

// console.log("Processing order with Credit Card.");
// processOrder(new CreditCardFactory(), 100);

// console.log("Processing order with PayPal.");
// processOrder(new PayPalFactory(), 200);


//STRUCTURAL PATTERNS

// //ADAPTER
// const ExistingPaymentProcessor = require('./structural/adapter/ExistingPaymentProcessor');
// const NewPaymentGateway = require('./structural/adapter/NewPaymentGateway');
// const PaymentAdapter = require('./structural/adapter/PaymentAdapter');

// function processOrder(paymentProcessor, amount, currency) {
//     paymentProcessor.processPayment(amount, currency);
// }

// // Using the existing payment processor
// const oldProcessor = new ExistingPaymentProcessor();
// processOrder(oldProcessor, 100, 'USD'); //Processing payment of 100 USD via the existing processor.

// // Using the new payment gateway via the adapter
// const newGateway = new NewPaymentGateway();
// const adapter = new PaymentAdapter(newGateway);
// processOrder(adapter, 200, 'EUR'); //Processing payment of 200 EUR via the new payment gateway.

// //BRIDGE
// const WebPayment = require('./structural/bridge/abstraction/WebPayment');
// const MobilePayment = require('./structural/bridge/abstraction/MobilePayment');
// const PayPal = require('./structural/bridge/implementation/PayPal');
// const Stripe = require('./structural/bridge/implementation/Stripe');

// // Example 1: Web Payment with PayPal
// const paypal = new PayPal();
// const webPaymentWithPayPal = new WebPayment(paypal);
// console.log(webPaymentWithPayPal.process(150)); //WebPayment: Initiating payment on Web platform... \n PayPal: Processing payment of $150.

// // Example 2: Mobile Payment with Stripe
// const stripe = new Stripe();
// const mobilePaymentWithStripe = new MobilePayment(stripe);
// console.log(mobilePaymentWithStripe.process(300)); // MobilePayment: Initiating payment on Mobile platform... \n Stripe: Processing payment of $300.


// // PROXY
// const ProxyProductService = require('./structural/proxy/RealProductService');

// (async () => {
//   const productService = new ProxyProductService();

//   // First call - cache miss, fetches from database
//   const product1 = await productService.getProduct(1);
//   console.log('Product 1:', product1);

//   // Second call - cache hit, returns cached product
//   const product1Again = await productService.getProduct(1);
//   console.log('Product 1 again:', product1Again);

//   // Fetch another product - cache miss
//   const product2 = await productService.getProduct(2);
//   console.log('Product 2:', product2);
// })();


// // DECORATOR
// const BaseProduct = require('./structural/decorator/BaseProduct');
// const SeasonalDiscountDecorator = require('./structural/decorator/decorators/SeasonalDiscountDecorator');
// const LoyaltyDiscountDecorator = require('./structural/decorator/decorators/LoyaltyDiscountDecorator');
// const ExpressShippingDecorator = require('./structural/decorator/decorators/ExpressShippingDecorator');

// // Create a base product
// let product = new BaseProduct(100, 'Bag');

// // Apply a 20% seasonal discount
// product = new SeasonalDiscountDecorator(product, 20);

// // Apply a loyalty discount of $10
// product = new LoyaltyDiscountDecorator(product, 10);

// // Apply an express shipping fee of $15
// product = new ExpressShippingDecorator(product, 15);

// // Display final price and description
// console.log('Final Price:', product.getPrice()); //85
// console.log('Product Description:', product.getDescription()); //Bag (Seasonal Discount Applied: 20%) (Loyalty Discount Applied: $10) (Express Shipping Fee: $15)


// COMPOSITE
const Product = require('./structural/composite/Product');
const Box = require('./structural/composite/Box');

// Create individual products
const bag = new Product('Bag', 200);
const shoes = new Product('Shoes', 150);
const wallet = new Product('Wallet', 50);

// Create a box to hold multiple products
const smallBox = new Box('Small Box');
smallBox.add(bag);
smallBox.add(wallet);

// Create another box that contains a mix of products and smaller boxes
const bigBox = new Box('Big Box');
bigBox.add(shoes);
bigBox.add(smallBox);

// Display the total price of the big box
console.log('Contents of Big Box:', bigBox.getContents()); //Contents of Big Box: [ 'Shoes', 'Small Box' ]
console.log('Total Price of Big Box:', bigBox.getPrice()); //Total Price of Big Box: 400







