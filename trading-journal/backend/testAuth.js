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
    console.log('MongoDB connected');

    // Find the user
    const user = await User.findOne({ username });
    if (!user) {
      console.log('No record existed');
      return;
    }else{
      await bcrypt.compare(password, user.password, (err, response)=>{
        if(err){
        console.log('invalid password');
      }console.log('Signed in');
      console.log(user.password);
      })};
    // Compare passwords
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   console.log('Password is incorrect');
    //   console.log(user.password);
    //   return;
    // }

    // If password matches, generate JWT token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

    console.log('Login successful');
    console.log('Generated JWT token:', token, user);
    console.log('user',user.id);
    console.log(user);

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
