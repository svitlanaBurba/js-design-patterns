class EventManager {
    constructor() {
        this.listeners = {};
    }

    subscribe(eventType, listener) {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
        console.log(`${listener.name} subscribed to ${eventType}`);
    }

    unsubscribe(eventType, listener) {
        if (!this.listeners[eventType]) return;

        this.listeners[eventType] = this.listeners[eventType].filter(l => l !== listener);
        console.log(`${listener.name} unsubscribed from ${eventType}`);
    }

    notify(eventType, data) {
        if (!this.listeners[eventType]) return;

        console.log(`Notifying subscribers about ${eventType}`);
        this.listeners[eventType].forEach(listener => listener.update(data));
    }
}

module.exports = EventManager;

