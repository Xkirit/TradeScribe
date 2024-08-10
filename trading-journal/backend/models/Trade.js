const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
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
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Trade', TradeSchema);
