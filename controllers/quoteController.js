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

exports.findQuote = (req, res) => {
  Quote.findById(req.params.quoteId, (err, quote) => {
    if (err) res.send(err);
    res.json(quote);
  });
}

exports.updateQuote = (req, res) => {
  Quote.findOneAndUpdate(
    {_id: req.params.quoteId},
    req.body,
    {new: true},
    (err, quote) => {
      if (err) return res.status(400).send(err);
      res.json(quote);
    }
  );
};