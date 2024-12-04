const Component = require('./Component');

class Box extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    this.children = this.children.filter(child => child !== component);
  }

  getPrice() {
    return this.children.reduce((total, child) => total + child.getPrice(), 0);
  }

  getName() {
    return this.name;
  }

  getContents() {
    return this.children.map(child => child.getName());
  }
}

module.exports = Box;

