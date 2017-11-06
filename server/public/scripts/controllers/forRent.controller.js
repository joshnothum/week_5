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
    };//end of rc.deleteRentals()

    rc.editRentals = function (rentId) {
        swal({
            title: "Edit property",
            content:{
                element:'<input class="rentInput" type="text" name="cityRent" id="cityRent" placeholder="City" ng-model="rc.newRental.city">'+
                '<input class="rentInput" type="number" name="rent" id="rent" placeholder="Rent" ng-model="rc.newRental.rent">'+
                '<input class="rentInput" type="number" name="sqftRent" id="sqftRent" placeholder="Square Footage" ng-model="rc.newRental.sqft">',
            },
            button: {
                text: "Edit!",
                closeModal: false,
            }
        // }, function () {
        // PropertyService.editItAll(property, rentId, updateRental);
        // rc.refreshRentals();
        });
    };
});