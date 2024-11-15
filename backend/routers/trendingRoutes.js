const express = require('express');
const router = express.Router();
const Trending = require('../models/Trending'); // Import Mongoose model

// Route to get all trending items
router.get('/trending', async (req, res) => {
    try {
        const trendingItems = await Trending.find({});
        res.json(trendingItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
