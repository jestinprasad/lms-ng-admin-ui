'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	name : { type: String, required: true},
	email : { type: String, required: true},
	phone : { type: String, required: true},
	password: "String",
	role : { type: String, default: "user" }
});

 const User = mongoose.model('User', userSchema);
 module.exports = User;

//module.exports(mongoose.model('User', userSchema));