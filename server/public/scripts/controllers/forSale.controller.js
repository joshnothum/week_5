myApp.controller('SaleController', function ($http) {
    console.log('SaleController created.');

    var sc = this;
    sc.newListing = {};
    sc.allListings ={};

    sc.refreshListings = function () {

        $http.get('/list').then(function (success) {
            console.log(success);
            sc.allListings = success.data;
        }).catch(function (error) {
            console.log(error);

        });
    };//end of refreshLisitings

    sc.addListing = function (addListing) {
        console.log(addListing);
        $http.post('/list' , addListing).then(function (response) {

            sc.refreshListings();
            console.log('addListing response:', response);
            
        }).catch(function (error) {
            console.log('addListing:',error);
            
        });
    };//end of addListing

    sc.deleteListings = function (listId) {
        console.log(listId);

        $http.delete('/list/' + listId).then(function (response) {
            console.log('deleteListings reponse:', response);
            sc.refreshListings();

        }).catch(function (error) {
            console.log('deleteListings error:', error);

        });
    };//end of rc.addRentals()
}); 