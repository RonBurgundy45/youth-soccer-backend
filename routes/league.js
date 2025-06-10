const express = require('express');
const router = express.Router();
const League = require('../models/League'); // Adjust the path if your model is elsewhere

// GET all leagues
router.get('/', async (req, res) => {
  try {
    const leagues = await League.find();
    res.json(leagues);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST new league
router.post('/', async (req, res) => {
  try {
    const { name, country, ageGroup } = req.body;

    // Create new League document
    const newLeague = new League({ name, country, ageGroup });
    const savedLeague = await newLeague.save();

    res.status(201).json(savedLeague); // Send back the saved league
  } catch (err) {
    res.status(500).json({ error: 'Failed to create league' });
  }
});

module.exports = router;
