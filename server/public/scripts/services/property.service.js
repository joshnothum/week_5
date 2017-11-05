myApp.service('PropertyService', function ($http) {
    var self = this;
    console.log('Property Service is probably working');

    self.allRentals = {};
    self.allListings = {};
    console.log(self.allRentals);
    

    self.refreshItAll =  function (property) {
        if(property === 'rent'){

        $http.get('/rent').then(function (success) {
            console.log(success.data);
            self.allRentals.data = success.data;

        }).catch(function (error) {
            console.log(error);

        });
    }else{
    
        $http.get('/list').then(function (success) {
            console.log(success);
            self.allListings.data = success.data;
        }).catch(function (error) {
            console.log(error);

        });
    }//end of refreshRentals

};

    self.addItAll = function (property, addProperty) {
        if(property === 'rent'){

            $http.post('/rent', addProperty).then(function (response) {
                console.log('addRental reponse:', response);

        }).catch(function (error) {
        console.log('error response:', error);

        });
        }else{
                $http.post('/list', addProperty).then(function (response) {
                    console.log('addListing response:', response);

                }).catch(function (error) {
                    console.log('addListing:', error);

                });
            }//end of addListing
        };
    });