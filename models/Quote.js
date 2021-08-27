const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  Quote: {
    type: String,
    trim: true,
    required: true
  },
  Author: {
    type: String,
    trim: true,
    required: true
  },
  Source: {
    type: String,
    trim: true
  },
  Used: {
    type: Boolean,
    required: true,
  },
  Active: {
    type: Boolean
  }
});

module.exports = mongoose.model('Quote', quoteSchema);