const mongoose = require('mongoose');
require('../models/Number');
const Number = mongoose.model('Number');

exports.listAllNumbers = (req, res) => {
  Number.find((err, numbers) => {
    if (err) res.send(err);
    res.json(numbers);
  });
}

exports.createNumber = (req, res) => {
  console.log(req.body, req.params);
  const number = new Number(req.body);
  number.save()
  .then(() => { res.send('Phone Number Successfully Saved!'); })
  .catch((err) => {
    console.log(err);
    res.status(400).send('Sorry! Something went wrong.');
    });
}

exports.updateNumber = (req, res) => {
  Number.findOneAndUpdate(
    {_id: req.params.numberId},
    req.body,
    {new: true},
    (err, number) => {
      if (err) return res.status(400).send(err);
      res.json(number);
    }
  );
}
