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
            console.log('Oh, No! List get has this error:', err);
            res.sentStatus(501);
        } else {
            console.log(foundList);
            res.send(foundList);

        }//end of if/else
    });//end of Listing.find

});//end of router.get



list.post('/', function (req, res) {
    console.log(req.body);
    var listToAdd = new Listing(req.body);

    listToAdd.save(function (err, data) {
        if (err) {
            console.log('Oh, No! List post has this error:', err);
            res.sentStatus(501);
        } else {
            res.send(200);

        }//end of if/else
    });//end of rentToAdd

});//end of router.post


list.delete('/:id', function (req, res) {
    console.log(req.params);
    var listId = req.params.id;

    Listing.findByIdAndRemove({ "_id": listId }, function (err, data) {

        if (err) {
            console.log('Oh, No! We got issues in the list delete route:', err);
            res.sentStatus(501);
        } else {
            res.send(200);

        }//end of if/else
    });//end of findByIdAndRemove

});//end of router.delete
module.exports = list;