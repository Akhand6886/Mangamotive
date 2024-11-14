const express = require('express');
const Todo = require('../models/ToDo');

const router = express.Router();

// Create a To-Do
router.post('/', async (req, res) => {
  const { title } = req.body;
  try {
    const newTodo = await Todo.create({ title });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create To-Do' });
  }
});

// Get all To-Dos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch To-Dos' });
  }
});

// Update a To-Do
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update To-Do' });
  }
});

// Delete a To-Do
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'To-Do deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete To-Do' });
  }
});

module.exports = router;
