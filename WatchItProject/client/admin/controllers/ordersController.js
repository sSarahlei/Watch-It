/**
 * Created by Tzofia on 15/01/2017.
 */
myAppAdmin.controller('ordersController', function($scope,$location) {
    var i = localStorage.getItem('loaded_1');

    if (i == 0 || i == 1) {
        if (auth2.isSignedIn.get() == false) {
            $location.path('/');
            localStorage.setItem('loaded_1', 0);
        }
    }

    $scope.message = 'הזמנה';


    $scope.sendEmail=function () {
        var doc={
            "to":$scope.to,
            "sub":$scope.sub,
            "body":$scope.body

        }
        if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


        xmlhttp.open('POST', 'http://localhost:3000/sendEmail');
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xmlhttp.send(JSON.stringify(doc));

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            alert(xmlhttp.responseText);





        }

    }


    }
});
