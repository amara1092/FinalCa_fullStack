const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Tshirt   = require('../models/Tshirt').Tshirt;

/**
 * Functionality for this route:
 *  C   POST    /Tshirts/        Create a new Tshirt
 *  R   GET     /Tshirts         Gets an array of all Tshirts
 *  R   GET     /Tshirts/:id     Get a single Tshirt, by ID
 *  U   PUT     /Tshirts/:id     Update a single Tshirt, by id
 *  D   DELETE  /Tshirts/:id     Delete a single Tshirt, by ID
 */

// GET an array of all Tshirts
router.get('/', (req, res) => {
    return mongoose
      .model('Tshirt')
      .find({})
      .then (tshirts => res.json(tshirts))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single tshirt by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Tshirt')
    .findOne({_id: req.params.id})
    .then (tshirt => res.json(tshirt))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new tshirt
router.post('/', (req, res) => {
  return new Tshirt({
    title     : req.body.title,
    size     : req.body.size,
    colour     : req.body.colour,
    tshirt    : req.body.tshirt,    
  })
  .save()
  .then (tshirt => Tshirt.populate(tshirt, {path: '_id'}))
  .then (tshirt => res.json(tshirt))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a topic with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Tshirt
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a tshirt
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Tshirt
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        title  : req.body.title,
        size     : req.body.size,
        colour     : req.body.colour,
        tshirt    : req.body.tshirt,
      }},
      {new: true}
    )
    .then (tshirt => Tshirt.populate(tshirt, {path: '_id'}))
    .then (tshirt => res.json(tshirt))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;