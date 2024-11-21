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

//BRIDGE
const WebPayment = require('./structural/bridge/abstraction/WebPayment');
const MobilePayment = require('./structural/bridge/abstraction/MobilePayment');
const PayPal = require('./structural/bridge/implementation/PayPal');
const Stripe = require('./structural/bridge/implementation/Stripe');

// Example 1: Web Payment with PayPal
const paypal = new PayPal();
const webPaymentWithPayPal = new WebPayment(paypal);
console.log(webPaymentWithPayPal.process(150)); //WebPayment: Initiating payment on Web platform... \n PayPal: Processing payment of $150.

// Example 2: Mobile Payment with Stripe
const stripe = new Stripe();
const mobilePaymentWithStripe = new MobilePayment(stripe);
console.log(mobilePaymentWithStripe.process(300)); // MobilePayment: Initiating payment on Mobile platform... \n Stripe: Processing payment of $300.






