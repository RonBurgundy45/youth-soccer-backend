const express = require('express');
const router = express.Router();

// Example route for /api/leagues
router.get('/', (req, res) => {
  res.json({ message: 'List of leagues' });
});

module.exports = router;
