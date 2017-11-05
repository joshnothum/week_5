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

router.post('/', function (req, res) {
    console.log(req.body);
    var rentToAdd = new Rent(req.body);
    
    rentToAdd.save(function (err, data) {
        if (err) {
            console.log('Oh, No!:', err);
            res.sentStatus(501);
        } else {
            res.send(200);

        }//end of if/else
    });//end of rentToAdd

});//end of router.post


router.delete('/:id', function (req, res) {
    console.log(req.params);
    var rentId = req.params.id;

    Rent.findByIdAndRemove({"_id": rentId}, function (err, data) {

        if (err) {
            console.log('Oh, No! We got issues in the delete route:', err);
            res.sentStatus(501);
        } else {
            res.send(200);

        }//end of if/else
    });//end of findByIdAndRemove

});//end of router.delete
module.exports = router;

Game.findByIdAndRemove({ "_id": gameId }, function (err, data) {
    if (err) {
        console.log(err);
        res.sendStatus(502);
    } else {
        res.sendStatus(200);
    }
}); // END DELETE Route