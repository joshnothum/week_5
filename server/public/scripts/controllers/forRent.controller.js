myApp.controller('RentController', function ($http) {
    console.log('RentController created.');

    var rc = this;

    rc.refreshRentals = function () {

        $http.get('/rent').then(function (success) {
            console.log(success);

        }).catch(function (error) {
            console.log(error);

        });
    };//end of refreshRentals

});