'use strict';

const express = require('express');
const router = express.Router();

// Get all subscribers
router.get('/', (req, res) => {
  res.send('GET Route working for /subscribers endpoint')
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
