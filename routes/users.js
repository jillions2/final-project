const express = require('express');

const router = express.Router();

//login Page
router.get('/login',(req,res) => res.render('login'));

//Register Page
router.get('/register',(req,res) => res.render('register'));

//Home Page
router.get('/home',(req,res) => res.render('home'));

//Register Handle
router.post('/register',(req,res) =>{ 
    console.log(req.body)
    res.send('hello')
});

module.exports = router;
