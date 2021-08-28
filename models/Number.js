const mongoose = require('mongoose');

const numberSchema = new mongoose.Schema({
  phone: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  active: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Number', numberSchema);