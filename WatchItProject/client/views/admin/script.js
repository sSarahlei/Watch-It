// create the module and name it myApp
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'menu.html',
            controller  : 'mainController'
        })

        // route for the company page
        .when('/company', {
            templateUrl : 'company.html',
            controller  : 'companyController'
        })
        // route for the messages page
        .when('/message', {
            templateUrl : 'message.html',
            controller  : 'messageController'
        })
        // route for the orders page
        .when('/orders', {
            templateUrl : 'orders.html',
            controller  : 'ordersController'
        })
        // route for the rights page
        .when('/rights', {
            templateUrl : 'rights.html',
            controller  : 'rightsController'
        })
        // route for the watch page
        .when('/watch', {
            templateUrl : 'watch.html',
            controller  : 'watchController'
        });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'תפריט';
});

myApp.controller('companyController', function($scope) {
    $scope.message = 'חברה';
});
myApp.controller('ordersController', function($scope) {
    $scope.message = 'הזמנה';
});
myApp.controller('rightsController', function($scope) {
    $scope.message = 'הרשאות';
});
myApp.controller('watchController', function($scope) {
    $scope.message = 'שעונים';
});

myApp.controller('messageController', function($scope) {
    $scope.message = 'הודעות';
});
