// import files and packages up here
const express = require('express')
const morgan = require('morgan')
const topSpotsData = require('../server/data.json');


// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'))

app.get('/data', function(req,res, next){
    
    res.json(topSpotsData);

    next();
});


app.get('/', function(req, res){

    res.status(200).send('hello');

    next();

});

app.get('*', function(req, res){

    res.end('Not Found');

})

// finally export the express application
module.exports = app;
