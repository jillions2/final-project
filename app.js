require('dotenv').config()
const express =require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();


//MongoDB
const index = require('./routes/index')
app.use(index)


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//css
app.use('/assets', express.static('assets'))


// middleware section

app.use(express.urlencoded( {extended: false} ))


//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

//img
app.use( express.static( "public" ) );


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));