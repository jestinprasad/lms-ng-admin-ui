'use strict';

const express = require('express');
const router = express.Router();

// Import Routes
const loginRouter = require('./login');
const registerationRouter =  require('./register');

router.use('/login', loginRouter);
router.use('/signup', registerationRouter);



module.exports = router;