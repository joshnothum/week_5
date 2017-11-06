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

    PropertyService.deleteItAll(property, rentId);

        rc.refreshRentals();
    };//end of rc.addRentals()

    sc.editRentals = function (listId, updateRental) {
        PropertyService.editItAll(property, listId, updateRental);
        sc.refreshRentals();
    };

});