'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
	id : { type: String, required: true},
	name : { type: String, required: true},
	author : { type: String, required: true},
	quantity: {type: String, required: true}
});

 const Book = mongoose.model('Book', bookSchema);
 module.exports = Book;

//module.exports(mongoose.model('User', userSchema));