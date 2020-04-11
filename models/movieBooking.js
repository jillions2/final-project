let mongoose = require('mongoose');

// Article Schema
let movieSchema = mongoose.Schema({
  namemovie:{
    type: String,
    required: true
  },

  price:{
    type: String,
    required: true
  }
});

const MovieBooking = module.exports = mongoose.model('MovieBooking', movieSchema);
module.exports = MovieBooking;