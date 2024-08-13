const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({

  user: {
    type: String,
    ref: 'User',
    require: true,
  },
  asset: {
    type: String,
    required: true,
  },
  entry: {
    type: Number,
    required: true,
  },
  exit: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pnl: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  }
});

module.exports = mongoose.model('Trade', TradeSchema);
