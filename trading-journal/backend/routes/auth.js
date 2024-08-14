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
  User.findOne({ username: username })
    .then(User => {
      if (User) {
        bcrypt.compare(password, User.password, (err, response) => {
          if (err) {
            res.json("password is incorrect");
          }
          const payload = { user: { id: User.id } };
          const token= jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"1d"})
          res.cookie("token", token)
          console.log(token);
          console.log('user:', User);
          res.json({token});
        })
      } else {
        res.json("No record existed")
      }
    })

 
  
});

module.exports = router;
