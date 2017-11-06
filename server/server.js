var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var rentals = require('./routers/rent.router.js');
var listings = require('./routers/list.router.js');
var port = process.env.PORT || 7000;
var db = require('./modules/db.config.js');
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/rent',rentals);
app.use('/list', listings );
/** ---------- MONGOOSE ------------ **/

// Eventually, the mongoose code should be in a module



/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('We are rocking out on port: ', port);
});