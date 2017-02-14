// create the module and name it myAppServer
var myAppAdmin = angular.module('myAppAdmin', ['ngRoute']);

// configure our routes
myAppAdmin.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'menu.html',
            controller  : 'mainController'

        })

        // route for the company page
        .when('/company', {
            templateUrl : 'company.html',
            controller  : 'companyCtrl'
        })
        // route for the orders page
        .when('/orders', {
            templateUrl : 'orders.html',
            controller  : 'ordersController'
        })
        .when('/uploadImage', {
            templateUrl : 'uploadImage.html',
            controller  : 'uploadCtrl'
        })
        // route for the watch page
        .when('/watch', {
            templateUrl : 'watch.html',
            controller  : 'watchController'

        })
        .otherwise({
        templateUrl : 'menu.html',
            controller  : 'mainController'

    });



});









