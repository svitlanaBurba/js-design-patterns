const Villa = require('./../houses/Villa')
const HouseBuilder = require('./HouseBuilder');

class VillaBuilder extends HouseBuilder {
    constructor() {
      super();
      this.villa = new Villa();
    }
  
    setRooms(quantity) { 
        this.villa.rooms = quantity; 
        return this;
    }
    setFloors(quantity) { 
        this.villa.floors = quantity; 
        return this; 
    }
    setGarden(hasGarden) { 
        this.villa.hasGarden = hasGarden; 
        return this; 
    }
    setGarage(hasGarage) { 
        this.villa.hasGarage = hasGarage; 
        return this; 
    }
    setTerrace(hasTerrace) { 
        this.villa.hasTerrace = hasTerrace; 
        return this; 
    }
    setGym(hasGym) { 
        this.villa.hasGym = hasGym; 
        return this; 
    }
    setPool(hasPool) { 
        this.villa.hasPool = hasPool; 
        return this; 
    }
  
    build() { 
        return this.villa; 
    }
  }

  module.exports = VillaBuilder;
