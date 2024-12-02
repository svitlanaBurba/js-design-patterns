class WebPayment {
    constructor(implementation) {
        this.implementation = implementation;
    }

    process(amount) {
        return `WebPayment: Initiating payment on Web platform...\n${this.implementation.processPayment(amount)}`;
    }
}

module.exports = WebPayment;

