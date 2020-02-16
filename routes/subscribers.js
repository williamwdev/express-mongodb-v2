'use strict';

const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Get all subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    // console.log(subscribers)
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

// Get one subscriber
router.get('/:id', (req, res) => {});

// Create one subscriber
router.post('/', (req, res) => {});

// Update one subscriber
router.patch('/:id', (req, res) => {});

// Delete one subscriber
router.delete('/:id', (req, res) => {});

module.exports = router;
