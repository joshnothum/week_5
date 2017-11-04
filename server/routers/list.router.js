var express = require('express');
var list = express.Router();
// Make sure to Google mongoose when looking for resources
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new Schema({ cost: Number, sqft: Number, city: String });
// Mongoose gives us an object that has properties we
// can use to talk to the database.
var Listing = mongoose.model('Listing', ListSchema, 'listings');

list.get('/', function (req, res) {
    Listing.find({}, function (err, foundList) {
        if (err) {
            console.log('Oh, No!:', err);
            res.sentStatus(501);
        } else {
            console.log(foundList);
            res.send(foundList);

        }//end of if/else
    });//end of Listing.find

});//end of router.get

module.exports = list;