// CREATIONAL PATTERNS

//Builder
const HouseDirector = require('./creational/builder/HouseDirector');

const director = new HouseDirector();

const luxuryVilla = director.buildLuxuryVilla();
const simpleCottage = director.buildSimpleCottage();

luxuryVilla.showDetails();
simpleCottage.showDetails();
