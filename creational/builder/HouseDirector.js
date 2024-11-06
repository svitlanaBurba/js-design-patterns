const VillaBuilder = require('./builders/VillaBuilder');
const CottageBuilder = require('./builders/CottageBuilder');

class HouseDirector {
    buildLuxuryVilla() {
        const builder = new VillaBuilder();

        return builder
          .setFloors(3)
          .setRooms(7)
          .setGarage(true)
          .setGarden(true)
          .setTerrace(true)
          .setGym(false)
          .setPool(true)
          .build();
      }

    buildSimpleCottage() {
        const builder = new CottageBuilder();

        return builder
          .setFloors(1)
          .setRooms(2)
          .setGarage(false)
          .setGarden(true)
          .setAttic(false)
          .setGardenShed(true)
          .build();
      }
}

module.exports = HouseDirector;
