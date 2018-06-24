// app.js
var express = require('express');
var app = express();
var db = require('./db');
var swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');


var ContactController = require('./contact/ContactController');
var QuoteController = require('./quote/QuoteController');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use('/contacts', ContactController);
app.use('/quotes', QuoteController);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
