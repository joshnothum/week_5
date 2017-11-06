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
        PropertyService.addItAll(property, addListing);
        sc.refreshListings();
    };//end of addListing

    sc.deleteListings = function (listId) {
        console.log(listId);

      PropertyService.deleteItAll(property, listId);
      sc.refreshListings();
    };//end of rc.addRentals()

    sc.editListings = function (listId) {
        PropertyService.editItAll(property, listId);
        sc.refreshListings();
    };
}); 