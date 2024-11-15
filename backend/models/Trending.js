const mongoose = require('mongoose');

const trendingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    imageUrl: String,
    category: String,
    date: { type: Date, default: Date.now },
    readTime: String,
});

module.exports = mongoose.model('Trending', trendingSchema);
