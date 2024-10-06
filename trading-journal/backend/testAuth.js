// testAuth.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Ensure this loads your .env file
const mongoose = require('mongoose');
const User = require('./models/User'); // Update the path if needed

async function testLogin(username, password) {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // ('MongoDB connected');

    // Find the user
    const user = await User.findOne({ username });
    if (!user) {
      // ('No record existed');
      return;
    }else{
      await bcrypt.compare(password, user.password, (err, response)=>{
        if(err){
        // ('invalid password');
      }// ('Signed in');
      // (user.password);
      })};
    // Compare passwords
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   // ('Password is incorrect');
    //   // (user.password);
    //   return;
    // }

    // If password matches, generate JWT token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

    // ('Login successful');
    // ('Generated JWT token:', token, user);
    // ('user',user.id);
    // (user);

    // Optionally, set up any additional checks or debug statements here

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
}

// Replace 'yourUsername' and 'yourPassword' with the test credentials
testLogin('bruh12', 'rotex');
