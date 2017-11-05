myApp.service('PropertySerivice', function ($https) {
    var self = this;
    console.log('Property Service is probably working');

    self.allRentals = {};
    self.allListings = {};

    self.refreshItAll =  function (property) {
        if(property === 'rental'){

        $http.get('/rent').then(function (success) {
            console.log(success.data);
            self.allRentals = success.data;
            console.log(self.allRentals);

        }).catch(function (error) {
            console.log(error);

        });
    }else{
    
        } $http.get('/list').then(function (success) {
            console.log(success);
            self.allListings = success.data;
        }).catch(function (error) {
            console.log(error);

        });
    };//end of refreshRentals

});//end of Service