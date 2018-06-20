// Quote.js
// quotes from https://quotecatalog.com
var mongoose = require('mongoose');
var QuoteSchema = new mongoose.Schema({
  quote: String,
  communicator: String,
  source: String
});
mongoose.model('Quote', QuoteSchema);

module.exports = mongoose.model('Quote');