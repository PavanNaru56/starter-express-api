const express = require('express');
const app = express();


const expressLayouts = require('express-ejs-layouts');
//body parser is used to get extarct the data 
const bodyParser = require('body-parser');
//checks whether mongodb running or not
const db = require('./config/mongoose');

const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src : './assets/scss',
    dest : './assets/css',
    debug : true,
    outputStyle : 'extended',
    prefix : '/css'
}));
//statics for creating the css files or javascript files
app.use(express.static('./assets'))
app.use(expressLayouts);




app.use(bodyParser.urlencoded({extended:false}));

app.set('layout extractStyles', true);
app.set('layout extractScripts',true);
//setting up the views 
app.set('view engine','ejs');
app.set('views','./views');








app.use('/',require('./routes'));

app.all('/', (req, res) => {
    console.log("Just got a request!")
//     res.send('Yo!')
 })
app.listen(process.env.PORT || 3000)