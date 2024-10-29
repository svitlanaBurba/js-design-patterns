// CREATIONAL PATTERNS

//Builder
const VillaBuilder = require('./creational/builder/builders/VillaBuilder');
const CottageBuilder = require('./creational/builder/builders/CottageBuilder');
const HouseDirector = require('./creational/builder/HouseDirector');

const villaBuilder = new VillaBuilder();
const cottageBuilder = new CottageBuilder();
const director = new HouseDirector();

const luxuryVilla = director.buildLuxuryVilla(villaBuilder);
const simpleCottage = director.buildSimpleCottage(cottageBuilder);

luxuryVilla.showDetails();
simpleCottage.showDetails();