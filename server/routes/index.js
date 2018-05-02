'use strict';
// Import Routers..

const authRouter = require('./auth');
const booksRouter = require('./books');
const usersRouter = require('./users');

// Import Middleware Functions..

const {
    errorHandlingMiddleware: errorHandler
} = require('../lib');


module.exports = function (app) {
    app.use('/api/auth', authRouter);
    app.use('/api/books', booksRouter);
    app.use('/api/users', usersRouter);
    
    app.use(errorHandler);

};