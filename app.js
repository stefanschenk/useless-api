// app.js
var express = require('express');
var app = express();
var db = require('./db');

var ContactController = require('./contact/ContactController');
var QuoteController = require('./quote/QuoteController');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/contacts', ContactController);
app.use('/quotes', QuoteController);

module.exports = app;
