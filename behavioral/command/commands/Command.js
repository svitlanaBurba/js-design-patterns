class Command {
    execute() {
        throw new Error('Command: execute method must be implemented.');
    }
}

module.exports = Command;

