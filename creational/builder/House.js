class House {
    constructor(){
        this.rooms = 0;
        this.floors = 0;
        this.hasGarden = false;
        this.hasGarage = false;
        this.hasPool = false;
    }

    showDetails() {
        console.log(`House with ${this.rooms} rooms, ${this.floors} floors, garden: ${this.hasGarden}, garage: ${this.hasGarage}, pool: ${this.hasPool}`);
      }
}

module.exports = House;