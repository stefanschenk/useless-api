// ContactController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Contact = require('./Contact');

// CREATES A NEW CONTACT
router.post('/', function (req, res) {
  Contact.create({
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      phone : req.body.phone,
      email : req.body.email,
      address : {
        street : req.body.address.street,
        postcode : req.body.address.postcode,
        city : req.body.address.city
      }
    },
    function (err, contact) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(201).send(contact);
    });

});

// RETURNS ALL THE CONTACT IN THE DATABASE
router.get('/', function (req, res) {

  Contact.find({}, function (err, contacts) {
    if (err) return res.status(500).send("There was a problem finding the contacts.");
    res.status(200).send(contacts);
  });

});

// RETURNS THE NUMBER OF CONTACTS IN THE DATABASE
router.get('/count', function (req, res) {

  Contact.countDocuments({}, function (err, contactsCount) {
    if (err) return res.status(500).send("There was a problem finding the contacts.");
    res.status(200).json({ count: contactsCount });
  });

});

// GETS A SINGLE CONTACT FROM THE DATABASE
router.get('/:id', function (req, res) {

  Contact.findById(req.params.id, function (err, contact) {
    if (err) return res.status(500).send("There was a problem finding the contact.");
    if (!contact) return res.status(404).send("No contact found.");
    res.status(200).send(contact);
  });

});

// DELETES A CONTACT FROM THE DATABASE
router.delete('/:id', function (req, res) {

  Contact.findByIdAndRemove(req.params.id, function (err, contact) {
    if (err) return res.status(500).send("There was a problem deleting the contact.");
    res.status(200).send("Contact "+ contact.firstName + " " + contact.lastName +" was deleted.");
  });

});

// UPDATES A SINGLE CONTACT IN THE DATABASE
router.put('/:id', function (req, res) {

  Contact.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, contact) {
    if (err) return res.status(500).send("There was a problem updating the contact.");
    res.status(204).send(contact);
  });

});

module.exports = router;