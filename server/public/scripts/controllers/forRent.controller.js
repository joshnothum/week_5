myApp.controller('RentController', function ($http) {
    console.log('RentController created.');

    var rc = this;
    rc.newRental = {};
    rc.allRentals = {};

    rc.refreshRentals = function () {

        $http.get('/rent').then(function (success) {
            console.log(success.data);
            rc.allRentals = success.data;
            console.log(rc.allRentals);
            
        }).catch(function (error) {
            console.log(error);

        });
    };//end of refreshRentals

    rc.addRental = function (addRental) {
        console.log(addRental);
        
        $http.post('/rent', addRental).then(function (response) {
            console.log('addRental reponse:', response);
            
            
        }).catch(function (error) {
            console.log('error response:', error);
            
        });

        rc.refreshRentals();
    };

});