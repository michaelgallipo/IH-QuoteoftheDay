const mongoose = require('mongoose');
require('../models/Quote');
const Quote = mongoose.model('Quote');

exports.listAllQuotes = (req, res) => {
  Quote.find((err, quotes) => {
    if (err) res.send(err);
    res.json(quotes);
  });
}

exports.createQuote = (req, res) => {
  const quote = new Quote(req.body);
  console.log(quote);
  quote.save()
  .then(() => { res.send('Quote Successfully Saved!'); })
  .catch((err) => {
    console.log(err);
    res.status(400).send('Sorry! Something went wrong.');
    });
}