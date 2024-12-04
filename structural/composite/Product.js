const Component = require('./Component');

class Product extends Component {
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getName() {
    return this.name;
  }
}

module.exports = Product;



