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
     password:req.user.password ,
     namemovie: req.user.namemovie

 }));
 const MovieBooking =require('../models/movieBooking');

//addBooking
router.get('/add',(req,res) => res.render('addBooking'));
router.post('/add',(req,res) =>{
  const { namemovie,price } = req.body;
  const  newMovie = new  MovieBooking({
    namemovie,
    price,
  });
  newMovie.save()
    
  console.log(newMovie)
 // res.send('hello')
  res.redirect('/users/listBooking')

} );



//router.post('/add',(req,res) => res.render('addBooking'));

const Article =require('../models/movieBooking');

/*router.post('/add',(req,res) => {
  const { title,body } = req.body;
  const  newArticle = new  Article({
    title,
    body,
  });
  //Save user
  newArticle.save();
  req.flash('success_msg','You are  in');
  res.redirect('/add');

})*/






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