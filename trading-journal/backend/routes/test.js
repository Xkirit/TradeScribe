const bcrypt = require('bcryptjs');

// Password to hash
const password = 'hi';

// Hash the password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Compare password
const comparePassword = async (enteredPassword, storedHash) => {
  return await bcrypt.compare(enteredPassword, storedHash);
};

// Example usage
(async () => {
  try {
    const hashedPassword = await hashPassword(password);
    console.log('Hashed Password:', hashedPassword);

    // Store this hashedPassword in your database and use it for comparison
    const isMatch = await comparePassword('hi', hashedPassword);
    console.log('Password Match:', isMatch); // Should be true

    // Compare with a different password
    const isMatchFalse = await comparePassword('wrongPassword', hashedPassword);
    console.log('Password Match with wrong password:', isMatchFalse); // Should be false
  } catch (err) {
    console.error('Error:', err);
  }
})();
