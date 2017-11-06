var mongoose = require('mongoose');
var databaseUrl ='mongodb://localhost:27017/realestate'
// Mongo Connection //
var mongoURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if (process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    mongoURI = 'mongodb://localhost:27017/realestate';
}

mongoose.connect(databaseUrl, {
    useMongoClient: true
});

mongoose.connection.on('error', function (res,err) {
    if (err) {
        console.log("MONGO ERROR: ", err);
    }
});

mongoose.connection.on('open', function () {
    console.log("Connected to Mongo!");
});

module.exports = mongoose;