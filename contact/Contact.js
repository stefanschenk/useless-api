// Contact.js
var mongoose = require('mongoose');
var ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  address: {
    street: String,
    postcode: String,
    city: String
  }
});
mongoose.model('Contact', ContactSchema);

module.exports = mongoose.model('Contact');