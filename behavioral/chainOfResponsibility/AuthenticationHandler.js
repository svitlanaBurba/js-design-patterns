const Handler = require('./Handler');

class AuthenticationHandler extends Handler {
    handle(request) {
        if (!request.isAuthenticated) {
            console.log('Authentication failed.');
            return false;
        }
        console.log('Authentication successful.');
        return super.handle(request);
    }
}

module.exports = AuthenticationHandler;



