const TransactionLogger = require('./TransactionLogger');

class PayPalTransactionLogger extends TransactionLogger {
    logTransaction(transactionDetails) {
        return `Logging transaction in PayPal system: ${transactionDetails}`;
    }
}

module.exports = PayPalTransactionLogger;
