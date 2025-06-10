const express = require('express');
const router = express.Router();
const League = require('../models/League');

// GET all leagues
router.get('/', async (req, res) => {
  try {
    const leagues = await League.find();
    res.json(leagues);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST create a new league
router.post('/', async (req, res) => {
  try {
    const newLeague = new League({
      name: req.body.name,
      country: req.body.country,
    });
    const savedLeague = await newLeague.save();
    res.status(201).json(savedLeague);
  } catch (err) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

module.exports = router;
