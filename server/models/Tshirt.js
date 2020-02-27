const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const TshirtSchema  = new mongoose.Schema({

    title: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    size: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    colour: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    tshirt: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    }

  }, SchemeConfig);

  module.exports.Tshirt = mongoose.model('Tshirt', TshirtSchema);