'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
	bookId : String,
	bookName : String,
	bookAuthor : String,
	bookQuantity : String
});

 const Book = mongoose.model('Book', bookSchema);
 module.exports = Book;

//module.exports(mongoose.model('User', userSchema));