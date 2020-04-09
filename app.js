require('dotenv').config()
const express =require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');




const app = express();

//css
app.use('/assets', express.static('assets'))

//Passport config
require('./config/passport')(passport);


//MongoDB
//const index = require('./routes/index')
//app.use(index)

//img
app.use( express.static( "public" ) );

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// middleware section
app.use(express.urlencoded( {extended: false} ))

//Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true, 
  }));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());


//Connect flash
app.use(flash());


//Global Vars
app.use((req,res,next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});


//Routes

app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.use('/index',require('./routes/index'));




const PORT = process.env.PORT || 3030;

app.listen(PORT,console.log(`Server started on port ${PORT}`));