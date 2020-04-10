let mongoose = require('mongoose');

// Article Schema
let articleSchema = mongoose.Schema({
  namemovie:{
    type: String,
    required: true
  },

  price:{
    type: String,
    required: true
  }
});

const Article = module.exports = mongoose.model('Article', articleSchema);
module.exports = Article;