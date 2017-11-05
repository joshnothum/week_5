myApp.controller('SaleController', function ($http, PropertyService) {
    console.log('SaleController created.');

    var sc = this;
    sc.newListing = {};
    sc.allListings = PropertyService.allListings;
    property = false;

    sc.refreshListings = function () {

        PropertyService.refreshItAll();
    };//end of refreshLisitings

    sc.addListing = function (addListing) {
        console.log(addListing);
        PropertyService.addItAll(property, addListing)
        sc.refreshListings();
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