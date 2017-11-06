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

// Eventually, the mongoose code should be in a module

var mongoose = require('mongoose');
// gamestop is the name of our database
// 27017 is the default mongo port number
var databaseUrl = '';

if (process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    databaseUrl = process.env.MONGODB_URI;
} else {
    // use the local database server
    databaseUrl = 'mongodb://localhost:27017/realestate';
}

mongoose.connect(databaseUrl, {
    useMongoClient: true
});

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed');
});
mongoose.connect(databaseUrl);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('We are rocking out on port: ', port);
});