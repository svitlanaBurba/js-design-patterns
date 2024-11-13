const TransactionLogger = require('./TransactionLogger');

class CreditCardTransactionLogger extends TransactionLogger {
    logTransaction(transactionDetails) {
        return `Logging transaction in Credit Card system: ${transactionDetails}`;
    }
}

module.exports = CreditCardTransactionLogger;
