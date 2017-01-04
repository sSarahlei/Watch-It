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
myAppAdmin.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'תפריט';
});

myAppAdmin.controller('companyCtrl',function ($scope) {
    $scope.message = 'חברה';

        if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.open("GET","http://localhost:3000/getCompanies", true);
        console.log(xmlhttp);
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                var arr=xmlhttp.responseText.split('\n');
                $scope.companyList=arr;
            }
            xmlhttp.send();
    }
});
myAppAdmin.controller('ordersController', function($scope) {
    $scope.message = 'הזמנה';
});
myAppAdmin.controller('rightsController', function($scope) {
    $scope.message = 'הרשאות';
});
myAppAdmin.controller('watchController', function($scope) {
    $scope.message = 'שעונים';
});

myAppAdmin.controller('messageController', function($scope) {
    $scope.message = 'הודעות';
});
