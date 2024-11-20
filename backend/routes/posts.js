const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Fetch all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new post
router.post('/', async (req, res) => {
  const { title, description, category, image } = req.body;

  try {
    const newPost = new Post({ title, description, category, image });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
