class Button {
    constructor(command) {
        this.command = command;
    }

    click() {
        this.command.execute();
    }
}

module.exports = Button;

