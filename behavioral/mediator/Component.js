class Component {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    notifyMediator(event, data) {
        if (this.mediator) {
            this.mediator.notify(this, event, data);
        }
    }
}

module.exports = Component;


