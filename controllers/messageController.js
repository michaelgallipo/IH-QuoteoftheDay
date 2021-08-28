require('dotenv').config();
// const mongoose = require('mongoose');
// require('../models/Number');
// const Number = mongoose.model('Number');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require ('twilio')(accountSid, authToken);

exports.sendMessage = (req, res) => {
  req.body.currNumbers.forEach(num => {
    console.log(num);
    twilio.messages
      .create({
        body: req.body.message,
        from: '+16105462024',
        to: num.phone
      })
      .then(message => console.log(message.sid));
  })
  res.send('Messages Sent')
}

// const getCurrNumbers = () => {

// }

