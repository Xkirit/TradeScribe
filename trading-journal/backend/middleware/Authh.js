const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  console.log('Authorization Header:', req.header('Authorization'));
  console.log('Extracted Token:', token);
  console.log('JWT Secret:', process.env.JWT_SECRET);

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Invalid token:', err.message);  // Debugging output
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = auth;
