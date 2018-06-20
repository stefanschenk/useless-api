// app.js
var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var QuoteController = require('./quote/QuoteController');
app.use('/users', UserController);
app.use('/quotes', QuoteController);

module.exports = app;
