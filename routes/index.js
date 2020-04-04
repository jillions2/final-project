const express = require('express');
const router = express.Router();

router.get('/',(req,res) => res.render('home'));

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