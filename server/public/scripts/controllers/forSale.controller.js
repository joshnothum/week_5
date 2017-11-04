myApp.controller('SaleController', function ($http) {
    console.log('SaleController created.');

    var sc = this;

    sc.refreshListings = function () {

        $http.get('/list').then(function (success) {
            console.log(success);

        }).catch(function (error) {
            console.log(error);

        });
    };//end of refreshLisitings

});