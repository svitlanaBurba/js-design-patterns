class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler; // Allows chaining
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

module.exports = Handler;

