class HouseBuilder {
    constructor()
    {
      if (this.constructor.name === 'HouseBuilder')
        throw new Error('HouseBuilder should not be instantiated directly!');
    }

    setRooms(quantity) {
        throw new Error('Method not implemented');
    }
    setFloors(quantity) {
        throw new Error('Method not implemented');
    }
    setGarden(hasGarden) {
        throw new Error('Method not implemented');
    }
    setGarage(hasGarage) {
        throw new Error('Method not implemented');
    }

    build() {
         throw new Error('Method not implemented');
        }
  }

module.exports = HouseBuilder;
