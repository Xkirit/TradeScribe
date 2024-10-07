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

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ msg: 'Please provide all fields' });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: 'User registered' });
  } catch (err) {
    console.error('Error in registration:', err.message);  // Log detailed error
    res.status(500).json({ error: 'Server error' });
  }
});


// @route    POST /api/auth/login
// @desc     Login user and return JWT token
// @access   Public
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    

    // Check if the user exists
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'No user found with this username' });
    }
    console.log('Stored password:', user.password);
    console.log('Received password:', password);

    // try {
    //   const salt = await bcrypt.genSalt(10);
    //   const hashedPassword = await bcrypt.hash(password, salt);
    //   const isMatch = await bcrypt.compare(password, hashedPassword);
    //   console.log(isMatch, hashedPassword, password, user.password) // Compare passwords
      
      
      
    //   // Continue if passwords match (e.g., generate JWT, send success response, etc.)
      
    // } catch (err) {
    //   console.error('Error in password comparison:', err);
    //   return res.status(500).json({ msg: 'Server error' });
    // }

    // Create JWT token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

    // Set token as a cookie
    res.cookie('token', token, { httpOnly: true });

    res.json({ token });
  } catch (err) {
    console.error('Error in login:', err.message);  // Log detailed error
    res.status(500).json({ error: 'Server error' });
  }
});

 
  


module.exports = router;
