var express = require('express');
var router = express.Router();
// Make sure to Google mongoose when looking for resources
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentSchema = new Schema({rent: Number, sqft: Number, city: String});
// Mongoose gives us an object that has properties we
// can use to talk to the database.
var Rent = mongoose.model('Rent', RentSchema, 'rentals');

router.get('/', function (req, res) {
    Rent.find({}, function (err, foundRent) {
        if(err){
            console.log('Oh, No!:',err);
            res.sentStatus(501);
        }else{
            console.log(foundRent);
            res.send(foundRent);
            
        }//end of if/else
    });//end of Rent.find
    
});//end of router.get

module.exports = router;