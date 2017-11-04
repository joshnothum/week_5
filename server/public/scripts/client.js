console.log('we ready');
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/rent', {
        templateUrl: 'templates/rent.html',
        controller: 'RentController as rc'
    }).when('/sale', {
        templateUrl: 'templates/sale.html',
        controller: 'SaleController as sc'
    });
});