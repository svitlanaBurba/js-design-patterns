class MobilePayment {
    constructor(implementation) {
        this.implementation = implementation;
    }

    process(amount) {
        return `MobilePayment: Initiating payment on Mobile platform...\n${this.implementation.processPayment(amount)}`;
    }
}

module.exports = MobilePayment;

