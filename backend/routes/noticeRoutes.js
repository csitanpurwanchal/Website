const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');

// Middleware for admin authentication
const authenticateAdmin = (req, res, next) => {
  const { email, password } = req.headers;
  if (email === "admin@admin.com" && password === "admin123") {
    return next();
  }
  return res.status(403).send('Unauthorized');
};

// Get all notices
router.get('/', async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new notice
router.post('/', authenticateAdmin, async (req, res) => {
  try {
    const { content } = req.body;
    const newNotice = new Notice({ content });
    await newNotice.save();
    res.status(201).json(newNotice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a notice
router.put('/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const notice = await Notice.findById(id);
    if (!notice) {
      return res.status(404).json({ message: 'Notice not found' });
    }
    notice.content = req.body.content || notice.content;
    await notice.save();
    res.json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a notice
router.delete('/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const notice = await Notice.findById(id);
    if (!notice) {
      return res.status(404).json({ message: 'Notice not found' });
    }
    await notice.remove();
    res.json({ message: 'Notice deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
