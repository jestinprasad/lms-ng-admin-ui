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
require('./routes')(app);
app.listen(port, () => { console.log(`Server started at port ${port}`) });
