'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/userSchema.js');
const Book = require('./models/bookSchema.js');
const port = 3232;

mongoose.connect('mongodb://localhost/lms')
.then(() => console.log('Connected Successfully'))
.catch(error => console.log('DB failed to connect'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post('/users',(req,res,next) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if(err){
            return next(error);
        }
        res.json(userData);
    })
});

app.get('/users', (req, res, next) => {
    User.find(function (err, userData) {
      if (err){
           return next(err);
        }
      res.json(userData);
    });
  });

  app.get('/users/:id', function(req, res, next) {
    const id = req.params.id;
  User.findById(id, (err, userData) => {
      if (err){
          return next(err);
       }
    res.json(userData);
  });
});

  app.put('/users/:id', function(req, res, next) {
    const _id = req.params.id;
    console.log(req.body)
  User.findOneAndUpdate({_id}, req.body, { new: true }, function (err, userData) {
      if (err){
          return next(err);
       }
    res.json(userData);
    //console.log(userData);
  });
});

 app.delete('/users/:id', (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        const error = new Error('ID should Not Be Empty');
        return next(error);
    }

    User.findByIdAndRemove(id)
        .then(data => {
        res.json(data);
    })
        .catch(next);
})


app.post('/books',(req,res,next) => {
    const book = new Book(req.body);
    book.save((err,bookData) => {
        if(err){
            return next(error);
        }
        res.json(bookData);
    })
});

app.get('/books', (req, res, next) => {
    Book.find(function (err, bookData) {
      if (err){
           return next(err);
        }
      res.json(bookData);
    });
  });

  app.get('/books/:id', function(req, res, next) {
      const id = req.params.id;
    Book.findById(id, (err, bookData) => {
        if (err){
            return next(err);
         }
      res.json(bookData);
    });
  });

  app.put('/books/:id', function(req, res, next) {
      const id = req.params.id;
    Book.findByIdAndUpdate(id, req.body, function (err, bookData) {
        if (err){
            return next(err);
         }
      res.json(bookData);
      console.log(bookData);
    });
  });
 

  app.delete('/books/:id', (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        const error = new Error('ID should Not Be Empty');
        return next(error);
    }

    Book.findByIdAndRemove(id)
        .then(data => res.json(data))
        .catch(next);
})

app.listen(port, () => { console.log(`Server started at port ${port}`) });
