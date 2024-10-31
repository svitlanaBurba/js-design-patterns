class House {
    constructor(){
        if (this.constructor.name === 'House') {
            throw new Error('House should not be instantiated directly!');
        }

        this.rooms = 0;
        this.floors = 0;
        this.hasGarden = false;
        this.hasGarage = false;
    }

    showDetails() {
        console.log(`House type: ${this.constructor.name}`);
        console.log(`Rooms: ${this.rooms}, Floors: ${this.floors}, Garden: ${this.hasGarden}, Garage: ${this.hasGarage}`);
      }
}

module.exports = House;
