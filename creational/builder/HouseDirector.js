const VillaBuilder = require('./builders/VillaBuilder');
const CottageBuilder = require('./builders/CottageBuilder');

class HouseDirector {
    buildLuxuryVilla(builder) {
        return builder.setRooms(7).setFloors(3).setGarden(true).setGarage(true).setPool(true).build();
    }

    buildSimpleCottage(builder) {
        return builder.setRooms(2).setFloors(1).setGarden(false).setGarage(true).setPool(false).build();
    }
}

module.exports = HouseDirector;