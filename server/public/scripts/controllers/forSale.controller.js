myApp.controller('SaleController', function ($http, PropertyService) {
    console.log('SaleController created.');

    var sc = this;
    sc.newListing = {};
    sc.allListings = PropertyService.allListings;
    property = false;
    
    sc.refreshListings = function () {

        PropertyService.refreshItAll();
        $('input').val('');
    };//end of refreshLisitings

    sc.addListing = function (addListing) {
      
        PropertyService.addItAll(property, addListing);
        sc.refreshListings();
    };//end of addListing

    sc.deleteListings = function (listId) {
        
        swal({
            title: "Are you sure?",
            text: "Once deleted, this listing is gone FOREVER!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(function(willDelete) {
                if (willDelete) {
                    PropertyService.deleteItAll(property, listId);
                    sc.refreshListings();
                    swal("That's All Folks!");
                } else {
                    swal("That's probably a good decision!");
                }
            });
    };//end of sc.deleteListings()

    sc.editListings = function (listId) {
        PropertyService.editItAll(property, listId);
        sc.refreshListings();
    };

    sc.refreshListings();
}); 