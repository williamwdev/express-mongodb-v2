'use strict';

const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Get all subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    // console.log(subscribers)
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one subscriber
router.get('/:id', async (req, res) => {
  console.log('/:id GET', res.json(res.subscriber))
  res.json(res.subscriber)
});

// Create one subscriber
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    // creating a variable that will be assigned to a new Subscriber from our model created earlier (name, subscribedChannel, and subscribeDate)
    name: req.body.name,
    subscribedChannel: req.body.subscribedChannel
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one subscriber
router.patch('/:id', (req, res) => {});

// Delete one subscriber
router.delete('/:id', (req, res) => {});


// middleware function for getting subscriber obj by ID
async function getSubscriber(req, res, next) {
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber === null) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.subscriber = subscriber;
  next();
}

module.exports = router;
