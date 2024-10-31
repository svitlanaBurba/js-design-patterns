const Cottage = require('./../houses/Cottage')
const HouseBuilder = require('./HouseBuilder');

class CottageBuilder extends HouseBuilder {
    constructor() {
      super();
      this.cottage = new Cottage();
    }
  
    setRooms(quantity) { 
        this.cottage.rooms = quantity; 
        return this; 
    }
    setFloors(quantity) { 
        this.cottage.floors = quantity; 
        return this; 
    }
    setGarden(hasGarden) { 
        this.cottage.hasGarden = hasGarden; 
        return this; 
    }
    setGarage(hasGarage) { 
        this.cottage.hasGarage = hasGarage; 
        return this; 
    }
    setAttic(hasAttic) { 
        this.cottage.hasAttic = hasAttic; 
        return this; 
    }
    setGardenShed(hasGardenShed) { 
        this.cottage.hasGardenShed = hasGardenShed; 
        return this; 
    }
  
    build() { 
        return this.cottage; 
    }
  }

  module.exports = CottageBuilder;
