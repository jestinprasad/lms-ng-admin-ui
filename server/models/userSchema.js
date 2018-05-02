'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	userId : String,
	userName : String,
	userEmail : String,
	userPhone : String
});

 const User = mongoose.model('User', userSchema);
 module.exports = User;

//module.exports(mongoose.model('User', userSchema));