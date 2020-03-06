const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Size   = require('../models/Size').Size;

/**
 * Functionality for this route:
 *  C   POST    /Sizes/        Create a new Size
 *  R   GET     /Sizes         Gets an array of all Sizes
 *  R   GET     /Sizes/:id     Get a single Size, by ID
 *  U   PUT     /Sizes/:id     Update a single Size, by id
 *  D   DELETE  /Sizes/:id     Delete a single Size, by ID
 */

// GET an array of all Sizes
router.get('/', (req, res) => {
    return mongoose
      .model('Size')
      .find({})
      .then (sizes => res.json(sizes))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single size by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Size')
    .findOne({_id: req.params.id})
    .then (size => res.json(size))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new size
router.post('/', (req, res) => {
  return new Size({
    measurement  : req.body.measurement,
        size     : req.body.size,
        chest     : req.body.chest,
        back    : req.body.back,
  })
  .save()
  .then (size => Size.populate(size, {path: '_id'}))
  .then (size => res.json(size))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a topic with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Size
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a size
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Size
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        measurement  : req.body.measurement,
        size     : req.body.size,
        chest     : req.body.chest,
        back    : req.body.back,
      }},
      {new: true}
    )
    .then (size => Size.populate(size, {path: '_id'}))
    .then (size => res.json(size))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;