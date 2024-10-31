const House = require('./House');

class Cottage extends House {
    constructor() {
        super();
        this.hasAttic = false;
        this.hasGardenShed = false;
    }

    showDetails() {
        super.showDetails();
        console.log(`Attic: ${this.hasAttic}, Garden Shed: ${this.hasGardenShed}`);
    }
}

module.exports = Cottage;
