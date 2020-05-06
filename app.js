var express = require('express');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

var app = express();
app.use(logger('dev'));

// app.use(bodyParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', indexRouter);

mongoose.connect(`mongodb+srv://akshajb:${process.env.ATLAS_KEY}@node-blog-test-29cgk.gcp.mongodb.net/blogsite?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = app;
