// UserController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Quote = require('./Quote');

// ADDS A NEW QUOTE
router.post('/', function (req, res) {
  Quote.create({
      quote : req.body.quote,
      communicator : req.body.communicator,
      source : req.body.source
    },
    function (err, quote) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(201).send(quote);
    });

});

// RETURNS ALL THE QUOTES IN THE DATABASE
router.get('/', function (req, res) {

  Quote.find({}, function (err, quotes) {
    if (err) return res.status(500).send("There was a problem finding the quotes.");
    res.status(200).send(quotes);
  });

});

// GETS A SINGLE QUOTE FROM THE DATABASE
router.get('/:id', function (req, res) {

  Quote.findById(req.params.id, function (err, quote) {
    if (err) return res.status(500).send("There was a problem finding the quote.");
    if (!quote) return res.status(404).send("No quote found.");
    res.status(200).send(quote);
  });

});

// UPDATES A SINGLE QUOTE IN THE DATABASE
router.put('/:id', function (req, res) {

  Quote.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, quote) {
    if (err) return res.status(500).send("There was a problem updating the quote.");
    res.status(204).send(quote);
  });

});

module.exports = router;