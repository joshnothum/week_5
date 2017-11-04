var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var rentals = require('./routers/rent.router.js');
var listings = require('./routers/list.router.js');
var port = process.env.PORT || 7000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/rent',rentals);
app.use('/list', listings );
/** ---------- MONGOOSE ------------ **/
var mongoose = require('mongoose');
// gamestop is the name of our database
// 27017 is the default mongo port number
var databaseUrl = 'mongodb://localhost:27017/realestate';

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!', databaseUrl);
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed', err);
});
mongoose.connect(databaseUrl);
// Eventually, the mongoose code should be in a module



/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('We are rocking out on port: ', port);
});