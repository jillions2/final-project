let mongoose = require('mongoose');

// Article Schema
let articleSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },

  body:{
    type: String,
    required: true
  }
});

const Article = module.exports = mongoose.model('Article', articleSchema);
module.exports = Article;