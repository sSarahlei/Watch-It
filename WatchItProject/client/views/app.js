var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'home.html'
        })

        // route for the about page
        .when('/men', {
            templateUrl :'men.html'
        })
        .when('/404', {
            templateUrl :'404.html'
        })

        // route for the contact page
        .when('/woman', {
            templateUrl : 'woman.html'
        })
        .when('/contact', {
            templateUrl : 'contact.html'
        })
        .when('/whatsNew', {
            templateUrl : 'whatsNew.html'
        })
		.when('/brands', {
            templateUrl : 'brands.html'
        })

		.when('/register', {
            templateUrl : 'register.html'
        })
		.when('/single', {
            templateUrl : 'single.html'
        })
        .when('/login', {
            templateUrl : 'login.html'
        })
		.when('/checkout', {
            templateUrl : 'checkout.html'
        });
});

