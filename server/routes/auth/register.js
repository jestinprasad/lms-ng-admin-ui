
'use strict';

const express = require('express');
const router = express.Router();


router.route('/')


/**
 * Register New Candidate
 */ 

.post(async (req, res, next) => {
	const { body } = req;

	if (!body) {
		const error = new Error('Request Body Should Not Be Empty');
		return next(error);
	}

	// const {
		
	// } = 


	
})



module.exports = router;