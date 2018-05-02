
'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.route('/')

.post((req, res, next) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if(err){
            return next(error);
        }
        res.json(userData);
    })
})

.get( (req, res, next) => {
    User.find(function (err, userData) {
      if (err){
           return next(err);
        }
      res.json(userData);
    });
  });

  /* To get data with seperate routes with id */

  router.route('/:id')

  .get((req, res, next) => {
    const id = req.params.id;
  User.findById(id, (err, userData) => {
      if (err){
          return next(err);
       }
    res.json(userData);
  });
})

  .put((req, res, next) => {
    const _id = req.params.id;
    console.log(req.body)
  User.findOneAndUpdate({_id}, req.body, { new: true }, function (err, userData) {
      if (err){
          return next(err);
       }
    res.json(userData);
  });
})

 .delete((req, res, next) => {
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
});


module.exports = router;