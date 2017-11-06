myApp.controller('RentController', function ($http, PropertyService) {
    console.log('RentController created.');

    var rc = this;
    rc.newRental = {};
    rc.allRentals = PropertyService.allRentals;
    property = 'rent';
    
    rc.refreshRentals = function () {

        PropertyService.refreshItAll(property);
        $('input').val('');
    };//end of refreshRentals

    rc.addRental = function (addRental) {
        PropertyService.addItAll(property, addRental);
        rc.refreshRentals();
    };//end of rc.addRentals()

    rc.deleteRentals = function (rentId) {
        console.log(rentId);
        swal({
            title: "Are you sure?",
            text: "Once deleted, this listing is gone FOREVER!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    PropertyService.deleteItAll(property, rentId);

                    rc.refreshRentals();
                    swal("That's All Folks!", {
                        icon: "success",

                    });
                } else {
                    swal("That's probably a good decision!");
                }
            });
    };//end of rc.deleteRentals()

    rc.editRentals = function (rentId) {
        swal({
            title: "Edit property",
            html:
                '<input class="rentInput" type="text" name="cityRent" id="cityRent" placeholder="City" ng-model="rc.newRental.city">'+
                '<input class="rentInput" type="number" name="rent" id="rent" placeholder="Rent" ng-model="rc.newRental.rent">'+
                '<input class="rentInput" type="number" name="sqftRent" id="sqftRent" placeholder="Square Footage" ng-model="rc.newRental.sqft">',
            button: true,
            dangerMode:true,
        })
        .then((willEdit)=> {
            if(willEdit) {
            PropertyService.editItAll(property, rentId, rc.newRental);
            rc.refreshRentals();
        swal("Okie Doke!", {
            icon: "success",
        });
    } else {
        swal("maybe later");
        }
    });
};
});