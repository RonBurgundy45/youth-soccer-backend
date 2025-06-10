const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: String,
  ageGroup: String,
});

module.exports = mongoose.model('League', leagueSchema);

