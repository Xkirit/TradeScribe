const express = require('express');
const router = express.Router();
const Trade = require('../models/Trade');
const auth = require('../middleware/Authh');

// @route    POST /api/trades
// @desc     Add a trade
// @access   Private
router.post('/', auth, async (req, res) => {
  const { asset, entry, exit, quantity, pnl, date, notes } = req.body;

  try {
    const newTrade = new Trade({
      asset,
      entry,
      exit,
      quantity,
      pnl,
      date,
      notes,
      user: req.user.id // Associate trade with user
    });

    const trade = await newTrade.save();
    res.json(trade);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET /api/trades
// @desc     Get all trades for the authenticated user
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user.id }).sort({ date: -1 });
    res.json(trades);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const trade = await Trade.findById(req.params.id);
    if (!trade) {
      return res.status(404).json({ msg: 'Trade not found' });
    }

    // Check if the trade belongs to the authenticated user
    if (trade.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Trade.deleteOne({ _id: req.params.id }); // Use deleteOne instead of remove
    res.json({ msg: 'Trade removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
