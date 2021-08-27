const mongoose = require('mongoose');
require('../models/Quote');
const Quote = mongoose.model('Quote');

exports.listAllQuotes = (req, res) => {
  Quote.find((err, quotes) => {
    if (err) res.send(err);
    console.log(quotes);
    res.json(quotes);
  });
}