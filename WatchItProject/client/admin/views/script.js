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

        xmlhttp.send();

        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                $scope.companyList=JSON.parse(xmlhttp.responseText);
                $scope.$apply();
            }

    }
	 //sarah:

    $scope.insert = function(form) {
        if(form.$valid) {

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            var document =
                {
                    "name": $scope.name,
                    "image": $scope.image,
                    "percentCalc": $scope.percentCalc,
                    "percentProfit": $scope.percentProfit,
                    "details": $scope.details
                };

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $scope.companyList = JSON.parse(xmlhttp.responseText);
                    $scope.$apply();


                }
            }
            xmlhttp.open('POST', 'http://localhost:3000/insertCompany');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xmlhttp.send(JSON.stringify(document));
        }



        }


//tzofia
    $scope.deleteCompany=function(id) {
      var res=$scope.companyList.filter(function (item,index,nums) {
            return item._id==id;
        })
        if(confirm('האם אתה בטוח שהינך מעוניין למחוק את החברה '+res[0].name+" ?")){

        if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        console.log(id);
        xmlhttp.open("GET","http://localhost:3000/deleteCompany/"+id, true);

        xmlhttp.send();

        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                //alert(xmlhttp.responseText);
                $scope.companyList=JSON.parse(xmlhttp.responseText);
                $scope.$apply();
            }

        }
    }
}

});
myAppAdmin.controller('ordersController', function($scope) {
    $scope.message = 'הזמנה';
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://localhost:3000/getOrders", true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            $scope.ordersList=JSON.parse(xmlhttp.responseText);

            $scope.$apply();
        }

    }


//tzofia
    $scope.deleteOrder=function(id) {
        var res=$scope.ordersList.filter(function (item,index,nums) {
            return item._id==id;
        })
        if(confirm('האם אתה בטוח שהינך מעוניין למחוק את ההזמנה זו ')){

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

            xmlhttp.open("GET","http://localhost:3000/deleteOrders/"+id, true);

            xmlhttp.send();

            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    //alert(xmlhttp.responseText);
                    $scope.ordersList=JSON.parse(xmlhttp.responseText);
                    $scope.$apply();
                }

            }
        }
    }



});
myAppAdmin.controller('rightsController', function($scope) {
    $scope.message = 'הרשאות';
});
myAppAdmin.controller('watchController', function($scope) {
    $scope.message = 'שעונים';
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://localhost:3000/getWatches", true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            $scope.watchesList=JSON.parse(xmlhttp.responseText);
            $scope.$apply();
        }

    }


//tzofia
    $scope.deleteWatch=function(id) {
        var res=$scope.watchesList.filter(function (item,index,nums) {
            return item._id==id;
        })
        if(confirm('האם אתה בטוח שהינך מעוניין למחוק את ההזמנה זו ')){

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

            xmlhttp.open("GET","http://localhost:3000/deleteWatch/"+id, true);

            xmlhttp.send();

            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    //alert(xmlhttp.responseText);
                    $scope.watchesList=JSON.parse(xmlhttp.responseText);
                    $scope.$apply();
                }

            }
        }
    }


});

myAppAdmin.controller('messageController', function($scope) {
    $scope.message = 'הודעות';
});
