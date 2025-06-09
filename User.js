const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin', 'scorekeeper'], required: true },
  email: { type: String }
});

module.exports = mongoose.model('User', userSchema);
