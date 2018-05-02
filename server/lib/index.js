const TokenServ = require('./token');
const PasswordServ = require('./password');
const errorHandlingMiddleware = require('./error-handling-middleware');


module.exports = {
	TokenServ,
	PasswordServ,
	errorHandlingMiddleware
};