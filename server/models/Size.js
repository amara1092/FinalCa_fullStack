const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const SizeSchema  = new mongoose.Schema({

   measurement: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    size: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    chest: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    back: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    }

  }, SchemeConfig);

  module.exports.Size = mongoose.model('Size', SizeSchema);