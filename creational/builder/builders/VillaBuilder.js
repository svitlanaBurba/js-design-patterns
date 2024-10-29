const House = require('../House');
const HouseBuilder = require('./HouseBuilder');

class VillaBuilder extends HouseBuilder {
    constructor() {
      super();
      this.house = new House();
    }
  
    setRooms(quantity) { 
        this.house.rooms = quantity; return this; 
    }
    setFloors(quantity) { 
        this.house.floors = quantity; return this; 
    }
    setGarden(hasGarden) { 
        this.house.hasGarden = hasGarden; return this; 
    }
    setGarage(hasGarage) { 
        this.house.hasGarage = hasGarage; return this; 
    }
    setPool(hasPool) { 
        this.house.hasPool = hasPool; return this; 
    }
  
    build() { 
        return this.house; 
    }
  }

  module.exports = VillaBuilder;