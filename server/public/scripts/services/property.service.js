myApp.service('PropertyService', function ($http) {
    var self = this;
    console.log('Property Service is probably working');

    self.allRentals = {};
    self.allListings = {};
    

    self.refreshItAll =  function (property) {
        if(property === 'rent'){

        $http.get('/rent').then(function (success) {
            self.allRentals.data = success.data;

        }).catch(function (error) {
            console.log(error);

        });
    }else{
    
        $http.get('/list').then(function (success) {
           
            self.allListings.data = success.data;
        }).catch(function (error) {
            console.log('error:', error);
            

        });
    }//end of refreshRentals

};

    self.addItAll = function (property, addProperty) {
        if(property === 'rent'){

            $http.post('/rent', addProperty).then(function (response) {
                

        }).catch(function (error) {
        console.log('error response:', error);

        });
        }else{
                $http.post('/list', addProperty).then(function (response) {
                    

                }).catch(function (error) {
                    console.log('addListing:', error);

                });
            }//end of addListing
        };


        self.deleteItAll = function (property, propId) {
            if(property === 'rent'){
                $http.delete('/rent/' + propId).then(function (response) {
                    

                }).catch(function (error) {
                    console.log('deleteRentals error:', error);

                });
            }else{

            $http.delete('/list/' + propId).then(function (response) {
                

            }).catch(function (error) {
                console.log('deleteListings error:', error);

            });
        }
        };

        self.editItAll = function (property, propId, updateProp) {
            if (property === 'rent') {
                $http.put('/rent/' + propId, updateProp).then(function (response) {
                    

                }).catch(function (error) {
                    console.log('updateRentals error:', error);

                });
            } else {

                $http.put('/list/' + propId, updateProp).then(function (response) {
                    console.log('updateListings reponse:', response);

                }).catch(function (error) {
                    console.log('updateListings error:', error);

                });
            }
        };



    });