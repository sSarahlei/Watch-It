var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'home.html',
            controller: 'indexCtrl'
        })

        .when('/men', {
            templateUrl :'men.html',
            controller:'menCtrl'
        })


        .when('/woman', {
            templateUrl : 'woman.html',
            controller:'womanCtrl'
        })
        .when('/contact', {
            templateUrl : 'contact.html',
            controller:'contactCtrl'
        })
        .when('/whatsNew', {
            templateUrl : 'whatsNew.html',
            controller:'newCtrl'
        })
		.when('/brands', {
            templateUrl : 'brands.html',
            controller:'brandsCtrl'
        })

		.when('/register', {
            templateUrl : 'register.html',
            controller:'registerCtrl'
        })
		.when('/single/:id', {
            templateUrl : 'single.html',
            controller:'singleCtrl'
        })
        .when('/login', {
            templateUrl : 'login.html',
            controller:'loginCtrl'
        })
        .when('/order', {
            templateUrl : 'order.html',
            controller:'orderCtrl'
        })
		.when('/checkout/:id', {
            templateUrl : 'checkout.html',
            controller:'checkoutCtrl'
        })
        .when('/cart/:id', {
            templateUrl : 'cart.html',
            controller:'cartCtrl'
        })
        .when('/comparison/:id', {
            templateUrl : 'comparison.html',
            controller:'comparisonCtrl'
        })
        .otherwise( {
            templateUrl :'404.html',
            controller:'404Ctrl'

        });
});




