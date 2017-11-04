myApp.controller('SaleController', function ($http) {
    console.log('SaleController created.');

    var sc = this;
    sc.newListing = {};

    sc.refreshListings = function () {

        $http.get('/list').then(function (success) {
            console.log(success);

        }).catch(function (error) {
            console.log(error);

        });
    };//end of refreshLisitings

    sc.addListing = function (addListing) {
        console.log(addListing);
        $http.post('/list' , addListing).then(function (response) {


            console.log('addListing response:', response);
            
        }).catch(function (error) {
            console.log('addListing:',error);
            
        });
    };//end of addListing
    sc.refreshListings();
}); 