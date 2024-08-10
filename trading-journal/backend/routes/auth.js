const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @route    POST /api/auth/register
// @desc     Register user
// @access   Public
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: 'User registered' });
  } catch (err) {
    console.error(err.message);  // Log error details
    res.status(500).json({ error: 'Server error' });
  }
});

// @route    POST /api/auth/login
// @desc     Login user and return JWT token
// @access   Public
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found'); // Debugging statement
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch) {
      console.log('Password does not match'); // Debugging statement
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    else{
      console.log('Password Match:', isMatch);
    }

    // Return JWT token
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET, // Ensure this is set
      { expiresIn: '5d' },
      (err, token) => {
        if (err) {
          console.error('Error signing token:', err); // Debugging statement
          throw err;
        }
        res.json({ token });
      }
    );
  } catch (err) {
    console.error('Server error:', err); // Debugging statement
    res.status(500).send('Server Error');
  }
});

module.exports = router;
