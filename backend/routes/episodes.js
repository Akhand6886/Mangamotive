const express = require('express');
const router = express.Router();
const Episode = require('../models/Episode');

// GET /episodes?page=1&limit=10
router.get('/episodes', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const episodes = await Episode.find()
      .sort({ episodeNumber: 1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Episode.countDocuments();

    res.json({
      episodes,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /episodes/:id
router.get('/episodes/:id', async (req, res) => {
    try {
      const episode = await Episode.findById(req.params.id);
      if (!episode) return res.status(404).json({ message: 'Episode not found' });
      res.json(episode);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;