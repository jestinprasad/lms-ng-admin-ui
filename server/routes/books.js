
'use strict';

const express = require('express');
const router = express.Router();
const Book = require('../models/bookSchema')

router.route('/')

.post((req, res, next) => {
    const book = new Book(req.body);
    book.save((err , bookData) => {
        if(err){
            return next(error);
        }
        res.json(bookData);
    })
})

.get((req, res, next) => {
    Book.find(function (err, bookData) {
      if (err){
           return next(err);
        }
      res.json(bookData);
    });
  });
/* To get data with seperate routes with id */
  router.route('/:id')

  .get(function(req, res, next) {
      const id = req.params.id;
    Book.findById(id, (err, bookData) => {
        if (err){
            return next(err);
         }
      res.json(bookData);
    });
  })

  .put(function(req, res, next) {
      const id = req.params.id;
    Book.findByIdAndUpdate(id, req.body, function (err, bookData) {
        if (err){
            return next(err);
         }
      res.json(bookData);
      console.log(bookData);
    });
  })
 

  .delete((req, res, next) => {
    const id = req.params.id;
    if (!id) {
        const error = new Error('ID should Not Be Empty');
        return next(error);
    }

    Book.findByIdAndRemove(id)
        .then(data => res.json(data))
        .catch(next);
})


module.exports = router;