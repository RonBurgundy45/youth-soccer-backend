const mongoose = require('mongoose');

const fixtureSchema = new mongoose.Schema({
  homeTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  awayTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  league: { type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true },
  date: { type: Date, required: true },
  score: {
    home: { type: Number, default: null },
    away: { type: Number, default: null }
  }
});

module.exports = mongoose.model('Fixture', fixtureSchema);
