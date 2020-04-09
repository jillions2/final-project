const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');







//welcome Page
router.get('/',(req,res) => res.render('welcome'));
//Dashboard
router.get('/dashboard',ensureAuthenticated ,(req,res) =>
 res.render('dashboard',{
     name: req.user.name ,
     email:req.user.email ,

 }));

 


 // Bring in Articles Models
const Article = require('../models/article');



//Add Route
router.get('/add', ensureAuthenticated,function(req,res){
  res.render('addBooking');
});

  //req.checkBody('author','Auth
//Add Sumit Post Route
const { check, validationResult } = require('express-validator');

router.post('/add',
  [
    check('title', 'l is not valid').isEmpty(),
    check('body', ' field is required').not().isEmpty(),
    
  ], 
  function(req, res, next) {

  // Check Errors
  const errors = validationResult(req);
  if (errors) {
    console.log(errors);
    res.render('addBooking', { errors: errors.array() });
  }
  else {
    console.log('No Errors');
    res.render('/add', { message: 'Successful' });
  }
});
 
  /*router.post('/add', (req,res,next) => {
     
  
    res.redirect('/users/listBooking');
  });*/




// MongoDB Atlas connection setting
const mongoose = require('mongoose')
const connStr = process.env.DATABASE_URL
                      .replace('<password>',process.env.DATABASE_PWD)
                      .replace('<database>',process.env.DATABASE_NAME)
                      

mongoose.connect(connStr, { useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false,
                            useCreateIndex: true })
const db = mongoose.connection
db.on('error', () => console.log('Database connection error'))
db.once('open', () => console.log('Database connected'))


module.exports = router;