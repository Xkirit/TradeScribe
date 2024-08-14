const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
const authRoutes = require('./routes/auth');
const tradeRoutes = require('./routes/trades');
const passport = require('passport');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://xkirit.github.io',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://xkirit.github.io');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Routes
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api/trades', tradeRoutes); // Trade routes

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
