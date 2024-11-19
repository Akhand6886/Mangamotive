const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  episodeNumber: Number,
  title: String,
  airDate: Date,
  synopsis: String,
  reviewContent: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Episode', episodeSchema);