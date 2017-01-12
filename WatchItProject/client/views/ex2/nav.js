  var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/project', {
                templateUrl : 'project.html',
                controller  : 'projectCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'contact.html',
                controller  : 'contactCtrl'
            });
    });

    myApp.controller('mainController', function($scope) {
        $scope.message = 'welcome to my Homepage!';
    });

	myApp.controller('mainCtrl', function ($scope) {
    $scope.message = 'Welcome to my Home page';
	}); 
	myApp.controller('projectCtrl', function ($scope) {
    $scope.message = "View my Projects";
	});
	myApp.controller('contactCtrl', function ($scope) {
    $scope.message = "contact me at sjofen94@gmail.com";
	}); 