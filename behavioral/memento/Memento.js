class Memento {
    constructor(state) {
        this.state = state;  // Stores the snapshot state
        this.date = new Date().toISOString();  // Metadata
    }

    getState() {
        return this.state;
    }

    getDate() {
        return this.date;
    }
}

module.exports = Memento;

