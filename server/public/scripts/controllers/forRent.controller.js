myApp.controller('RentController', function ($http, PropertyService) {
    console.log('RentController created.');

    var rc = this;
    rc.newRental = {};
    rc.allRentals = PropertyService.allRentals;
    property = 'rent';
    rc.refreshRentals = function () {

        PropertyService.refreshItAll(property);
    };//end of refreshRentals

    rc.addRental = function (addRental) {
        PropertyService.addItAll(property, addRental);
        rc.refreshRentals();
    };//end of rc.addRentals()

    rc.deleteRentals = function (rentId) {
        console.log(rentId);

        $http.delete('/rent/' + rentId).then(function (response) {
            console.log('deleteRental reponse:', response);
            rc.refreshRentals();

        }).catch(function (error) {
            console.log('deleteRentals error:', error);

        });

        rc.refreshRentals();
    };//end of rc.addRentals()

});