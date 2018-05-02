
'use strict';

const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const pino = require('pino')();
const { PasswordServ, TokenServ } = require('../../lib');


router.route('/')


    /**
     * Login
     * 
     */

    .post(async (req, res, next) => {
        const { email, password } = req.body;
        const query = {
            email,
            role: 'admin'
        };

        try {
            const user = await User.findOne(query).exec();
            if (!user) {
                const error = new Error('User Not Found');
                error.status = 401;
                return next(error);
            }

            const isPasswordMatched = PasswordServ.match(password, user.password);

            if (!isPasswordMatched) {
                const error = new Error('Incorrect Password');
                error.status = 401;
                return next(error);
            }

            const token = await TokenServ.generate({
                id: user._id,
                email: user.email,
                phone: user.phone
            });

            res.json({ token });

        } catch (error) {
            pino.error(error);
        }
    })



module.exports = router;