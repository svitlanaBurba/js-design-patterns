const House = require('./House');

class Villa extends House {
    constructor() {
      super();
      this.hasTerrace = false;
      this.hasGym = false;
      this.hasPool = false;
    }
  
    showDetails() {
      super.showDetails();
      console.log(`Terrace: ${this.hasTerrace}, Gym: ${this.hasGym}, Pool: ${this.hasPool}`);
    }
  }
  
  module.exports = Villa;
